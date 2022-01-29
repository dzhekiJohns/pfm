      
function Calc(operation, firstNum, secondNum) {
 
    const operators = {
          sum : firstNum + secondNum,
          sub : firstNum - secondNum,
          mult: firstNum * secondNum,
          div:  firstNum / secondNum,             
          };

          if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
              return ('error')  
          } 
          
          if(operation in operators) {
              return operators[operation];
            } else {
              return 'unknown operation';
            }

          };

      console.log(Calc('mult', 15, 67));
      console.log(Calc('sub', 90, 3));


      ///////////////////
      // first version

      // function Calc(operation, firstNum, secondNum) {
          
      //     if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
      //         return ('error')  
      //         } 
      
      //         switch (operation) {
      //             case 'plus' :
      //                 return (firstNum + secondNum);
      //             case 'minus' :
      //                 return   (firstNum - secondNum);
      //             case 'multiply' :
      //                 return (firstNum * secondNum);
      //             case 'share' :
      //                 return (firstNum / secondNum);
      //             case 'degree' :
      //                 return (firstNum ** secondNum);  
      //             default: 
      //                 return ('unknown operation');
                      
      //             }
      //         }           
                  

      //         console.log(Calc('multiply', 69, 3)); 

              
