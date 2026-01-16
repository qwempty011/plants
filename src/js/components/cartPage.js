export function cartPage() {
    return {
        shipping: 16,


        get cart() {
            return Alpine.store('cart').items
        },

        increase(id) {
            Alpine.store('cart').increase(id)
        },

        decrease(id) {
            Alpine.store('cart').decrease(id)
        },

        remove(id) {
            Alpine.store('cart').remove(id)
        },


        get subTotal() {
            return Alpine.store('cart').subTotal
        },


        get total() {
            return this.subTotal + this.shipping
        },


        get qtySum() {
            return Alpine.store('cart').qtySum
        }
    }
}