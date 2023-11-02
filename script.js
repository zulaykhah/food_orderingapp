// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the menu list, cart list, and checkout button                         
      
        const menuList = document.getElementById("menu-list");
        const cartList = document.getElementById("cart-list");
        const checkoutButton = document.getElementById("checkout");
    // Add a click event listener to the menu list to handle adding items to the cart
    
    menuList.addEventListener("click", addToCart);
    
    // Add a click event listener to the cart list to handle removing items from the cart  
    cartList.addEventListener("click", removeFromCart);
    
      // Add a click event listener to the checkout button to complete the order
    checkoutButton.addEventListener("click", checkout);
    
      // Function to add items to the cart when "Add to Cart" button is clicked
    
    function addToCart(event) {
    // Check if the clicked element has the class "add-to-cart"
     if (event.target.classList.contains("add-to-cart")) {
    // Get the parent list item, which contains the item name
    
    const menuItem = event.target.parentElement;
    const itemName = menuItem.querySelector("span").innerText;
    // Create a new cart item in the cart list
    const cartItem = document.createElement("li");
    cartItem.innerHTML = `
                    <span>${itemName}</span>
                    <button class="remove-from-cart">Remove</button>
                `;
    
                cartList.appendChild(cartItem);
            }
        }
    // Function to remove items from the cart when "Remove" button is clicked
        function removeFromCart(event) {
     // Check if the clicked element has the class "remove-from-cart"
            if (event.target.classList.contains("remove-from-cart")) {
    // Get the parent cart item and remove it from the cart list 
    const cartItem = event.target.parentElement;
                
    cartList.removeChild(cartItem);
            }
        }
    // Function to complete the order and display an alert message
        function checkout() {
            alert("Order placed! Thank you for your order.");
    // Clear the cart by removing all items from the cart list
      cartList.innerHTML = '';
        }
    });
    