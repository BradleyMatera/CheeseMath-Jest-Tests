# 🧀 CheeseMath Module

Welcome to the **CheeseMath** project! This project combines basic arithmetic operations with a cheesy twist to make math fun and engaging. Whether you're adding, subtracting, multiplying, dividing, finding square roots, or comparing the maximum cheese, we’ve got you covered! 🍕🧀

## 📋 Project Overview

CheeseMath provides modular JavaScript functions for each operation, making it easy to use, test, and integrate. It also includes a basic Express server for handling these operations through API endpoints.

## 🔧 Getting Started

Follow these steps to get CheeseMath running on your local machine:

### 1. **Set Up Your Project:**

1. Open your terminal and navigate to your preferred workspace.
1. Create a new directory for the project:

```bash
mkdir CheeseMath
cd CheeseMath
```

2. Initialize Node.js Project:

Run the following command to create a package.json file:

```bash
npm init -y
```

3. Install Dependencies:

Install the required packages:

```bash
npm install express dotenv nodemon jest
```

4. Organize Project Structure:

Create the following files and folders:

- mathFunctions.js: Contains all math-related functions.
- regexCheese.js: Handles regex operations.
- advancedCheeseFunctions.js: Contains advanced operations like sum of array and string manipulations.
- server.js: Starts the Express server.
- index.js: Handles routing logic.
- tests/: Directory for test files.
- cheeseMath.test.js: Contains Jest test cases.

5. Configure Jest:

Update package.json to include a test script:

```json
"scripts": {
  "test": "jest"
}
```

6. Write Code and Tests:

- Implement all math and advanced functions in their respective files.
- Write test cases in tests/cheeseMath.test.js to validate your code.

7. Run Tests:

To verify the functions, run:

```bash
npm test
```

8. Start the Server:

Run the server locally:

```bash
npm start
```

By default, the server runs on [http://localhost:3000](http://localhost:3000).

9. Test API Endpoints:

Use Postman, a browser, or curl to test the endpoints:

- Addition: [http://localhost:3000/cheese/add?a=3&b=2](http://localhost:3000/cheese/add?a=3&b=2)
- Subtraction: [http://localhost:3000/cheese/subtract?a=5&b=2](http://localhost:3000/cheese/subtract?a=5&b=2)
- Multiplication: [http://localhost:3000/cheese/multiply?a=4&b=3](http://localhost:3000/cheese/multiply?a=4&b=3)
- Division: [http://localhost:3000/cheese/divide?a=10&b=2](http://localhost:3000/cheese/divide?a=10&b=2)
- Square Root: [http://localhost:3000/cheese/sqrt?a=16](http://localhost:3000/cheese/sqrt?a=16)
- Maximum: [http://localhost:3000/cheese/max?a=10&b=20](http://localhost:3000/cheese/max?a=10&b=20)

10. Debugging Tips:

If you encounter issues:

- Check server logs for errors.
- Review your routes in index.js.
- Revisit test cases for additional insights.

11. Version Control:

Optional: Use Git for version control:

```bash
git init
git add .
git commit -m "Initial commit"
```

📂 Project Structure

CheeseMath/
│
├── mathFunctions.js         # Consolidated math functions
├── regexCheese.js           # Regex-related functions
├── advancedCheeseFunctions.js # Advanced operations
├── server.js                # Express server setup
├── index.js                 # Routing logic
└── tests/
	└── cheeseMath.test.js   # Jest test cases

🧀 Functions Overview

Math Functions:

1. addCheese: Adds two numbers (slices of cheese).
2. subtractCheese: Subtracts one number from another.
3. multiplyCheese: Multiplies two numbers (blocks of cheese).
4. divideCheese: Divides one number by another with error handling.
5. cheeseSqrt: Calculates the square root of a number.
6. maxCheese: Returns the maximum of two numbers.

Advanced Functions:

1. sumOfArray: Computes the sum of all numbers in an array.
2. reverseString: Reverses a given string.
3. isPalindrome: Checks if a string is a palindrome.
4. capitalizeWords: Capitalizes the first letter of each word in a string.

Regex Function:

1. regexCheese: Matches a string against a regex pattern.

🧪 Testing

- Every function is tested using Jest.
- Tests are located in tests/cheeseMath.test.js.
- Coverage includes edge cases like zero, negatives, and invalid inputs.

🚀 Running the Project

To experience CheeseMath in action:

1. Start the Server:

```bash
npm start
```

2. Run the Tests:

```bash
npm test
```

3. Test the Endpoints:

Use Postman or your browser to make requests.

📄 License

This project is open-source under the MIT License.

Enjoy your cheesy math adventures! 🧀 If you have suggestions or spot any bugs, feel free to open an issue or contribute. Let’s make math extra cheesy! 🍕✨

