const products = [
      { 
        name: "Alan Wake Remastered", 
        version: "<br>Version - PS4",
        price: "<br> ❌ PS5AA - 20,000ks <br>❌ PS4AA - 20,000ks <br> ❌ DA - 10,000ks", 
        image: "images/ps4andps5/alan-wake-remastered.png" 
      },

      { name: "Super Item", price: "$35", image: "images/ps4andps5/assassin's-creed-antiquity-pack.png" }
    ];

    const productList = document.getElementById("productList");
    const searchInput = document.getElementById("searchInput");

    function displayProducts(filteredProducts) {
      productList.innerHTML = "";
      filteredProducts.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <img src="${p.image}" alt="${p.name}">
          <div class="product-name">${p.name}</div>
          <div class="product-version">${p.version}</div>
          <div class="product-price">${p.price}</div>
        `;
        productList.appendChild(card);
      });
    }

    // Initial render
    displayProducts(products);

    // Filter as user types
    searchInput.addEventListener("input", () => {
      const keyword = searchInput.value.toLowerCase();
      const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
      displayProducts(filtered);
    });

    // Back to Top Button Script Start
    const backToTopBtn = document.getElementById("backToTopBtn");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }); 
        //END