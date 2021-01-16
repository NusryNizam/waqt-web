/* eslint-disable no-console */

import { register } from 'register-service-worker';


// const applicationServerPublicKey = 'BPbsGgZaUywODRHlySig1O0DKptqyr4mi2v_2LY7BAwg74mHLf8LCPV-jf98SyxGQwSPx7q4su3_-DmyHnRheaw';
// let swRegistration = null;
// let isSubscribed = false;




// if (process.env.NODE_ENV === 'production') {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
        console.log('Service Worker and Push is supported');


    register(`${process.env.BASE_URL}service-worker.js`, {
        ready() {
            console.log(
                'App is being served from cache by a service worker.\n' +
                    'For more details, visit https://goo.gl/AFskqB'
            );
        },
        registered(swReg) {
            console.log('Service worker has been registered.', swReg);
            // swRegistration = swReg;
            // subscribeUser();
            // initializeUI();

        },
        cached() {
            console.log('Content has been cached for offline use.');
        },
        updatefound() {
            console.log('New content is downloading.');
        },
        updated() {
            console.log('New content is available; please refresh.');
        },
        offline() {
            console.log('No internet connection found. App is running in offline mode.');
        },
        error(error) {
            console.error('Error during service worker registration:', error);
        }
    });
// }
    }

      

    Notification.requestPermission().then(function(result) {
        if(result === 'granted') {
            randomNotification();
        }
    });

      function randomNotification() {
        // var randomItem = 3;
        var notifTitle = 'Waqt';
        var notifBody = 'Reminder for prayer';
        // var notifImg = 'data/img/'+games[randomItem].slug+'.jpg';
        var options = {
            body: notifBody,
            // icon: notifImg
        }
        var notif = new Notification(notifTitle, options);
        setTimeout(randomNotification, 10800000);
    }