<?php

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

interface iAutoMobiles {
  // 倒車功能
  public function backup($distance);
  // 雨刷清潔窗戶
  public function cleanWindow();
}

class Scooter extends Carbase {
  public function __construct($energy) {
    parent::__construct(2, $energy);
  }
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




?>