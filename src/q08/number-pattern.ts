const number = Number(process.argv[2]);
if(Number.isNaN(number)||number<=0||number%1!==0){
    console.log(`Invalid Input`);
    process.exit();
}
for(let row = number;row > 0; row--){
  let result = "";
  for(let col = row;col>0;col--){
    result += col;
  }
  console.log(result);
}