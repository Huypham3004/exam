function numberOneTriangle(n){
    let row = "";
    for (let i = 1; i <= n; i++){
        row += '* '
        console.log(row);
    }
}

numberOneTriangle(10);