# 物件導向 - 繼承/介面

今有車輛 「汽車」 和 「機車」，請使用物件的**繼承/介面**描述兩者的相同與差異，及兩物件的執行程式碼

下列程式碼使用 **PHP**

## 繼承

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

## 介面

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

### 參考資料

<https://sunnyday0932.github.io/tags/oop/>
[[PHP] OOP 概念筆記](https://wbkuo.pixnet.net/blog/post/200902698-%5Bphp%5D-oop-%E6%A6%82%E5%BF%B5%E7%AD%86%E8%A8%98)