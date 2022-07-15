function aa(){
    console.log("Function Rule 1");
}
aa()

const bb = function (){
    console.log("Function Rule 2");
}
bb();


const nawaz = () =>{
    console.log("Function Rule 3");
};
nawaz();

// Arrow function
// const greet = () => {
//     return "Good Morning";
// }

// One liner Arrow function
// one liners do not require braces/return
// one line will be automatically return
// const greet = () => "Good Morning";

// object
// const greet = () => ({name: "Nawaz Danish"});

const greet = (name, ending) => "Good Morning"+ " " + name + " " + ending;
console.log(greet("Nawaz Danish", "Bye"));