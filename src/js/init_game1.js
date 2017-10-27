var cav_game1;

function GameLoad1(){

    Dom.loadWord = $("#GameLoad1 .loadw");
    Dom.loadLine = $("#GameLoad1 .line");

    cav_game1 = new CanvasCreate($("#cav_game1"));

    // next Load
    Loads.loads("load2_tit1",  "img/load2/", "tit1.png");
    Loads.loads("load2_tit2",  "img/load2/", "tit2.png");
    Loads.loads("load2_tit3",  "img/load2/", "tit3.png");
    Loads.loads("load2_dot",  "img/load2/", "dot.png");
    // game
    Loads.loads("game1_bg",  "img/game1/", "bg.png");
    Loads.loads("game1_box",  "img/game1/", "box.png");
    Loads.loads("game1_brain",  "img/game1/", "brain.png");
    Loads.loads("game1_yun1",  "img/game1/", "yun1.png");
    Loads.loads("game1_yun2",  "img/game1/", "yun2.png");
    Loads.loads("game1_yun3",  "img/game1/", "yun3.png");

    Loads.loads("game1_book1",  "img/game1/", "book1.png");
    Loads.loads("game1_book2",  "img/game1/", "book2.png");
    Loads.loads("game1_book3",  "img/game1/", "book3.png");
    Loads.loads("game1_bookshow",  "img/game1/", "bookshow.png");
    Loads.loads("game1_clothes",  "img/game1/", "clothes.png");
    Loads.loads("game1_draw",  "img/game1/", "draw.png");
    Loads.loads("game1_drawer",  "img/game1/", "drawer.png");
    Loads.loads("game1_flower",  "img/game1/", "flower.png");
    Loads.loads("game1_glass1",  "img/game1/", "glass1.png");
    Loads.loads("game1_glass2",  "img/game1/", "glass2.png");
    Loads.loads("game1_rocket",  "img/game1/", "rocket.png");
    Loads.loads("game1_sewing",  "img/game1/", "sewing.png");
    Loads.loads("game1_star",  "img/game1/", "star.png");
    Loads.loads("game1_ufo",  "img/game1/", "ufo.png");
    Loads.loads("game1_ufo_light",  "img/game1/", "ufo_light.png");


    Loads.progress = function(e){
        var i = parseInt(e.loaded*100);
        if(i>100) i=100;

        Dom.loadWord.html(i+"%");
        Dom.loadLine.css("width", e.loaded*150)
    };
    Loads.complete = function(){

        GameLoad1_cav();
        Room.Game1.ini();

        setTimeout( Room.GameLoad1.ppt , 300);
    };
    Loads.loading();
}

function GameLoad1_cav(){

    $("#GameLoad2 .tit1").html(Loads.get("load2_tit1"));
    $("#GameLoad2 .tit2").html(Loads.get("load2_tit2"));
    $("#GameLoad2 .tit3").html(Loads.get("load2_tit3"));
    $("#GameLoad2 .dot").html(Loads.get("load2_dot"));

    cav_game1.ccv("game1");
    cav_game1.framerate = 10;

    cav_game1.drawImg("game1_bg");
    cav_game1.drawSprite("game1_draw","",{
        mov: {
            ini: [0],
            run: [0,12,"back"],
            back:{ frames:[12,12,12,8,3,2,1,0], next:"ini"}
        }
    });
    cav_game1.drawSprite("game1_star","",{
        framerate:6,
        mov: {
            ini: { frames: cv.ping(12)}
        }
    });
    cav_game1.drawSprite("game1_book1","",{
        mov: {
            ini: [0],
            run:{ frames: cv.ping(12), next:"ini"}
        }
    });
    cav_game1.drawSprite("game1_book3","",{
        mov: {
            ini: [0],
            run:{ frames: cv.ping(12), next:"ini"}
        }
    });
    cav_game1.drawSprite("game1_book2","",{
        mov: {
            ini: [0],
            run:{ frames: cv.ping(12), next:"ini"}
        }
    });
    cav_game1.drawImg("game1_brain","",{x:583, y:291});

    cav_game1.drawSprite("game1_bookshow","",{
        mov: {
            ini: [0],
            run:{ frames: cv.ping(12), next:"ini"}
        }
    });

    cav_game1.drawSprite("game1_glass1","",{
        mov: {
            ini: [0],
            run:{ frames: cv.ping(12), next:"ini"}
        }
    });

    cav_game1.drawImg("game1_box");

    cav_game1.drawArea("game1_draw", "", cv.getArea("game1_draw"), "#ffffff", {alpha: 0.01});
    cav_game1.drawArea("game1_book1", "", cv.getArea("game1_book1"), "#ffffff", {alpha: 0.01});
    cav_game1.drawArea("game1_book2", "", cv.getArea("game1_book2"), "#ffffff", {alpha: 0.01});
    cav_game1.drawArea("game1_book3", "", cv.getArea("game1_book3"), "#ffffff", {alpha: 0.01});

    cav_game1.drawArea("game1_bookshow", "", [42,649,95,176], "#ffffff", {alpha: 0.01});
    cav_game1.drawArea("game1_glass1", "", [42,423,95,176], "#ffffff", {alpha: 0.01});

    cav_game1.drawArea("game1_end", "", [627,1063,73,77], "#ffffff", {alpha: 0.01});

    var drawArr = [
        cav_game1.img["game1_bg"],

        cav_game1.sprite["game1_draw"],
        cav_game1.sprite["game1_star"],

        cav_game1.sprite["game1_book1"],
        cav_game1.sprite["game1_book3"],
        cav_game1.sprite["game1_book2"],

        cav_game1.img["game1_brain"],

        cav_game1.sprite["game1_bookshow"],
        cav_game1.sprite["game1_glass1"],

        cav_game1.img["game1_box"],

        // btn
        cav_game1.dom["game1_book1"],
        cav_game1.dom["game1_book1"],
        cav_game1.dom["game1_book2"],
        cav_game1.dom["game1_book3"],

        cav_game1.dom["game1_bookshow"],
        cav_game1.dom["game1_glass1"],

        cav_game1.dom["game1_draw"]
    ];

    cav_game1.draw("game1", drawArr);
    cav_game1.show("game1");

}
