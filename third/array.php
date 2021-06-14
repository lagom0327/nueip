<?php
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


?>