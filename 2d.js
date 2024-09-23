//a function that multiply each number under 70 by 2 in an array

const ages = [25, 31, 42, 77];

let a = ages.map(
    (item) => {
    if(item < 70)
        return item * 2;
    else
    return item;
    }
);

console.log(a);