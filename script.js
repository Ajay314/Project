document.querySelectorAll('.radio-btn').forEach((radio) => {
    radio.addEventListener('change', function () {
        document.querySelectorAll('.expandable-content').forEach((content) => {
            content.style.maxHeight = '0'; // Collapse all expandable content
        });
        
        // Get the related expandable content and expand it
        const expandableContent = this.nextElementSibling.nextElementSibling;
        expandableContent.style.maxHeight = expandableContent.scrollHeight + 'px';

        // Update total price
        const total = this.value;
        document.getElementById('total').textContent = `$${total}.00 USD`;
    });
});
