export const cartStore = {
    items: JSON.parse(localStorage.getItem('cart')) || [],
    shipping: 16,

    addToCart(product) {
        const existing = this.items.find(i => String(i.id) === String(product.id))
        if (existing) {
            existing.qty += product.qty
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: Number(product.price),
                img: product.img,
                qty: product.qty
            })
        }
        this.save()
    },

    buyNow(product) {
        if (!product.size) {
            alert('Пожалуйста, выберите размер');
            return;
        }

        this.items = [];
        this.items.push(product);
        localStorage.setItem('cart', JSON.stringify(this.items));
        window.location.href = './checkout.html';
    },

    increase(id) {
        const item = this.items.find(i => String(i.id) === String(id))
        if (!item) return
        item.qty++
            this.save()
    },

    decrease(id) {
        const item = this.items.find(i => String(i.id) === String(id))
        if (!item) return
        if (item.qty > 1) item.qty--
            else this.items = this.items.filter(i => String(i.id) !== String(id))
        this.save()
    },

    remove(id) {
        this.items = this.items.filter(i => String(i.id) !== String(id))
        this.save()
    },

    get subTotal() {
        return this.items.reduce((sum, i) => sum + Number(i.price) * i.qty, 0)
    },

    get total() {
        return this.subTotal + this.shipping
    },

    get qtySum() {
        return this.items.reduce((sum, i) => sum + i.qty, 0)
    },

    save() {
        localStorage.setItem('cart', JSON.stringify(this.items))
    }
}
































// export function cartItem(product) {
//     return {
//         id: product.id,
//         name: product.name,
//         price: Number(product.price), // приводим к числу
//         img: product.img,
//         qty: product.quantity || 1, // единообразно: qty

//         addToCart() {
//             const cart = JSON.parse(localStorage.getItem('cart')) || []

//             // Проверяем, есть ли товар в корзине
//             const existing = cart.find(item => item.id === this.id)
//             if (existing) {
//                 existing.qty += this.qty
//             } else {
//                 cart.push({
//                     id: this.id,
//                     name: this.name,
//                     price: this.price,
//                     img: this.img,
//                     qty: this.qty
//                 })
//             }

//             localStorage.setItem('cart', JSON.stringify(cart))

//         },

//         increase() { this.qty++ },
//         decrease() { if (this.qty > 1) this.qty-- }
//     }
// }