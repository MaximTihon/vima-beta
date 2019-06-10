


const messaging = firebase.messaging();

messaging.usePublicVapidKey("BA4a5DoZyY8l8wyBAFOKkW2d9YPfoGPqTtnQwXiUM6uWiIcmDhsgB9wUvZcpEZC_DAP5unU_M6_uWt2cMsWK5Bo");

Notification.requestPermission().then(function(permission) {
  if (permission === 'granted') {
    console.log('Notification permission granted.');
    // TODO(developer): Retrieve an Instance ID token for use with FCM.
    // ...
    messaging.getToken().then(function(currentToken) {
      if (currentToken) {
        console.log(currentToken)

      } else {
        // Show permission request.
        console.log('No Instance ID token available. Request permission to generate one.');
        // Show permission UI.

      }
    }).catch(function(err) {
      console.log('An error occurred while retrieving token. ', err);
    });


  } else {
    console.log('Unable to get permission to notify.');
  }
});


// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
