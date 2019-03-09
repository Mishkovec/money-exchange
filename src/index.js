// PLEASE DON'T change function name
module.exports = function makeExchange(currency){
    var num = currency;
    var obj = {};
    if(num<=0){
       return obj;
    }
    if (num>10000){
        obj.error = "You are rich, my friend! We don't have so much coins for exchange";
        //return obj.error;
    } else{
    if(num>=50){
       obj.H = count(num, 50); 
       num = num - obj.H*50;
       }
    
    if(num>=25){
       obj.Q = count(num, 25); 
       num = num - obj.Q*25;
       }
    
    if(num>=10){
       obj.D = count(num, 10); 
       num = num - obj.D*10;
       }
    
    if(num>=5){
       obj.N = count(num, 5);
       num = num - obj.N*5;
       }
    
    if(num>=1){
       obj.P = count(num, 1); 
       num = num - obj.P*1;
       }
    }

    return JSON.stringify(obj);
}

function count(num, sub){
       var amount=0;
        while(num>=sub){
            num-=sub;
            amount++;
        }
        
    return amount ;
}