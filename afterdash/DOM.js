// const title=document.getElementById('title');
// title.innerHTML='this is title ahead using JS';
// document.getElementById('title').innerHTML='<strong>DoM Manipulation</strong>'
// const paragraphs=document.querySelector('.para');
// console.log(paragraphs)

// const paragraphs=document.querySelectorAll('.para'); //query chai html maa hunchha ani haamlye js baatw tyo query select gare ho
// console.log(paragraphs)

// const paragraphslength=paragraphs.length;

// for(let i= 0; i<paragraphslength; i++){
//     paragraphs[i].innerHTML=This is paragraph ${i+1};
// }

//JS DOM Manipulation
//<div id ='header'>This is header</div>
//const header = document.getElementById('header'); //memory execution dherai nahos bhanerw ani agaade chai let pani raakhna milchha
//header.innerHTML='New header' 


//11/12-class
// const paragraphs=document.querySelectorAll('.paragraph'); //query chai html maa hunchha ani haamlye js baatw tyo query select gare ho
// console.log(paragraphs)
// const paragraphslength=paragraphs.length;

// for(let i=0; i<paragraphslength; i++){ //length lye chai html ma katiota paragraph chha bhanerw hyerna 
//     paragraphs[i].innerHTML=`This is paragraph ${i+1}`;
//     if(i==0){
//         paragraphs[i].innerHTML=`This is first paragraph.`;
//     }else{
//         paragraphs[i].innerHTML=`This is second paragraph.`;
//     }
// }

// const title = document.getElementById('title2')
// // title2.classList.add('text-red');
// const redBtn=document.getElementById('btnRed');
// redBtn.addEventListener('click', ()=>{
//     title.classList.add('text-red');
// })
// const blueBtn=document.getElementById('btnBlue');
// blueBtn.addEventListener('click', ()=>{
//     title.classList.add('text-blue');
// })
// const yellowBtn=document.getElementById('btnYellow');
// yellowBtn.addEventListener('click', ()=>{
//     title.classList.add('text-yellow');
// })

//EventListener
window.addEventListener('DOMContentLoaded',()=>{
    const test = document.getElementById('test')
    console.log(test)

    test.style.height = '200px';
    test.style.width='200px';
    test.style.backgroundColor = 'red';

})
