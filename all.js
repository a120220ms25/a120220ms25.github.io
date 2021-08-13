
// 名字進場動畫效果 
anime.timeline({loop: false})
.add({
targets: '.ml15 .word',
scale: [14,1],
opacity: [0,1],
easing: "easeOutCirc",
duration: 800,
delay: (el, i) => 800 * i
}).add({
targets: '.ml15',
opacity: 1,
duration: 1000,
easing: "easeOutExpo",
delay: 1000
});

// header顯示與否的定位
$(window).scroll(function(){
  if($(document).scrollTop() >= ($('#project').offset().top-200)){
   $('.header').css('position','fixed');
   $('.header').css('background','white');
   $('.header').css('boxShadow','rgba(33, 35, 38, 0.1) 0px 10px 10px -10px');
  }else{
    $('.header').css('position','absolute');
    $('.header').css('background-color','white');
    $('.header').css('z-index','9999');
  }
  }
)

//進場動畫
AOS.init({
  duration:"1500",
  once:"false"
})

//project動畫效果
$('.project-row>li').on('mouseenter mouseleave',function(){
  $(this).toggleClass('clear').siblings().toggleClass('blur');
})

//navbar在手機的自動收合

$('.nav-link').on('click',function(){
  if($(window).width()<480){
    $('.navbar-toggler').click();
  }
})

