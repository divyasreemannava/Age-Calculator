const birthdate = document.getElementById("date");
const birthmonth = document.getElementById("month");
const birthyear = document.getElementById("year");
const validate = document.getElementById("validate")
const submit = document.getElementById("submit")
const date = new Date();

let currentDate = date.getDate();
let currentMonth = date.getMonth()+1;
let currentYear = date.getFullYear();

birthdate.addEventListener("input",()=>{
    if(birthdate.value>31 || birthdate.value<1){
        validate.innerText="Please Enter the valid Date"
    }else{
        validate.innerText=""
    }
})
birthmonth.addEventListener("input",()=>{
    if(birthmonth.value>12 || birthmonth.value<1){
        validate.innerText="Please Enter the valid Month"
    }else{
        validate.innerText=""
    }
})
birthyear.addEventListener("input",()=>{
    if(birthyear.value>currentYear){
        validate.innerText="Please Enter the valid Year"
    }else{
        validate.innerText=""
    }
})

const year = Number(birthyear.value);
const Bdate = Number(birthdate.value);
const Bmonth = Number(birthmonth.value);
const months = [31,28,31,30,31,30,31,31,30,31,30,31]

if(Bdate>currentDate){
    currentDate =currentDate + months[currentMonth-1];
    currentMonth=currentMonth-1;
}
if(Bmonth>currentMonth){
    currentYear = currentYear-1;
    currentMonth=currentMonth+1
    
}


const calDays = currentDate-Bdate
const calMonth = currentMonth-Bmonth
submit.addEventListener("click",()=>{
    let calYear = currentYear-((Number(birthyear.value)))
    validate.innerText=`Your Age is ${calYear} years ${calMonth} months ${calDays} days`
})
