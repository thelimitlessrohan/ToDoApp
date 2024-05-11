let todo = [];

let req = prompt("Please Enter your request");

console.log(req);

while(true){
    if (req =="quit"){
        console.log("quiting app");
        break;
    }
    if (req == "list"){
            console.log("--------Loading List--------");
        // for(task of todo){
        //     console.log(task);
        // }
        for(i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        
    } else if (req == "add"){
        console.log("--------adding task List--------");
        let task = prompt("Please Enter task that you want to add ");
        todo.push(task);
        console.log("Task added");
        
    }
    else if (req == "delete"){
        console.log("--------deleting from task List--------");
        let index = prompt("Please Enter task the you want to delete ");
        todo.splice(index,1);
        console.log("Task deleted");
    }else {
        console.log("Wrong Request");
    }
    req = prompt("Please Enter your request");
}
