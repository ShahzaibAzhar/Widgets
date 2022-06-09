import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "React",
    desc: "hello react",
  },
  {
    title: "Reactt",
    desc: "hello reactt",
  },
  {
    title: "Reacttt",
    desc: "hello reacttt ",
  },
];

const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "The color green",
    value: "green",
  },
  {
    label: "A shade of blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui container">
      <Header />
      <br />
      <Route route="/">
        <Accordion items={items} />
      </Route>
      <Route route="/list">
        <Search />
      </Route>
      <Route route="/dropdown">
        <Dropdown
          label="Select a Color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
      <Route route="/translate">
        <Translate />
      </Route>
    </div>
  );
};
export default App;
