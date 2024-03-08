// Helper function to calculate the sum of elements in an array
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  // Main code to use the helper function
  const numbers = [1, 2, 3, 4, 5]; // You can change the array elements
  const sum = calculateSum(numbers);
  console.log(`The sum of elements in the array is: ${sum}`);
  