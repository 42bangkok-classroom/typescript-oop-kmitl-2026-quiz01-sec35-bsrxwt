const pop = process.argv[2]
if(pop===undefined||pop===''){
  console.log("Invalid Input");
  process.exit();
}
const score = Number(pop); 
if(Number.isNaN(score)||score < 0 || score > 100){
  console.log("Invalid Input");
  process.exit();
}else{
  if (score >= 80) {
    console.log(`Grade is A`);
  } else if (score >= 70) {
    console.log(`Grade is B`);
  } else if (score >= 60) {
    console.log(`Grade is C`);
  } else if (score >= 50) {
    console.log(`Grade is D`);
  } else {
    console.log(`Grade is F`);
  } 
}