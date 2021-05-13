const array = [2, 5, 8, 12, 15, 16, 22];
const num = 16;

function binarySearch(arr, searchNum) {
  let mid = 0;
  if (searchNum < arr[0] || searchNum > arr[arr.length - 1]) {
    return "Cannot find the number in Array";
  } else {
    let left = 0;
    let right = arr.length - 1;
    while (array[mid] !== searchNum) {
      mid = (left + right) / 2;
      if (searchNum > arr[mid]) {
        left = mid + 1;
      } else if (searchNum < arr[mid]) {
        right = mid - 1;
      }
    }
  }
  return `${searchNum} was found with index [${mid}]`;
}
console.log(binarySearch(array, num));
