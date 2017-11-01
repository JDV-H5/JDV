var cav_game4,
    PG4 = {};

function GameLoad4(){

    try{
        cav_game3.stage.removeAllChildren();
        cav_game3.stage.clear();
        cav_game3 = "";
        Loads.loaded = [];
        Loads.list = [];
    }catch(e){}


    Dom.loadWord = $("#GameLoad4 .loadw");
    Dom.loadLine = $("#GameLoad4 .line");

    cav_game4 = new CanvasCreate($("#cav_game4"));

    Loads.loads("border1",  "img/", "border1.png");
    Loads.loads("border2",  "img/", "border2.png");
    Loads.loads("border3",  "img/", "border3.png");
    Loads.loads("border4",  "img/", "border4.png");
    // game
    Loads.loads("game4_bg",  "img/game4/", "bg.png");

    for(var i =1 ; i<=15; i++)
        Loads.loads("game4_box_open_"+i,  "img/game4/box_open/", "box_open"+i+".png");

    for(var i =1 ; i<=15; i++)
        Loads.loads("game4_plant0_"+i,  "img/game4/plant0/", "plant0"+i+".png");

    for(var i =1 ; i<=15; i++)
        Loads.loads("game4_plant1_"+i,  "img/game4/plant1/", "plant1"+i+".png");

    Loads.loads("x4",  "img/", "x.png");

    Loads.progress = function(e){
        var i = parseInt(e.loaded*100);
        if(i>100) i=100;

        Dom.loadWord.html(i+"%");
        Dom.loadLine.css("width", e.loaded*150)
    };
    Loads.complete = function(){

        // console.log(Loads.loaded);

        GameLoad4_cav();
        Room.Game4.ini();

        setTimeout( Room.GameLoad4.ppt , 300);
    };
    setTimeout(Loads.loading, 200);
}

function GameLoad4_cav(){

    cav_game4.ccv("game4");
    cav_game4.framerate = 10;


    cav_game4.drawImg("game4_bg");
    //加载到页面

    cav_game4.drawPhotos("game4_box_open","","game4_box_open_",15,{
        frames:[0,0,700,1140],
        framerate:8,
        mov: {
            ini:[0],
            run:[0,14,"stop"],
            stop:[14]
        }
    });

    cav_game4.drawPhotos("game4_plant0","","game4_plant0_",15,{
        frames:[0,0,700,1140],
        framerate:4,
        mov: {
            ini:[0,14,"ini"]
        }
    });

    cav_game4.drawPhotos("game4_plant1","","game4_plant1_",15,{
        frames:[0,0,700,1140],
        framerate:4,
        mov: {
            ini:[0,14,"ini"]
        }
    });

    //边框
    cav_game4.drawImg("border1","",{x:0, y:0});
    cav_game4.drawImg("border2","",{x:0, y:55});
    cav_game4.drawImg("border3","",{x:43, y:1095});
    cav_game4.drawImg("border4","",{x:657, y:55});

    var drawArr = [
        cav_game4.img["game4_bg"],

        cav_game4.sprite["game4_box_open"],

        cav_game4.sprite["game4_plant0"],
        cav_game4.sprite["game4_plant1"],


        
        //边框
        cav_game4.img["border1"],
        cav_game4.img["border2"],
        cav_game4.img["border3"],
        cav_game4.img["border4"]

    ];

    cav_game4.draw("game4", drawArr);
    cav_game4.show("game4");

}
