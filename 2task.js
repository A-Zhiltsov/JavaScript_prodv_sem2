const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

function displayReviews(reviews) {
    const container = document.getElementById("reviewsContainer");
    container.innerHTML = ""; 

    reviews.forEach(product => {
        const productTitle = document.createElement("h3");
        productTitle.textContent = product.product;
        container.appendChild(productTitle);

        product.reviews.forEach(review => {
            const reviewElement = document.createElement("div");
            reviewElement.classList.add("review");
            reviewElement.innerHTML = `<p>${review.text}</p>`;
            container.appendChild(reviewElement);
        });
    });
}

function addReview(text) {
    if (text.length < 50 || text.length > 500) {
        throw new Error("Длина отзыва должна быть от 50 до 500 символов.");
    }

    const newReview = {
        id: Date.now().toString(),
        text: text,
    };

    initialData[0].reviews.push(newReview);

    displayReviews(initialData);
}

document.addEventListener("DOMContentLoaded", () => {
    displayReviews(initialData);


    document.getElementById("submitReview").addEventListener("click", () => {
        const reviewText = document.getElementById("reviewInput").value.trim();

        try {
            addReview(reviewText);
            document.getElementById("reviewInput").value = ""; 
        } catch (error) {
            alert(error.message);
        }
    });
});