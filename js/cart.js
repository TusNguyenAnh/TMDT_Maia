document.addEventListener('DOMContentLoaded', () => {
    const quantityWrappers = document.querySelectorAll('.cart__quantity-wrapper');

    quantityWrappers.forEach(wrapper => {
        const input = wrapper.querySelector('.cart__quantity-input');
        const upBtn = wrapper.querySelector('.fa-angle-up');
        const downBtn = wrapper.querySelector('.fa-angle-down');

        // Function to format the number with leading zero if less than 10
        const formatValue = (val) => {
            return val < 10 ? '0' + val : val.toString();
        };

        const updateValue = (newVal) => {
            if (newVal >= 1) { // Prevents negative numbers and 0
                input.value = formatValue(newVal);
                // Trigger change event if needed for other scripts like price recalculation
                input.dispatchEvent(new Event('change'));
            }
        };

        // Increase quantity
        upBtn.addEventListener('click', () => {
            let currentValue = parseInt(input.value) || 1;
            updateValue(currentValue + 1);
        });

        // Decrease quantity
        downBtn.addEventListener('click', () => {
            let currentValue = parseInt(input.value) || 1;
            if (currentValue > 1) { // Prevents negative numbers and 0
                updateValue(currentValue - 1);
            }
        });

        // Handle manual input
        input.addEventListener('change', () => {
            let currentValue = parseInt(input.value) || 1;
            if (currentValue < 1) currentValue = 1;
            updateValue(currentValue);
        });
    });
});
