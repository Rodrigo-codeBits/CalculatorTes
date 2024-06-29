// Function to append characters to display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  // Function to clear display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Function to evaluate and display result
  function calculate() {
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  }
  