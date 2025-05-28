# eslint-config-sanyezi

Shared ESLint configuration for JavaScript and TypeScript projects. Uses ESLint's new flat config format.

## Installation

```bash
npm install --save-dev eslint-config-sanyezi
```

The following peer dependencies are required:
- `eslint` >= 9.0.0
- `@typescript-eslint/eslint-plugin` >= 8.0.0
- `@typescript-eslint/parser` >= 8.0.0

For React projects, also install:
- `eslint-plugin-react` (optional)

## Usage

### Basic Usage (JavaScript/TypeScript)

Create an `eslint.config.js` file in your project root:

```js
import sanyezi from 'eslint-config-sanyezi';

export default [...sanyezi];
```

### React Projects

```js
import sanyezi from 'eslint-config-sanyezi';
import sanyeziReact from 'eslint-config-sanyezi/react';

export default [...sanyezi, ...sanyeziReact];
```

## Features

- 🚀 Modern JavaScript and TypeScript support
- ✨ Uses ESLint's new flat config format (ESLint 9+)
- 📦 Includes React configuration (optional)
- 🔧 Sensible defaults for consistent code style
- 🌍 Works in both Node.js and browser environments

## Requirements

- Node.js >= 20.0.0
- ESLint >= 9.0.0

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for the list of changes.

## License

MIT