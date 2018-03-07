# VS Code Extension Template

A cleaner template for writing VS Code extension.

## Changes over default template

- Relaxed `tsconfig.json` for development.
- Strict `tsconfig.json` with `strcit`, `noInplicitAny` and `noUnusedLocals` for prod build.
- Enforce styling using prettier and tslint
  - 2 space indentation
  - single quote
  - no semicolon
  - 120 print width
- Yarn over npm.
- Leaner launch config without tasks.
- Removed many other unnecessary things.

## Usage

- `yarn compile` to build
- `yarn dev` to watch change and build
- F5 to run & debug

## License

MIT © [Pine Wu](https://github.com/octref) 
