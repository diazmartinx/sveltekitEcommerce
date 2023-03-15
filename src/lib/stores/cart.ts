import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const initialCart = browser ? JSON.parse(window.localStorage.getItem('cart')) ?? [] : [];

const cart = writable(initialCart);

cart.subscribe((value) => {
	if (browser) {
		localStorage.setItem('cart', JSON.stringify(value));
	}
});

// add item to cart
function add(p) {
	cart.update((cart) => [{ ...p, quantity: 1 }, ...cart]);
}

// remove item from cart
function remove(id) {
	cart.update((cart) => cart.filter((item) => item.id !== id));
}

// remove all items from cart
function removeAll() {
	cart.update(() => []);
}

// add one quantity to a item in the cart, the quantity cant be more than stock
function addQuantity(id) {
	cart.update((cart) => {
		const item = cart.find((item) => item.id === id);
		if (item.quantity >= item.stock) {
			return cart;
		}
		return cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
	});
}

// Remove one quantity of the cart, the quantity cant be less than 1
// if the quantity is 1, the item will be removed from the cart
function removeOne(id) {
	cart.update((cart) => {
		const item = cart.find((item) => item.id === id);
		if (item.quantity <= 1) {
			return cart.filter((item) => item.id !== id);
		}
		return cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item));
	});
}

// calculate total items in cart
function calculateTotal(cart) {
	console.log(cart);
	const total = cart.reduce((acc, item) => acc + item.quantity, 0);
}

export default {
	subscribe: cart.subscribe,
	add,
	remove,
	removeAll,
	addQuantity,
	removeOne,
	calculateTotal
};
