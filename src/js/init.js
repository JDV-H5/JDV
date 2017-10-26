var cav,
    cav_ticker = {};

function loader(){
    libs.create();
    libs.setTicker(25);
    loader_ini();
}

function loader_ini(){

    Dom.loadWord = $("#Loader .word");
    cav = new CanvasCreate($("#cav"));

    mp3_load();

    Loads.progress = function(e){
        var i = parseInt(e.loaded*100);
        if(i>100) i=100;
        Room.Loader.progress(i);
    };
    Loads.complete = function(){

        createjs.Ticker.addEventListener("tick", function(){
            $.each(cav_ticker, function(i, fn) { fn() })
        });

        libs.iniDom();

    };
    Loads.loading();
}


function mp3_load(){
    // Loads.loads("mp3_start",  "mp3/", "start.mp3");

}
