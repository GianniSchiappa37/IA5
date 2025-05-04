function sum(a, b) {
    return a + b;
  }


  function div (a, b){
    return a / b;
  }
  
  function containsNumbers(text){
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) >= '0' && text.charAt(i) <= '9') //fixed so it checks if its a numeric digit
          return true; //" " is treated as 0
    }
    return false;
  }


  export default { sum, div, containsNumbers };