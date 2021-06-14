# 邏輯處理 - 交集、差集、聯集

今有兩陣列，請寫出資料處理程式碼
陣列 a : 77, 5, 5, 22, 13, 55, 97, 4, 796, 1, 0, 9  
陣列 b : 0, 1,2,3,4,5,6,7,8,9

a = 0, 1,  4,  5,  5, 9,  13, 22, 55, 77, 97, 796

1. 陣列 c = 陣列 a 交集 陣列 b
2. 陣列 d = 陣列 a 差集 陣列 b
3. 陣列 f = 陣列 a 聯集 陣列 b

本題需自行完成演算法，不可使用現成函式

程式語言 JavaScript
使用到第四題的 `quickSort` 函式
因為 陣列中的數值可能會重複，所以要過濾調

```js
const sort = arr => quickSort(arr.slice(0), 0, arr.length - 1);

const unique = array =>
  array.filter((el, index, arr) => index == arr.indexOf(el));

```

## 交集

時間複雜度 n*m

```js
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
```

時間複雜度 nlogn

```js

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
```

## 差集

```js
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
```

## 聯集

```js
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
```

### 邏輯處理結果

> 交集 [ 0, 1, 4, 5, 9 ]
> 差集 [ 13, 22, 55, 77, 97, 796 ]
> 聯集 [
   0,  1,  2,   3,  4,  5,  6,  7,  8,   9, 13, 22, 55, 77, 97, 796
]

### 參考資料

[每日一道演算法：兩陣列的交集](https://iter01.com/455151.html)
