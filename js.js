let num = 50;

if (num < 49) {
    console.log('Невірно!')
} else if (num > 100) {
    console.log('Забагато!')
} else {
    console.log('Вірно!')
};

(num == 50) ? console.log('Вірно!') : console.log('Невірно!'); 
//== - звіряє по значенню
//=== - звіряє по типу даних

switch (num) {
    case num < 49:
        console.log("Невірно!");
        break;
    case num > 100:
        console.log('Забагато!')
        break;
    case num > 80:
        console.log('Все ще забагато!')        
        break;
    case 50:
        console.log('Вірно!')        
        break;
    default:
        console.log('Щось пішло не так')        
        break;
}

let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while (num < 55)

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        //break;
        continue;
    }
    console.log(i);
}