Room.GameLoad1 = {};
Room.GameLoad1.ppt = function(){
    cc.ppt(["GameLoad1", "Game1"] , function(after , callback){
        cc.m["GameLoad1"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m["Game1"].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000});
    })
};

Room.Game1 = {};
Room.Game1.ini = function(){
    cav_game1.dom["game1_book1_btn"].on("click", function () {
        cav_game1.sprite["game1_book1"].gotoAndPlay("run");
    });

    cav_game1.dom["game1_book2_btn"].on("click", function () {
        cav_game1.sprite["game1_book2"].gotoAndPlay("run");
    });

    cav_game1.dom["game1_book3_btn"].on("click", function () {
        cav_game1.sprite["game1_book3"].gotoAndPlay("run");
    });

    // else
    cav_game1.dom["game1_draw_btn"].on("click", function () {
        cav_game1.sprite["game1_draw"].gotoAndPlay("run");
    });

    // tmp
    cav_game1.dom["game1_end_btn"].on("click", function () {
        alert(1);
    });
};
Room.Game1.que_ticker = function(){
    // cav_ticker.que_ticker = function(){
    //     cav.img["que_clock_c1"].rotation = cav.img["que_clock_c1"].rotation%360 + 2;
    //     cav.img["que_clock_c2"].rotation = cav.img["que_clock_c2"].rotation%360 - 2;
    //     cav.img["que_clock_c3"].rotation = cav.img["que_clock_c3"].rotation%360 + 2;
    //     cav.img["que_clock_c4"].rotation = cav.img["que_clock_c4"].rotation%360 - 4;
    //
    //     cav.img["que_clock_z1"].rotation = cav.img["que_clock_z1"].rotation%360 + 6;
    //     cav.img["que_clock_z2"].rotation = cav.img["que_clock_z2"].rotation%360 + 1;
    //
    //     cav.img["que_ci_c1_1"].rotation = cav.img["que_ci_c1_1"].rotation%360 + 2;
    //     cav.img["que_ci_c1_2"].rotation = cav.img["que_ci_c1_2"].rotation%360 + 2;
    //     cav.img["que_ci_c2_1"].rotation = cav.img["que_ci_c2_1"].rotation%360 - 2;
    //     cav.img["que_ci_c2_2"].rotation = cav.img["que_ci_c2_2"].rotation%360 - 2;
    //     cav.img["que_ci_c3_1"].rotation = cav.img["que_ci_c3_1"].rotation%360 + 2;
    //     cav.img["que_ci_c3_2"].rotation = cav.img["que_ci_c3_2"].rotation%360 + 2;
    //     cav.img["que_ci_c4_1"].rotation = cav.img["que_ci_c4_1"].rotation%360 - 2;
    //     cav.img["que_ci_c4_2"].rotation = cav.img["que_ci_c4_2"].rotation%360 - 2;
    //     cav.img["que_ci_c5_1"].rotation = cav.img["que_ci_c5_1"].rotation%360 - 2;
    //     cav.img["que_ci_c5_2"].rotation = cav.img["que_ci_c5_2"].rotation%360 - 2;
    //     cav.img["que_ci_c6_1"].rotation = cav.img["que_ci_c6_1"].rotation%360 + 2;
    //     cav.img["que_ci_c6_2"].rotation = cav.img["que_ci_c6_2"].rotation%360 + 2;
    //
    //     cav.img["que_ci2_c1_1"].rotation = cav.img["que_ci2_c1_1"].rotation%360 + 2;
    //     cav.img["que_ci2_c1_2"].rotation = cav.img["que_ci2_c1_2"].rotation%360 + 2;
    //     cav.img["que_ci2_c2_1"].rotation = cav.img["que_ci2_c2_1"].rotation%360 - 4;
    //     cav.img["que_ci2_c2_2"].rotation = cav.img["que_ci2_c2_2"].rotation%360 - 4;
    //     cav.img["que_ci2_c3_1"].rotation = cav.img["que_ci2_c3_1"].rotation%360 + 2;
    //     cav.img["que_ci2_c3_2"].rotation = cav.img["que_ci2_c3_2"].rotation%360 + 2;
    //     cav.img["que_ci2_c4_1"].rotation = cav.img["que_ci2_c4_1"].rotation%360 - 2;
    //     cav.img["que_ci2_c4_2"].rotation = cav.img["que_ci2_c4_2"].rotation%360 - 2;
    //     cav.img["que_ci2_c5_1"].rotation = cav.img["que_ci2_c5_1"].rotation%360 + 4;
    //     cav.img["que_ci2_c5_2"].rotation = cav.img["que_ci2_c5_2"].rotation%360 + 4;
    //     cav.img["que_ci2_c6_1"].rotation = cav.img["que_ci2_c6_1"].rotation%360 - 2;
    //     cav.img["que_ci2_c6_2"].rotation = cav.img["que_ci2_c6_2"].rotation%360 - 2;
    //     cav.img["que_ci2_c7_1"].rotation = cav.img["que_ci2_c7_1"].rotation%360 + 2;
    //     cav.img["que_ci2_c7_2"].rotation = cav.img["que_ci2_c7_2"].rotation%360 + 2;
    // };
    //
    // cvtw.get(cav.img["que_around_d1"], {loop:true}).to({alpha:0.2}, 1000, createjs.Ease.bounceInOut);
    // cvtw.get(cav.img["que_around_d2"], {loop:true}).wait(100).to({alpha:0.2}, 1200, createjs.Ease.bounceInOut);
    //
    // cvtw.get(cav.img["que_around_b1"], {loop:true}).to({alpha:0.5}, 1000, createjs.Ease.bounceInOut);
    // cvtw.get(cav.img["que_around_b2"], {loop:true}).wait(100).to({alpha:0.5}, 1200, createjs.Ease.bounceInOut);
    //
    // cvtw.get(cav.img["que_around_t1"], {loop:true}).to({scaleX:1.2, x:-10}, 800).to({scaleX:1, x:0}, 800);
    // cvtw.get(cav.img["que_around_t2"], {loop:true}).to({scaleX:1.2}, 800).to({scaleX:1}, 800);
    //
    // cvtw.get(cav.img["que_water_w1"], {loop:true}).to({scaleY:0.9}, 800, createjs.Ease.bounceIn).to({scaleY:1}, 800, createjs.Ease.cubicOut);
    // cvtw.get(cav.img["que_water_w2"], {loop:true}).to({scaleY:0.9}, 1000, createjs.Ease.bounceIn).to({scaleY:1}, 800, createjs.Ease.cubicOut);
    // cvtw.get(cav.img["que_water_w3"], {loop:true}).to({scaleY:0.9}, 800, createjs.Ease.bounceIn).to({scaleY:1}, 1000, createjs.Ease.cubicOut);
    // cvtw.get(cav.img["que_water_w4"], {loop:true}).to({scaleY:0.9}, 1000, createjs.Ease.bounceIn).to({scaleY:1}, 1000, createjs.Ease.cubicOut);
    //
    // cvtw.get(cav.img["que_water_pp1"], {loop:true}).to({scaleY:1,scaleX:1,alpha:1,y:918+60-15}, 1100).to({alpha:0}, 300);
    // cvtw.get(cav.img["que_water_pp2"], {loop:true}).to({scaleY:1,scaleX:1,alpha:1,y:918+60-15}, 1200).to({alpha:0}, 300);
    // cvtw.get(cav.img["que_water_pp3"], {loop:true}).to({scaleY:1,scaleX:1,alpha:1,y:918+60-15}, 1100).to({alpha:0}, 300);
    // cvtw.get(cav.img["que_water_pp4"], {loop:true}).to({scaleY:1,scaleX:1,alpha:1,y:918+60-15}, 1200).to({alpha:0}, 300);
    //
    // Room.Index.deng();
    // Dom.Time_deng = setInterval(function(){
    //     Room.Index.deng();
    // },8600);

};
// Room.Index.deng = function(){
//     var loop = false;
//     var i = 0;
//     var st = 100;
//     var show_time = 500;
//     var show_wait = 700;
//     var show_wait_low = 25;
//     var wait1 = st*4*22+show_time+show_wait-(show_wait_low*23) - 3000;
//     var show1 = 300;
//     var show2 = 200;
//
//     //1
//     i++;
//     cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
//         .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
//         .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
//         .to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1)
//         .to({alpha:0}, show2).to({alpha:1}, show2).to({alpha:0}, show1);
//     //2
//     i++;
//     cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
//         .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
//         .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
//         .to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:0}, show1)
//         .to({alpha:1}, show2).to({alpha:0}, show2).to({alpha:0}, show1);
//     //3
//     i++;
//     cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
//         .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
//         .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
//         .to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1)
//         .to({alpha:0}, show2).to({alpha:1}, show2).to({alpha:0}, show1);
//     //4
//     i++;
//     cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
//         .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
//         .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
//         .to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:0}, show1)
//         .to({alpha:1}, show2).to({alpha:0}, show2).to({alpha:0}, show1);
//     //5
//     i++;
//     cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
//         .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
//         .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
//         .to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1)
//         .to({alpha:0}, show2).to({alpha:1}, show2).to({alpha:0}, show1);
//     //6
//     i++;
//     cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
//         .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
//         .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
//         .to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:0}, show1)
//         .to({alpha:1}, show2).to({alpha:0}, show2).to({alpha:0}, show1);
//     //7
//     i++;
//     cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
//         .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
//         .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
//         .to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1)
//         .to({alpha:0}, show2).to({alpha:1}, show2).to({alpha:0}, show1);
//     //8
//     i++;
//     cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
//         .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
//         .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
//         .to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:0}, show1)
//         .to({alpha:1}, show2).to({alpha:0}, show2).to({alpha:0}, show1);
//     //9
//     i++;
//     cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
//         .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
//         .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
//         .to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1)
//         .to({alpha:0}, show2).to({alpha:1}, show2).to({alpha:0}, show1);
//     //10
//     i++;
//     cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
//         .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
//         .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
//         .to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:0}, show1)
//         .to({alpha:1}, show2).to({alpha:0}, show2).to({alpha:0}, show1);
//     //11
//     i++;
//     cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
//         .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
//         .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
//         .to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1)
//         .to({alpha:0}, show2).to({alpha:1}, show2).to({alpha:0}, show1);
//     //12
//     i++;
//     cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
//         .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
//         .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
//         .to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:0}, show1)
//         .to({alpha:1}, show2).to({alpha:0}, show2).to({alpha:0}, show1);
//     //13
//     i++;
//     cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
//         .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
//         .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
//         .to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1)
//         .to({alpha:0}, show2).to({alpha:1}, show2).to({alpha:0}, show1);
//     //14
//     i++;
//     cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
//         .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
//         .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
//         .to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:0}, show1)
//         .to({alpha:1}, show2).to({alpha:0}, show2).to({alpha:0}, show1);
//     //15
//     i++;
//     cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
//         .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
//         .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
//         .to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1)
//         .to({alpha:0}, show2).to({alpha:1}, show2).to({alpha:0}, show1);
//     //16
//     i++;
//     cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
//         .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
//         .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
//         .to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:0}, show1)
//         .to({alpha:1}, show2).to({alpha:0}, show2).to({alpha:0}, show1);
//     //17
//     i++;
//     cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
//         .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
//         .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
//         .to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1)
//         .to({alpha:0}, show2).to({alpha:1}, show2).to({alpha:0}, show1);
//     //18
//     i++;
//     cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
//         .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
//         .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
//         .to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:0}, show1)
//         .to({alpha:1}, show2).to({alpha:0}, show2).to({alpha:0}, show1);
//     //19
//     i++;
//     cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
//         .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
//         .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
//         .to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1)
//         .to({alpha:0}, show2).to({alpha:1}, show2).to({alpha:0}, show1);
//     //20
//     i++;
//     cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
//         .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
//         .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
//         .to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:0}, show1)
//         .to({alpha:1}, show2).to({alpha:0}, show2).to({alpha:0}, show1);
//     //21
//     i++;
//     cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
//         .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
//         .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
//         .to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1)
//         .to({alpha:0}, show2).to({alpha:1}, show2).to({alpha:0}, show1);
//     //22
//     i++;
//     cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
//         .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
//         .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
//         .to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:0}, show1)
//         .to({alpha:1}, show2).to({alpha:0}, show2).to({alpha:0}, show1);
//     //23
//     i++;
//     cvtw.get(cav.dom["que_box_d"+i], {loop:loop}).wait(st*2*i).to({alpha:1}, st).to({alpha:0}, st)
//         .wait(show_wait-(show_wait_low*i)).to({alpha:1}, show_time)
//         .wait(wait1 - ( (st*2*i) + st*2 + show_time + (show_wait-(show_wait_low*i)) ) )
//         .to({alpha:0}, show1).to({alpha:1}, show1).to({alpha:0}, show1).to({alpha:1}, show1)
//         .to({alpha:0}, show2).to({alpha:1}, show2).to({alpha:0}, show1);
//
//
// };
// Room.Index.que_ticker_cls = function(){
//     delete(cav_ticker.que_ticker);
// };