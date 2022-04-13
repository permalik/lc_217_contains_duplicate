const bubbleSort = function (array: number[]) {
  const arrayLength = array.length;
  let swapValidation: boolean;

  do {
    swapValidation = false;

    for (let i = 0; i < arrayLength; i++) {
      if (array[i] > array[i + 1]) {
        let temporaryValue = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temporaryValue;
        swapValidation = true;
      }
    }
  } while (swapValidation);

  return array;
};

let itemOne = 0;
let itemTwo = 1;
let duplicateValidator = false;
let nums = [1, 2, 3, 4, 4];
let sortedNums = bubbleSort(nums);

const containsDuplicate = function (array: string | any[]) {
  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[itemOne] == sortedNums[itemTwo]) {
      duplicateValidator = true;
    } else {
      itemOne++;
      itemTwo++;
    }
  }

  if (duplicateValidator) {
    console.log('true');
  } else {
    console.log('false');
  }
};

containsDuplicate(sortedNums);
