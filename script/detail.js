// top
$('.r1').mouseenter(function () {
    $(this).find('.sjm').show();
    $(this).find('.list').show();
    $(this).find('.xia').hide();
    $(this).find('.shang').show();
})
$('.r1').mouseleave(function () {
    $(this).find('.sjm').hide();
    $(this).find('.list').hide();
    $(this).find('.shang').hide();
    $(this).find('.xia').show();
})


//head
$('.download').mouseover(function () {
    $(this).find('.s-down').fadeOut();
    $(this).find('.b-down').fadeIn();
})
$('.download').mouseleave(function () {
    $(this).find('.b-down').fadeOut();
    $(this).find('.s-down').fadeIn();
})


//nav
$('.more').mouseenter(function () {
    $(this).find('.xia').hide();
    $(this).find('.shang').show();
    $(this).find('.more-c').show();
})
$('.more').mouseleave(function () {
    $(this).find('.xia').show();
    $(this).find('.shang').hide();
    $(this).find('.more-c').hide();
})

//轮播图
var mySwiper = new Swiper ('.swiper-container', {
    //   direction: 'vertical', // 垂直切换选项
    direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项

    //   autoplay:true,//等同于以下设置
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    }
})

//返回顶部
$('.cb-top').mouseenter(function(){
    $(this).find('img').css('display','none');
    $(this).find('em').css('display','block');
})
$('.cb-top').mouseleave(function(){
    $(this).find('img').css('display','block');
    $(this).find('em').css('display','none');
})
$('.fk').mouseenter(function(){
    $(this).find('img').css('display','none');
    $(this).find('em').css('display','block');
})
$('.fk').mouseleave(function(){
    $(this).find('img').css('display','block');
    $(this).find('em').css('display','none');
})

var totop = document.querySelector('.cb-top');
totop.onclick = function (){
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    //  当前滚动条距离顶部的位置
    var st = document.body.scrollTop || document.documentElement.scrollTop;
    var timer;
    timer = setInterval(function (){
        st -= 40;
        // 临界值判断
        if (st <= 0){
            st = 0;
            clearInterval(timer);
        }
        document.body.scrollTop = st;
        document.documentElement.scrollTop = st;
    },10);
}