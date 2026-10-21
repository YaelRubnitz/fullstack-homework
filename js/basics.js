//1 

// let a = 2;
// let b = 5;
// [b , a] = [a , b]
// console.log(a,b)

// 2

// function mat(){
//     let characters = ["X", "O", ".", "A", "B", "1", "*"];

//     let matrix = [];

//     for (let i = 0; i < 5; i++) {
//         let row = []; // שורה חדשה
        
//         for (let j = 0; j < 5; j++) {
//             let randomIndex = Math.floor(Math.random() * characters.length);
//             row.push(characters[randomIndex]);
//         }
        
//         matrix.push(row);
//     }

//     return matrix;
// }

// let matrix = mat();
// console.log(matrix)

// let sum = 0;
// for (let i = 0; i < 5; i++){
//     for (let j = 0; j<5; j++){
//         if(matrix[i][j] === "X"){
//             console.log(`${i} , ${j}`);
//             sum++;
//         }
//     }
// }
// console.log(sum)


//3

// let family = { parents: {}, children: [ {name: "Ali"}, {name: "Lea"}, {name: "Mona"} ] };

// let len = family.children.length;
// let nam = "";
// let sib = "";
// for(let i= 0;i<len; i++){
//     if(i == 2){
//         nam = family.children[i].name;
//     }
//     else{
//         sib += family.children[i].name + " ";
//     }
// }
// console.log(nam);
// console.log(sib);

// // 4


// arr = [1,2,3,4,5,6,7]
// let len = arr.length;
// let s = parseInt(len/2);
// let i = 0;
// let j = len - 1;
// let temp;
// console.log(arr);
// while(i < s){
//     temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
// }
// console.log(arr)


// 5

// let arr =[1,2,"n","t",null,true]
// let types = {};
// let size = arr.length;
// let t;
// for (let i = 0; i < size; i++ ){
//     t = typeof(arr[i]);
//     if(types[t] == undefined){
//         types[t] = 1;
//     }
//     else{
//         types[t]++;
//     }
// }

// console.log(types)

// // 6
// let arr = [1,101,444,555,3,666];
// let newarr = [];
// let numOfComp = 0;
// let n = arr.length;
// for(let i = 0; i < n; i++){
//     if(arr[i] > 100){
//         newarr.push(arr[i])
//     }
//     numOfComp++;
// }

// console.log(newarr)
// console.log(numOfComp)


// 7

// let top = 50;
// let d = {"even": [], "odd": []};
// let div2 = 0;
// let div3 = 0;
// for(let i = 1;i <= 50; i++){
//     if(i%2==0){
//         d["even"].push(i);
//         div2++;
//     }
//     else{
//         d["odd"].push(i);
//         if(i%3 == 0){
//             div3++;
//         }
//     }
// }

// console.log(d)
// console.log(div2, div3)

// 8

// let mat = [];
// let len = 5;
// let row = [];
// for(let i = 0; i< len; i++){
//     row = [];
//     for(let j= 0; j< len; j++){
//         if(i === j || i + j == len-1 ){
//             row.push("#");
//         }
//         else{
//             row.push(" ") ;
//         }
//     }
//     mat.push(row);

// }
// for(let i = 0;i< len; i++){
//     console.log(mat[i]);
// }


// 13
// function getIntersection(arrA, arrB) {
//     let setA = new Set(arrA);
//     let setB = new Set(arrB);

//     let intersectionSet = setA.intersection(setB);

//     return [...intersectionSet];
// }

// console.log(getIntersection([1, 2, 2, 3], [2, 3, 3, 4]));

//14

// let d = {"1":2, 2: "3", 3: true };
// let newd = {};
// let arr = Object.entries(d);

// for(let i = 0; i < arr.length; i++){
//     let key = arr[i][0];
//     let val = arr[i][1];

//     if (typeof(val) === "string" || typeof(val) === "number") {
//         if (newd[val] == undefined) {
//             newd[val] = key; 
//         } else {
//             newd[val] = String(newd[val])+ " " + String(key); 
//         }
//     } else {
//          if (newd[key] == undefined) {
//             newd[key] = val; 
//         } else {
//             newd[key] = String(newd[key]) + " " + String(val); 
//         }
//     }            
// }

// console.log(newd);



// // 18 

// let arr = [1,2,3,4,5];
// let n = arr.length;
// let t = arr[0];
// for(let i = 0; i< n - 1; i++){
//     arr[i] = arr[i+1];
// }
// arr[n-1]= t;
// console.log(arr);

// //19 
// let str = "{";
// let d = {"dd":11, "g": true, "v":"gg"};
// let arr = Object.entries(d);
// let n = arr.length; 
// for(let i = 0; i< n - 1; i++){
//     str += `"${arr[i][0]}" : ${arr[i][1]} ,`
// }
//  str += `"${arr[n-1][0]}" : ${arr[n-1][1]}}`
//  console.log(str)

