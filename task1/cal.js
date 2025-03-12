let expression=document.getElementById("expression");
let result=document.getElementById("result");



function appendCharacter(char) {
     if (char === '²') {
        
        expression.textContent += '²';
    } 

    else if(char === '%')
    {
        expression.textContent+='%';
    }
   else{
    expression.textContent += char;
}

}

function clearDisplay() {
    expression.textContent="";
    result.textContent="";
}

function deleteCharacter() {
    expression.textContent=expression.textContent.slice(0, -1);
}

function calculateResult() {
    let exp=expression.textContent;
    exp = exp.replace(/(\d+)²/g, "Math.pow($1, 2)");
    exp = exp.replace(/√(\d+)/g, "Math.sqrt($1)");
    exp=exp.replace(/(\d)(\()/g,"$1*$2");
    exp = exp.replace(/(\d+)%/g, "($1/100)");
    try {
        result.textContent= eval(exp);
    } catch {
        result.textContent = "Error";
    }
}

// function to calculate square root
function calculateSquareRoot() {
    try {
        let exp=expression.textContent;
       
        exp = exp.replace(/√(\d+)/g, "Math.sqrt($1)");

        result.textContent = eval(exp);
    
    }catch {
       result.textContent  = "Error";
    }
}

//function to togglesign(+/-)
function toggleSign() {
    if (expression.textContent .startsWith("-")) {
        expression.textContent =expression.textContent.slice(1);
    } else {
        expression.textContent= "-" +expression.textContent;
    }
}