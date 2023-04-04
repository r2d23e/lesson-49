// //1

// let name = prompt('whats your name')
// let guf = "Guf"

// let strlk_sayHello=(friend)=>{
//     alert(`hello ${friend}`)
// }
// strlk_sayHello(name)

// function sayHello(friend) {
//     alert(`hello ${friend}`)
// }
// sayHello(name)
// sayHello(guf)
// sayHello('Joji')

//1

// name = friend
// guf = friend
// "Joji" = friend

//2

// let sayHi  = function () {
//     lert(`hello ${name}`)
// }
// sayHi()

//2


//3

// function object(obj, hisname, hissurname, hisage) {
//     obj.name = hisname
//     obj.surname = hissurname
//     obj.age = hisage
// }
// let mzm = {}
// let name = prompt('whats your name')
// let surname = prompt('whats your surname')
// let age = +prompt('How old are you')
// object(mzm, 'joja', 'muha', 21)
// let mgl = {}
// object(mgl, name, surname, age)
// console.log(mgl);
// console.log(mzm);

// let artist = "leontiv"
// let hit = "hit and run"
// let age2 = true
// object(mgl,artist, hit, age2)
// console.log(mgl);

//3

//4

// let numbers = [1, 2, 3, 4, 5, 6, 7]

// function for_arr(arr) {
//     for(let item of arr){
//         console.log(item);
//     }
// }
// for_arr(numbers)

// let n = [1,2,3,5,8,13,21]

// for_arr(n)


//DZ
//1

setTimeout((lag) => {
    console.log("привет мир я минут 20 долбался с этим потом вспомнил что есть задержка(((");
}, 5000);

//1


//2

//  let f = prompt("Напиши")
// setTimeout(function myFn() {
//     console.log('Привет из функции myFn')
//   }, 2000)
//   myFn()
setTimeout((jo) => {
    console.log('Привет из функции myFn')
}, 2000)

//2

//3

function mult(a, b) {
    return a * b
}



setTimeout((sam) => {
    console.log(mult(5, 10))//mult это умножкение
}, 1000)

// 50

//3

//4
const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]
function sumPositiveNegativ(arr) {
    let positive = 0
    let negative = 0
    for (let item of nums) {
        if (item > 0) {
            positive += item
        }

        if (item < 0) {
            negative += item
        }
    }
    return { positive, negative }

}
const result = sumPositiveNegativ()
console.log(result);

//4

//5

// const objectWithNumbers = {
//     a: 10,
//     b: 20,
//     c: 'string',
//     d: 12,
// }
// let sumObjectWithNumber = (obj) => {
//     let sum = 0
//     for (let item of sumObjectWithNumber) {
//         if (typeof (item) === Number) {
//             objectWithNumbers = sum += item
//         }
//     }
// }
// const result1 = sumObjectValues(objectWithNumbers)
// console.log(result1)


//5

//6

let a = 'first'
let b = 'second'

console.log(a, b);

if (a == 'first') {
    a = 'second'
}

if (b == 'second') {
    b = "first"
}

console.log(a, b);