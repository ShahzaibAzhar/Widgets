import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

export default () => {
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

  return (
    <div className="ui container">
      <br />
      <Search />
      {/* <Accordion items={items} /> */}
    </div>
  );
};
