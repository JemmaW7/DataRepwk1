//deleteTask function

let T = ["Study", "Clean", "Exercise"];

let task = "";

let deleteTask = (task) => {

    let index = T.indexOf(task);

    if(index > -1 ){
        T.splice(index,1);
        console.log("Deleted");
        console.log("Number of elements now in array: "+ T.length);
    } else {
        console.log(task + " not found in T.");
    }
 
    return T.length;

}

deleteTask("Clean");
console.log(T);