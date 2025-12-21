const number = Number(process.argv[2]);
if(Number.isNaN(number)||number<=0||number%1!==0){
    console.log(`Invalid Input`);
    process.exit();
}
for(let row = 0;row < number; row++){
  let result = "";
  for(let space = row;space>0;space--){
    result += " ";
  }
  for(let co = number; co>0;co--){
    result += "*";
  }
  console.log(result);
}