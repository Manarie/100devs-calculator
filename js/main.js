let mainDisplay = ''
let lastButtonPressed

//checks if a button is clicked and returns the value
const onClickEvent = ({ target: { value } }) => {
    try {
      //alert(value);
    } catch (error) {
      console.log(error);
    }
    document.querySelector('#display').innerHTML += value;
  };
  
  document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', onClickEvent);
  });

 