import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 PASTE YOUR FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey: "AIzaSyC6Jj7v94BGPnSHBr3R_F20kld09swU7_w",
  authDomain: "starbrew-175cc.firebaseapp.com",
  projectId: "starbrew-175cc",
  storageBucket: "starbrew-175cc.firebasestorage.app",
  messagingSenderId: "466394448275",
  appId: "1:466394448275:web:0242a04ba33fa8b36de866",
  measurementId: "G-FRJ4J0SZBY"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productSection = document.getElementById("products");

async function loadProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    const p = doc.data();

    productSection.innerHTML += `
      <div class="card">
        <img src="${p.image}" />
        <div class="card-content">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <p class="price">₹${p.price}</p>
        </div>
      </div>
    `;
  });
}

loadProducts();
