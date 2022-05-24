/*
bir string veeilir ve o stringde hansi simvoldan nece dene varsa onun sayinini
teyin eden bir method yazilir....
*/
const str = "hhhhkjghjklgffk.jh;ljigyfyokiytdtrxrkhjhkjkjlklklljjhh";
let arr = [];
for (let i = 0; i < str.length; i++) {
  arr.push(str[i]);
}

let CountOfChars = arr.reduce((acc, item) => {
  if (item in acc) {
    acc[item]++;
  } else {
    acc[item] = 1;
  }
  return acc;
}, {});
console.log(CountOfChars);

/*
 1) Bir class yaradirsiz ve o classin icerisinde plus, minus, multiply, divide functionlari olur.
         var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2)
         resultin neticesi bu yazilisa gore 50+6-30*3/2 mentiqi ile 
         (riyazi prinsibi unudun,vurma bolme onceliyine ehtiyac yoxdu) 39 olmalidi
*/
class CustomMatchx {
  constructor(num) {
    this.num = num;
  }
  plus(num) {
    this.num = this.num + num;
    return this;
  }
  minus(num) {
    this.num = this.num - num;
    return this;
  }
  multiple(num) {
    this.num = this.num * num;
    return this;
  }
  divide(num) {
    this.num = this.num / num;
    return this;
  }
  toString() {
    return this.num;
  }
}
let result = new CustomMatchx(50).plus(6).minus(30).multiple(3).divide(2);

console.log(result.toString());

/*
 Custom bir array classi yaradin.
 Hemin arrayin find ve push metodu olsun.
*/

class Arrayy {
  constructor(arr) {
    this.arr = arr;
  }
  pushh(item) {
    this.arr[this.arr.length] = item;
    return this.arr;
  }
  findd(item) {
    for (let i = 0; i < this.arr.length; i++)
     {
      if (this.arr[i] == item) {
        return this.arr[i];
      }
    }return -1;
    
  }
}
let arr4=new Arrayy([2,3,5,8]);
console.log(arr4.pushh(6));
console.log(arr4.findd(6));
