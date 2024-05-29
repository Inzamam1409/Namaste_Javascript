const heading=React.createElement('h1',{id:"heading"},"Hello World from React");
const root=ReactDOM.createRoot(document.getElementById('root'));


/**
 * <div id="parent">
 *      <div id="child">
 *              <h1></h1>
 *      </div>
 * </div>
 */

const parent=React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child"},[React.createElement('h1',{},"I'am H1 tag"),React.createElement('h2',{},"I'am H2 tag")])],React.createElement(
            "div",
            {id:"child1"},[React.createElement('h1',{},"I'am H1 tag"),React.createElement('h2',{},"I'am H2 tag")]));


const root1=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);