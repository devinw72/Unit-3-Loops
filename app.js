/* function getNumbersInRange(start,end) {
const numbers= [];
total=0 
 for (let i=start; i<=end; i++) {
    numbers.push(i);
 }
    return numbers; 

    }

    
    
console.log(getNumbersInRange(1,5)); */
function countdown(n) {
   while (n<=5 && n>=0);
   countdown-=1;
   return n 
}
countdown(5)

function countdown(n) {
   while (n>=0)
      console.log(n);
   n--;
}
console.log(countdown(5));