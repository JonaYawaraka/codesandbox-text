/**
 *  const, letなどの変数宣言
 */

var val1 = "var変数";
console.log(val1);

val1 = "var変数を上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "再宣言しましたよ";
console.log(val1);

/**
 * var 変数は上書きできるからこそ、大きなプロジェクトで扱いづらくなってくるらしい。
 */

let val2 = "let変数";
console.log(val2);

// letは上書きが可能
val2 = "let変数を上書き";
console.log(val2);

// letは再宣言不可能!!!!!!!!!varと違うね
// let val2 = "let変数を再宣言しamした";
//これでエラーが出ます

const val3 = "const変数";
console.log(val3);

// const変数は上書きできません。再宣言もできません

const val4 = {
  name: "じゃけぇ",
  age: 28,
};
console.log(val4);
// const でオブジェクトを定義した。

// これ、上書きできないと思うやん？でも、オブジェクトのプロパティ(name/age)の上書きはできる。

val4.name = "だけん"; // 上書き
val4.address = "熊本"; // 追加
// オブジェクトのプロパティにアクセスする場合には「.」ドットを入力する！！！！！！！
console.log(val4);

/**
 * 続いて配列について...
 * */

// constで定義した配列はプロパティの変更が可能！！！！！！！
const val5 = ["犬", "猫"];
val5[0] = "さる"; // 1番目を猿を変更
val5.push("monkey"); //配列のまったんに要素を追加
console.log(val5);
