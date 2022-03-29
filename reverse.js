function Reverse(originalArray) {

  let leftIndex = 0;
  let rightIndex = originalArray.length - 1;

  while (leftIndex < rightIndex) {

    let temp = originalArray[leftIndex];
    originalArray[leftIndex] = originalArray[rightIndex];
    originalArray[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }
}