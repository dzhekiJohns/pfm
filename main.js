      
function Calc(operation, firstNum, secondNum) {
            
    if (typeof firstNum !== 'number' || typeof 'secondNum' !== 'number') {
        } else {
        return ('error')  
        } 

        switch (operation) {
            case 'plus' :
                return (firstNum + secondNum);
            case 'minus' :
                return   (firstNum - secondNum);
            case 'multiply' :
                return (firstNum * secondNum);
            case 'share' :
                return (firstNum / secondNum);
            case 'degree' :
                return (firstNum ** secondNum);  
            default: 
                return ('unknown operation');
                
            }
        }           
            
        console.log(Calc('multiply', 69, 3)); 