# 資料處理 - 陣列

今有陣列資料 0,1,2,3,4,5,6,7,8,9 請寫出資料處理程式碼

1. 計算出 「奇數直總和」 減去偶數值總合
2. 分隔成二陣列，分別存放偶數值及奇數值

## 使用 JavaScript

```js
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
```

### 輸出

```bash
Answer 1: 5
even [ 0, 2, 4, 6, 8 ]
odd [ 1, 3, 5, 7, 9 ]
```

## 使用 PHP

```php
$array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
$answer1 = 0;
$evenArr = [];
$oddArr = [];

foreach ($array as $key => $value) {
  if ($value % 2 ===0 ) {
    $answer1 -= $value;
    array_push($evenArr, $value);
  } else {
    $answer1 += $value;
    array_push($oddArr, $value);
  }
}

echo "Answer 1:" . $answer1;
echo "\n";
echo "Even :" ;
print_r($evenArr);
echo "\n";
echo "Odd :" ;
print_r($oddArr);
```

### PHP 輸出

```bash
Answer 1:5
Even :Array
(
    [0] => 0
    [1] => 2
    [2] => 4
    [3] => 6
    [4] => 8
)

Odd :Array
(
    [0] => 1
    [1] => 3
    [2] => 5
    [3] => 7
    [4] => 9
)
```