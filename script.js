const minusInput = document.querySelector("#minus");
const addInput = document.querySelector("#add");
const displayInput = document.querySelector("#displayInput");

  

    function evaluate() {
        
        let sum = 0;

        minusInput.addEventListener("click",()=>{
            if (sum === 0) {
                return displayInput.value =  0;
            }else{
                sum = sum  - 1;
                displayInput.value = sum;
            }
        })
    
        addInput.addEventListener("click",()=>{
            sum = sum + 1;
            displayInput.value = sum;
    
        })
    
    }

  evaluate();