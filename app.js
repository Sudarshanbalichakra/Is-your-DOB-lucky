const inputDob=document.querySelector("#input-dob");
const inputNumber=document.querySelector("#input-no");
const checkButton=document.querySelector("#check-btn");
const outputBox=document.querySelector("#output-line")


function comapreVlaue(sum,inputNumber){
    if (sum%inputNumber===0){
      outputBox.innerText="hey,your birthday is lucky 😎 !!!";
    }else{
        outputBox.innerText="sorry,your birthday is not lucky ☹️.";
    }  
}


function checkNoIslucky(){
    const dob=inputDob.value;
    const sum=calculateSum(dob);
    comapreVlaue(sum,inputNumber.value)
    console.log(inputNumber.value);
    console.log(sum);
}
   
function calculateSum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let i=0;i<dob.length;i++){
        sum=sum+Number(dob.charAt(i))
    }
    return sum;
}

checkButton.addEventListener("click",checkNoIslucky)
