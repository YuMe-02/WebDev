// function fibonacciGenerator(n) {
//     //Do NOT change any of the code above 👆
        
//         //Write your code here:
//         var sum;  
//         var list = [];
//         var t1 = 1;
//         var t2 = 2;    
    
//         for (i = 0; i <= n; i++) {
//             if (i < 1) {
//                 list.push(0);
//             } else if (i <= 2) {
//                 list.push(1);
//             } else {
//                 sum = t2 + (t1 - 1);
//                 t1 = t2;
//                 t2 = sum;
//                 //Return an array of fibonacci numbers starting from 0.
//                 list.push(sum);
//             }
//         }
//         //Return an array of fibonacci numbers starting from 0.
//         return list;
//     }
    
    
//     alert(fibonacciGenerator(20));


// MORE OPTIMNIZED

function fibonacciGenerator(n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:  
        var list = [];

        if (n == 1){
            list = [0, 1];
        } else if (n == 2) {
            list = [0, 1, 1];
        } else {

            for (let i = 2; i <= n; i++) {
                var sum = list[list.length - 2] + list[list.length - 1];
            }
        }

        //Return an array of fibonacci numbers starting from 0.
        return list;
    }
    
    alert(fibonacciGenerator(20));