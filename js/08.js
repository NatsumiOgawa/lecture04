function zero(){
  return [];
}

function succ(a){
  a.push(1);
  return a;
}

 function n(a){
    if(a == 0){
     return zero();
  }

  else if(a > 0){
    var i = 1;
    var f = zero();
    while(i <= a){
    f = succ(f);
            i++;
  }
    return f;
  }

  else if(a < 0){
          return null;
        }
      }
