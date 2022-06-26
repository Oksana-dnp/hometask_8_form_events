let form = document.forms.test;

console.log(form[3])
document.querySelector('.btn-move').addEventListener('click', moveText);
form[3].addEventListener('change', fillPlaceholder);
function moveText() {
    if(form [0].value.trim())  {
        form[2].value = form [0].value;
        form [0].value = "";
    }    
}

function fillPlaceholder(e) {
        if(e.target.name  === "placeholderInner"){
            console.log('this',this)
            this.placeholder = this.value;
            this.value = "";
        } 
}

