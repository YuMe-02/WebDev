function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        var day = 365;
        var week = 52;
        var month = 12;
        
        left =  90 - age;
        tdays = left * day;
        tweeks = left * week;
        tmonths = left* month;
        
        console.log("You have " + tdays + " days, "
            + tweeks + " weeks, and " + tmonths + " months left.");
        
        
        
    /*************Don't change the code below**********/
    }
    
    lifeInWeeks(20);