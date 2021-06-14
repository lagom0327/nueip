# 上機測驗 - 物件 & 演算法

## 一、 物件導向 - 繼承/介面

今有車輛 「汽車」 和 「機車」，請使用物件的**繼承/介面**描述兩者的相同與差異，及兩物件的執行程式碼

下列程式碼使用 **PHP**

### 繼承

汽車和機車的共通點:

- 要消耗能源
- 有輪子
- 都有*啟動、剎車、轉向、熄火* ... 等行為

所以創一個父類別 `CarBase`，讓機車和汽車繼承時知道自己天生有這些屬性和擁有這些方法可直接使用

```php
class CarBase {

  protected $numOfWheels;
  protected $energy;

  public function __construct($numOfWheels, $energy) {
    $this->numOfWheels = $numOfWheels;
    $this->energy = $energy;
  }

  public function getNumOfWheels() {
    return "車輪有" . $numOfWheels . "顆";
  }

  public function energyConsumption() {
    return '消耗' . $this->energy;
  }

  public function run() {
    return '啟動';
  }
  // 剎車
  public function brake() {
    return "剎車";
  }
  // 轉向
  public function  turnDirection() {
    return "轉向";
  }
  // 熄火
  public function stall() {
    return "熄火";
  }
}

class Scooter extends Carbase {
  public function __construct($energy) {
    parent::__construct(2, $energy);
  }
}

class AutoMoblies extends Carbase {
  public function __construct($energy) {
    parent::__construct(4, $energy);
  }
}

$pinkScooter = new Scooter('汽油');
echo "機車" .  $pinkScooter->run();
echo "\n";
echo "機車" . $pinkScooter->energyConsumption();
echo "\n";
echo "機車" . $pinkScooter->stall();
echo "\n";
echo "------------";
echo "\n";
$autocar = new AutoMoblies('柴油');
echo "汽車" . $autocar->run();
echo "\n";
echo "汽車" . $autocar->energyConsumption();
echo "\n";
echo "汽車" . $autocar->stall();
echo "\n";


```

### 介面

雖然機車和汽車都可直接繼承 `CarBase`，但除了特性的車輪數目之外兩者還有別的不一樣。

汽車如果不能倒車那停車時會很麻煩，還有如果上路時車窗髒了沒有雨刷把車窗弄乾淨，上路時會很危險。

所以規定汽車要能倒車和清理車窗的功能，透過介面告訴汽車這個 Class 應該要實作出甚麼方法。

```php
interface iAutoMobiles {
  // 倒車功能
  public function backup($distance);
  // 雨刷清潔窗戶
  public function cleanWindow();
}

class AutoMoblies extends Carbase implements iAutoMobiles {
  private $windowStatus;
  public function __construct($energy) {
    parent::__construct(4, $energy);
    // 假設出廠狀態是髒的
    $this->windowStatus = '髒';
  }

  public function getWindowStatue() {
    return $this->windowStatus;
  }

  public function backup($distance) {
    return "倒車" . $distance . "公尺";
  }
  public function cleanWindow() {
    $this->windowStatus = "乾淨";
    return "清潔車窗完畢";
  }
}

$autocar = new AutoMoblies('柴油');
echo "汽車" . $autocar->run();
echo "\n";
echo "汽車" . $autocar->energyConsumption();
echo "\n";
echo "汽車" . $autocar->backup(3);
echo "\n";
echo "汽車車窗狀態 : " . $autocar->getWindowStatue();
echo "\n";
echo "汽車" . $autocar->cleanWindow();
echo "\n";
echo "汽車車窗狀態 : " . $autocar->getWindowStatue();
echo "\n";
echo "汽車" . $autocar->stall();
echo "\n";
```

### 輸出

```bash
機車啟動
機車消耗汽油
機車熄火
------------
汽車啟動
汽車消耗柴油
汽車倒車3公尺
汽車車窗狀態 : 髒
汽車清潔車窗完畢
汽車車窗狀態 : 乾淨
汽車熄火
```

## 二、 資料處理-字串

人易科技:上 機 測 驗 - 演算法

1. 字元 「:」 改成全形
2. 去掉中文字之間的空白 保留 - 兩側的空白
3. 列印出符號 : 到 - 之間的字元 (上機測驗)

程式語言 **PHP**

```php
$string = '人易科技:上 機 測 驗 - 演算法';

// : 改成全形 & " " > "" & "-" -> " - " 
$newStr = str_replace(array(":", " ", "-"), array("：", "", " - "), $string);
echo $newStr;
echo "\n";

// 拿到： 之後的字串並去除 ：，拿到-之前的字串
echo strstr(substr(strstr($newStr, '：'), 1), "-", true);
echo "\n";
```

### 資料處理 - 字串輸出

```bash
人易科技：上機測驗 - 演算法
上機測驗
```

## 三、 資料處理 - 陣列

今有陣列資料 0,1,2,3,4,5,6,7,8,9 請寫出資料處理程式碼

1. 計算出 「奇數直總和」 減去偶數值總合
2. 分隔成二陣列，分別存放偶數值及奇數值

### 使用 JavaScript

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

#### 資料處理 - 陣列 JavaScript 輸出

```bash
Answer 1: 5
even [ 0, 2, 4, 6, 8 ]
odd [ 1, 3, 5, 7, 9 ]
```

### 使用 PHP

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

#### 資料處理 - 陣列 PHP 輸出

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

## 資料排序 - 正序

今有一陣列資料 77,5,5,22,13,55,97,4,796,1,0,9 請寫出正序排序處理程式碼

使用 **JavaScript** 和 **Quick Sort** 演算法

答案為 [0, 1,  4,  5,  5, 9,  13, 22, 55, 77, 97, 796]

```js
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
```

## 五、 邏輯處理 - 交集、差集、聯集

今有兩陣列，請寫出資料處理程式碼

- 陣列 a : 77, 5, 5, 22, 13, 55, 97, 4, 796, 1, 0, 9  
- 陣列 b : 0, 1,2,3,4,5,6,7,8,9

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

### 交集

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

### 差集

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

### 聯集

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
]****

### 參考資料

- <https://sunnyday0932.github.io/tags/oop/>
- [[PHP] OOP 概念筆記](https://wbkuo.pixnet.net/blog/post/200902698-%5Bphp%5D-oop-%E6%A6%82%E5%BF%B5%E7%AD%86%E8%A8%98)
- [每日一道演算法：兩陣列的交集](https://iter01.com/455151.html)