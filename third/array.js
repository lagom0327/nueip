const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// 2 . 分隔成 偶數陣列和奇數陣列
const filterEvenArr = array => array.filter(item => item % 2 === 0);
const filterOddArr = array => array.filter(item => item % 2 !== 0);

// 1. 計算出 「奇數直總和」 減去偶數值總合
const oddSumSubEvenSum = arr => {
  const sumReducer = (accu, current) => accu + current;
  return (
    filterOddArr(arr).reduce(sumReducer) - filterEvenArr(arr).reduce(sumReducer)
  );
};

console.log('Answer 1:', oddSumSubEvenSum(array));

const evenArr = filterEvenArr(array);
const oddArr = filterOddArr(array);
console.log('even', evenArr);
console.log('odd', oddArr);
