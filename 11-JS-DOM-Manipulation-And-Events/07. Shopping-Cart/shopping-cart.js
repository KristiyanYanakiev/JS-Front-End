document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const shoppingDivEl = document.querySelector(".shopping-cart")

   const products = {}

   shoppingDivEl.addEventListener("click", e => {
      if (e.target.nodeName != "BUTTON" || !e.target.closest('.product-add')) return
      const name = e.target.closest(".product").querySelector(".product-title").textContent
      const price = Number(e.target.closest(".product").querySelector(".product-line-price").textContent)

      if (! products.hasOwnProperty(name)) products[name] = {price: 0}
      products[name].price += price


      document.querySelector("textarea").value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`   
   })

   document.querySelector(".checkout").addEventListener("click", e => {
      const listOfProducts = Object.keys(products)
      const totalPrice = listOfProducts.reduce((total, product) => total + products[product].price, 0)
      
      document.querySelector("textarea").value += `You bought ${listOfProducts.join(", ")} for ${totalPrice.toFixed(2)}.`
      document.querySelectorAll("button").forEach(btn => {
         btn.disabled = true
         
      });
   })

   
}
