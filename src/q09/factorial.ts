const number = Number(process.argv[2]);
if(Number.isNaN(number)||number<0||number%1!==0){
    console.log(`Invalid Input`);
    process.exit();
}
if(number===0){
    console.log(`1`);
    process.exit();
}
let result = 1;
for(let i=number;i>=1;i--){
    result *= i;
}
console.log(result);