/* /* function getNumbersInRange(start,end) {
const numbers= [];
total=0 
 for (let i=start; i<=end; i++) {
    numbers.push(i);
 }
    return numbers; 

    } */


    
   
/* 
function slots (q,M1,M2,M3) {
   let plays=0
   let currentmachine=0

   while (q>0)
      q--
   plays++
   {if (M1%35===0 && currentmachine===0) {
      q=q+30 
   currentmachine++
 } else if (M2%100===0 && currentmachine===1) {
      q=q+60
   currentmachine++
  }  else if (M3%10===0 && currentmachine===2)
      q=q+9
   currentmachine=0
      return plays }
}
slots(100,35,100,10) 
 */
 

let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}

function rollerCoaster(age,height,parent,number) {
   {for (i=0;i<number;i++)
      if(age>=12 && height>=120)
        console.log ("You are allowed to ride") 
else if (age<12 && parent===Y && height>=120)
   console.log ("You are allowed to ride")
else if (age<12 && parent===N)
   console.log ("You are not allowed to ride");
else if (height<120)
  console.log ("You are not allowed to ride");
}
}
rollerCoaster(15,125,"Y",2)