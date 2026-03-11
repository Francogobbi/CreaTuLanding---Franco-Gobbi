 const firebaseConfig = {
  apiKey: "AIzaSyBie9AoZsdM-kM-FrAMRWWs1ua3KsXw31M",
  authDomain: "ecommerce-gobbi.firebaseapp.com",
  projectId: "ecommerce-gobbi",
  storageBucket: "ecommerce-gobbi.firebasestorage.app",
  messagingSenderId: "819369547220",
  appId: "1:819369547220:web:8b335bd9773ecba74bf241",
  measurementId: "G-FRCEBG0VTF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);