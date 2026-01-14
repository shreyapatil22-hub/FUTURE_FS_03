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
