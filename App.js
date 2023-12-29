/*
*
* <div>

*
*
*
*
* ReactElemet (object) -- HTML  (browser)
*/

const header = React.createElement(
    "div",
    {id:'parent'},
    [React.createElement('div',
    {id:'child'},
    [React.createElement(
        "h1",
        { id: "heading" }, 
        "Hello world from React!"
      ),React.createElement(
        "h2",
        { id: "heading2" }, 
        "Hello world from React2!"
      )]),
      React.createElement('div',
    {id:'child'},
    [React.createElement(
        "h1",
        { id: "heading" }, 
        "Hello world from React!"
      ),React.createElement(
        "h2",
        { id: "heading2" }, 
        "Hello world from React2!"
      )])]
);
// console.log(header); //object
const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(root);
root.render(header);
// console.log(root.render(header) );
