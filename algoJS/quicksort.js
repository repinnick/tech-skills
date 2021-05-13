let arrayX = [1, 6, 2, 5, 8, 3];

function quickSort(arr, left, right) {
  let l = left || 0;
  let r = right || arr.length - 1;
  let mid = partition(arr, l, r);

  if (l < mid - 1) {
    quickSort(arr, l, mid - 1);
  }

  if (r > mid) {
    quickSort(arr, mid, r);
  }
  return arr;
}

function partition(array, left, right) {
  const mid = Math.floor((left + right) / 2);

  while (left <= right) {
    while (array[left] < array[right]) {
      left++;
    }
    while (array[right] >= array[mid]) {
      right--;
    }
    if (left <= right) {
      [array[left], array[right]] = [array[right], array[left]];
      left++;
      right--;
    }
  }

  return left;
}
console.log(quickSort(arrayX));
