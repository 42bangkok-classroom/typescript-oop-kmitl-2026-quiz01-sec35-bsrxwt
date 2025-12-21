const number = process.argv[2];
if(number===undefined||number.trim()===""){
    console.log(`Invalid Input`);
    process.exit();
}
let num = Number(number);   
if(Number.isNaN(num)||num<0||num%1!==0){
    console.log(`Invalid Input`);
    process.exit();
}
if(num===0){
    console.log(`1`);
    process.exit();
}
let result = 1;
for(let i=num;i>=1;i--){
    result *= i;
}
console.log(String(result));