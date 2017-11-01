Room.GameLoad4 = {};
Room.GameLoad4.ppt = function(){
    cc.ppt(["GameLoad4", "Game4"] , function(after , callback){
        cc.m["GameLoad4"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m["Game4"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000});
    })
};

Room.Game4 = {};
Room.Game4.dom = function(){
    $("#Game4 ._next .btn").tap(function(e){
        cc.tap(e);
        Room.Game4.ppt();
    })
};
Room.Game4.ppt = function(){
    // cc.ppt(["Game3", "GameLoad4"] , function(after , callback){
    //     cc.m["Game3"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
    //     cc.m["GameLoad4"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000, complete:function(){
    //         after.go();
    //     }});
    // })
};

Room.Game4.ini = function(){

    //main


};
