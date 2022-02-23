function scuberGreetingForFeet(someValue){
  // Write your code here!
  if (someValue <= 400) {
    return "This one is on me!"
  }
  if (someValue > 2500) {
    return "No can do."
  }
  if (someValue > 2000) {
    return "I will gladly take your thirty bucks."
  }
}

function ternaryCheckCity(City){
  // Write your code here!
return City == "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === "generous") {
    return "Thank you so much.";
  }
  else if (tip === "not as generous") {
    return "Thank you.";
  }
  else if (tip = "anything else") {
    return "Bye.";
  }
  
}