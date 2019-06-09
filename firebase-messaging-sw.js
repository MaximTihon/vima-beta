

firebase.initializeApp({
    messagingSenderId: 'BI_kHWMqEw2pV2Nt_sWM4aY61myAoRC_-yLbVVANy86O0qHO9BaZxXFxaAFTX-JfXO2IryYxGh_d6etUMhvd8W8'
});

const messaging = firebase.messaging();

// браузер поддерживает уведомления
// вообще, эту проверку должна делать библиотека Firebase, но она этого не делает
if ('Notification' in window) {

    // пользователь уже разрешил получение уведомлений
    // подписываем на уведомления если ещё не подписали
    if (Notification.permission === 'granted') {
        subscribe();
    }

    // по клику, запрашиваем у пользователя разрешение на уведомления
    // и подписываем его

    document.querySelector('#subscribe').addEventListener('click',subscribe())

}

function subscribe() {
    // запрашиваем разрешение на получение уведомлений
    messaging.requestPermission()
        .then(function () {
            // получаем ID устройства
            messaging.getToken()
                .then(function (currentToken) {
                    console.log(currentToken);

                    // if (currentToken) {
                    //     sendTokenToServer(currentToken);
                    // } else {
                    //     console.warn('Не удалось получить токен.');
                    //
                    // }
                })
                .catch(function (err) {
                    console.warn('При получении токена произошла ошибка.', err);
                });
    })
    .catch(function (err) {
        console.warn('Не удалось получить разрешение на показ уведомлений.', err);
    });
}
