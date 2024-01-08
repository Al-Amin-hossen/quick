

function verify(){
    let age = document.getElementById("age").value;
    let outPut = document.getElementById("output");
    
    if(age < 18 && age >=1){
        outPut.innerHTML= "You are a child!";
        outPut.style.color= "Red";
        document.getElementById("modal-child").classList.add("active");
    }else if(age>=18 && age<=100){
        outPut.innerHTML= "You are an Adult"
        outPut.style.color= "Green";
        document.getElementById("modal-adult").classList.add("active");
    }
}
function closeAdult(){
        document.getElementById("modal-adult").classList.remove("active");
}
function closeChild(){
        document.getElementById("modal-child").classList.remove("active");
}