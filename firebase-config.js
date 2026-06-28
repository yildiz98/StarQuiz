// StarQuiz Firebase Ayarları
// Firebase Console > Project settings > Web app config bilgilerini buraya yaz.
// Authentication > Email/Password ve Firestore Database aktif edilmelidir.

window.STARQUIZ_FIREBASE_CONFIG = {
  apiKey: "BURAYA_API_KEY",
  authDomain: "BURAYA_PROJECT.firebaseapp.com",
  projectId: "BURAYA_PROJECT_ID",
  storageBucket: "BURAYA_PROJECT.appspot.com",
  messagingSenderId: "BURAYA_SENDER_ID",
  appId: "BURAYA_APP_ID"
};

// Admin panelini görecek e-posta adresleri
window.STARQUIZ_ADMINS = [
  "admin@example.com"
];
