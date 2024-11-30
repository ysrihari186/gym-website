
var x= 7
if (x===1){
  var l=[0];
  console.log(l);
}
else if (x===2){
  var l=[0,1];
  console.log(l);
}
else{
  var l=[0,1];
  for (var i=2;i<x;i++){
    l.push(l[l.length-2]+l[l.length-1]);
  
  }
   console.log(l);
}

  