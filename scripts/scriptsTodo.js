window.onload=function() {
    var counter = 1;
    var inputForm =document.getElementById("inputForm");
    var daysToComplete = document.getElementById("daysToComplete");
    var todoTask = document.getElementById("todoTask");
    var submitButton = document.getElementById("submitButton");
    var listOutput = document.getElementById("listOutput");

    submitButton.addEventListener("click", submitTask);
    /*
    //Validates that input is a number for Days to Complete task
    daysToComplete.addEventListener("input", function (event) {
        if(daysToComplete.validity.typeMismatch) {
            daysToComplete.setCustomValidity("Please enter a number");
        }
        else {
            daysToComplete.setCustomValidity("");
        }
    });
    //Validates that Task Entered is not empty 
    todoTask.addEventListener("input", function (event) {
        if(todoTask.validity.typeMismatch) {
            todoTask.setCustomValidity("Please enter a number");
        }
        else {
            todoTask.setCustomValidity("");
        }
    }); */

    function submitTask() {
        //input validation for task
            var enteredTask = todoTask.value;
            var enteredDays = daysToComplete.value;
            if(enteredDays < 3) {
                    var ele = 
                    `<li id="li-${counter}">
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>${enteredTask}</strong> 
                            <br>${enteredDays} day(s)
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </li>`;
                    listOutput.insertAdjacentHTML('beforeend',ele);
                    counter++;
                    inputForm.reset();
            }
            else if(enteredDays >=3 && enteredDays < 7) {
                    var ele = 
                    `<li id="li-${counter}">
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>${enteredTask}</strong> 
                            <br>${enteredDays} day(s)
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </li>`;
                    listOutput.insertAdjacentHTML('beforeend',ele);
                    counter++;
                    inputForm.reset();
            }
            else {
                    var ele = 
                    `<li id="li-${counter}">
                        <div class="alert alert-secondary alert-dismissible fade show" role="alert">
                            <strong>${enteredTask}</strong> 
                            <br>${enteredDays} day(s)
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </li>`;
                    listOutput.insertAdjacentHTML('beforeend',ele);
                    counter++;
                    inputForm.reset(); 
            }
    } 

    /*
    ${enteredTask}
    Element to insert
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
		<strong>Holy guacamole!</strong> You should check in on some of those fields below.
		<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
		</button>
    </div>
    */




    /*
    //Form handling from number chart code along
function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["luckySevens"].elements.length; 
        loopCounter++) {
        if (document.forms["luckySevens"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["luckySevens"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 
function resetForm() {
    clearErrors();
    document.forms["luckySevens"]["bet"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["luckySevens"]["bet"].focus();
}
function validateItems() {
    clearErrors();
    var bet = Number(document.forms["luckySevens"]["bet"].value); 
    if (bet == "" || isNaN(bet) || bet <=0 || Number.isInteger(bet) != true) {
        alert("Bet must be a whole number greater than zero.");
        document.forms["luckySevens"]["bet"]
           .parentElement.className = "form-group has-error";
        document.forms["luckySevens"]["bet"].focus();
        return false;
    }
	var luckyArray = luckySevens(bet);
   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Play";
   document.getElementById("startingBet").innerText = Number(bet);
   document.getElementById("totalRolls").innerText = luckyArray[0];
   document.getElementById("highestAmount").innerText = luckyArray[1];
   document.getElementById("challengingResult").innerText = luckyArray[2];
   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
   return false;
} */
}