const products = [
    {
        category: "Laptop",
        items: [
            { name: "Basic Laptop", image: "./beautiful.jpg", description: "A simple laptop for everyday use.", price: "$500" },
            { name: "Gaming Laptop", image: "./gaming-laptop.jpg", description: "High-performance gaming laptop.", price: "$1200" }
        ]
    },
    {
        category: "Flat-computer",
        items: [
            { name: "Standard Flat Computer", image: "./flat-computer.jpg", description: "Office use flat computer.", price: "$600" },
            { name: "Touchscreen Flat Computer", image: "./touchscreen-flat.jpg", description: "Interactive touchscreen computer.", price: "$800" }
        ]
    },
    {
        category: "Modern-desktop",
        items: [
            { name: "High-End Desktop", image: "./modern-desktop.jpg", description: "Latest spec desktop.", price: "$1500" },
            { name: "Budget Desktop", image: "./budget-desktop.jpg", description: "Affordable desktop for basic use.", price: "$400" }
        ]
    }
];

function showCategoryProducts(event) {
    const category = event.target.getAttribute("data-category");
    const categoryData = products.find(product => product.category === category);

    if (categoryData) {
        // Başlık oluştur
        let productListHTML = `<h2 class="products-title">Products in ${category}</h2>`;
        
        // Ürün kartlarını içeren container
        productListHTML += `<div class="products-container">`;

        for (let i = 0; i < categoryData.items.length; i++) {
            const item = categoryData.items[i];
            productListHTML += `
                <div class="product-card">
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p>Price: ${item.price}</p>
                </div>
            `;
        }

        productListHTML += `</div>`;

        const productListContainer = document.getElementById("product-list");
        productListContainer.innerHTML = productListHTML;
    }
}
