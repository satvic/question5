import React, { Component } from "react";

class Sort extends Component {
  state = {
    obj: [
      { id: 4, name: "abc" },
      { id: 10, name: "ab2" },
      { id: 5, name: "abc3" },
      { id: 6, name: "abc5" },
    ],
  };

  sortFunc() {
    this.state.obj.sort(function (a, b) {
      return a.id - b.id;
    });
  }

  render() {
    this.sortFunc();
    return (
      <ul>
        {this.state.obj.map((element) => (
          <li>
            {element.id} {element.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default Sort;
