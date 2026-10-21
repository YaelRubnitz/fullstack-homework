//1 


// function doubleValue(arr){
//     return arr.map((n)=> n*2);
// }
// let arr = [1,2,3,4];
// Darr = doubleValue(arr);
// console.log(Darr);

// 2

// function onlyEvenValues(arr){
//     return arr.filter((n) => n%2==0)
// }

// let arr = [1,2,3,4];
// Earr = onlyEvenValues(arr);
// console.log(Earr);

// 3

// function showFirstAndLast(arr){
//     let temp =  arr.filter((n) => typeof(n) == "string");
//     let res = []
//     res.push(temp[0])
//     res.push(temp[temp.length-1]);
//     return res;
// }

// let arr = [1,"2","3","4"];
// Earr = showFirstAndLast(arr);
// console.log(Earr);


//4 

// function vowelCount(str){
//    let count = {"a":0, "u":0, "e": 0,"o":0, "i":0}
//    str.split("").forEach(element => { 
//      if(element.toLowerCase() in count){
//         count[element.toLowerCase()]++;
//      } 
//    });
//    return count;
   
// }

// let str ="nsdkjfbnsikvnkaljvSKBA;KJVBpi";
// Earr = vowelCount(str);
// console.log(Earr);


// 5

// function capitalize(str) {
//     let charsArray = str.split("");
    
//     let upperArray = charsArray.map(element => {
//         return element.toUpperCase();
//     });
    
//     return upperArray.join("");
// }
// let str = "hdskjnfnv";
// console.log(capitalize(str))

// 6

// function capitalize(str) {
//     return str.split("").map(char => {
//         let code = char.charCodeAt(0);
//         if (code >= 97 && code <= 122) {
//             let newCode = ((code - 97 + 1) % 26) + 97;
//             return String.fromCharCode(newCode);
//         }
    
//         if (code >= 65 && code <= 90) {
//             let newCode = ((code - 65 + 1) % 26) + 65;
//             return String.fromCharCode(newCode);
//         }
//         return char;
//     }).join("");
// }
// let str = "hdskjnfnv";
// console.log(capitalize(str))



// 7

// function swapCase(str){

//     return str.split(" ").map((s,i) => {
//         if(i%2!=0){return capitalize(s);}
//         else{return s;}})

// }

// let str = "hd sk jnf nv";
// console.log(swapCase(str))




