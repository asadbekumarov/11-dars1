let Elwrapper = document.querySelector(".wrapper");
let Elinput = document.querySelector("input");
let Elselect = document.querySelector("select");

(async function () {
  let response = await fetch("https://fakestoreapi.com/products");
  let products = await response.json();

  function filterProducts() {
    let searchTerm = Elinput.value.toLowerCase();
    let selectedLimit = parseInt(Elselect.value) || products.length;
    Elwrapper.innerHTML = "";

    products
      .filter((product) => product.title.toLowerCase().includes(searchTerm))
      .slice(0, selectedLimit)
      .forEach((product) => {
        let newdiv = document.createElement("div");
        let newimg = document.createElement("img");
        let newh3 = document.createElement("h3");
        let newp = document.createElement("p");
        let newb = document.createElement("h1");
        let newpi = document.createElement("p");

        newpi.classList.add("newpi");
        newp.classList.add("newp");
        newb.classList.add("newb");
        newh3.classList.add("newh3");
        newimg.classList.add("newimg");
        newdiv.classList.add("product");

        newpi.textContent = product.id;
        newb.textContent = product.category;
        newimg.src = product.image;
        newh3.textContent = product.title;
        newp.textContent = `$${product.price}`;

        newdiv.appendChild(newpi);
        newdiv.appendChild(newimg);
        newdiv.appendChild(newb);
        newdiv.appendChild(newh3);
        newdiv.appendChild(newp);

        Elwrapper.appendChild(newdiv);
      });
  }

  Elinput.addEventListener("input", filterProducts);
  Elselect.addEventListener("change", filterProducts);
  filterProducts();
})();
