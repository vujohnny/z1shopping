const ZineOne = window.ZineOne;
var methods={
    makeid: function(length){
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    },

    firePushEvent: function(evtName, evtMap){
        //push the event along with payload
        ZineOne.pushEvent(evtName, evtMap);
        console.log (evtName, evtMap);
    },

    viewedHome: function(){
        var userId = methods.makeid(10);
        methods.firePushEvent("viewedhome",
        {
            "pageName": "home page",
            "channel": "desktop",
            "userId": userId,
            "cart":{},
            "cartValue":0.00,
            "regStatus":"Registered"
        });
    }
}

exports.data = methods;