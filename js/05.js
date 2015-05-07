function zero(){
  return[];
}

function succ(a){

a.push(1);

  return a;

}


function two (){
  var a = zero();
  a = succ(a);
  a = succ(a);

  return a;
}
