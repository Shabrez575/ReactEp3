import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// React.createElement => Object => HTMLElement(render)

/*
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "React Series Day-3",
);
console.log(heading);
*/
// This is a React Element.
// const jsxHeading2 = (<h1 className="Heading2">React Using JSX2</h1>);

// JSX Topic
// JSX - is not aHTML in JS.
// const jsxHeading = <h1>React Using JSX</h1>

// JSX - HTML Like OR XML Like Syntax
// const jsxHeading = <h1 id="heading">React Using JSX</h1>

// If you write JSX in one line no need to use round brackets.
// const jsxHeading2 = (<h1 className="Heading2">React Using JSX2</h1>);

// If you write JSX in multiple line then you need to use round brackets.
/*
const jsxHeading3 = (<h1 className="Heading3">
  React Using JSX3
</h1>) ;
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
root.render(jsxHeading2);
root.render(jsxHeading3);
*/

// --------------------- Part - 4 -------------------------

//1 - React Element
// const heading = <h1 className="heading">Namaste React Using JSX</h1>;

//2 - React Component
/*
Two Type of React Component 
1 - Class Based Component (Old way to write a Component).
2 - Function Based Component (New way to write a Component).
*/

// Function Based Component(React Functional Component).
// A function that return JSX code is a functional component.

//1st way
// const Title = () => {
//   return <h1>Namaste React Functional Title  1 Component</h1>;
// };

// 2nd way
// const Title = () => <h1>Namaste React Functional Title 2 Component</h1>;

// 3rd way
// const Title = () => <h1>Namaste React Functional Title 3 Component</h1>;

// Component Composition
// Function Based Component(React Functional Component).
// const HeadingComponent = () => (
//   <h1>Namaste React Functional Heading Component</h1>
// );

// A component can be composed of other component.
// const MainComponent = () => (
//   <div>
//     <HeadingComponent />
//     <Title />
//     <h1>Namaste React Functional Main Component </h1>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
//root.render(<Title />);
// root.render(<MainComponent />);

// --------------------- Part - 5 -------------------------
const element = <span>Hi Shabrez I am span</span>;
// const Title = function () {
//   return (
//     <h1>Namaste React Functional Title React Element </h1>
//   );
// };

const Title = () => (
  <h1 className="Heading">
    {element} Namaste React Functional Title React Element
  </h1>
);

// const Title = <h1> {element} Namaste React Functional Title React Element </h1>;

const number = 2000;
// const data = api.getData();
const MainComponent = () => (
  <div>
    {/* We can write any piece of code of js inside JSX using curly braces.  */}
    {number}
    <h2>{number}</h2>
    <h2>{console.log("Hello World JSX")}</h2>
    {/* <h2>data</h2> */}

    {/* Same Thing It Can DO Using Below */}
    {Title()}
    <Title />
    <Title></Title>
    {/* {Title} */}
    <h1 className="text-3xl font-bold underline">Namaste React Functional Main Component </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainComponent />);
