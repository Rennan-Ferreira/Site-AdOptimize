// src/api/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD7nBKoaf0vLaje2yA0IlV4j3E14XLBKg8",
  authDomain: "adoptimize-autenticacao.firebaseapp.com",
  projectId: "adoptimize-autenticacao",
  storageBucket: "adoptimize-autenticacao.appspot.com",
  messagingSenderId: "430170878696",
  appId: "1:430170878696:web:1d1cafe80aaec15ba58f5d",
  measurementId: "G-EQF11V6PM8"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app); // Apenas se você estiver usando Analytics

export { auth, provider };
