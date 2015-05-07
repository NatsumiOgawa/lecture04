function zero(){
  return[];
}

function succ(a){

a.push(1);

  return a;

}


function one(){

  var a = zero()
  a=succ(a);
  return a;
  }
