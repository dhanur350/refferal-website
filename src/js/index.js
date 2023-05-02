function getInterest(){
    let selectedValues = document.getElementById("interest");
    let text = selectedValues.options[selectedValues.selectedIndex].text;
    console.log(text);
    let formref = document.getElementById('formref');
    formref.addEventListener('submit', (event)=>{
        console.log(event);
        event.preventDefault();
        if(text === "Non-Medical"){
            windows.location.href("/src/nonmedical.html");
        }
    })
}//
