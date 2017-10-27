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
    cc.ppt(["Index", "GameLoad1"] , function(after , callback){
        cc.m["Index"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m["GameLoad1"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000, complete:function(){
            after.go();
            GameLoad1();
        }});
    })
};
