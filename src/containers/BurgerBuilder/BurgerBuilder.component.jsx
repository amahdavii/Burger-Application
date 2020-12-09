import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger.component";
import BuildControls from "./../../components/Burger/ BuildControls/BuildControls.component";
import Modal from "./../../components/UI/Modal/Modal.component";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary.component";

const INGREDIENT_PRICE = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  };

  updatePurchaseState(ingredients) {
      const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey]
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({ purchasable: sum > 0 });
  }

  addIngridientHandle = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updateCount;
    const priceAddition = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngridientHandle = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updateCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updateCount;
    const priceDeduction = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandle = () => {
    this.setState({ purchasing: true})
  }

  render() {
    const { ingredients } = this.state;
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing}>
          <OrderSummary ingredients={this.state.ingredients} />  
        </Modal>
        <Burger ingredients={ingredients} />
        <BuildControls
          ingredientsAdded={this.addIngridientHandle}
          ingredientsRemoved={this.removeIngridientHandle}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandle}
          price={this.state.totalPrice}
          />
      </Aux>
    );
  }
}

export default BurgerBuilder;
