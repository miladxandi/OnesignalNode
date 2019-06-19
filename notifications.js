var https = require('https');

class Notifications {


    /* Set Content of the message as Array */
    setMessage(app_id,messageHeadings,messageContents,playerIds,segments) {
        return {
            app_id: app_id,
            headings: messageHeadings,
            contents: messageContents,
            include_player_ids: playerIds,
            included_segments: segments,
            priority:"high",
            send_after:"now"
        };
    }

    /* Send Push Notifications */
    sendNotification(messageHeadings,messageContents,playerIds=false,app_id="YOUR-APP-ID",rest_key="YOUR-APP-KEY") {
        var send = function(data) {

            var headers = {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": rest_key,
            };

            var options = {
                host: "onesignal.com",
                port: 443,
                path: "/api/v1/notifications",
                method: "POST",
                headers: headers
            };

            var req = https.request(options, function(res) {
                res.on('data', function(data) {
                    console.log("Response:");
                    console.log(JSON.parse(data));
                });
            });

            req.on('error', function(e) {
                console.log("Error:");
                console.log(e);
            });

            req.write(JSON.stringify(data));

            req.end();

        };
            send(this.setMessage(app_id,messageHeadings,messageContents,playerIds!=false ?playerIds:[null],playerIds==false?["All"]:[null]));
    }
}

module.exports = Notifications;
