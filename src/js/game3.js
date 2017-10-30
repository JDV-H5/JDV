Room.GameLoad3 = {};
Room.GameLoad3.ppt = function(){
    cc.ppt(["GameLoad3", "Game3"] , function(after , callback){
        cc.m["GameLoad3"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m["Game3"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000});
    })
};

Room.Game3 = {};
// Room.Game3.dom = function(){
//     $("#Game1 ._next .btn").tap(function(e){
//         cc.tap(e);
//         Room.Game1.ppt();
//     })
// };
// Room.Game1.ppt = function(){
//     cc.ppt(["Game1", "GameLoad2"] , function(after , callback){
//         cc.m["Game1"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
//         cc.m["GameLoad2"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000, complete:function(){
//             after.go();
//         }});
//     })
// };
// Room.Game3.go_after = function(){
//
// };
Room.Game3.ini = function(){
    // main



    // else
    cav_game3.img["game3_borders1"].on("click", function () {
        cav_game3.sprite["game3_light3_1"].gotoAndPlay("run");
        cvtw.get(cav_game3.sprite["game3_light3_1"]).to({alpha:1 }, 700);
        cvtw.get(cav_game3.img["game3_borders1"]).to({alpha:1 }, 700).call(function(){
            cvtw.get(cav_game3.img["game3_borders1"], {loop:true}).to({alpha:0.75}, 600).to({alpha:1 }, 600);
        });
        setTimeout(function () {
            cvtw.get(cav_game3.sprite["game3_light3_1"]).to({alpha:0 }, 700);
            cvtw.removeTweens(cav_game3.img["game3_borders1"]);
            cvtw.get(cav_game3.img["game3_borders1"]).to({alpha:0.01}, 700);
        },1000)
    });
    cav_game3.img["game3_borders2"].on("click", function () {
        cav_game3.sprite["game3_light3_2"].gotoAndPlay("run");
        cvtw.get(cav_game3.sprite["game3_light3_2"]).to({alpha:1 }, 700);
        cvtw.get(cav_game3.img["game3_borders2"]).to({alpha:1 }, 700).call(function(){
            cvtw.get(cav_game3.img["game3_borders2"], {loop:true}).to({alpha:0.75}, 600).to({alpha:1 }, 600);
        });
        setTimeout(function () {
            cvtw.get(cav_game3.sprite["game3_light3_2"]).to({alpha:0 }, 700);
            cvtw.removeTweens(cav_game3.img["game3_borders2"]);
            cvtw.get(cav_game3.img["game3_borders2"]).to({alpha:0.01}, 700);
        },1000)
    });
    cav_game3.img["game3_borders3"].on("click", function () {
        cav_game3.sprite["game3_light3_3"].gotoAndPlay("run");
        cvtw.get(cav_game3.sprite["game3_light3_3"]).to({alpha:1 }, 700);
        cvtw.get(cav_game3.img["game3_borders3"]).to({alpha:1 }, 700).call(function(){
            cvtw.get(cav_game3.img["game3_borders3"], {loop:true}).to({alpha:0.75}, 600).to({alpha:1 }, 600);
        });
        setTimeout(function () {
            cvtw.get(cav_game3.sprite["game3_light3_3"]).to({alpha:0 }, 700);
            cvtw.removeTweens(cav_game3.img["game3_borders3"]);
            cvtw.get(cav_game3.img["game3_borders3"]).to({alpha:0.01}, 700);
        },1000)
    });
    cav_game3.img["game3_borders4"].on("click", function () {
        cav_game3.sprite["game3_light3_4"].gotoAndPlay("run");
        cvtw.get(cav_game3.sprite["game3_light3_4"]).to({alpha:1 }, 700);
        cvtw.get(cav_game3.img["game3_borders4"]).to({alpha:1 }, 700).call(function(){
            cvtw.get(cav_game3.img["game3_borders4"], {loop:true}).to({alpha:0.75}, 600).to({alpha:1 }, 600);
        });
        setTimeout(function () {
            cvtw.get(cav_game3.sprite["game3_light3_4"]).to({alpha:0 }, 700);
            cvtw.removeTweens(cav_game3.img["game3_borders4"]);
            cvtw.get(cav_game3.img["game3_borders4"]).to({alpha:0.01}, 700);
        },1000)
    });
    cav_game3.img["game3_borders5"].on("click", function () {
        cav_game3.sprite["game3_light3_5"].gotoAndPlay("run");
        cvtw.get(cav_game3.sprite["game3_light3_5"]).to({alpha:1 }, 700);
        cvtw.get(cav_game3.img["game3_borders5"]).to({alpha:1 }, 700).call(function(){
            cvtw.get(cav_game3.img["game3_borders5"], {loop:true}).to({alpha:0.75}, 600).to({alpha:1 }, 600);
        });
        setTimeout(function () {
            cvtw.get(cav_game3.sprite["game3_light3_5"]).to({alpha:0 }, 700);
            cvtw.removeTweens(cav_game3.img["game3_borders5"]);
            cvtw.get(cav_game3.img["game3_borders5"]).to({alpha:0.01}, 700);
        },1000)
    });
    cav_game3.img["game3_borders6"].on("click", function () {
        cav_game3.sprite["game3_light5_1"].gotoAndPlay("run");
        cvtw.get(cav_game3.sprite["game3_light5_1"]).to({alpha:1 }, 700);
        cvtw.get(cav_game3.img["game3_borders6"]).to({alpha:1 }, 700).call(function(){
            cvtw.get(cav_game3.img["game3_borders6"], {loop:true}).to({alpha:0.75}, 600).to({alpha:1 }, 600);
        });
        setTimeout(function () {
            cvtw.get(cav_game3.sprite["game3_light5_1"]).to({alpha:0 }, 700);
            cvtw.removeTweens(cav_game3.img["game3_borders6"]);
            cvtw.get(cav_game3.img["game3_borders6"]).to({alpha:0.01}, 700);
        },1000)
    });
    cav_game3.img["game3_borders7"].on("click", function () {
        cav_game3.sprite["game3_light3_6"].gotoAndPlay("run");
        cvtw.get(cav_game3.sprite["game3_light3_6"]).to({alpha:1 }, 700);
        cvtw.get(cav_game3.img["game3_borders7"]).to({alpha:1 }, 700).call(function(){
            cvtw.get(cav_game3.img["game3_borders7"], {loop:true}).to({alpha:0.75}, 600).to({alpha:1 }, 600);
        });
        setTimeout(function () {
            cvtw.get(cav_game3.sprite["game3_light3_6"]).to({alpha:0 }, 700);
            cvtw.removeTweens(cav_game3.img["game3_borders7"]);
            cvtw.get(cav_game3.img["game3_borders7"]).to({alpha:0.01}, 700);
        },1000)
    });
    cav_game3.img["game3_borders8"].on("click", function () {
        cav_game3.sprite["game3_light3_7"].gotoAndPlay("run");
        cvtw.get(cav_game3.sprite["game3_light3_7"]).to({alpha:1 }, 700);
        cvtw.get(cav_game3.img["game3_borders8"]).to({alpha:1 }, 700).call(function(){
            cvtw.get(cav_game3.img["game3_borders8"], {loop:true}).to({alpha:0.75}, 600).to({alpha:1 }, 600);
        });
        setTimeout(function () {
            cvtw.get(cav_game3.sprite["game3_light3_7"]).to({alpha:0 }, 700);
            cvtw.removeTweens(cav_game3.img["game3_borders8"]);
            cvtw.get(cav_game3.img["game3_borders8"]).to({alpha:0.01}, 700);
        },1000)
    });
    cav_game3.img["game3_borders9"].on("click", function () {
        cav_game3.sprite["game3_light3_8"].gotoAndPlay("run");
        cvtw.get(cav_game3.sprite["game3_light3_8"]).to({alpha:1 }, 700);
        cvtw.get(cav_game3.img["game3_borders9"]).to({alpha:1 }, 700).call(function(){
            cvtw.get(cav_game3.img["game3_borders9"], {loop:true}).to({alpha:0.75}, 600).to({alpha:1 }, 600);
        });
        setTimeout(function () {
            cvtw.get(cav_game3.sprite["game3_light3_8"]).to({alpha:0 }, 700);
            cvtw.removeTweens(cav_game3.img["game3_borders9"]);
            cvtw.get(cav_game3.img["game3_borders9"]).to({alpha:0.01}, 700);
        },1000)
    });
    cav_game3.img["game3_borders10"].on("click", function () {
        cav_game3.sprite["game3_light3_9"].gotoAndPlay("run");
        cvtw.get(cav_game3.sprite["game3_light3_9"]).to({alpha:1 }, 700);
        cvtw.get(cav_game3.img["game3_borders10"]).to({alpha:1 }, 700).call(function(){
            cvtw.get(cav_game3.img["game3_borders10"], {loop:true}).to({alpha:0.75}, 600).to({alpha:1 }, 600);
        });
        setTimeout(function () {
            cvtw.get(cav_game3.sprite["game3_light3_9"]).to({alpha:0 }, 700);
            cvtw.removeTweens(cav_game3.img["game3_borders10"]);
            cvtw.get(cav_game3.img["game3_borders10"]).to({alpha:0.01}, 700);
        },1000)
    });cav_game3.img["game3_borders11"].on("click", function () {
        cav_game3.sprite["game3_light5_2"].gotoAndPlay("run");
        cvtw.get(cav_game3.sprite["game3_light5_2"]).to({alpha:1 }, 700);
        cvtw.get(cav_game3.img["game3_borders11"]).to({alpha:1 }, 700).call(function(){
            cvtw.get(cav_game3.img["game3_borders11"], {loop:true}).to({alpha:0.75}, 600).to({alpha:1 }, 600);
        });
        setTimeout(function () {
            cvtw.get(cav_game3.sprite["game3_light5_2"]).to({alpha:0 }, 700);
            cvtw.removeTweens(cav_game3.img["game3_borders11"]);
            cvtw.get(cav_game3.img["game3_borders11"]).to({alpha:0.01}, 700);
        },1000)
    });
    cav_game3.img["game3_borders12"].on("click", function () {
        cav_game3.sprite["game3_light3_10"].gotoAndPlay("run");
        cvtw.get(cav_game3.sprite["game3_light3_10"]).to({alpha:1 }, 700);
        cvtw.get(cav_game3.img["game3_borders12"]).to({alpha:1 }, 700).call(function(){
            cvtw.get(cav_game3.img["game3_borders12"], {loop:true}).to({alpha:0.75}, 600).to({alpha:1 }, 600);
        });
        setTimeout(function () {
            cvtw.get(cav_game3.sprite["game3_light3_10"]).to({alpha:0 }, 700);
            cvtw.removeTweens(cav_game3.img["game3_borders12"]);
            cvtw.get(cav_game3.img["game3_borders12"]).to({alpha:0.01}, 700);
        },1000)
    });
    cav_game3.img["game3_borders13"].on("click", function () {
        cav_game3.sprite["game3_light3_11"].gotoAndPlay("run");
        cvtw.get(cav_game3.sprite["game3_light3_11"]).to({alpha:1 }, 700);
        cvtw.get(cav_game3.img["game3_borders13"]).to({alpha:1 }, 700).call(function(){
            cvtw.get(cav_game3.img["game3_borders13"], {loop:true}).to({alpha:0.75}, 600).to({alpha:1 }, 600);
        });
        setTimeout(function () {
            cvtw.get(cav_game3.sprite["game3_light3_11"]).to({alpha:0 }, 700);
            cvtw.removeTweens(cav_game3.img["game3_borders13"]);
            cvtw.get(cav_game3.img["game3_borders13"]).to({alpha:0.01}, 700);
        },1000)
    });

    // cav_game3.img["game3_borders14"].on("click", function () {
    //     cav_game3.sprite["game3_book"].gotoAndPlay("run");
    //     cvtw.get(cav_game3.sprite["game3_book"]).to({alpha:1 }, 700);
    //     cvtw.get(cav_game3.img["game3_borders14"]).to({alpha:1 }, 700).call(function(){
    //         cvtw.get(cav_game3.img["game3_borders14"], {loop:true}).to({alpha:0.75}, 600).to({alpha:1 }, 600);
    //     });
    //     setTimeout(function () {
    //         cvtw.get(cav_game3.sprite["game3_book"]).to({alpha:0 }, 700);
    //         cvtw.removeTweens(cav_game3.img["game3_borders14"]);
    //         cvtw.get(cav_game3.img["game3_borders14"]).to({alpha:0.01}, 700);
    //     },1000)
    // });
};
