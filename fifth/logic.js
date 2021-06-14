const a = [77, 5, 5, 22, 13, 55, 97, 4, 796, 1, 0, 9];
const b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const quickSort = (arr, left, right) => {
  // console.log(arr);
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

const sort = arr => quickSort(arr.slice(0), 0, arr.length - 1);

const unique = array =>
  array.filter((el, index, arr) => index == arr.indexOf(el));

const intersection = (a, b) => {
  const intersectionArr = [];
  a.forEach(itemA => {
    b.forEach(itemB => {
      if (itemA === itemB) {
        intersectionArr.push(itemA);
      }
    });
  });
  return unique(intersectionArr);
};

const intersectionSort = (a, b) => {
  const sortA = sort(a);
  const sortB = sort(b);
  const intersectionArr = [];
  let i = 0;
  let j = 0;
  while (i < sortA.length && j < sortB.length) {
    if (sortA[i] === sortB[j]) {
      intersectionArr.push(sortA[i]);
      i += 1;
      j += 1;
    } else if (sortA[i] < sortB[j]) {
      i += 1;
    } else {
      j += 1;
    }
  }
  return unique(intersectionArr);
};

/* const union = (a, b) => {
  return unique([...a, ...b]);
}; */

const union = (a, b) => {
  // 淺拷貝
  const unionArrOri = a.slice(0);
  const unionArrOriLength = unionArrOri.length;
  b.forEach(value => {
    // 不存在就新增
    /*     if (unionArr.indexOf(value) === -1) {
      unionArrOri.push(value);
    } */

    let valueisExist = false;
    let i = 0;
    while (!valueisExist && i <= unionArrOriLength) {
      if (value === unionArrOri[i]) {
        valueisExist = true;
      } else {
        i += 1;
      }
    }
    if (!valueisExist) {
      unionArrOri.push(value);
    }
  });
  return unique(unionArrOri);
};

const subtracting = (a, b) => {
  const tempArr = a.slice(0);
  tempArr.forEach((value, index) => {
    // 在 b 找到就刪掉
    /*     if (b.indexOf(value) !== -1) {
      delete tempArr[index];
    } */
    let isExistInB = false;
    let i = 0;
    while (!isExistInB && i < b.length) {
      if (value === b[i]) {
        delete tempArr[index];
        isExistInB = true;
      } else {
        i += 1;
      }
    }
  });
  return unique(tempArr);
};

// 交集
const c = intersectionSort(a, b);
// 差集
const d = sort(subtracting(a, b));
// 聯集
const f = sort(union(b, a));

console.log('交集', c);
console.log('差集', d);
console.log('聯集', f);

/* 交集 [ 0, 1, 4, 5, 9 ]
差集 [ 13, 22, 55, 77, 97, 796 ]
聯集 [
   0,  1,  2,   3,  4,  5,
   6,  7,  8,   9, 13, 22,
  55, 77, 97, 796
] */
