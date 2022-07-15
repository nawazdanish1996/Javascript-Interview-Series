class hello{
    message(){ // Method
        console.log("Hello");
    }
    sorry(){
        console.log("World");
    }
}

let a = new hello();
console.log(a.message(), a.sorry());