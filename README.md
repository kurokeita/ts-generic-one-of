# ts-generic-oneof

A TypeScript utility type that enforces exactly one property exists in an object

## Installation

```bash
npm install ts-generic-oneof
```

## Usage

```typescript
import { OneOf } from 'ts-generic-oneof';

interface A {
  a: number;
  b: number;
}

interface B {
  b: string;
}

interface C {
  c: boolean;
}

type TestType = OneOf<[A, B, C]>;

// Valid
const var1: TestType = { a: 1, b: 1 };
const var2: TestType = { b: 'test' };
const var3: TestType = { c: false };

// Invalid
const var4: TestType = { a: 1, b: 'test' }; // Have properties from multiple types
const var5: TestType = { a: 'string' }; // Property has invalid type
```

## API

### `OneOf<T extends any[]>`

- **T**: Array of object types to enforce single type on.

## Development

```bash
npm run build  # Compile TypeScript to dist/
```

## License

MIT License
