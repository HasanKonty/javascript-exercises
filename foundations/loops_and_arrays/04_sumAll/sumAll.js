const sumAll = function(a,b) {
    const start= Math.min(a,b);
    const end = Math.max(a,b);

     if (start<0 || end<0){
        return "ERROR"
    }

    let integers = [];

   

    for ( let i=start; i<=end; i++) {
        integers.push(i);
    }
return integers.reduce((a,b) => a+b , 0);
};

// Do not edit below this line
module.exports = sumAll;
