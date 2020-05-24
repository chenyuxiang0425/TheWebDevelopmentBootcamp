console.log("CONNECTED");

let toDo = ["Buy new Turtle"];
let input = prompt("What would you like to do?");

while (input !== "quit") {
    if (input === "list") {
        printList();
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");



function printList() {
    console.log("**********");
    toDo.forEach(function (todo,index) {
        console.log(todo+" is in "+index);
    })
    console.log("**********");

}

function addTodo() {
    let newTodo = prompt("Enter new todo");
    toDo.push(newTodo);
    console.log(newTodo + " added to list")

}

function deleteTodo() {
    let index = prompt("Enter index of todo to delete");
    toDo.splice(Number(index),1);

    console.log("Todo Removed");
}
