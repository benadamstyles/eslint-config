# @benadamstyles/eslint-config

Various eslint configs for my personal use. My approach with all of these is:

- Extend the recommended configs for all plugins (including eslint itself)
- Tweak where it I diagree with the recommended or want extra lints
- Don't use any stylistic lints, rely on Prettier for those instead

## Available configs and inheritance

> **NOTE:** when extending any of these configs, you will need to set [`parserOptions.ecmaVersion`](https://eslint.org/docs/user-guide/configuring#specifying-parser-options) (not required for the TypeScript config as it uses its own parser) and [`env`](https://eslint.org/docs/user-guide/configuring#specifying-environments) for your project.

Some of the configs make no sense without another one, in such cases they extend it so you don't need to. Bear in mind that **extend order is important** – for example, you'll need to extend the TypeScript config _after_ the React one so that the TypeScript one can fix any eslint rules that don't work with TS syntax.

Also note that peer dependencies for eslint configs are set in `package.json` so you will get warned about the `peerDependencies` for the React config even if you're not extending it.

- **Base**: [`@benadamstyles`](src/index.js)

  - **TypeScript** (extends Base): [`@benadamstyles/eslint-config/typescript`](src/typescript.js)

    > **NOTE:** You will need some [extra local settings](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md) when extending the typescript config.

  - **Flow** (extends Base): [`@benadamstyles/eslint-config/flow`](src/flow.js)

  - **React** (extends Base): [`@benadamstyles/eslint-config/react`](src/react.js)

    - **React Native** (extends React): [`@benadamstyles/eslint-config/react-native`](src/react-native.js)

## Contributing

This package uses [semantic-release](https://semantic-release.gitbook.io/semantic-release/) with the default settings applied, to manage releases.
