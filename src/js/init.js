function loader() {
    libs.create();
    libs.setTicker(25);
    libs.iniDom();
    setTimeout(Room.Loader.ppt, 300);

    Loads.loads("mp3_bg",  "mp3/", "bg.mp3");
    Loads.complete = function(){
        mp3_play("bg", 1);
    };
    Loads.loading();
}
