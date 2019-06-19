var NotificationsModel = require('./notifications.js');

/* Instantiate a new instance from Notifications class */
var Notification = new NotificationsModel();

/* Send a message to specific segment ex: All users */
console.log(Notification.sendNotification({"en": "Main Command","fa":"دستور اصلی","ar":"امر الاصلی"},{"en": "Main Command","fa":"دستور اصلی","ar":"امر الاصلی"}));

/*
Reponse:
    id: '95def956-0753-4183-b551-8ff6c15e0bd4',
    recipients: 2,
    external_id: null
 */