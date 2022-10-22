let a = Number(prompt('Hãy nhập số a'));
let b = Number(prompt('Hãy nhập số b'));
let result = [];
let t = false;

if(a < b){
    for(let i = a; i <= b; i++){
        for(let j = 2; j < i; j++){
            if(i % j == 0){
                t = false;
                break;
            } else {
                t = true;
            }
        }
        if(t == true) {result.push(i);}
    }
} else if (b < a){
    for(let i = b; i <= a; i++){
        for(let j = 2; j < i; j++){
            if(i % j == 0){
                t = false
                break;
            } else {
                t = true;
            }
        }
        if(t == true) {result.push(i);}
    }
}

const $result = document.getElementById('result');
$result.innerHTML = $result.innerHTML + result;