# NPM - .npmrc registry login action

- This action logs into NPM registries by managing a .npmrc file.
- It will create one if it doesn't exist or append to an existing one.
- You have the ability to login to multiple registries by using this action multiple times.

> Required NodeJS in GitHub Action >=20

## Inputs
### `scope` (required)
The registry scope (e.g. @acmeorg).

### `registry` (required)
- The registry domain (e.g. https://npm.pkg.github.com).

### `auth-token` (required)
- The registry auth token.

### `path` (optional)
- The directory to manage the .npmrc file in.

## Example usage

```yaml
uses: mrwake-dev/npmrc-registry-action@1.0.0
with:
  scope: '@acmeorg'
  registry: 'https://npm.pkg.github.com'
  auth-token: 'secret'
  # path: './' # Optional for selecting the directory to manage the .npmrc file in.
```

