var NotificationsModel = require('./notifications.js');

/* Instantiate a new instance from Notifications class */
var Notification = new NotificationsModel();

/* Send a message to specific segment ex: All users */
console.log(Notification.sendNotification({"en": "Main Command","fa":"دستور اصلی","ar":"امر الاصلی"},{"en": "Main Command","fa":"دستور اصلی","ar":"امر الاصلی"}));

/*
Reponse:
    id: 'Example ID',
    recipients: 2,
    external_id: null
 */