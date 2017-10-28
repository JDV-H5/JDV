Room.GameLoad2 = {};
Room.GameLoad2.ppt = function(){
    cc.ppt(["GameLoad2", "Game2"] , function(after , callback){
        cc.m["GameLoad2"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m["Game2"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000});
    })
};

Room.Game2 = {};
Room.Game2.dom = function(){
    // $("#Game1 ._next .btn").tap(function(e){
    //     cc.tap(e);
    //     Room.Game1.ppt();
    // })
};
Room.Game2.ppt = function(){
    cc.ppt(["Game2", "GameLoad3"] , function(after , callback){
        cc.m["Game2"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m["GameLoad3"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000});
    })
};

Room.Game2.ini = function(){
    // main
    // cav_game2.dom["game1_book2"].on("click", function () {
    //     cav_game2.sprite["game1_book2"].gotoAndPlay("run");
    //     PG1.glass = 1;
    // });
    //
    // cav_game2.dom["game1_book3"].on("click", function () {
    //     cav_game2.sprite["game1_book3"].gotoAndPlay("run");
    //     PG1.ufo = 1;
    // });
    //
    // cav_game2.dom["game1_glass1"].on("click", function () {
    //     if(PG1.ufo && PG1.ufo_play) {
    //         if(PG1.glass){
    //             cav_game2.sprite["game1_glass2"].gotoAndPlay("run");
    //             setTimeout(function(){
    //                 cvtw.get(cav_game2.sprite["game1_ufo_light"]).to({alpha:0 }, 700);
    //                 cav_game2.sprite["game1_clothes"].gotoAndPlay("run");
    //                 $("#Game1 ._next").css("opacity",0).show().velocity({ opacity: 1}, {delay:3000, duration: 1000 });
    //             },1500);
    //         }else cav_game2.sprite["game1_glass2"].gotoAndPlay("no");
    //
    //     }else cav_game2.sprite["game1_glass1"].gotoAndPlay("run");
    // });
    // cav_game2.dom["game1_ufo"].on("click", function () {
    //     PG1.ufo_play = 1;
    //     if(PG1.ufo) {
    //         cav_game2.sprite["game1_ufo"].gotoAndPlay("play");
    //         cav_game2.sprite["game1_ufo_light"].gotoAndPlay("play");
    //     }
    //     else cav_game2.sprite["game1_ufo"].gotoAndPlay("run");
    // });


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
                cvtw.get(cav_game2.img["game2_eye0"]).to({alpha:0, scaleX:0.2, scaleY:0.2}, 200)
            },700);
        });

    });

    // cav_game2.dom["game1_book1"].on("click", function () {
    //     cav_game2.sprite["game1_book1"].gotoAndPlay("run");
    // });
    //
    // cav_game2.dom["game1_draw"].on("click", function () {
    //     cav_game2.sprite["game1_draw"].gotoAndPlay("run");
    // });
    //
    // cav_game2.dom["game1_bookshow"].on("click", function () {
    //     cav_game2.sprite["game1_bookshow"].gotoAndPlay("run");
    // });
    //
    // cav_game2.dom["game1_rocket"].on("click", function () {
    //     cav_game2.sprite["game1_rocket"].gotoAndPlay("run");
    //     cvtw.removeTweens(cav_game2.sprite["game1_rocket"]);
    //     cvtw.get(cav_game2.sprite["game1_rocket"]).wait(1200).to({alpha:0 }, 500).to({alpha:1 }, 700);
    // });
    //
    // cav_game2.dom["game1_sewing"].on("click", function () {
    //     cav_game2.sprite["game1_sewing"].gotoAndPlay("run");
    // });
    //
    // cav_game2.dom["game1_drawer"].on("click", function () {
    //     cav_game2.sprite["game1_drawer"].gotoAndPlay("run");
    // });
    //
    // cav_game2.dom["game1_flower"].on("click", function () {
    //     cav_game2.sprite["game1_flower"].gotoAndPlay("run");
    // });

};