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
    let cost_eat = 0;
    let use_cupon = 0;
    let day_use = 0;
    let num = 1;
    while (num <= arr[0]) {
        if (arr[num] > 100) {
            cupon += 1;
        } else {
            if(cupon) {
                use_cupon += 1;
                cupon -= 1;
                num += 1;
                day_use = num;
                continue;
            }
        }
        cost_eat += Number(arr[num]);
        num += 1;
    }
    console.log (cost_eat);
    console.log (cupon, use_cupon);
    console.log (day_use);
}