import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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

const form = document.getElementById("productForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  await addDoc(collection(db, "products"), {
    name: form.name.value,
    price: Number(form.price.value),
    image: form.image.value,
    description: form.description.value
  });

  alert("✅ Product Added Successfully!");
  form.reset();
});
