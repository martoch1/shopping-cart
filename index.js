const items = document.querySelectorAll('.item');
const totalPriceElement = document.getElementById('totalPrice');

let totalPrice = 0;

items.forEach(item => {
    const decreaseBtn = item.querySelector('.decrease');
    const increaseBtn = item.querySelector('.increase');
    const quantityElement = item.querySelector('.quantity');
    const deleteBtn = item.querySelector('.delete');
    const heartIcon = item.querySelector('.heart');

    decreaseBtn.addEventListener('click', () => {
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        }
    });

    increaseBtn.addEventListener('click', () => {
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updateTotalPrice();
    });

    deleteBtn.addEventListener('click', () => {
        item.remove();
        updateTotalPrice();
    });

    heartIcon.addEventListener('click', () => {
        heartIcon.classList.toggle('liked');
    });
});

function updateTotalPrice() {
    totalPrice = 0;
    items.forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        totalPrice += quantity;
    });
    totalPriceElement.textContent = totalPrice;
}

updateTotalPrice();
