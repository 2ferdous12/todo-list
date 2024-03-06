const inputBox = document.getElementById('input-box');
const list = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ''){
        alert('imvaild');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    
    inputBox.value = '';
    savedata()
}

list.addEventListener('click', function(e){
  
    if(e.target.tagName === 'LI'){
        console.log(e.target.classList);
        e.target.classList.toggle('checked');
        savedata()
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        savedata()
    }
}, false);

function savedata(){
    localStorage.setItem('data', list.innerHTML)
}

function showList(){
    list.innerHTML = localStorage.getItem('data');
}