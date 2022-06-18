let mainDisplay = ''
let lastButtonPressed

//checks if a button is clicked and returns the value
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', ({ target: { value } }) => {
    try {
          calc.parseInput(value);
          } catch (error) {
            console.log(error);
          }
  });
});

class Calculator{

  mainDisplay = document.querySelector('#display');
  exprDisplay = document.querySelector('#expressionDisplay');
  currentVal = 0;


  constructor(){
  }

  parseInput(input){
    switch(input){
      case 'CE':
        this.clearAll();
        break;
      case 'C':
        this.clearLast();
        break;
      case '=':
        this.calculate(document.querySelector('#display').innerHTML)
      default:
        this.addToDisplay(input);
    }
  }

  clearAll(){
    this.mainDisplay.textContent = '';
  }

  clearLast(){
    this.mainDisplay.textContent = this.mainDisplay.textContent.slice(0,-1);
  }

  toPercent(input){
    this.currentVal = input * .01;
  }
  
  addToDisplay(input){
    if(document.querySelector('#display').innerHTML === '0' && input === '0'){
      this.mainDisplay.textContent = input;
    }
    if (input !== '=' && document.querySelector('#display').innerHTML !== '0'){
      this.mainDisplay.textContent += input;
    }
    else if(input !== '0' && input !== '='){
      this.mainDisplay.textContent += input;
    }

    
  }

  calculate(equation){
    if (!equation.split('').includes('%')){
      this.mainDisplay.textContent = new Function('return ' + equation)();
    } 
  }

}



const calc = new Calculator();