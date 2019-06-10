importScripts('https://www.gstatic.com/firebasejs/4.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.1.1/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/4.1.1/firebase.js');


var firebaseConfig = {
  apiKey: "AIzaSyDa0IlLAiay8iPYWVCbGlvIoMbdjGyKiiA",
  authDomain: "vimaby-5a44c.firebaseapp.com",
  databaseURL: "https://vimaby-5a44c.firebaseio.com",
  projectId: "vimaby-5a44c",
  storageBucket: "",
  messagingSenderId: "692108506641",
  appId: "1:692108506641:web:04198cc832568440"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
