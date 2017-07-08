"use strict";
$(function () {

  /*let navbar stay top of the window*/
  $(window).scroll(function () {
      if($(this).scrollTop()>=60){
        $(".header .nav").addClass("scrolled");
      }else{
        $(".header .nav").removeClass("scrolled");
      }
  });

  /*header animation*/
  /*
  (function () {
    var width=$(window).width(),
        height=700,
        timer=null;
    $(".header .content").on("mouseenter",function () {
        timer=setInterval(function() {
          $(".header .words li").each(function () {
            var x = Math.random() * 200 - 100;
            var y = Math.random() * 200 - 100;
            var z = Math.random() * 200 - 100;
            $(this).css("transform", "translateX(" + x + "px) translateY(" + y + "px) translateZ(" + z + "px)");
          });
        },1200);
    });
    $(".header .content").on("mousemove",function (e) {
      var rX= e.clientX/width*30-15,
          rY= e.clientY/height*30-15;
      $(this).find(".words").css("transform","rotateX("+rY+"deg) rotateY("+rX+"deg)");
    });
    $(".header .content").on("mouseleave",function () {
      $(this).find(".words").css("transform","rotateX(0) rotateY(0)");
      clearInterval(timer);
      $(".header .words li").css("transform", "translateX(0px) translateY(0px) translateZ(0px)");
    });

  })();
  */

  /*case animation*/
  (function () {
    var curIndex= 4,
        nextIndex=0;
    $(".case .list-l li").on("mouseenter",function () {
      nextIndex=$(this).index();
      if(nextIndex!==curIndex){
        $(this).addClass("cur").siblings(".cur").removeClass();
        $(".case .list-r li").eq(curIndex).addClass("bottom").siblings(".bottom").removeClass("bottom");
        if(nextIndex-curIndex>0){
          $(".case .list-r li").eq(nextIndex).addClass("move-up").siblings().removeClass("move-down move-up");
        }
        if(nextIndex-curIndex<0){
          $(".case .list-r li").eq(nextIndex).addClass("move-down").siblings().removeClass("move-up move-down");
        }
        curIndex=nextIndex;
      }
    });
  })();
});