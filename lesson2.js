// №1

while(true){
    const age = prompt('Ваш возраст:'); 1
    if(!isNaN(parseInt(age))){
        alert(`Вам ${age} лет`); // Вам 1 лет
        break;
    }
    
    else{alert('Введи возраст');}
}

const nameUser = prompt('Ваше имя:'); а
alert(`Добро пожаловать на сайт, ${nameUser}`); // Добро пожаловать на сайт, а
 



// №2

let d = 13;
let b = 5;
alert(d % b); // 3
let e;
alert(w) // undefined
alert('abc' * 3) // NaN
alert( 1 / 0); // Infinity
alert(-1 / 0); // -Infinity
alert('2' * '3'); // 6

// №3

const a2 = '2';
const b2 = '3';
console.log(+a2 + +b2); // 5

const a1 = prompt('a'); // 1
const b1 = prompt('b'); // 2

console.log(`Сумма чисел равна ${+a1 + +b1}`); // 3
console.log(`Разность чисел равна ${+a1 - +b1}`); // -1
console.log(`Произведение чисел равно ${+a1 * +b1}`); //2
console.log(`Частное чисел равно ${+a1 / +b1}`); // 0.5
console.log(`Остаток от деления чисел равен ${+a1 % +b1}`); //1


// №4

console.log(String(true)); // true
console.log('a' + true); // atrue
console.log(Number(true)); // 1
console.log(true + 1); // 2
console.log(true + true); // 2
console.log(true - true); // 0
console.log( String(true) + Number(true)) // true1


// №5


const a = +prompt('a'); //10
const text = a==5 ? 'Число равно 5' : a>5 ? 'Число больше 5' : 'Число меньше 5';
console.log(text); // число больше 5



const test1 = +prompt('Введите число'); // 10
const test2 = +prompt('Введите число'); // 5
const text2 = test1==test2 ? 'Числа равны' :
                test1>test2 ? 'Первое число больше второго' : 
                    'Второе число больше первого';
console.log(text2) // Первое число больше второго



const c = +prompt('Введите число'); // 5
const itog = {o:false, t:false};

if (c>0){
    itog.o=true;
    console.log('Число больше нуля');
    if(c<15){
        itog.t=true;
        console.log('Число меньше 15');
    }
    else{
        console.log('Число больше 15');
    }
}

else{
    console.log('Число меньше нуля');
    if (c<15){
        console.log('Число меньше 15');
        itog.t=true;
    }
    else{
        console.log('Число больше 15');
    }
}

const {o, t} = itog;
console.log(o&&t?'Значение удовлетворяет условиям': 'Значение не удовлетворяет условиям');

// Значение удовлетворяет условиям

// №6

const num1 = +prompt('Введите число'); // 1
const num2 = +prompt('Введите число'); // 3

console.log(num1<=0 || num2>=3 && num2>=3) // true


// №7

let test5 = true;
console.log(test5? '+++' : '---') // true


// № 8

const [start, end] = [1, 31];
const day = Math.floor(Math.random()*(end-start)+start);
console.log(day);

const decade = Math.ceil(day/10);
console.log(decade)


// № 9

// -