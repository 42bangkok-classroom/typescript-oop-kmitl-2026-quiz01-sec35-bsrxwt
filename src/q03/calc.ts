const op = process.argv[2];
const Num1 = process.argv[3];
const Num2 = process.argv[4];
if(op===undefined||Num1===undefined||Num2===undefined||op===''||Num1===''||Num2===''){
  console.log(`Invalid input`);
  process.exit();
}
const n1 = Number(Num1);
const n2 = Number(Num2);
let result = 0;
if(Number.isNaN(n1)||Number.isNaN(n2)){
  console.log(`Invalid input`);
  process.exit();
}else{
const oplw = op.toLowerCase();
switch(oplw){
  case "add": result = n1+n2; result.toString(); console.log(result);  break;
  case "sub": result = n1-n2; result.toString(); console.log(result); break;
  case "mul": result = n1*n2; result.toString(); console.log(result); break;
  case "div": 
  if(n2==0){
    process.exit();
  }else{
    result = n1/n2;
    result.toString();
    console.log(result);
  }
  break;
  default: console.log(`Invalid operator`);
}
}