import * as core from "@actions/core";
import fs from "fs";
import path from "path";

export default function run() {
	try {
		const scope = core.getInput('scope');
		const registry = core.getInput('registry');
		const authToken = core.getInput('auth-token');
		const inputPath = core.getInput('path');
	
		const npmrcPath = path.resolve(process.cwd(), inputPath, '.npmrc');
	
		console.log(`🖊️ Writing to ${npmrcPath}`);
	
		fs.appendFileSync(npmrcPath, `\n${scope}:registry=${registry}`);
		fs.appendFileSync(npmrcPath, `\n${registry.replace(/^http(?:s)?:/, '')}/:_authToken=${authToken}`);
	
		console.info(`✅ Succesfully wrote to ${npmrcPath}`);
	} catch (error: any) {
		console.error('❌ Error occured while writing to .npmrc file');
		core.setFailed(error.message);
	}
}