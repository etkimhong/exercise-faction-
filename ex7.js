const inputs = function(str){
    const vowels = "aeiouAEIOU";
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(str=="a" || str=="A"){
            count++;
        }
        else if(str[i]=="e" || str[i]=="E"){
            count++;
        }
        else if(str[i]=="i" || str[i]=="I"){
            count++;
        }
        else if(str[i]=="o" || str[i]=="O"){
            count++;
        }
        else if(str[i]=="U" || str[i]=="u"){
            count++;
        }
    }
    return count;
}
console.log(inputs("hello word")); 