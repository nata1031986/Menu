const menu = [
  {
    id: 1,
    title: "Burrito",
    category: "breakfast",
    price: 15.99,
    img: "./images/burrito.png",
    desc: `IFlour tortilla, Rice, Beans, Protein, Cheese, Lettuce or cabbage, Salsa, Sour cream, Guacamole, Onions, Bell peppers, Cilantro, Lime.`,
  },
  {
    id: 2,
    title: "Cake",
    category: "lunch",
    price: 13.99,
    img: "./images/cake.png",
    desc: `Flour, Sugar, Eggs, Butter, Baking powder, Milk, Vanilla extract, Salt. `,
  },
  {
    id: 3,
    title: "Cupcakes",
    category: "dinner",
    price: 6.99,
    img: "./images/cupcakes.png",
    desc: `Flour, Sugar, Eggs, Butter, Baking powder, Milk, Vanilla extract, Salt.`,
  },
  {
    id: 4,
    title: "Lasagne",
    category: "breakfast",
    price: 20.99,
    img: "./images/lasagne.png",
    desc: `Lasagna noodles, Ground beef or Italian sausage, Tomato sauce, Ricotta cheese, Mozzarella cheese, Parmesan cheese, Onion, Garlic, Olive oil, Salt, Pepper, Italian seasoning. `,
  },
  {
    id: 5,
    title: "Pasta",
    category: "lunch",
    price: 22.99,
    img: "./images/pasta.png",
    desc: `Pasta noodles (such as spaghetti, penne, or fettuccine), Tomato sauce, Olive oil, Garlic, Onion, Salt, Pepper, Parmesan cheese, Fresh basil (optional), Crushed red pepper flakes (optional). `,
  },
  {
    id: 6,
    title: "Pencakes",
    category: "dinner",
    price: 18.99,
    img: "./images/pencakes.png",
    desc: `Flour, Eggs, Milk, Baking powder, Sugar, Salt, Butter (for cooking), Optional: Vanilla extract, Blueberries, Chocolate chips, or other flavorings/toppings.`,
  },
  {
    id: 7,
    title: "Pizza",
    category: "breakfast",
    price: 8.99,
    img: "./images/pizza.png",
    desc: `Pizza dough, Tomato sauce, Mozzarella cheese, Toppings (such as pepperoni, mushrooms, onions, bell peppers, olives, sausage, ham, or pineapple), Olive oil, Garlic (optional), Parmesan cheese (optional), Fresh basil (optional). `,
  },
  {
    id: 8,
    title: "Taco",
    category: "lunch",
    price: 12.99,
    img: "./images/taco.png",
    desc: ` Food truck truffaut Tortillas (corn or flour), Protein (such as seasoned ground beef, grilled chicken, pork, shrimp, or fish), Lettuce or cabbage, Tomato, Onion, Cheese (such as shredded cheddar or Monterey Jack), Salsa (such as tomato salsa, salsa verde, or pico de gallo), Sour cream, Guacamole, Lime (for squeezing over the tacos), Cilantro (optional), Jalapeños (optional).`
  },


];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function() {
   displayMenuItems(menu)
});

function displayMenuItems(menuItems) {
 let displayMenu = menuItems.map(function (item) {
        return `   <article class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title} />
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">${item.desc}</p>
            </div>
        </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}