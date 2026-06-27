const products = [
  {id: 1, name: "T-Shirt", price: 1200, img: "https://i.imgur.com/1.jpg"},
  {id: 2, name: "Shoes", price: 3500, img: "https://i.imgur.com/2.jpg"},
  {id: 3, name: "Bag", price: 2200, img: "https://i.imgur.com/3.jpg"}
];

const container = document.getElementById('products');

products.forEach(p => {
  container.innerHTML += `
    <div class="product">
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>Rs ${p.price}</p>
      <button>Add to Cart</button>
    </div>
  `;
});
