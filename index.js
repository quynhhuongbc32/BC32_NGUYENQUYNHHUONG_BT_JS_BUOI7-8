let numbers = [];
let numbers1 = [];
let input1 = +document.getElementById("input1").value;
let input2 = +document.getElementById("input2").value;

function addNumber() {
  // DOM
  let number = +document.getElementById("number").value;
  // thêm số vào mảng
  numbers.push(number);
  document.getElementById("showInfoTotal").innerHTML = "Các số vừa nhập là : " + numbers;
}

  function sum() {
    let total = 0;
    for (let i = 0;  i < numbers.length; i++) {
        if (numbers[i] > 0 ) {
            total += numbers[i];
        }
    }
    document.getElementById("sum").innerHTML = "Tổng các số dương là : " + total;
}
function count() {
    let number = 0;
    for (let i = 0;  i < numbers.length; i++) {
        if (numbers[i] > 0 ) {
            number++;
        }
    }
    document.getElementById("count").innerHTML = "Có tất cả " + number + "  số dương" ;
}
function min() {
    let number = numbers[0];
    for (let i = 1;  i < numbers.length; i++) {
        if (numbers[i] < number ) {
            number = numbers[i];
        }
    }
    document.getElementById("min").innerHTML = "Số nhỏ nhất là: " + number ;
}
function minInt() {
    let number = [];
    let number1 = number[0];
    for (let i = 0;  i < numbers.length; i++) {
        if (numbers[i] > 0 ) {
            number.push(numbers[i]);
        }
        if (number.length >0 ) {
            for (i=1; i < number.length; i++) {
                if (number[i] < number1) {
                    number1 =number[i];
                } 
                else  {
                    document.getElementById("minInt").innerHTML = "Không có số dương nào trong mảng " ;
                }
            }
        }
    }
    document.getElementById("minInt").innerHTML = "Số dương nhỏ nhất là: " + number1 ;
}
function find() {
    let number = 0;
    for (let i = 0;  i < numbers.length; i++) {
        if (numbers[i] %2 == 0 && numbers[i] >= 0) {
            number = (numbers[i]);
        }
    }
    document.getElementById("find").innerHTML = "Số chẵn cuối cùng là: " + number ;
}
function change() {
    let number;
    // for (let i = 0;  i < numbers.length; i++){
        let number1 = numbers[number];
        numbers[number]= numbers[i];
        numbers[i] = number1;
    document.getElementById("change").innerHTML = "Mảng sau khi đổi chỗ là:  " + number ;
}
function swap() {
    for (let number = 0;  number < numbers.length; number++) {
        for (let i = 0;  i < numbers.length -1; i++) {
        if (numbers[i] > numbers[i+1]) {
            swap(i, i+1);
        }
    }
    }
    document.getElementById("swap").innerHTML = "Mảng sau khi sắp xếp là" + numbers ;
}

function check(number){
    let SNT;
        SNT = true;
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            SNT = false;
            break;
        }
    }
    return SNT;
}
function findPrime() {
    for (let number = -1,i = 0; i < numbers.length; i++) {
        if(check(number)) {
            number = numbers[i];
        } break;
    }
    document.getElementById("findPrime").innerHTML = "Số nguyên tố đầu tiên là: " + number ;
}
function add() {
    // DOM
    let number1 = +document.getElementById("number1").value;
    // thêm số vào mảng
    numbers1.push(number1);
    document.getElementById("showInt").innerHTML = "Các số vừa nhập là : " + numbers1;
  }
function Int () {
    let number1 = 0;
    for (let i=0; i < numbers1.length; i++) {
        number1.isInteger(numbers1[i]);
        number1++;  
    }
    document.getElementById("Int").innerHTML = "Các số nguyên là: " + number1;
}
function vergelyk() {
    let number1;
    for (number=0, i=0, number1=0; number1 < numbers.length; number1++) {
        if (numbers[number1] > 0) {
            number++;
        } else if (numbers[number1] < 0) {
            i++;
        }
    }
    if (number > i) {
        document.getElementById("vergelyk").innerHTML = "Số dương > số âm";
    } else if ( number < i) {
        document.getElementById("vergelyk").innerHTML = "Số dương < số âm ";
    } else {
        document.getElementById("vergelyk").innerHTML = "Số dương = số âm ";
    }
}


