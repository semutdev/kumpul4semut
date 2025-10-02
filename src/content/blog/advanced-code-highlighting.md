---
title: "Advanced Code Highlighting Features"
description: "Discover advanced code highlighting techniques including line numbers, syntax highlighting, diff syntax, and more for technical blog posts."
pubDate: 2025-01-20
heroImage: "/images/code-highlighting.jpg"
tags: ["code", "syntax-highlighting", "markdown", "tutorial"]
draft: false
---

## Introduction

Great code examples make technical blog posts easier to understand. This post demonstrates advanced code highlighting features.

## Basic Code Blocks

Here's a simple JavaScript code block:

```javascript
const greeting = "Hello, World!";
console.log(greeting);
```

## Line Highlighting

You can highlight specific lines to draw attention to important code:

```javascript {3-5}
function calculateSum(a, b) {
  // This line is normal
  const sum = a + b;
  console.log(`The sum is: ${sum}`);
  return sum;
  // This line is also normal
}
```

Lines 3-5 are highlighted!

## Code with Titles

Add file names to your code blocks:

```typescript title="utils/helpers.ts"
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
```

## Multiple Languages

### Python Example

```python title="script.py"
def greet(name):
    """Greet someone by name."""
    return f"Hello, {name}!"

# Call the function
print(greet("World"))
```

### TypeScript Example

```typescript title="types.ts"
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com"
};
```

### CSS Example

```css title="styles.css"
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.card {
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

## Diff Syntax

Show code changes with diff syntax:

```diff title="changes.js"
  function greet(name) {
-   return "Hello " + name;
+   return `Hello, ${name}!`;
  }

  const message = greet("World");
- console.log(message);
+ console.info(message);
```

## Inline Code

Use `inline code` for short snippets within sentences, like `const x = 10` or `npm install`.

## Terminal Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## JSON Example

```json title="package.json"
{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build"
  },
  "dependencies": {
    "astro": "^4.0.0"
  }
}
```

## Best Practices

1. **Keep examples simple** - Focus on the concept you're teaching
2. **Add comments** - Explain complex logic
3. **Use realistic examples** - Help readers see practical applications
4. **Highlight key lines** - Draw attention to important parts
5. **Show the full context** - Include imports and setup when needed

## Conclusion

Advanced code highlighting makes technical content more readable and professional. Use these features to create better tutorials and documentation!
