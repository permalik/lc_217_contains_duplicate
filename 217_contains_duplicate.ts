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
let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
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

// ALTERNATE SOLUTION:
// var numsSet = new Set(nums);
//     return (nums.length !== numsSet.size);

containsDuplicate(sortedNums);
