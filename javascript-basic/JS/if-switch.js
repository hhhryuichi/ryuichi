//変数numに0～2までのランダムな整数を代入する
let num=Math.floor(Math.random()*5)

//変数numの値を出力する（確認用）
console.log(num);

//変数numの値によって出力する文字列を切り替える
switch(num){
  case 2:
    console.log('小吉')
    break;
  case 3:
    console.log('中吉')
    break;
  case 4:
    console.log('大吉')
    //break;
  default:
    //console.log('末吉')
  　break;
}
