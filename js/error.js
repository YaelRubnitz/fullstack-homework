function exnum(arr){
    if(!Array.isArray(arr)){
        throw new Error("isnt arr");
    }
    return arr.filter((n)=> typeof(n) == "number" && !Number.isNaN(n))
}

// let n = [1," ", 4];
// let i = 5;

// try{
//     console.log(exnum(n));
//     console.log(exnum(i));
// } catch (error) {
//     console.log(error.message);
// }


function sum(arr){
    let Narr
    let sum = 0
    try{
      Narr = exnum(arr);
      for(let s of Narr){
        sum += s;
      }
      return sum;
    }catch (error) {
        console.log(error.message);
        return sum;
    }
}

// let arr = [1,2,5]
// let i = 4
// console.log(sum(arr))
// console.log(sum(i))


function filterSum(listArr , mintotal){
    return listArr.filter((l) => {
        if (sum(l) >= mintotal){
            return true;
        }
        return false;
    })
}

// let l = [[1,2,3], [2], ["hh", 5], 3];
// console.log(filterSum(l , 5))

function summerystate(arrlist){
    let Narr = filterSum(arrlist , 10);
    return Narr.map((l)=> {
        let s = sum(l);
        return {sum : s, avg: s/exnum(l).length }
    })
}
// let arrlist = [[1,2,3, 10], [2], ["hh", 5, 10], 3]
// console.log(summerystate(arrlist))

function safeCala(a, b, op) {
    if (typeof(a) === "number" && typeof(b) === "number") {
        switch(op) {
            case "add":
                return a + b;
            case "sub":
                return a - b;
            case "mul":
                return a * b;
            case "div":
                if (b === 0) {
                    throw new Error("אי אפשר לחלק באפס!");
                }
                return a / b;
            default:
                throw new Error("פעולה לא מוכרת!");
        }
    } else {
        throw new Error("a or b are not a number"); // תיקון ל-Error באות גדולה
    }
}


+
2