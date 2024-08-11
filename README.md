# 🍕 CheeseMath Module

Welcome to the **CheeseMath** project! This project is all about having fun with basic arithmetic operations using a cheese-themed twist. We’ve got you covered with adding, subtracting, multiplying, dividing, and even finding the maximum amount of cheese. 🧀

## 📋 Project Overview

This project includes multiple JavaScript functions, each performing a basic math operation, but with a cheesy theme! Each function is modularized for easy testing and use.

## 🔧 Getting Started

Follow these steps to get the project up and running on your local machine:

### 1. **Create Project Directory:**
   - Open terminal.
   - Navigate to your workspace directory.
   - Create a new directory for your project.
   - Navigate into the project directory.

### 2. **Initialize Node Project:**
   - Run `npm init -y` to generate a `package.json` file.

### 3. **Install Dependencies:**
   - In the project directory, run `npm install jest` to install Jest as a development dependency.

### 4. **Set Up Directory Structure:**
   - Create separate files in the project directory for each function: `addCheese.js`, `subtractCheese.js`, `multiplyCheese.js`, `divideCheese.js`, `cheeseSqrt.js`, `maxCheese.js`.
   - Create a test file named `cheeseMath.test.js` in the same directory.

### 5. **Configure Jest in `package.json`:**
   - Open `package.json`.
   - Add `"test": "jest"` under `"scripts"`.

### 6. **Write Code and Tests:**
   - Write the function code in each respective `.js` file.
   - Write corresponding tests in `cheeseMath.test.js`.

### 7. **Run Tests:**
   - In the project directory, run `npm test` to execute all Jest tests.

### 8. **Check Test Results:**
   - Review the terminal output for test results.

### 9. **Troubleshoot and Debug (if necessary):**
   - If any tests fail, review the test file and the corresponding function files for errors.

### 10. **Commit Code (Optional):**
    - Initialize a Git repository (`git init`).
    - Add files to staging (`git add .`).
    - Commit your changes (`git commit -m "Initial commit"`).

## 📂 Project Structure

```
CheeseMath/
│
├── addCheese.js
├── subtractCheese.js
├── multiplyCheese.js
├── divideCheese.js
├── cheeseSqrt.js
├── maxCheese.js
└── cheeseMath.test.js
```

## 🧀 Functions Overview

### 1. **addCheese**
   - Adds two numbers (slices of cheese).

### 2. **subtractCheese**
   - Subtracts the second number from the first (slices of cheese).

### 3. **multiplyCheese**
   - Multiplies two numbers (blocks of cheese by slices per block).

### 4. **divideCheese**
   - Divides the first number by the second (blocks of cheese among people).

### 5. **cheeseSqrt**
   - Calculates the square root of a number (slices of cheese).

### 6. **maxCheese**
   - Returns the maximum of two numbers (blocks of cheese).

## 🧪 Testing

- Each function has been thoroughly tested using Jest.
- Tests are located in the `cheeseMath.test.js` file and cover various scenarios to ensure all operations are working as expected.

## 🚀 Running the Project

To run the tests and see the CheeseMath module in action, simply navigate to the project directory and execute:

```bash
npm test
```

Watch the cheese-themed operations come to life in your terminal!

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

Enjoy your cheesy math adventures! If you encounter any issues, feel free to open an issue or submit a pull request. 🧀✨
