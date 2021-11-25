import React, { useState } from "react";
import FashionItems from "./FashionItems";

const Fashion = (props) => {
const itemsList = [
    {
      id: "Item 1",
      title: "Jacket ",
      description: "An amazing Jacket Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum sodales nunc, et convallis mauris. Vivamus erat erat, tempus sed libero ut, viverra commodo nunc. ",
      url: "",
    },
    {
      id: "Item 1",
      title: "Tshirt",
      description: "An amazing Tshirt Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam vestibulum sodales nunc, et convallis mauris. Vivamus erat erat, tempus sed libero ut, viverra commodo nunc.  ",
      url: "",
    },
    {
      id: "Item 1",
      title: "Jeans",
      description: "An amazing Jeans Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum sodales nunc, et convallis mauris. Vivamus erat erat, tempus sed libero ut, viverra commodo nunc.  ",
      url: "",
    },
  ];
  const [items, setItems] = useState(itemsList);
  return (
    <>
      <div className="container">
        <h1 className="mx-2">Fashion</h1>
        <div className="row">
          {items.map((element) => {
            return (
              <div className="col-md-4" key={element.id}>
                <FashionItems
                  title={element.title}
                  description={element.description}
                  imageUrl={element.url}
                />
            </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Fashion;
