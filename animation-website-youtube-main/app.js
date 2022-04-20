const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const menu = document.querySelector(".menu");
const headline = document.querySelector(".headline");

const tl = gsap.timeline();

tl.from(
    hero,
    1,
    {height:"0%"},
).fromTo(
    hero,
    1.2,
    {width:"100%"},
    {width:"80%",ease: Power2.ease}
).fromTo(
    slider,
    1.2,
    {y:"-100%"},
    {y:"0%",ease: Power2.ease},
    "-=1.2",
).fromTo(
    logo,
    0.5,
    {opacity:0,x:30},
    {opacity:1,x:0},
    "-=0.5",
).fromTo(
    menu,
    0.5,
    {opacity:0,x:30},
    {opacity:1,x:0},
    "-=0.5",
).fromTo(
    headline,
    0.5,
    {opacity:0,x:0},
    {opacity:1,x:30},
    "-=1",
);
gsap.to('.scrollbox__cricle', { //アニメーションしたい要素を指定
    scrollTrigger: {
      trigger: '.js-trigger',//アニメーションが始まるトリガーとなる要素
      start: 'top center', //アニメーションが始まる位置を指定
      end: 'bottom center', //ア
      markers: true,
      onEnter: ()=> gsap.to('.scrollbox__cricle', {x: 800}),
      onLeave: ()=> gsap.to('.scrollbox__cricle', {x: 0})
    },
  });

// 連続で動作
  gsap.to('.scrollbox__cricle2', { //アニメーションしたい要素を指定
    x: 800, //横に800px動かす
    scrollTrigger: {
      trigger: '.js-trigger2',//アニメーションが始まるトリガーとなる要素
      start: 'top center', //アニメーションが始まる位置を指定
      end: 'bottom center', //ア
      markers: true,
    },
    stagger: {
        from: "end",
        amount: 0.1
    }
  });
// gsap.to(".scrollbox__cricle", {
//     scrollTrigger: ".js-trigger", // ".box"がビューポートに入ったらアニメーション開始 (一度だけ)
//     x: 500
//   });

// それぞれ交差するタイミングでアニメーションする。
// gsap.set('.scrollbox__cricle3',{x:0});
// ScrollTrigger.batch(".scrollbox__cricle3", {
//     onEnter: batch => gsap.to(batch, {x: 800,}),
//     start: "top 50%",
//     markers: true
//   });

ScrollTrigger.batch(".scrollbox__cricle3", {
  // interval: 0.1, // time window (in seconds) for batching to occur. 
  // batchMax: 3,   // maximum batch size (targets)
  onEnter: batch => gsap.to(batch, {x:800}),
  // also onLeave, onEnterBack, and onLeaveBack
  // also most normal ScrollTrigger values like start, end, etc.
});