const root = document.getElementById('root');
const inpSign = document.createElement('input');
inpSign.type = 'text';
inpSign.placeholder = 'Type sign for ypour pyramid';
const inpSize = document.createElement('input');
inpSize.type = 'number';
inpSize.placeholder = 'Put size of your pyramid';
const output = document.createElement('p');
const submite = document.createElement('input');
submite.type = 'button';
submite.value = 'Draw pyramid';
submite.onclick = () => {
    let res = '';
    const size = inpSize.value;
    for(let i = 1; i < size; i++){
        res += String.fromCharCode(160).repeat((size - i) * 2) + 
        inpSign.value.repeat(i) + inpSign.value.repeat(i) + '\n';
    }
    output.innerText = res;
}
root.appendChild(inpSign);
root.appendChild(inpSize);
root.appendChild(submite);
root.appendChild(output);