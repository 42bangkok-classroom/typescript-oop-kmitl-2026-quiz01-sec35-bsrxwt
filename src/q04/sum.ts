const number = Number(process.argv[2]);
if(Number.isNaN(number)||number<=0){
    console.log(`Invalid Input`);
    process.exit();
}
let sum = 0;
for(let i=1;i<=number;i++){
  sum += i;
}
console.log(`Sum: ${sum}`);