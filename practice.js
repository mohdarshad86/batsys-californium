function prime(numArray) {
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.floor(number / 2); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });

  return numArray;
}
console.log(prime([2, 3, 4, 5, 6, 7, 8, 9, 10]));
