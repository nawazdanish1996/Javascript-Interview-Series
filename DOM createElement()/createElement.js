// Create Element Node
/*
4 types of Element Nodes::
createElement(element_name)
createTextNode(string)
createComment(string)
createDocumentFragment()*/

/*
createElement(element_name)

Syntax:
var nNode = document.createElement("h2");
*/

// creating a new h5 element
// var nNode = document.createElement("h5");
// console.log(nNode);
// nNode.innerHTML= "Nawaz Danish";
// document(nNode);

// Append Element Node
// What is Append Node (Append means Jorna)
/* The appendChild(Child_Node) method is used to add a node
to the end of the list of children of a specified parent node.
*/

// creating h5 tag
// let div1 =document.getElementById('intro');
let a = document.createElement("h5");
// adding class Name in h5 tag
a.className = "className class"
// adding id Name in h5 tag
a.id = "idName";
// let text = document.createTextNode("This is h5 tag");
// append means jorna
// a added with text
// a.appendChild(text);
// div1 added with a
// div1.appendChild(a);

// adding in body
document.body.appendChild(a);
a.textContent = "Text Content Added";


