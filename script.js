console.log("Scipt chargé!");
const myForm = document.querySelector("form");
console.log("myForm contient :", myForm);
myForm.addEventListener("submit", stopReload);
function stopReload(evenement) {
    evenement.preventDefault();
    }
