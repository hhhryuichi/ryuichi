const personaldata={name:'侍太郎',age: 36, gender:'男性'};

// 'gender'というキーを持つ値（'男性'）が出力される
console.log(personaldata['gender']);
console.log(personaldata.gender);

// 'age'というキーの値を更新する
personaldata.age=37;

//新しくプロパティ（キーと値）を追加する
personaldata.address='東京都';

console.log(personaldata.address);
