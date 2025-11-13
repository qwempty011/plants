export function slider() {
    return {
        min: 39,
        max: 300,
        minValue: 39,
        maxValue: 300,

        filterCards() {
            const cards = document.querySelectorAll('#cardsContainer .card');
            cards.forEach(card => {
                const price = parseInt(card.dataset.price);
                if (!isNaN(price) && price >= this.minValue && price <= this.maxValue) {
                    card.style.display = ''; // показываем
                } else {
                    card.style.display = 'none'; // скрываем
                }
            })
        }
    }

}