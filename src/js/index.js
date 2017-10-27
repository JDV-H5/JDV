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
Room.Index.ppt = function(){
    cc.ppt(["Index", "GameLoad1"] , function(after , callback){
        cc.m["Index"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m["GameLoad1"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000, complete:function(){
            GameLoad1();
        }});
    })
};
