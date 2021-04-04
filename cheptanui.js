// for in loop
const shark={
    species:"great white",
    color:"white",
    numberOfTeeth:Infinity

}
for(attribute in shark){
    console.log(shark[attribute]);
}
// for of loop
let sharks =["greatwhite","lion","tiger","cowshark","groundshark"];
let txt="";
for(let x of sharks){
    txt += x;

}

console.log(sharks);
