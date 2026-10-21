
// 1

let userInput = prompt("Enter a 5-digit number:");
let sum = 0;
if (userInput.length < 5){
    console.error("invalid")
}
for(let i=0; i<5 ; i++){
    sum += parseInt(userInput[i]);
}

console.log(`sum is: ${sum}`);


// 2
let num = prompt("Enter a number 1-10:");

for(let i = 0;i<num; i++){
    let t = "";
    for(let j = 0; j<i+1; j++){
        t += "*"
    }
    console.log(t);
}


// 3
let m = -1;
for(let i = 0; i<5 ; i++){
    let num = prompt("Enter a number 1-10:");
    if(num > m){
        m = num
    }
}
console.log(m);

// 4
let n = prompt("Enter a number:");
let len = 1;
while(n%10){
    len += 1;
    n = parseInt(n / 10);
}

console.log(m);

// 8




// 9
let mul = prompt("Enter a number 1-12:");

for(let i = 1; i<= 10; i++){
    console.log(`${mul} * ${i} = ${i*mul}`)
}








// 10

let N = prompt("Enter a number:");

while(N != 1){
    if (N %2 == 0){
        N /= 2;
    }
    else{
        N = parseInt(N/3) + 1;
    }
    console.log(N)
}





