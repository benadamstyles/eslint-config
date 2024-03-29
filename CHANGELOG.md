# [4.0.0](https://github.com/benadamstyles/eslint-config/compare/v3.0.1...v4.0.0) (2021-10-31)


### Bug Fixes

* **rules:** Require '.json' extension when importing json ([#440](https://github.com/benadamstyles/eslint-config/issues/440)) ([70e758e](https://github.com/benadamstyles/eslint-config/commit/70e758e58b67885d3ad1314744489317e0e9fad8))


### BREAKING CHANGES

* **rules:** JSON imports with no extension will now be reported as errors.

## [3.0.1](https://github.com/benadamstyles/eslint-config/compare/v3.0.0...v3.0.1) (2021-02-26)


### Bug Fixes

* **deps-dev:** don't use patch-package ([c404116](https://github.com/benadamstyles/eslint-config/commit/c4041161b8a0c8b5840d77fa4d7ea81905607f18))

# [3.0.0](https://github.com/benadamstyles/eslint-config/compare/v2.1.0...v3.0.0) (2021-01-18)


### Features

* **deps:** replace babel-eslint parser with @babel/eslint-parser ([f87fc68](https://github.com/benadamstyles/eslint-config/commit/f87fc6873f3a9855e53e40c628132b7ac7dfc52d))


### BREAKING CHANGES

* **deps:** This requires replacing the dependency and making sure its peerDependencies (@babel/core)
are installed in your own project.

# [2.1.0](https://github.com/benadamstyles/eslint-config/compare/v2.0.0...v2.1.0) (2021-01-18)


### Features

* **rules:** don't require description on eslint-enable comments ([07b3c52](https://github.com/benadamstyles/eslint-config/commit/07b3c52edfd6b6ccd6126439a00bdab983598726))

# [2.0.0](https://github.com/benadamstyles/eslint-config/compare/v1.6.0...v2.0.0) (2020-10-18)


### Features

* **deps:** bump @typescript-eslint/eslint-plugin to 4.4.1 ([d16728d](https://github.com/benadamstyles/eslint-config/commit/d16728de70bd25b482d22b4387bf5fc155fd42d6))
* **typescript:** update all [@typescript-eslint](https://github.com/typescript-eslint) packages together ([dd1d087](https://github.com/benadamstyles/eslint-config/commit/dd1d0877a8a133b9e28de57410dea5c03c0627ec))


### BREAKING CHANGES

* **deps:** this release introduces new rules for TypeScript projects

# [1.6.0](https://github.com/benadamstyles/eslint-config/compare/v1.5.0...v1.6.0) (2020-07-10)


### Features

* **rules:** add new eslint-comments rule requiring directive descriptions ([b90d0be](https://github.com/benadamstyles/eslint-config/commit/b90d0be77fbfd03cb6fa539cb51e738d0f6861e7))

# [1.5.0](https://github.com/benadamstyles/eslint-config/compare/v1.4.0...v1.5.0) (2020-07-10)


### Features

* add new rules from latest eslint core ([395db53](https://github.com/benadamstyles/eslint-config/commit/395db538f0f7e2beb713777c3b25ebd6eae12266))

# [1.4.0](https://github.com/benadamstyles/eslint-config/compare/v1.3.3...v1.4.0) (2020-05-11)


### Features

* **jest:** allow expect().toEqual() ([c5522d9](https://github.com/benadamstyles/eslint-config/commit/c5522d936db1be9264381195656ca9cc03585ea0))

## [1.3.3](https://github.com/benadamstyles/eslint-config/compare/v1.3.2...v1.3.3) (2020-05-10)


### Bug Fixes

* add missing React Native global `performance` ([9013e2c](https://github.com/benadamstyles/eslint-config/commit/9013e2c0e80b991f43b6e06c856f27db5581bfd8))

## [1.3.2](https://github.com/benadamstyles/eslint-config/compare/v1.3.1...v1.3.2) (2020-05-10)


### Bug Fixes

* add render to allowed class methods not using this ([a65beb8](https://github.com/benadamstyles/eslint-config/commit/a65beb8d6ee2bcbc7c2012947a8d78a183da7f28))

## [1.3.1](https://github.com/benadamstyles/eslint-config/compare/v1.3.0...v1.3.1) (2020-05-10)


### Bug Fixes

* **dependencies:** add eslint-plugin-node to peerDependencies ([0868f60](https://github.com/benadamstyles/eslint-config/commit/0868f604ae2a2ad20ed7333f1aa6d525b5b35ffd))

# [1.3.0](https://github.com/benadamstyles/eslint-config/compare/v1.2.4...v1.3.0) (2020-05-10)


### Features

* add initial node.js rules ([dd74c7c](https://github.com/benadamstyles/eslint-config/commit/dd74c7c6999fbbf98cc24acb5f28704bd154f021))
