Room.Loader = {};
Room.Loader.ppt = function(){
    var Start = "Index";
    cc.ppt(["Loader", Start] , function(after , callback){
        cc.m["Loader"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m[Start].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000});
    })
};


Room.Index = {};
Room.Index.dom = function(){
    $("#Index .start").tap(function(e){
        cc.tap(e);
        Room.Index.ppt();
    });

    $("#Index .rules").tap(function(e){
        cc.tap(e);
        Room.Index.ppt1();
    });

    $("#Read").tap(function(e){
        cc.tap(e);
        Room.Index.ppt2();
    });

};

Room.Index.coming = function(){
    $("#Index .topWheel").velocity({ rotateZ:["360deg","0deg"] }, { easing:"linear", duration: 2000, loop: true});
    $("#Index .bottomWheel").velocity({ rotateZ:["360deg","0deg"] }, { easing:"linear", duration: 2000, loop: true});
};

Room.Index.go_after = function () {
    $("#Index .topWheel").velocity("stop");
    $("#Index .bottomWheel").velocity("stop");
};

Room.Index.ppt = function(){
    cc.ppt(["Index", "GameLoad2"] , function(after , callback){
        cc.m["Index"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m["GameLoad2"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000, complete:function(){
            after.go();
            GameLoad2();
        }});
    })
};

Room.Index.ppt1 = function () {
    cc.ppt(["Index","Read"] , function ( after , callback ) {
        cc.m["Index"].velocity({opacity:0},{duration:500,display:"none"});
        cc.m["Read"].css({"left":-700}).show().velocity({left:0},{duration:500, complete:function () {
            after.go();
        }});
    })
};

Room.Index.ppt2 = function () {
    cc.ppt(["Read","Index"] , function ( after , callback ) {
        cc.m["Read"].velocity({left:-700},{duration:400,display:"none"});
        cc.m["Index"].css({"opacaity":0}).show().velocity({opacity:1});
    })
};
