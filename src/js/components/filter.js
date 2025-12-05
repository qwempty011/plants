export function filter() {
    return {
        items: [],
        sortedItems: [],
        sortMode: 'default',
        container: null,
        page: 1,
        perPage: 9,
        totalPages: 1,

        init() {
            this.container = document.getElementById('cardsContainer');
            this.items = Array.from(this.container.children);
            this.sortedItems = [...this.items];

            this.updatePagination();
            this.renderPage();
        },

        sortItems() {
            if (this.sortMode === 'default') {
                this.sortedItems = [...this.items];
            }

            if (this.sortMode === 'low') {
                this.sortedItems.sort((a, b) => Number(a.dataset.price) - Number(b.dataset.price));
            }

            if (this.sortMode === 'high') {
                this.sortedItems.sort((a, b) => Number(b.dataset.price) - Number(a.dataset.price));
            }

            this.container.innerHTML = "";
            this.sortedItems.forEach(card => this.container.appendChild(card));
        },


    }
}