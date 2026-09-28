const menuData = {
  popular: [
    {name:"Aloo Paratha", price:"Rs. 605", desc:"A classic breakfast favourite."},
    {name:"French Toast", price:"Rs. 963", desc:"Golden French toast for a relaxed start."},
    {name:"Halwa Puri", price:"Rs. 1,073", desc:"A traditional Pakistani breakfast."},
    {name:"Chicken Chow Mein", price:"Rs. 1,595", desc:"Chinese-style stir-fried noodles with chicken."},
    {name:"Bun Kabab", price:"Rs. 1,595", desc:"Spicy potato and homemade kabab in an in-house bakery bun."},
    {name:"Club Sandwich", price:"Rs. 2,008", desc:"Chicken, bologna, egg and cheese in white or brown bread."}
  ],
  specials: [
    {name:"Chicken Parmesan", price:"Rs. 2,525", desc:"Breaded chicken with tomato sauce, cheddar, parmesan and spaghetti."},
    {name:"Chicken Steak", price:"Rs. 1,975", desc:"Chicken breast with mushroom sauce, mashed potatoes, vegetables and garlic bun."},
    {name:"Spicy Grilled Chicken", price:"Rs. 1,843", desc:"Grilled chicken with jalapeños, mashed potatoes, vegetables and bun."},
    {name:"Fettuccine Alfredo", price:"Rs. 2,525", desc:"Creamy pasta with chicken and cheese."},
    {name:"Quesadillas", price:"Rs. 2,338", desc:"Flour tortilla with chicken, cheese and jalapeños."},
    {name:"Rosemary Steak", price:"Rs. 2,475", desc:"Steak with rosemary, garlic, mashed potatoes and vegetables."}
  ],
  tea: [
    {name:"Hunza Tea", price:"Rs. 358", desc:"Pakistani-style brewed herbal tea."},
    {name:"Latte", price:"Rs. 523", desc:"Italian-style coffee with milk."},
    {name:"Apple Tea", price:"Rs. 358", desc:"Fruity brewed tea with a refreshing apple note."},
    {name:"Hibiscus Tea", price:"Rs. 358", desc:"Brewed hibiscus flower tea."},
    {name:"Mocha Coffee", price:"Rs. 578", desc:"Coffee with milk for a rich, comforting cup."},
    {name:"Cappuccino", price:"Rs. 578", desc:"Espresso and steamed milk."}
  ],
  sandwiches: [
    {name:"Crispy Chicken Zinger", price:"Rs. 1,645", desc:"Crispy chicken, iceberg, cheese and sauce with fries."},
    {name:"Grilled Chicken & Cheese Sandwich", price:"Rs. 1,645", desc:"Grilled chicken and melted cheese in an in-house bakery bun."},
    {name:"Steak Sandwich", price:"Rs. 1,755", desc:"Beef steak, tomato, onion and melted cheese in an in-house bakery bun."},
    {name:"Spinach Stack Panini Wrap", price:"Rs. 1,458", desc:"Sausage, meat slices, cheese and spinach in a warm pressed wrap."},
    {name:"Chicken & Fries Panini Wrap", price:"Rs. 1,645", desc:"Grilled chicken, fries, cheese and salsa in a toasted tortilla."},
    {name:"Spicy Chicken Melt", price:"Rs. 1,458", desc:"Grilled chicken, cheese and jalapeños in a crispy panini."}
  ]
};

const grid = document.querySelector("#menuGrid");
const tabs = document.querySelectorAll(".tab");

function renderMenu(category){
  grid.innerHTML = menuData[category].map(item => `
    <article class="menu-item">
      <div>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
      </div>
      <span class="price">${item.price}</span>
    </article>
  `).join("");
}
renderMenu("popular");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderMenu(tab.dataset.category);
  });
});

const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelector("#year").textContent = new Date().getFullYear();
