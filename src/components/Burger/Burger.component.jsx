import React from "react";
import BurgerIngridient from "./BurgerIngridient/BurgerIngridient.component";
import "./Burger.styles.scss";

const Burger = (props) => {
  let transformedIngridients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngridient key={igKey + i} type={igKey} />;
    });
  })
  .reduce((arr, el) => {
    return arr.concat(el)
  }, []);

  if (transformedIngridients.length === 0) {
    transformedIngridients = <p>Please start adding ingredients!</p>
  }

  console.log(transformedIngridients);

  return (
    <div className="Burger">
      <BurgerIngridient type="bread-top" />
        {transformedIngridients}
      <BurgerIngridient type="bread-bottom" />
    </div>
  );
};

export default Burger;
