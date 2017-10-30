Room.GameLoad2 = {};
Room.GameLoad2.ppt = function(){
    cc.ppt(["GameLoad2", "Game2"] , function(after , callback){
        cc.m["GameLoad2"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m["Game2"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000});
    })
};

Room.Game2 = {};
Room.Game2.dom = function(){
    $("#Game2 ._next .btn").tap(function(e){
        cc.tap(e);
        Room.Game2.ppt();
    })
};
Room.Game2.ppt = function(){
    cc.ppt(["Game2", "GameLoad3"] , function(after , callback){
        cc.m["Game2"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m["GameLoad3"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000});
    })
};

Room.Game2.ini = function(){
    // main

    //阶段1
    cav_game2.dom["game2_camera"].on("click", function () {
        if(PG2.m3_1 || PG2.m3) return;
        cav_game2.sprite["game2_camera"].gotoAndPlay("run");
        PG2.m3_1 = 1;
        setTimeout(function(){
            PG2.m3_1 = 0;
            cav_game2.sprite["game2_camera"].gotoAndPlay("down");
        }, 2000);
    });
    cav_game2.dom["game2_m3"].on("click", function () {
        if(!PG2.m3_1) return;
        PG2.m3 = 1;
        cvtw.get(cav_game2.img["game2_m3"]).to({x:68 , scaleX:1.3,scaleY:1.3 }, 0).wait(100).to({alpha:1 }, 300);
    });
    cav_game2.drag("game2_m3", cav_game2.img["game2_m3"], {x:-19,y:-38}, function(x,y){
        if(cv.Clamp(x, 343-50, 343+50) && cv.Clamp(y, 547-50, 547+50)){
            cvtw.get(cav_game2.img["game2_m3"]).to({x:347, y:556 }, 100);
            PG2.m3_ok = 1;
            cav_game2.ifDrag["game2_m3"] = 0;
        }
    });

    //阶段2
    cav_game2.dom["game2_curtain"].on("click", function () {
        if(PG2.m1 || PG2.m1_1) return;
        if(!PG2.m1_0){
            cav_game2.sprite["game2_curtain"].gotoAndPlay("run");
            PG2.m1_0 = 1;

            Hand.game2_curtain = setTimeout(function(){
                PG2.m1_0 = 0;
                cav_game2.sprite["game2_curtain"].gotoAndPlay("back");
            }, 3000);

        }else{
            clearTimeout(Hand.game2_curtain);
            cav_game2.sprite["game2_drawer"].gotoAndPlay("run");
            PG2.m1_1 = 1;

            setTimeout(function(){
                PG2.m1_0 = 0;
                PG2.m1_1 = 0;
                cav_game2.sprite["game2_drawer"].gotoAndPlay("back");
                cav_game2.sprite["game2_curtain"].gotoAndPlay("back");
            }, 2500);
        }
    });
    cav_game2.dom["game2_drawer"].on("click", function () {
        if(PG2.m1) return;
        if(!PG2.m1_1 && !PG2.m1_0) cav_game2.sprite["game2_drawer"].gotoAndPlay("no");
    });
    cav_game2.dom["game2_m1"].on("click", function () {
        if(!PG2.m1_1 || !PG2.m3_ok) return;
        PG2.m1 = 1;
        cvtw.get(cav_game2.img["game2_m1"]).to({x:420}, 0).wait(100).to({alpha:1 }, 300);
    });
    cav_game2.drag("game2_m1", cav_game2.img["game2_m1"], {x:-20,y:-25}, function(x,y){
        if(cv.Clamp(x, 293-10, 293+10) && cv.Clamp(y, 507-10, 507+10)){
            cvtw.get(cav_game2.img["game2_m1"]).to({x:294, y:508 }, 100);
            PG2.m1_ok = 1;
            cav_game2.ifDrag["game2_m1"] = 0;
        }
    });


    //阶段3
    cav_game2.dom["game2_glass"].on("click", function () {
        if(PG2.m2_1) return;
        cav_game2.sprite["game2_glass"].gotoAndPlay("run");
        PG2.m2_1 = 1;
        setTimeout(function(){
            PG2.m2_1 = 0;
            cav_game2.sprite["game2_glass"].gotoAndPlay("back");
        }, 2000);
    });
    cav_game2.dom["game2_m2"].on("click", function () {
        if(!PG2.m2_1 || !PG2.m3_ok ||!PG2.m1_ok) return;
        PG2.m2 = 1;
        cvtw.get(cav_game2.img["game2_m2"]).to({x:101}, 0).wait(100).to({alpha:1 }, 300);
    });
    cav_game2.drag("game2_m2", cav_game2.img["game2_m2"], {x:-22,y:-38}, function(x,y){
        if(cv.Clamp(x, 302-10, 302+10) && cv.Clamp(y, 557-10, 557+10)){
            cvtw.get(cav_game2.img["game2_m2"]).to({x:303, y:558 }, 100);
            PG2.m2_ok = 1;
            cav_game2.ifDrag["game2_m2"] = 0;
            cav_game2_key();

            cav_game2.img["game2_m1"].alpha = 0;
            cav_game2.img["game2_m2"].alpha = 0;
            cav_game2.img["game2_m3"].alpha = 0;
            cav_game2.img["game2_gamedoor_no"].alpha = 0;

        }
    });


    //阶段4
    cav_game2.dom["game2_key"].on("click", function () {
        cav_game2_key();
    });
    function cav_game2_key(){
        if(PG2.key || PG2.keyget) return;
        cav_game2.sprite["game2_key"].gotoAndPlay("run");
        PG2.key = 1;
        Hand.cav_game2_key = setTimeout(function(){
            PG2.key = 0;
            cav_game2.sprite["game2_key"].gotoAndPlay("back");
        }, 3000);
    }
    cav_game2.dom["game2_key0"].on("click", function () {
        if(!PG2.key || !PG2.m1_ok || !PG2.m2_ok || !PG2.m3_ok) return;
        PG2.keyget = 1;
        clearTimeout(Hand.cav_game2_key);
        cav_game2.sprite["game2_key"].gotoAndPlay("back");
        cvtw.get(cav_game2.img["game2_key0"]).to({x:570}, 0).wait(100).to({alpha:1 }, 300);
    });
    cav_game2.drag("game2_key0", cav_game2.img["game2_key0"], {x:-16,y:-52}, function(x,y){
        if(cv.Clamp(x, 331-20, 331+20) && cv.Clamp(y, 607-20, 607+20)){
            PG2.ok = 1;
            cvtw.get(cav_game2.img["game2_key0"]).wait(100).to({alpha:0 }, 300).call(function(){
                cav_game2_ok();
            });
        }
    });
    function cav_game2_ok(){

        cav_game2.sprite["game2_gamedoor"].gotoAndPlay("run");
        $("#Game2 ._next").css("opacity",0).show().velocity({ opacity: 1}, {delay:3000, duration: 1000 });
    }


    // else
    cav_game2.dom["game2_brain"].on("click", function () {
        cav_game2.sprite["game2_brain"].gotoAndPlay("run");
    });

    cav_game2.dom["game2_tv"].on("click", function () {
        cav_game2.sprite["game2_tv"].gotoAndPlay("run");
    });
    cav_game2.dom["game2_heart"].on("click", function () {
        cav_game2.sprite["game2_heart"].gotoAndPlay("run");
    });
    cav_game2.dom["game2_door"].on("click", function () {
        cav_game2.sprite["game2_door"].gotoAndPlay("run");
    });
    cav_game2.dom["game2_eye"].on("click", function () {
        cvtw.get(cav_game2.img["game2_eye0"]).to({alpha:1, scaleX:1, scaleY:1}, 250).call(function(){
            cav_game2.sprite["game2_eye"].alpha = 1;
            cav_game2.img["game2_eye0"].alpha = 0;
            cav_game2.sprite["game2_eye"].gotoAndPlay("run");
            setTimeout(function(){
                cav_game2.sprite["game2_eye"].alpha = 0;
                cav_game2.img["game2_eye0"].alpha = 1;
                cvtw.get(cav_game2.img["game2_eye0"]).to({alpha:0, scaleX:0.2, scaleY:0.2}, 200);
            },700);
        });

    });

};