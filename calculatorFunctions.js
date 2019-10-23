//This function displays the values inputted by the user on the dispay section. 
function display(val) { 
    document.getElementById("result").value+=val 
} 
           
// This function evaluates the calculation inputted by the user and returns a result in the display section
function solve() { 
    // Getting the user's inputted values 
    let x = document.getElementById("result").value 
    // Trying to evaluate the calculation of the user's inptted values
    try {
      let y = eval(x)
      document.getElementById("result").value = y 
    }
    // If there are any mathematical errors, an error message will be displayed
    catch {
      document.getElementById("result").value = "Error"
    }    
} 
           
// This function clears the display section 
function allClear(){ 
    document.getElementById("result").value = "" 
}