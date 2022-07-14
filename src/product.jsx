import fakeDatabase from "./fakeDatabase";
import { useState } from "react";
import "./product.css";

const cardStyle = {
  width: "400px",
};

function Product() {
  const [product, setProduct] = useState(fakeDatabase);

  const handleButton = (index) => {
    setProduct(
      product.map(function (el, ind) {
        if (ind === index) {
          el.isButton = true;
          return el;
        } else {
          return el;
        }
      })
    );
  };

  const handleButtonOn = (index) => {
    setProduct(
      product.map(function (el, ind) {
        if (ind === index) {
          el.isButton = false;
          return el;
        } else {
          return el;
        }
      })
    );
  };

  const handleButtonInfo = (index) => {
    setProduct(
      product.map(function (el, ind) {
        if (ind === index) {
          el.isInfo = true;
          return el;
        } else {
          return el;
        }
      })
    );
  };
  const handleButtonInfoOff = (index) => {
    setProduct(
      product.map(function (el, ind) {
        if (ind === index) {
          el.isInfo = false;
          return el;
        } else {
          return el;
        }
      })
    );
  };

  const [value, setValue] = useState("");

  const filtredProducts = product.filter((el) => {
    return el.name.toLowerCase().includes(value.toLowerCase());
  });
  return (
    <div className="main">
      <div className="form">
        <form className="search_form">
          <input
            type="text"
            placeholder="Поиск кроссовок"
            className="search_input"
            onChange={(event) => setValue(event.target.value)}
          />
        </form>
      </div>
      <div className="cardBox">
        {filtredProducts.map((el, index) => {
          return (
            <div className="card">
              <img src={el.imgUrl} className="card-img" alt="..." />
              <div className="card-body">
                <div className="card-main">
                  <div>
                    <p className="card-title">{el.name}</p>
                    <p className="card-price">Цена {el.price}$</p>
                  </div>
                  <button
                    onClick={() => handleButtonInfo(index)}
                    className="btnInfo"
                  >
                    Детали
                  </button>
                  {el.isInfo && (
                    <div className="alertDiv">
                      <button
                        className="btnInfoAct"
                        onClick={() => handleButtonInfoOff(index)}
                      >
                        X
                      </button>
                      <p>{el.info}</p>
                    </div>
                  )}
                </div>
                <hr className="hr" />
                <p className="card-text">{el.info}</p>
                <button
                  className={el.isButton ? "btnBasketOff" : "btnBasket"}
                  onClick={
                    el.isButton
                      ? () => handleButtonOn(index)
                      : () => handleButton(index)
                  }
                >
                  {el.isButton ? "Удалить из корзины" : "Добавить в корзину"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
