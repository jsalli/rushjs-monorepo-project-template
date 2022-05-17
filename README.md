# Template project to start Rush project

## Initializing the project

- Install rush globally
  ```
  npm install -g @microsoft/rush
  ```
- Initialize rush project
  ```bash
  rush init
  ```
- Update the `rushVersion` and `pnpmVersion` properties in the `rush.json`-file to the the latest versions.
- Uncomment the `strictPeerDependencies`, `preventManualShrinkwrapChanges`, `ensureConsistentVersions`
- Increase `projectFolderMaxDepth` from 2 to 3 in the `rush.json`-file if you need `packages/morePackagesInsideHere/yourPackage` depth (3 levels) in folder structure and not just `packages/yourPackage` depth (2 levels).
- Add the following to the `projects`-array in the `rush.json`-file
  ```JSON
      {
        "packageName": "package-a",
        "projectFolder": "packages/package-a",
        "reviewCategory": "production"
      },
      {
        "packageName": "package-b",
        "projectFolder": "packages/package-b",
        "reviewCategory": "production"
      },
      {
        "packageName": "package-c",
        "projectFolder": "packages/morePackagesInsideHere/package-c",
        "reviewCategory": "production"
      }
  ```
- Copy the following files from this repo to your project
  ```
  .eslintignore
  .eslintrc.js
  .prettierrc
  pnpm-workspace.yaml
  tsconfig.build.json
  tsconfig.json
  ```
- Copy the `packages`-folder and everything inside it from this repo to the just initialized Rush project.
- If you use VSCode copy the `.vscode`-folder too with it's content.
- Run
  ```bash
  rush update
  ```

## Running The code

- PackageA is can be executed and it prints out text. To launch the debugger press `F5` or go to the `Run and Debug menu` and run the `Run And Debug Package A`-option.

## Adding new sub projects

- Add the new project to the `tsconfig.json`'s `compilerOptions.paths`-property similarly to the current template projects.
- Add the new project to the `rush.json`'s `projects`-array similarly to the current template projects.
- Run `rush update` at the project's root folder
- Packages must locate inside the `package`-folder. If some packages are located outside that folder include the root folder of those packages to the `pnpm-workspace.yaml`-file.
- Update `.eslintrc.js`-file's `config`-shown below
  ```javascript
  // Update the require path to reference to the project's root .eslintrc.js-file.
  // Check that the path is correct.
  const config = require('../../.eslintrc.js');
  ```
- Update `tsconfig.json` and `tsconfig.build.types.json`-files' `extends`-fields
  ```javascript
  {
    ...
    // Update the "extends" path to reference to the project's root tsconfig.json-file.
    "extends": "../../tsconfig.json",
    ...
  }
  ```

## Building the code

- Run the following to compile all packages and to generate `.d.ts`-types
  ```bash
  rush build
  ```

## SWC to compile Typescript

- This repo uses [SWC](https://swc.rs/) to compile Typescript a lot faster than the Typescript's own `tsc`-compiler
- SWC does not generate `.d.ts`-types. If you need those, compile them with the `build:types`-package.json script. `pnpm build:types`

## Random notes

- Typings of the packages are automatically up-to-date without building/compiling the Typescript code. You can reference the newly made changes in one package from another package instanteniously.
