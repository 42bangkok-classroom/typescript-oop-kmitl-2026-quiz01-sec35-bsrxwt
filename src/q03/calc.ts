const op = process.argv[2];
const Num1 = process.argv[3];
const Num2 = process.argv[4];
if(op.trim()===''||Num1.trim()===''||Num2.trim()===''||op===undefined||Num1===undefined||Num2===undefined){
  console.log(`Invalid input`);
  process.exit();
}
const n1 = Number(Num1);
const n2 = Number(Num2);
if(Number.isNaN(n1)||Number.isNaN(n2)){
  console.log(`Invalid input`);
  process.exit();
}else{
const oplw = op.toLowerCase();
switch(oplw){
  case "add": console.log(n1+n2); break;
  case "sub": console.log(n1-n2); break;
  case "mul": console.log(n1*n2); break;
  case "div": 
  if(n2==0){
    process.exit();
  }else{
    console.log(n1/n2);
  }
  break;
  default: console.log(`Invalid operator`);
}
}