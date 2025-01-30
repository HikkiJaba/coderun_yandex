const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num_eat = 0;
let arr = [];

rl.on('line', line => {
    if (!line) {
        
        if(arr.length != 0) {
            console.log("Вывод при выходе ", arr);
            getPrice();
        } else {
            console.log("Массив пустой");
        }
        rl.close();

    } else {
        arr[num_eat] = line;
        num_eat++;
    }
})


function getPrice() {
    let cupon = 0;
    let use_cupon = 0;

    while (num)
}