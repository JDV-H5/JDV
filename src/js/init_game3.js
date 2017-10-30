var cav_game3,
    PG3 = {};

function GameLoad3(){

    Dom.loadWord = $("#GameLoad3 .loadw");
    Dom.loadLine = $("#GameLoad3 .line");

    cav_game3 = new CanvasCreate($("#cav_game3"));

    Loads.loads("border1",  "img/", "border1.png");
    Loads.loads("border2",  "img/", "border2.png");
    Loads.loads("border3",  "img/", "border3.png");
    Loads.loads("border4",  "img/", "border4.png");
    // game
    Loads.loads("game3_bg",  "img/game3/", "bg.png");
    Loads.loads("game3_book",  "img/game3/", "book.png");
    Loads.loads("game3_book2",  "img/game3/", "book2.png");
    Loads.loads("game3_lamp",  "img/game3/", "lamp.png");
    Loads.loads("game3_light1",  "img/game3/", "light1.png");
    Loads.loads("game3_light2",  "img/game3/", "light2.png");
    Loads.loads("game3_light3",  "img/game3/", "light3.png");
    Loads.loads("game3_light4",  "img/game3/", "light4.png");
    Loads.loads("game3_light5",  "img/game3/", "light5.png");
    Loads.loads("game3_ok1",  "img/game3/", "ok1.png");
    Loads.loads("game3_ok2",  "img/game3/", "ok2.png");
    Loads.loads("game3_ok3",  "img/game3/", "ok3.png");

    Loads.loads("game3_borders1",  "img/game3/", "borders1.png");
    Loads.loads("game3_borders2",  "img/game3/", "borders2.png");
    Loads.loads("game3_borders3",  "img/game3/", "borders3.png");
    Loads.loads("game3_borders4",  "img/game3/", "borders4.png");
    Loads.loads("game3_borders5",  "img/game3/", "borders5.png");
    Loads.loads("game3_borders6",  "img/game3/", "borders6.png");
    Loads.loads("game3_borders7",  "img/game3/", "borders7.png");
    Loads.loads("game3_borders8",  "img/game3/", "borders8.png");
    Loads.loads("game3_borders9",  "img/game3/", "borders9.png");
    Loads.loads("game3_borders10",  "img/game3/", "borders10.png");
    Loads.loads("game3_borders11",  "img/game3/", "borders11.png");
    Loads.loads("game3_borders12",  "img/game3/", "borders12.png");
    Loads.loads("game3_borders13",  "img/game3/", "borders13.png");
    // Loads.loads("game3_borders14",  "img/game3/", "borders14.png");





    Loads.progress = function(e){
        var i = parseInt(e.loaded*100);
        if(i>100) i=100;

        Dom.loadWord.html(i+"%");
        Dom.loadLine.css("width", e.loaded*150)
    };
    Loads.complete = function(){

        GameLoad3_cav();
        Room.Game3.ini();

        setTimeout( Room.GameLoad3.ppt , 300);
    };
    Loads.loading();
}

function GameLoad3_cav(){



    cav_game3.ccv("game3");
    cav_game3.framerate = 10;


    cav_game3.drawImg("game3_bg");
    //加载到页面

    cav_game3.drawImg("game3_borders1","",{x:33, y:34, alpha: 0.01});
    cav_game3.drawImg("game3_borders2","",{x:136, y:33,alpha: 0.01});
    cav_game3.drawImg("game3_borders3","",{x:240, y:33,alpha: 0.01});
    cav_game3.drawImg("game3_borders4","",{x:353, y:32,alpha: 0.01});
    cav_game3.drawImg("game3_borders5","",{x:519, y:30,alpha: 0.01});
    cav_game3.drawImg("game3_borders6","",{x:34, y:281,alpha: 0.01});
    cav_game3.drawImg("game3_borders7","",{x:353, y:277,alpha: 0.01});
    cav_game3.drawImg("game3_borders8","",{x:519, y:278,alpha: 0.01});
    cav_game3.drawImg("game3_borders9","",{x:34, y:520,alpha: 0.01});
    cav_game3.drawImg("game3_borders10","",{x:188, y:523,alpha: 0.01});
    cav_game3.drawImg("game3_borders11","",{x:355, y:668,alpha: 0.01});
    cav_game3.drawImg("game3_borders12","",{x:519, y:667,alpha: 0.01});
    cav_game3.drawImg("game3_borders13","",{x:33, y:913,alpha: 0.01});
    // cav_game3.drawImg("game3_borders14","",{x:33, y:913,alpha: 1});


    cav_game3.drawSprite("game3_light3_1","",{
        mov: {
            ini:[0],
            run:[0,12]
        },
        conf:{alpha:0,x:40,y:130}
    },[Loads.loaded["game3_light3"]]);

    cav_game3.drawSprite("game3_light3_2","",{
        mov: {
            ini:[0],
            run:[0,12]
        },
        conf:{alpha:0,x:145,y:90}
    },[Loads.loaded["game3_light3"]]);

    cav_game3.drawSprite("game3_light3_3","",{
        mov: {
            ini:[0],
            run:[0,12]
        },
        conf:{alpha:0,x:220,y:95}
    },[Loads.loaded["game3_light3"]]);

    cav_game3.drawSprite("game3_light3_4","",{
        mov: {
            ini:[0],
            run:[0,12]
        },
        conf:{alpha:0,x:350,y:110}
    },[Loads.loaded["game3_light3"]]);

    cav_game3.drawSprite("game3_light3_5","",{
        mov: {
            ini:[0],
            run:[0,12]
        },
        conf:{alpha:0,x:590,y:110}
    },[Loads.loaded["game3_light3"]]);

    cav_game3.drawSprite("game3_light5_1","",{
        mov: {
            ini:[0],
            run:[0,12]
        },
        conf:{alpha:0,x:63,y:345}
    },[Loads.loaded["game3_light5"]]);

    cav_game3.drawSprite("game3_light3_6","",{
        mov: {
            ini:[0],
            run:[0,12]
        },
        conf:{alpha:0,x:420,y:300}
    },[Loads.loaded["game3_light3"]]);

    cav_game3.drawSprite("game3_light3_7","",{
        mov: {
            ini:[0],
            run:[0,12]
        },
        conf:{alpha:0,x:530,y:295}
    },[Loads.loaded["game3_light3"]]);

    cav_game3.drawSprite("game3_light3_8","",{
        mov: {
            ini:[0],
            run:[0,12]
        },
        conf:{alpha:0,x:30,y:515}
    },[Loads.loaded["game3_light3"]]);

    cav_game3.drawSprite("game3_light3_9","",{
        mov: {
            ini:[0],
            run:[0,12]
        },
        conf:{alpha:0,x:255,y:540}
    },[Loads.loaded["game3_light3"]]);

    cav_game3.drawSprite("game3_light5_2","",{
        mov: {
            ini:[0],
            run:[0,12]
        },
        conf:{alpha:0,x:420,y:710}
    },[Loads.loaded["game3_light5"]]);

    cav_game3.drawSprite("game3_light3_10","",{
        mov: {
            ini:[0],
            run:[0,12]
        },
        conf:{alpha:0,x:565,y:720}
    },[Loads.loaded["game3_light3"]]);
    
    cav_game3.drawSprite("game3_light3_11","",{
        mov: {
            ini:[0],
            run:[0,12]
        },
        conf:{alpha:0,x:40,y:945}
    },[Loads.loaded["game3_light3"]]);

    // cav_game1.drawSprite("game3_book","",{
    //     mov: {
    //         ini: [0],
    //         run:{ frames: cv.ping(12), next:"ini"}
    //     }
    // });





    //边框
    cav_game3.drawImg("border1","",{x:0, y:0});
    cav_game3.drawImg("border2","",{x:0, y:55});
    cav_game3.drawImg("border3","",{x:43, y:1095});
    cav_game3.drawImg("border4","",{x:657, y:55});

    // game3




    // cav_game3.drawImg("game3_box");
    //
    // cav_game3.drawArea("game3_draw", "", cv.getArea("game3_draw"), "#ffffff", {alpha: 0.01});
    // cav_game3.drawArea("game3_book1", "", cv.getArea("game3_book1"), "#ffffff", {alpha: 0.01});
    // cav_game3.drawArea("game3_book2", "", cv.getArea("game3_book2"), "#ffffff", {alpha: 0.01});
    // cav_game3.drawArea("game3_book3", "", cv.getArea("game3_book3"), "#ffffff", {alpha: 0.01});
    // cav_game3.drawArea("game3_brain", "", [532,242,123,181], "#ffffff", {alpha: 0.01});
    //
    // cav_game3.drawArea("game3_sewing", "", [441,498,143,139], "#ffffff", {alpha: 0.01});
    // cav_game3.drawArea("game3_rocket", "", cv.getArea("game3_rocket"), "#ffffff", {alpha: 0.01});
    // cav_game3.drawArea("game3_bookshow", "", [42,649,95,176], "#ffffff", {alpha: 0.01});
    // cav_game3.drawArea("game3_glass1", "", [42,423,95,176], "#ffffff", {alpha: 0.01});
    //
    // cav_game3.drawArea("game3_drawer", "", cv.getArea("game3_drawer"), "#ffffff", {alpha: 0.01});
    // cav_game3.drawArea("game3_flower", "", [483,965,165,122], "#ffffff", {alpha: 0.01});
    //
    // cav_game3.drawArea("game3_ufo", "", [0,0,170,367], "#ffffff", {alpha: 0.01});


    var drawArr = [
        cav_game3.img["game3_bg"],
        
        cav_game3.img["game3_borders1"],


        cav_game3.img["game3_borders2"],
        cav_game3.img["game3_borders3"],
        cav_game3.img["game3_borders4"],
        cav_game3.img["game3_borders5"],
        cav_game3.img["game3_borders6"],
        cav_game3.img["game3_borders7"],
        cav_game3.img["game3_borders8"],
        cav_game3.img["game3_borders9"],
        cav_game3.img["game3_borders10"],
        cav_game3.img["game3_borders11"],
        cav_game3.img["game3_borders12"],
        cav_game3.img["game3_borders13"],
        cav_game3.img["game3_borders14"],


        cav_game3.sprite["game3_light3_1"],
        cav_game3.sprite["game3_light3_2"],
        cav_game3.sprite["game3_light3_3"],
        cav_game3.sprite["game3_light3_4"],
        cav_game3.sprite["game3_light3_5"],
        cav_game3.sprite["game3_light5_1"],
        cav_game3.sprite["game3_light3_6"],
        cav_game3.sprite["game3_light3_7"],
        cav_game3.sprite["game3_light3_8"],
        cav_game3.sprite["game3_light3_9"],
        cav_game3.sprite["game3_light5_2"],
        cav_game3.sprite["game3_light3_10"],
        cav_game3.sprite["game3_light3_11"],
        // cav_game3.sprite["game3_book"],



        //边框
        cav_game3.img["border1"],
        cav_game3.img["border2"],
        cav_game3.img["border3"],
        cav_game3.img["border4"]



    ];

    cav_game3.draw("game3", drawArr);
    cav_game3.show("game3");

}
