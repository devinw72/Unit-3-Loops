function getNumbersInRange(start,end) {
const numbers= [];
total=0 
 for (let i=start; i<=end; i++) {
    numbers.push(i);
 }
    return numbers; 

    }

    
    

console.log(getNumbersInRange(1,5));


function sumRange(start,end) {
const numbers = [];
total=0
for (let i=start; i<+end;total+=i) {
    numbers.push(i);

    
}
   return numbers;
} 
console.log(sumRange(1,15));