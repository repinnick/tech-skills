const arrayWithotSort = [4, 556, 9, 3, 5, 12, 6, 7];

function linearSearch(arr, searchNum) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchNum) return `${searchNum}, index [${i}]`;
  }
}
console.log(linearSearch(arrayWithotSort, 5));