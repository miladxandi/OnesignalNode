# OnesignalNode
A OOP-base Nodejs project for Onesignal

Set your APP ID & REST KEY in `notifications.js` where `sendNotification()` method is defined.

Then go to `app.js` and after instantiating the `notifications.js`,call its `sendNotification()` method and pass the heading & content & playerIds.

If your want to send all, there is no need to pass the third argument; but if you want, you can pass the specified playerIds as a simple array.

>So with this library you can send notifications to all or specific playerIds.

