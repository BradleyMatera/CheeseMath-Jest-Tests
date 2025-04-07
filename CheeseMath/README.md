# CheeseMath

## A React calculator app styled like a physical calculator using AnimeJS for animations

Handles basic math, advanced operations, regex matching, and credit card obscuring.

## Getting Started

### Prerequisites

- Node.js (v16+)

### Setup

1. Navigate to the project:

   ```bash
   cd CheeseMath
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running

- Development:

  ```bash
  npm start
  ```

- Build:

  ```bash
  npm run build
  ```

Opens at `http://localhost:3000`.

### Deployment

1. Install Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Deploy:

   ```bash
   vercel --prod
   ```

### Components

- **CheeseCalculator**: Add, subtract, multiply, divide, square root, max.

- **AdvancedCheeseCalculator**: Array sum, string reverse, palindrome check, capitalize words.

- **MathCheeseVisualizer**: Math operations visualization.

- **RegexCheeseAnalyzer**: Regex matching and validation.

- **CreditCardObscurer**: Obscures credit card numbers (12-16 digits).

### Utilities (in `src/utils/`)

- `cheeseMath.js`: Basic math functions.

- `advancedCheeseFunctions.js`: Array and string operations.

- `regexCheese.js`: Regex matching.

- `totals.js`: Credit card obscuring.

### Animations

- AnimeJS-driven button presses, display updates, and component entrances.