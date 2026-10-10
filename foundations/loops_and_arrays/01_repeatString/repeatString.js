const repeatString = function(str , num) {

    let stringArr=[];

    for ( let i=0; i<num; i++) {
        
        stringArr.push(str);
    }
    if (num<0) {
        return "ERROR";
    }
    else if (num=0) {
        return"";
    }
    else{
    return stringArr

    .join("");
     
    }
    }

  repeatString("hey" , 3)


// Do not edit below this line
module.exports = repeatString;
