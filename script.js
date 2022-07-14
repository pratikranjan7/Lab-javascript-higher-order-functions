const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
const numberArray=[9,242,35,67,89,54,1226,80,19];

// Function #1: Array Slice
function slice() {
    let modifiedFood = foods.slice(1,4);
    document.getElementById("p1").innerText = "["+modifiedFood+"]"

}

// Function #2: Array Splice
function splice() {
    const modifiedFood2 = foods
    modifiedFood2.splice(1,0,'noodles','icecream')
    document.getElementById("p1").innerText = "["+modifiedFood2+"]"
}

//Function #3: Filter
function showeven() {
    const arr2 = numberArray.filter(function isEven(item){
    if(item%2==0)
        return (item)
    })
    document.getElementById("p2").innerText = "["+arr2+"]"
}

// Function #4: Reject
function reject() {
    let reject = (numberArray) => {
        let res = numberArray.filter((num) => {
            let i = num - 1,
            flag = false;
            while (i > 1) {
                if (num % i == 0) {
                    flag = true;
                    break;
                } 
                else {
                    i--;
                }
            }
            if (flag) {
                return num;
            }
        });
        return res;
    };
    let arr = reject(numberArray);
    document.getElementById("p2").innerText = "["+arr+"]"
}

//Function #5: Lambda
function lambda() {
    let evenarr = numberArray.filter((num) => num % 2 == 0);
    document.getElementById("p2").innerText = "["+evenarr+"]"
}

//Function #6: Map
function map() {
    const arr1=[11,34,20,5,53,26]
    const mainarr1 = arr1.map(function findSquareOfNumbers(item){
        return (item*item);
    })
    document.getElementById("p3").innerText = "["+mainarr1+"]"
}

//Function #7: Reduce
function multi() {
    const arr2=[2,3,5,10]
    const mainarr2 = arr2.reduce(function multiply(total,item){
    return total*item
    },1)
    document.getElementById("p4").innerText = "Total multiplied altogether: "+mainarr2
}