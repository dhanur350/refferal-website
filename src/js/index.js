// function getInterest(){
    
// }//

function myfunction(){
    console.log("form submitted");
    let formref = document.getElementById('formref');
    formref.addEventListener('submit', (event)=>{
        let selectedValues = document.getElementById("interest");
    let text = selectedValues.options[selectedValues.selectedIndex].text;
    console.log(text);
        event.preventDefault();
    console.log(formref);
        console.log(true);
        if(text === "Non-Medical"){
            console.log(true);
            window.location.href ="/src/nonmedical.html";
        }
        if(text === "Medical"){
            console.log(true);
            window.location.href ="/src/medical.html";
        }
        if(text === "Commerce"){
            console.log(true);
            window.location.href ="/src/commerce.html";
        }
        if(text === "Humanity"){
            console.log(true);
            window.location.href ="/src/humanity.html";
        }
        else{
            console.log(false);
        }
    })
}