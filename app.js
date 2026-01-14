// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// // 🔥 PASTE YOUR FIREBASE CONFIG HERE
// const firebaseConfig = {
//   apiKey: "AIzaSyC6Jj7v94BGPnSHBr3R_F20kld09swU7_w",
//   authDomain: "starbrew-175cc.firebaseapp.com",
//   projectId: "starbrew-175cc",
//   storageBucket: "starbrew-175cc.firebasestorage.app",
//   messagingSenderId: "466394448275",
//   appId: "1:466394448275:web:0242a04ba33fa8b36de866",
//   measurementId: "G-FRJ4J0SZBY"
// };


// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const productSection = document.getElementById("products");

// async function loadProducts() {
//   const querySnapshot = await getDocs(collection(db, "products"));
//   querySnapshot.forEach((doc) => {
//     const p = doc.data();

//     productSection.innerHTML += `
//       <div class="card">
//         <img src="${p.image}" />
//         <div class="card-content">
//           <h3>${p.name}</h3>
//           <p>${p.description}</p>
//           <p class="price">₹${p.price}</p>
//         </div>
//       </div>
//     `;
//   });
// }

// loadProducts();

import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// ... (previous initialization code) ...

let isLoginMode = true;

// Toggle between Login and Registration
window.toggleAuthMode = () => {
  isLoginMode = !isLoginMode;
  const title = document.getElementById('modal-title');
  const btn = document.getElementById('auth-action-btn');
  const toggleText = document.getElementById('toggle-auth-text');

  if (isLoginMode) {
    title.innerText = "Sign In";
    btn.innerText = "Login";
    toggleText.innerHTML = `Don't have an account? <span onclick="toggleAuthMode()" style="color:var(--sb-green); cursor:pointer; font-weight:bold;">Register here.</span>`;
  } else {
    title.innerText = "Join StarBrew";
    btn.innerText = "Create Account";
    toggleText.innerHTML = `Already a member? <span onclick="toggleAuthMode()" style="color:var(--sb-green); cursor:pointer; font-weight:bold;">Sign in here.</span>`;
  }
};

// Handle Authentication Action
document.getElementById('auth-action-btn').addEventListener('click', async () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    if (isLoginMode) {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Welcome back!");
    } else {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully! Welcome to StarBrew.");
    }
    closeModal();
  } catch (error) {
    alert(error.message);
  }
});

// Update UI based on Auth State
onAuthStateChanged(auth, (user) => {
  const userStatus = document.getElementById('user-status');
  const adminBtn = document.getElementById('admin-btn');
  
  if (user) {
    userStatus.innerHTML = `
      <span style="margin-right:15px; font-weight:600;">Hi, ${user.email.split('@')[0]}</span>
      <button onclick="handleLogout()" class="btn-outline">Sign Out</button>
    `;
    // Show Admin button only for specific email
    if (user.email === "admin@starbrew.com") {
      adminBtn.classList.remove('hidden');
    }
  } else {
    adminBtn.classList.add('hidden');
    userStatus.innerHTML = `
      <button onclick="showAuthModal()" class="btn-outline">Sign In</button>
      <button onclick="showAuthModal()" class="btn-solid">Join Now</button>
    `;
  }
});
/* Mobile Menu */
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

/* Navbar shrink on scroll */
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (nav) {
    nav.classList.toggle("shrink", window.scrollY > 50);
  }
});

/* Active link highlight */
document.querySelectorAll(".nav-links a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

/* Dark Mode */
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function toggleCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  
  drawer.classList.toggle('open');
  overlay.classList.toggle('active');
}

// Optional: Add a listener to your "Join Now" or a new Cart icon to trigger toggleCart()

/* Scroll animations */
const faders = document.querySelectorAll(".fade-up");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
// Initialize cart from localStorage or empty array
let cart = JSON.parse(localStorage.getItem('StarBrewCart')) || [];

// 1. Function to add items to cart
function addToCart(name, price, image) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, image, quantity: 1 });
    }
    
    saveCart();
    updateCartUI();
    alert(`${name} added to your ritual!`);
}

// 2. Save cart to browser memory
function saveCart() {
    localStorage.setItem('StarBrewCart', JSON.stringify(cart));
}

// 3. Update the Cart Page Table (if on cart.html)
function updateCartUI() {
    const tableBody = document.getElementById('cart-table-body');
    if (!tableBody) return; // Exit if not on the cart page

    tableBody.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;

        tableBody.innerHTML += `
            <tr>
                <td class="product-info">
                    <img src="${item.image}" alt="${item.name}" width="60">
                    <span>${item.name}</span>
                </td>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                    <div class="qty-btn">
                        <button onclick="changeQty(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQty(${index}, 1)">+</button>
                    </div>
                </td>
                <td>$${subtotal.toFixed(2)}</td>
            </tr>
        `;
    });

    // Update Summary Totals
    document.querySelectorAll('.summary-row span:last-child').forEach(el => {
        if(el.innerText !== 'Free') el.innerText = `$${total.toFixed(2)}`;
    });
}

// 4. Change Quantity
function changeQty(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
}

// Initialize UI on load
document.addEventListener('DOMContentLoaded', updateCartUI);