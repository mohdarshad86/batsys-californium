let array = [1, 2, 3, 4, 5, 7, 8, 9, 11];

let n = array.length - 1;
let arr = [];
for (let i = 0; i < array.length - 1; i++) {
  if (array[i] + 1 !== array[i + 1]) {
    arr.push(array[i] + 1);
  }
}
console.log(arr);
