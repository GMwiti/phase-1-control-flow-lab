function scuberGreetingForFeet(Value){
  // Write your code here!
  if(Value <= 400){
    return 'This one is on me!'
  }else if(Value > 400 && Value< 2000){
    return 'That will be twenty bucks.'
  }else if(Value >= 2000 && Value <=2500){
    return 'I will gladly take your thirty bucks.';
  }else if(Value >2500){
    return 'No can do.'
  }
  Value(2501)
  
}

function ternaryCheckCity(city){
  // Write your code here!
  if(city === 'NYC'){
    return 'Ok, sounds good.';
  }else{
    return 'No go.';
  }
  city()
  
}

function switchOnCharmFromTip(charm){
  // Write your code here!
  if(charm==='generous'){
    return 'Thank you so much.';
  }if(charm ==='not as generous'){
    return 'Thank you.';
  }else{
    return 'Bye.'
  }
  charm()
}