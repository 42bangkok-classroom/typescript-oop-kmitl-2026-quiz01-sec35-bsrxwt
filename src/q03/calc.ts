const op = process.argv[2];
const Num1 = Number(process.argv[3]);
const Num2 = Number(process.argv[4]);
if(!op||Number.isNaN(Num1)||Number.isNaN(Num2)){
  console.log(`Invalid input`);
  process.exit();
}else{
const oplw = op.toLowerCase();
switch(oplw){
  case "add": console.log(Num1+Num2); break;
  case "sub": console.log(Num1-Num2); break;
  case "mul": console.log(Num1*Num2); break;
  case "div": 
  if(Num2==0){
    process.exit();
  }else{
    console.log(Num1/Num2);
  }
  break;
  default: console.log(`Invalid operator`);
}
}