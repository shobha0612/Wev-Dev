    const btn = document.querySelector('button');
    btn.addEventListener('click',myFunction)

    function myFunction(){
    const wrapper = document.querySelector(".wrapper");
    const newDiv = document.createElement('div');
    newDiv.innerText = 'this is innerText';
    newDiv.className = 'inner';
    wrapper.append(newDiv);
    }
