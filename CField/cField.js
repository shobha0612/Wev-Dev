const input = document.querySelector('input')
input.addEventListener('keyup', (e) =>{
    console.log(e.key);

    if (e.key == 'Enter'){
        alert(`Enter key is pressed and field has ${input.value} value`);
    }

})