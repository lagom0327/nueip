const array = [77, 5, 5, 22, 13, 55, 97, 4, 796, 1, 0, 9];

// quick sort

const quickSort = (arr, left, right) => {
  if (left >= right) return;
  const pivot = left;
  let L = left;
  let R = right;

  while (L !== R) {
    // 右邊找比 pivot 小的 比 piovt 大就往前一位找
    while (arr[R] > arr[pivot] && L < R) {
      R -= 1;
    }
    // 左邊找比 pivot 大的 比 piovt 大就往後一位找
    while (arr[L] <= arr[pivot] && L < R) {
      L += 1;
    }
    if (L < R) {
      swap(arr, L, R);
    }
  }

  // L = R 時將基準點換至 LR 相遇點
  swap(arr, pivot, R);

  // 左邊的子循環
  quickSort(arr, left, L - 1);
  // 右邊的子循環
  quickSort(arr, R + 1, right);
  return arr;
};

// array 交換值
function swap(arr, index1, index2) {
  const tempRValue = arr[index2];
  const tempLValue = arr[index1];
  arr[index1] = tempRValue;
  arr[index2] = tempLValue;
}

console.log(quickSort(array, 0, array.length - 1));
