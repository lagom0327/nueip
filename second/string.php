<?php
// 1. 字元 「:」 改成全形
// 2. 去掉中文字之間的空白  保留 - 兩側的空白
// 3. 列印出符號 : 到-之間的字元 (上機測驗 )有包含空格嗎?

$string = '人易科技:上 機 測 驗 - 演算法';

// : 改成全形 & " " > "" & "-" -> " - " 
$newStr = str_replace(array(":", " ", "-"), array("：", "", " - "), $string);
echo $newStr;
echo "\n";

// 拿到： 之後的字串並去除 ：，拿到 - 之前的字串
echo strstr(substr(strstr($newStr, '：'), 1), "-", true);
echo "\n";
?>
