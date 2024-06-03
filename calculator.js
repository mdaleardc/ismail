const inputVal = document.getElementById("user-input");

const storeData = (val) => {
    const enteredVal = inputVal.textContent;
    const charLength = enteredVal.length;
    const charLastIndex = enteredVal[charLength - 1];
    const specialSymbolsArr = ["%", "*", "-", "+", "/", "."];
    
    // Prevent special symbols (including ".") from being entered first
    if (charLength === 0 && specialSymbolsArr.includes(val)) {
        return;
    }
    
    // Prevent leading zeros unless followed by a "."
    if (charLength === 1 && enteredVal === "0" && val !== ".") {
        return;
    }
    
    // Prevent more than one "."
    if (val === "." && enteredVal.includes(".")) {
        return;
    }
    
    // Prevent entering more numbers if it starts with "0" and isn't a decimal number
    if (charLength > 1 && enteredVal[0] === "0" && enteredVal[1] !== "." && !specialSymbolsArr.includes(enteredVal[1])) {
        return;
    }
    
    // Handle entering special symbols
    if (specialSymbolsArr.includes(val)) {
        // Replace last character if it is a special symbol
        if (specialSymbolsArr.includes(charLastIndex)) {
            inputVal.textContent = enteredVal.slice(0, -1) + val;
        } else {
            inputVal.textContent += val;
        }
    } else {
        inputVal.textContent += val;
    }
};

const allClearFunction = () => inputVal.textContent = "";

const calculated = () => {
    const result = eval(inputVal.textContent);
    inputVal.textContent = result;
};

const deleteLast = () => {
    const enteredVal = inputVal.textContent;
    if (enteredVal.length > 0) {
        inputVal.textContent = enteredVal.slice(0, -1);
    }
};
 
 /*document.getElementById("inputText").addEventListener("focus", (event) => {
     event.target.blur();
 });*/
