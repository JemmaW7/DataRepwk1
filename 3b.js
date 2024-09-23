//addTask function

let T = [];

let task = "";

let addTask = (task) => {

    T.push(task);
    console.log("Added");
    console.log("Number of elements now in array: "+ T.length);
    return T.length;

}

addTask("Study");
console.log(T);
