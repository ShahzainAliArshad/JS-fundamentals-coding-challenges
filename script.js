// ============================== variables and datatypes ======================
let name="Zain Ali";
let age=18;
const PI=3.1415;
let isStudent=true;

// ================================= the string and string methods =================

console.log("============================ String and string methods =====================")
let str="Javascript is fun!";
console.log(str);
console.log(`the length of the string is -> ${str.length}`);
let extract=str.substring(0,10);
console.log(`Extracted word -> ${extract}`);
let uppercase=str.toUpperCase();
console.log(`Uppercase -> ${uppercase}`);
let replaced=str.replace("fun","awesome");
console.log(`replaced -> ${replaced}`);
let str2="example@gmail.com";
let index=str2.indexOf('@');

let extract2=str2.substring(index);
console.log(extract2);
// ===================================== the equality operators =======================
console.log("============================ Equality Operators =====================")

let x=5;
let x2="5";
console.log(`x=5;
x2="5"
===With loose equality ===========
The both numbers are equal -> ${x==x2}
===With string equality ==========
The both numbers are equal -> ${x===x2}`)

// ==================================== Arrays ========================================
console.log("============================ Arrays =====================")
let arr=["apple","banana","cherry"];
console.log("===== Original ========")
console.log(arr);
arr.push("grape");
console.log("===== After Pushing ========")

console.log(arr);
console.log("===== After Removing ========")
arr.shift();
console.log(arr);
let include=arr.includes('banana');
console.log("===== IF Banana Exits ========")
console.log(include);


// ================================== tempelate literal ==================================
console.log("======================= Tempelate literal ================");
console.log(`My Name is [${name}], and I am [${age}] years old.`)


// ===================================== arithematic operators =============================
console.log("======================= Arithematic values ================");
console.log(`The result of multiplying the values "7" and "5" is (${7*5})`)
console.log(`The result of reminder of the  values "10" and "3" is (${10%3})`)

// ===================================== Relational operators =============================
console.log("======================= Relational Operators ================");

let price1=10;
let price2=13;
if(price1>price2)
{
    console.log(`The price1 (${price1}) is greater than price2 (${price2})`);
}
else{
    console.log(`The price1 (${price1}) is less than price2 (${price2})`);
}

console.log("--------------")
console.log(`Comparison of "banana" and "apple" -> (${"banana"==="apple"})`)

// ===================================== logical  operators =============================
console.log("======================= logical Operators ================");

let iswarm=true;
let issunny=true;
if(iswarm&&issunny)
{
    console.log("it's nice day!");
}
