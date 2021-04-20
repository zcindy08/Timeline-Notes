import $ from "jquery";
import {gsap} from "gsap";

var redBox = $('.red-box');
var blueBox = $('.blue-box');
var orangeBox = $('.orange-box');

//var boxArray = [redBox, blueBox, orangeBox];
var mainTL = gsap.timeline();
//var tl = gsap.timeline();
//defaults
//var tl = gsap.timeline({defaults:{duration:1}});
// only here to make codeKit be quiet!
//console.log(gsap);

$(document).ready(function(){

  console.log('Page loaded');

//gsap.to(redBox ,{duration:0.5, x:400, ease:"expo.out", delay:1.5});
//gsap.to(blueBox ,{duration:0.5, x:400, ease:"expo.out", delay:2});
//gsap.to(orangeBox ,{duration:0.5, x:400, ease:"expo.out", delay:1});

// tl.to(redBox ,{duration:1, x:400, ease:"none"})
//   .to(blueBox ,{duration:1, x:400, ease:"none"}, "-=0.5")
//   .to(orangeBox ,{duration:1, x:400, ease:"none"}, "<-0.25")
//
//   ;//timeline END

//Labels
// tl.to(redBox ,{ x:400, ease:"none"})
// .addLabel("startbluebox")
//   .to(blueBox ,{ x:400, ease:"none"}, "startbluebox")
//   .to(orangeBox ,{ x:400, ease:"none"}, "startbluebox-=0.5")
//
//   ;//timeline END

//tl.play();

//NESTING
// tl.to(redBox ,{ x:400, ease:"none"})
// .addLabel("startbluebox")
//   .to(blueBox ,{ x:400, ease:"none"}, "startbluebox")
//   .to(orangeBox ,{ x:400, ease:"none"}, "startbluebox-=0.5")
//
//   ;//timeline END

  function aniBox(){
    var tl = gsap.timeline();

    tl.to(redBox ,{duration:1, x:400, ease:"none"})

      .to(blueBox ,{duration:1, x:400, ease:"none"})

      ;//timeline END

      return tl;

  }
//Orange Box animation
  function aniBoxOrange(){
    var tl = gsap.timeline();

    tl.to(orangeBox ,{duration:1, rotation:"180_ccw", x:400, ease:"none"})

      ;//timeline END

      return tl;

  }
// var myTween= gsap.to(orangeBox ,{duration:1, x:400, ease:"none"});

//add main timeline
mainTL.add(aniBox()).delay(2)
.add(aniBoxOrange(), "-=1")

;//timeline END

//Control
// mainTL.timeScale(0.5);
// mainTL.pause();
// .resume();
// .seek();
// tl.reverse();
// delay();

});
