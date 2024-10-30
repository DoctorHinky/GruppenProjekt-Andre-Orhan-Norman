
function loadProducts() {
    products.forEach(product => {
        const productContainer = document.getElementById(`${product.category}-products`);
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <a href="javascript:void(0)" onclick="showProductDetails(${product.id})">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            </a>
        `;
        productContainer.appendChild(productCard);
    });
}


function showProductDetails(productId) {
    const product = products.find(item => item.id === productId);

    if (product) {
        document.getElementById("product-detail-title").textContent = product.name;
        document.getElementById("product-detail-image").src = product.image;
        document.getElementById("product-detail-description").textContent = product.description;
        document.getElementById("product-detail-price").textContent = product.price;

        document.getElementById("product-details").style.display = "flex";
    }
}


function closeProductDetails() {
    document.getElementById("product-details").style.display = "none";
}


document.addEventListener("DOMContentLoaded", loadProducts);


document.getElementById("close-btn").addEventListener("click", closeProductDetails);
