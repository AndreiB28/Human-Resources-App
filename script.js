
function calculateNetSalary(grossSalary) {
      return parseFloat(grossSalary*0.45);
    
}

function sumSalaries(salaries) {
    let salarii = document.querySelectorAll(".container.rounded-3.abc input");
    let sum = 0;
    for(let i=0; i<salarii.length;i=i+1){
        if(salarii[i].value !== ""){

        sum=sum+parseFloat(salarii[i].value);

        }
    }
    return sum;
}

function inputToNumber(elementID) {
    let inp = document.getElementById(elementID);
    let val = parseInt(inp.value);
    if(isNaN (val)){
        return 0
    }
    return val;
}

function capitalizeFirstLastName(text1, text2) {
    let capTxtOne = text1.charAt(0).toUpperCase()+text1.slice(1);
    let capTxtTwo = text2.charAt(0).toUpperCase()+text2.slice(1);
    let fullCapName = capTxtOne +" "+ capTxtTwo;
    return fullCapName;
    
}

function sumSubsetSalaries(allSalaries, start, end) {
    let result = 0;
    console.log(allSalaries);
    for(let i=start-1; i<end; i=i+1){
        result = result + allSalaries[i]
    }
    return result
}

function getHighestSalary(list) {
    let max = -Infinity;

    for(let i = 0; i<list.length; i=i+1){
        if(list[i] >= max){
            max = list[i];
        }
    }
    return max
}

function getMatchingPersons(employees, find) {
    let out = [];

    for(let i=0; i<employees.length; i=i+1){
        if(employees[i].indexOf(find) >-1){
            out.push(employees[i]);
        }
    }
        return out
}

function isValideNumber(input) {
   if(input.indexOf(".") === input.length-1){
       return false;
   }

   if(input.indexOf("+")>0){
       return false
   }

   if(input.indexOf("-")>0){
       return false
   }

   const numbers = "0123456789+-.";
   for(let i=0; i<input.length; i=i+1){
       if(numbers.indexOf(input[i]) < 0){
           return false
       }
   }

   return true
}

// --- NOT WORKING --- //
function isValideEmail(text) {
  let result = true;
  let foundAt = 0;
  let foundDot = 0;

  for(let i=0; i< text.length; i=i+1){
      if(text[i] === "@"){
          foundAt = foundAt + 1;
          if(i === 0){
              result = false;
          }
          if(i === text.length - 1){
              result = false;
          }
      }
      if(text[i] === "."){
          foundDot = foundAt+1;
          if(i === 0){
             result = false;
          } 
          if(i === text.length - 1){
              result = false;
          }
          if(text[i - 1] === "@"){
             result = true;
          }
      }
  }

     if(foundAt !== 1){
         return false;
     }
     if(foundDot !== 1){
         return false;
     }

     return result;
}


//------------------------------- BELOW IS THE CODE WITH WHICH THE PROJECT STARTED ---------------------------------//


//Gross salary
document
    .getElementById("compute-gross-salary")
    .addEventListener("click", (e) => {
        e.preventDefault();

        let salary = inputToNumber("gross-salary");

        const rez = document.getElementById("result-gross-salary");
        rez.innerText = calculateNetSalary(salary);
    });

//Sum salaries
document.getElementById("compute-number-sum")
        .addEventListener("click", (e) => {
            e.preventDefault();
            let input = [];
            
            for (let i = 1; i <= 5; i++) {
                input.push(inputToNumber("number-" + i));
            }
            
            document.getElementById("number-sum").innerText = sumSalaries(input);
        });

// Salary index
document
    .getElementById("compute-salary-index")
    .addEventListener("click", (e) => {
        e.preventDefault();
        let from = inputToNumber("index-1");
        let until = inputToNumber("index-2");

        let salaries = [];
        for (let i = 1; i < 11; i++) {
            let row = document.getElementsByTagName("tr")[i];
            let value = row.getElementsByTagName("td")[1];
            value = value.innerText;
            salaries.push(parseInt(value));
        }
        document.getElementById("result-salary-index").innerText = sumSubsetSalaries(salaries, Math.min(from, until), Math.max(from, until));
    });

// Capitalize
document.getElementById("capitalize").addEventListener("click", (e) => {
    e.preventDefault();

    let text1 = document.getElementById("to-capitalize-1").value;
    let text2 = document.getElementById("to-capitalize-2").value;

    document.getElementById("result-to-capitalize").innerText = capitalizeFirstLastName(
        text1,
        text2
    );
});

//Is it a number
document
    .getElementById("compute-is-a-number")
    .addEventListener("click", (e) => {
        e.preventDefault();
        let text = document.getElementById("is-a-number").value;
        let rez = document.getElementById("result-is-a-number");

        if (isValideNumber(text)) {
            rez.innerText = "It's a valid number";
        } else{
            rez.innerText = "It's not a number"
        }
    });

//Is it an email
document.getElementById("compute-is-email").addEventListener("click", (e) => {
    e.preventDefault();
    let textMail = document.getElementById("is-email").value;
    let rez = document.getElementById("result-is-email");

    rez.innerText = isValideEmail(textMail);
});

//Highest salary
document.getElementById("compute-find-max").addEventListener("click", (e) => {
    e.preventDefault();
    let list = [];

    for (let i = 1; i < 6; i++) {
        list.push(inputToNumber("find-max-" + i));
    }

    document.getElementById("result-find-max").innerText = getHighestSalary(list);
});

// Find person
document
    .getElementById("compute-contains-filter")
    .addEventListener("click", (e) => {
        e.preventDefault();

        let list = [];
        let max = document.getElementsByClassName('list-group')[0].children.length
        for (let i = 0; i<max; i++) {
            list.push(document.getElementsByClassName('list-group')[0].children[i].innerText)
        }
        let filtered = getMatchingPersons(
            list,
            document.getElementById("contains-filter").value
        );

        let out = "";
        for (let i = 0; i < filtered.length; i++) {
            out += '<li class="list-group-item">' + filtered[i] + "</li>";
        }

        document.getElementById("contains-output").innerHTML = out;
    });

