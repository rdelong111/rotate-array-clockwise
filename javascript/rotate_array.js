function rotateArray(arr, k) {
  if (k >= arr.length) {
    k = k % arr.length;
  }

  if (k !== 0) {
    return arr.splice(-k).concat(arr);
  }
  else {
    return arr;
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));
}

module.exports = rotateArray;

/*
If k is greater than or equal to the length of arr
  k is equal to the remainder of dividing k by the length of arr

If k is now not equal to 0
  return an array with the combination of an array of the last 'k' elements and altered arr
If k is equal to 0
  return arr
*/

/*
The value k is altered and possibly reduced because if k is greater than the size of arr, then rotations are just being repeated. The new k is the remainder of k divided by the length of arr.
If k is equal to zero, then the array will look like it hasn't been rotated so arr is returned.
If k does not equal to zero, then arr will rotate k times.
*/