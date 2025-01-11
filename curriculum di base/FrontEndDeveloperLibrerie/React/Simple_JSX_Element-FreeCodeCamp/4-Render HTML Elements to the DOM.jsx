const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Add your code below this line

let targetNode = document.getElementById("challenge-node");
ReactDOM.render(JSX, targetNode);
