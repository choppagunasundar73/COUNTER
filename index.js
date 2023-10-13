const countval = document.querySelector('#counter');

const increment = ()=>{
    let value = parseInt(countval.innerText);
    value ++;
    countval.innerText = value;
};
const decrement = ()=>{
    let value = parseInt(countval.innerText);
    value --;
    countval.innerText = value;
};