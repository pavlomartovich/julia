const root = document.getElementById('root');
const inpBackColor = document.createElement('input');
inpBackColor.type = 'color';
inpBackColor.name = 'bgcolor';
const backColorLabel = document.createElement('label');
backColorLabel.setAttribute('for', 'bgcolor');
backColorLabel.innerText = 'Choose color for background';
const inpColorSign = document.createElement('input');
inpColorSign.type = 'color';
inpColorSign.name = 'sgncolor';
const sgnColorLabel = document.createElement('label');
sgnColorLabel.setAttribute('for', 'sgncolor');
sgnColorLabel.innerText = 'Choose color for sign';
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
submite.id = 'btn';
submite.onclick = () => {
    document.getElementsByTagName('body')[0].style.backgroundColor = inpBackColor.value;
    output.style.color = inpColorSign.value;
    let res = '';
    let c = 10;
    let helper;
    const size = inpSize.value;
    for(let i = 1; i < size; i++){
        for(let j = i > 1 ? helper : i; j < size - c; j++){
            if(j < 1){
                continue;
            }
            res += String.fromCharCode(160).repeat((size - j) * 2) +
            inpSign.value.repeat(j * 2) + '\n';
            helper = j - 4;
        }
        c -= c > 0 ? 1 : 0;
    }
    if(size > 0){
        res += String.fromCharCode(160).repeat(size * 1.9) + inpSign.value.repeat(3) + '\n';
        res += String.fromCharCode(160).repeat(size * 1.9) + inpSign.value.repeat(3);
    }
    output.innerText = res;
}
root.appendChild(inpBackColor);
root.appendChild(backColorLabel);
root.appendChild(inpColorSign);
root.appendChild(sgnColorLabel);
root.appendChild(inpSign);
root.appendChild(inpSize);
root.appendChild(submite);
root.appendChild(output);