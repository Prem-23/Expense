let textBox = document.getElementById('input-1');
let dateBox = document.getElementById('input-2');
let amountBox = document.getElementById('input-3');

let submitBtn = document.getElementById('sub');

let show = document.getElementById('tab');
let shown = document.getElementById('shown');

let container = document.querySelector('.container');
let tBot = document.getElementById('tBot');

let paragraph = document.getElementById('para');

submitBtn.addEventListener('click', function(){
    var row = document.createElement('tr');
    tBot.appendChild(row);
    list = row.classList.add('trow');

    var body = document.createElement('td');
    row.appendChild(body);
    body.innerText = textBox.value;
    textBox.value = "";

    var date = document.createElement('td');
    row.appendChild(date);
    date.innerText = dateBox.value;
    dateBox.value = "";

    var amount = document.createElement('td');
    row.appendChild(amount);
    amount.innerText = amountBox.value;
    amountBox.value = "";

    var del = document.createElement('td');
    row.appendChild(del);
    var button = document.createElement('button');
    button.innerHTML = "Remove";
    del.appendChild(button);
    button.addEventListener('click', function(){
        tBot.removeChild(row);
    })
})


