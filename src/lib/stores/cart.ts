import { writable } from 'svelte/store';

function removeQuantity(cart, id) {
  // If the quantity is 1, remove the item from the cart
  if (cart.find((item) => item.id === id).quantity === 1) {
    return cart.filter((item) => item.id !== id);
  }
  return cart.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item);
}

// Add quantity to the cart, the quantity cant be more than stock
function addQuantity(cart, id, stock) {
  if (cart.find((item) => item.id === id).quantity === stock) {
    return cart;
  }
  return cart.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
}

// calculate total items in cart
function calculateTotal(cart) {
  console.log(cart)
  const total = cart.reduce((acc, item) => acc + item.quantity, 0);
  console.log(total)
}

function createCart() {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    add: (item) => update((cart) => [...cart, {...item, quantity: 1 }]),
    remove: (id) => update((cart) => cart.filter((item) => item.id !== id)),
    clear: () => set([]),
    removeQuantity: (id) => update((cart) => removeQuantity(cart, id)),
    addQuantity: (id, stock) => update((cart) => addQuantity(cart, id, stock)),
    calculateTotal: (cart) => calculateTotal(cart),
    
  };
}

//    update: (id, quantity) => update((cart) => cart.map((item) => item.id === id ? { ...item, quantity } : item)),
export const cart = createCart();