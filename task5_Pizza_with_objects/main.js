// Task 1 - Write code which models a pizza as a class. Pizza has at least following properties: name, toppings, base price for a small pizza. Pizza has also a functions, which calculates it’s price.
const addPerExtraTopping = 50;
const numOfFreeToppings = 4;

class Pizza {
  name = "";
  toppings = [];
  basePrice = 0; // in cents
  size = "S";

  constructor(name, toppings, basePrice) {
    this.name = name;
    this.toppings = toppings;
    this.basePrice = basePrice;
  }

  calcPrice() {
    if (this.toppings.length < 5) {
      return this.basePrice;
    } else {
      return (
        this.basePrice +
        (this.toppings.length - numOfFreeToppings) * addPerExtraTopping
      );
    }
  }
}

// create an obj and run the function
/* const mazzarela = new Pizza(
  "mazzarela",
  ["cheese", "thlh", "sfas", "asdf", "sdfas"],
  1000
);
console.log(mazzarela.calcPrice()); */

// Task 2 - Write code which models an order to a pizza place as a class. The order has a customer name, delivery type, and there can be several pizzas in one order.
// Order can be updated by adding pizzas to it with a method of the order class.

const deliveryCharge = 500;
const pizzaPrice = 1000;

class Order {
  clientName = "";
  deliveryType = "EAT_IN"; //other values TAKE_OUT, DELIVERY
  pizzasInOrder = [];

  constructor(clientName, deliveryType, pizzasInOrder) {
    this.clientName = clientName;
    this.deliveryType = deliveryType;
    this.pizzasInOrder = pizzasInOrder;
  }

  addPizza(pizza) {
    this.pizzasInOrder.push(pizza);
  }

  calcPrice() {
    let totalPrice = 0;

    if (this.deliveryType === "delivery") {
      totalPrice += 500;
    }
    for (const item of this.pizzasInOrder) {
      totalPrice += pizzaPrice;
    }
    return totalPrice;
  }
}

// run Order to check
/* const order1 = new Order("Ivan", "delivery", [
  "Hawaiian",
  "Pepperoni",
  "Margherita",
  "Cheese",
  "Veggie",
]);
console.log(order1.calcPrice()); */
