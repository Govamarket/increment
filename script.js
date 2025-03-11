const minusInput = document.querySelector("#minus");
const addInput = document.querySelector("#add");
const displayInput = document.querySelector("#displayInput");

  

    function evaluate() {
        
        let sum = 0;

        minusInput.addEventListener("click",()=>{
            sum = sum  -1;
            displayInput.value = sum;
            if (sum === 0) {
                return displayInput.value =  sum = 0;
            }else{
                return sum == 0;
            }
        })
    
        addInput.addEventListener("click",()=>{
            sum = sum + 1;
            displayInput.value = sum;
    
        })
    
    }

  evaluate();