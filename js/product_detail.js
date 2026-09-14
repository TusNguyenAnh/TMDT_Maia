document.addEventListener('DOMContentLoaded', () => {
    // Quantity Selector Logic
    const btnMinus = document.getElementById('btn-minus');
    const btnPlus = document.getElementById('btn-plus');
    const quantityInput = document.getElementById('quantity-input');

    if (btnMinus && btnPlus && quantityInput) {
        // Decrease quantity
        btnMinus.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value) || 1;
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });

        // Increase quantity
        btnPlus.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value) || 1;
            quantityInput.value = currentValue + 1;
        });

        // Validate input to only allow positive numbers
        quantityInput.addEventListener('input', (e) => {
            let value = e.target.value;
            
            // Remove non-numeric characters
            value = value.replace(/[^0-9]/g, '');
            
            // Prevent leading zeros or setting to 0
            if (value === '0') {
                value = '1';
            }
            
            e.target.value = value;
        });

        // Fallback to 1 if input is left empty
        quantityInput.addEventListener('blur', (e) => {
            if (e.target.value === '') {
                e.target.value = '1';
            }
        });
    }
});
