const cheese = ['Brie', 'Chedder', 'Mozz', 'PepperJack', 'Guda', 'Breechers']; //<-- Array cause of the [] square brackets
// The array is named 'cheese' and contains six elements: 'Brie', 'Chedder', 'Mozz', 'PepperJack', 'Guda', and 'Breechers'.
// Each element is a string, written inside single quotes '' and separated by commas ,
// The `length` of this array is 6 because it has six elements.

// Note: Arrays in JavaScript are zero-indexed. This means the first element in the array is at index 0 (`cheese[0] = 'Brie'`),
// and the last element is at index 5 (`cheese[5] = 'Breechers'`). While the `length` property of the array gives the total number
// of elements (6 in this case), indices always range from 0 to `length - 1`. This is a critical distinction when looping
// through arrays or accessing specific elements by index.

for(let i = 0; i < cheese.length; i++) {  /*<-- for loop, i is the index, which starts at 0 (the first element of the array), 
                                          and the loop will continue running as long as i is less than the length of the array (6).
                                          After each loop iteration, i is incremented by 1 (i++), moving to the next element in the array.
   `let i = 0` initializes the index variable `i` to 0, meaning the loop starts at the first element of the array (arrays are zero-indexed).
   `i < cheese.length` is the condition that checks if `i` is less than the length of the `cheese` array (6 elements in this case). 
   The loop will continue running as long as this condition is true.
   `i++` increments the index `i` by 1 after each iteration of the loop.
   This means the loop runs through each element of the `cheese` array, starting from the 0th index, 
   and continues until `i` is no longer less than the array's length.
 
The three parts of the `for` statement inside the parentheses () are:
1. `let i = 0;` <-- This declares a variable `i` (short for "index") and initializes it with the value 0, pointing to the first element in the array.
2. `i < cheese.length;` <-- This is the condition that keeps the loop running. It checks if `i` is less than the length of the array (`cheese.length`), which is 6.
   - If `i` becomes equal to or greater than 6, the loop stops.
3. `i++` <-- This increments the value of `i` by 1 after each loop iteration, moving to the next element in the array.

The loop will run 6 times, with `i` taking the values 0, 1, 2, 3, 4, and 5, corresponding to the indices of the array elements.
In vanilla JavaScript, any statement that starts with for is always a for loop.
*/


     // for (const i = 0; i< cars; i++)

    console.log(cheese[i]); //<-- Inside the loop, this line will print the value of the array element at index `i`.
                          // When `i = 0`, it prints `cars[0]` ('Brie').
                          // When `i = 1`, it prints `cars[1]` ('Chedder').
                          // When `i = 2`, it prints `cars[2]` ('Mozz'), and so on until the last element.

}

console.log(cheese)