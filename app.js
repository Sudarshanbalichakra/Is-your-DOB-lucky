const inputDob=document.querySelector("#input-dob");
const inputNumber=document.querySelector("#input-no");
const checkButton=document.querySelector("#check-btn");
const outPut=document.querySelector("#output-line")

checkButton.addEventListener("click",checkNoIslucky)

function comapreVlaue(sum,luckyNumber){
    if (sum%luckyNumber===0){
        outPut.innerText("hey,your birthday is lucky !!!");
    }outPut.innerText("sorry,your birthday is not lucky.");
    
}


function checkNoIslucky(){
    const dob=inputDob.value;
    const sum=calculateSum(dob);
    comapreVlaue()
   
}
   
function calculateSum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let index=0;index<dob.length;index++){
        sum=sum+Number(dob.charAt(index))
    }
    return sum;
}
