const addOne=()=>{
    document.getElementById("answer").value+="1"    
}
const addTwo=()=>{
    document.getElementById("answer").value+="2"
}
const addThree=()=>{
    document.getElementById("answer").value+="3"
}
const addFour=()=>{
    document.getElementById("answer").value+="4"
}
const addFive=()=>{
    document.getElementById("answer").value+="5"
}
const addSix=()=>{
    document.getElementById("answer").value+="6"
}
const addSeven=()=>{
    document.getElementById("answer").value+="7"
}
const addEight=()=>{
    document.getElementById("answer").value+="8"
}
const addNine=()=>{
    document.getElementById("answer").value+="9"
}
const addZero=()=>{
    document.getElementById("answer").value+="0"
}
const addPoint=()=>{
    document.getElementById("answer").value+="."
}
const clearAll=()=>{
    document.getElementById("answer").value="";
}
const addFirstBracket=()=>{
    document.getElementById("answer").value+="("
}
const addSecondBracket=()=>{
    document.getElementById("answer").value+=")"
}
const addplus=()=>{
    document.getElementById("answer").value+="+"
}
const addSubtract=()=>{
    document.getElementById("answer").value+="-"
}
const addMulti=()=>{
    document.getElementById("answer").value+="*"
}
const addDivide=()=>{
    document.getElementById("answer").value+="/"
}
const backSpace=()=>{
    const inpObj=document.getElementById("answer");
    const up=inpObj.value.slice(0,-1);
    // console.log(up)
    inpObj.value=up;
}

const equal=()=>{
    document.getElementById("answer").value=eval(document.getElementById("answer").value)
}
