

function Suffelcard() {
    let firstcard = Math.floor(Math.random() * 6) 
    let secondcard = Math.floor(Math.random() * 6) 
    let sum = firstcard + secondcard 
    document.getElementById("SumEl").textContent = "Sum : " + sum 
    document.getElementById("FirstCard").textContent = " FirstCard : " + firstcard 
    document.getElementById("SecondCard").textContent = " SecondCard : " + secondcard
}

function Reset(){
    firstcard = 0 
    secondcard = 0 
    let sum = 0 
    document.getElementById("SumEl").textContent = "Sum : " + sum 
}
