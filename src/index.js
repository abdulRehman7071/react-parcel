import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import { IMG_CDN_URL } from "./constants";

// =============== Without Jsx =========== //

// const heading = React.createElement(
//   "h1",
//   { id: "lol", key: "1" },
//   "Namaste JavaScript"
// );
// const heading2 = React.createElement(
//   "h2",
//   { id: "lol", key: "2" },
//   "Namaste Vue"
// );
// const heading3 = React.createElement(
//   "h2",
//   { id: "lol", key: "3" },
//   "Namaste Express"
// );

// console.log("Hi");

// console.error("lol");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const container = React.createElement("div", { id: "lol" }, [
//   heading,
//   heading2,
//   heading3,
// ]);

// root.render(container);

// =============== using Jsx =========== //

const AppLayout = () => {
  return (
    <>
      <Header /> {/* Component Composition */}
      <Body /> {/* Component Composition */}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// We can call the component like this
/* root.render(AppLayout()); */
// or
root.render(<AppLayout />);
