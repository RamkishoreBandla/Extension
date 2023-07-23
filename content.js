const FIRST_NAME="Ramkishore"
const LAST_NAME="Bandla"

const autoFillForm=()=>{

    const inputElements= document.querySelectorAll("input");
    for(let input of inputElements){
        if(input.type==="text"||input.type==="email"){
            input.value=FIRST_NAME
        }
    }

}

autoFillForm()