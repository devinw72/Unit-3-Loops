function elderWand(n,duel,start ) {
  let owner=start;
  let owners=1;
  for (let i=0; i<n; i++) {
  if (duel[i][1]===n)
    owner=duels[i][0];
owners++

  }
  console.log(owners,owner);


        
    
} 
elderWand(3,"A",["BA","CB","DA"]);