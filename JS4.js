document.getElementById('results').style.display = 'none';


document.getElementById('loan-form').addEventListener('submit',function(e){

//Hide results
document.getElementById('results').style.display = 'none';

setTimeout(calculateResults,2000);

e.preventDefault();
});

//Calculate Results
function calculateResults(e){
 console.log('calculating...');
 //UI Vars
 const amount = document.getElementById('amount');
 const interest = document.getElementById('interest');
 const years = document.getElementById('years');
 const monthlyPayment = document.getElementById('monthly-payment');
 const totalPayment = document.getElementById('total-payment');
 const totalInterest = document.getElementById('total-interest');

 const principal = parseFloat(amount.value);
 const calculatedInterest = parseFloat(interest.value)/100/12;
 const calculatedPayments = parseFloat(years.value)*12;

 // compute monthly payment
 const x = Math.pow(1 + calculatedInterest,calculatedPayments);
 const monthly = (principal*x*calculatedInterest)/(x-1);

 if(isFinite(monthly)){
   monthlyPayment.value = monthly.toFixed(2);
   totalPayment.value = (monthly * calculatedPayments).toFixed(2);
   totalInterest.value = ((monthly*calculatedPayments)-principal).toFixed(2);

  // Show results
  document.getElementById('results').style.display = 'block';

 } else {
   showError('Please check your numbers');   // show error is a function   // function is calling
 }

 e.preventDefault();
}

//Show Error Function
function showError(error){

//Create a div
const errorDiv = document.createElement('div');

//Add class
errorDiv.className = 'alert alert-danger';


//create text node and append it to errorDiv
errorDiv.appendChild(document.createTextNode(error));

// Get elements

const card = document.querySelector('.card');
const heading = document.querySelector('.heading');

//inset error above heading
card.insertBefore(errorDiv , heading);

//clear error after 3 seconds
setTimeout(clearError , 3000);  // clearError is a user defined function

}

// clear function
function clearError(){
 document.querySelector('.alert').remove();
}

