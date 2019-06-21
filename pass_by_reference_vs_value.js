let x = 10;
let y = x;

x = 20;
x.value = 20;
// When we use an obj, it is not stored in the var, it is stored in memory and the address location is stored in the var
// When we store x in y, it is the address that is copied



let number = 10;
function increase(num) {
  num++;
}

increase(number)
console.log(number);
// doesn't change number



let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}

increase(obj)
console.log(obj);
// does change num since it's passed by reference
