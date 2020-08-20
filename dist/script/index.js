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


//main
$('li').mouseenter(function () {
    $(this).find('.biao').show();
})
$('li').mouseleave(function () {
    $(this).find('.biao').hide();
})

//国内折扣价小时排行榜
$(function () {
    //加载商品数据
    $.ajax({
        url: '../data/hour.json',
        type: 'get',
        dataType: 'json',
        success: function (jsonArr) {
            $.each(jsonArr, function (index, item) {
                var goodsDom = ` <li>
                <img src="${item.imgurl}" alt="" class="pic">
                <div class="info">
                    <a href="" class="tit">${item.tit}</a>
                    <div class="price">${item.price}</div>
                </div>
            </li>`
                $('.goods').append(goodsDom);
            })
        }
    })
})
//白菜价排行榜
$(function () {
    //加载商品数据
    $.ajax({
        url: '../data/bc-hour.json',
        type: 'get',
        dataType: 'json',
        success: function (jsonArr) {
            $.each(jsonArr, function (index, item) {
                var goodsDom = `  <li>
                <img src="${item.imgurl}" alt="" class="pic">
                <div class="info">
                    <a href="" class="tit">${item.tit}</a>
                    <div class="price">${item.price}</div>
                    <div class="msg">${item.msg}</div>
                </div>
            </li>`
                $('.bc-goods').append(goodsDom);
            })
        }
    })
})


//图片轮播图
var mySwiper = new Swiper('.swiper-container', {
    //direction: 'vertical', // 垂直切换选项
    direction: 'horizontal', //水平
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    // scrollbar: {
    // el: '.swiper-scrollbar',
    // },

    //自动播放
    //autoplay:true,//等同于以下设置
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
})
$('.swiper-container').mouseenter(function () {
    $(this).find('.swiper-button-prev').show();
    $(this).find('.swiper-button-next').show();
})
$('.swiper-container').mouseleave(function () {
    $(this).find('.swiper-button-prev').hide();
    $(this).find('.swiper-button-next').hide();
})


//排行榜
$(function () {
    //加载商品数据
    $.ajax({
        url: '../data/phb.json',
        type: 'get',
        dataType: 'json',
        success: function (jsonArr) {
            $.each(jsonArr, function (i, ite) {
                $.each(ite, function (j, item) {
                    var goodsDom = ` <li>
                    <div class="tab"><img src="${item.taburl}" alt=""><span>${item.num}</span></div>
                    <div class="pic">
                        <img src="${item.imgurl}" alt="">
                    </div>
                    <div class="tags">
                        <a href="" class="ly"><img  src="../image/icon/liuyan.png" alt="">${item.num1}</a>
                        <a href="" class="zan"><img  src="../image/icon/zan.png" alt="">${item.num2}</a>
                        <a href="" class="buzan"><img  src="../image/icon/buzan.png" alt="">${item.num3}</a>
                    </div>
                    <div class="tit">${item.tit}</div>
                    <div class="subtit">${item.subtit}</div>
                </li>`
                    $('.phb-goods' + [i]).append(goodsDom);
                })

            })
        }
    })
})
//商品轮播图
var mySwiper = new Swiper('.swiper-containerphb', {
    //direction: 'vertical', // 垂直切换选项
    direction: 'horizontal', //水平
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    // scrollbar: {
    // el: '.swiper-scrollbar',
    // },

    //自动播放
    //autoplay:true,//等同于以下设置
    // autoplay: {
    //     delay: 3000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false,
    //     }, 
})

$('.swiper-containerphb').mouseenter(function () {
    $(this).find('.swiper-button-prev').show();
    $(this).find('.swiper-button-next').show();
})
$('.swiper-containerphb').mouseleave(function () {
    $(this).find('.swiper-button-prev').hide();
    $(this).find('.swiper-button-next').hide();
})


//今日超级推荐
$(function () {
    //加载商品数据
    $.ajax({
        url: '../data/recommend.json',
        type: 'get',
        dataType: 'json',
        success: function (jsonArr) {
            $.each(jsonArr, function (index, item) {
                var goodsDom = ` <li>
                <div class="pic">
                    <img src="${item.imgurl}" alt="">
                </div>
                <div class="tags">
                    <a href="" class="ly"><img  src="../image/icon/liuyan.png" alt="">${item.num1}</a>
                    <a href="" class="zan"><img  src="../image/icon/zan.png" alt="">${item.num2}</a>
                    <a href="" class="buzan"><img  src="../image/icon/buzan.png" alt="">${item.num3}</a>
                </div>
                <div class="tit">${item.tit}</div>
                <div class="subtit">${item.price}</div>
                <div class="info">
                    <span class="mall">${item.mall}</span>
                    <span class="date">${item.date}</span>
                </div>
            </li>`
                $('.tj-goods').append(goodsDom);
            })
        }
    })
})


//返回顶部
$('.cb-top').mouseenter(function () {
    $(this).find('img').css('display', 'none');
    $(this).find('em').css('display', 'block');
})
$('.cb-top').mouseleave(function () {
    $(this).find('img').css('display', 'block');
    $(this).find('em').css('display', 'none');
})
$('.fk').mouseenter(function () {
    $(this).find('img').css('display', 'none');
    $(this).find('em').css('display', 'block');
})
$('.fk').mouseleave(function () {
    $(this).find('img').css('display', 'block');
    $(this).find('em').css('display', 'none');
})

var totop = document.querySelector('.cb-top');
totop.onclick = function () {
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    //  当前滚动条距离顶部的位置
    var st = document.body.scrollTop || document.documentElement.scrollTop;
    var timer;
    timer = setInterval(function () {
        st -= 40;
        // 临界值判断
        if (st <= 0) {
            st = 0;
            clearInterval(timer);
        }
        document.body.scrollTop = st;
        document.documentElement.scrollTop = st;
    }, 10);
}


//小时榜悬停
window.onscroll = function () {
    var hour = $1('.hour-list');
    var main = $1('.main');
    var sub=$1('.sub-nav');
    var slide=$1('.l-slide');
    var mainHeight = main.offsetTop;
    var mainHeight1 = main.offsetHeight;
    var hourHeight = hour.offsetHeight;
    var subHeight = sub.offsetHeight;
    var slideLeft=slide.offsetLeft;

    var st = document.body.scrollTop || document.documentElement.scrollTop;

    if(st>=subHeight+mainHeight+10){
        //console.log(subHeight+mainHeight+10);
        //console.log(mainHeight1+mainHeight-hourHeight*2);
        
        if(st>=mainHeight1+mainHeight-hourHeight*2){
            $('.fixedList').removeClass('fixed');
            
            $('.fixedList').addClass('fixed1');
            var fixed1=$1('.fixed1');
            fixed1.style.left=slide.left-11;
           
        }else{
            $('.fixedList').addClass('fixed');
            var fixed=$1('.fixed');
            fixed.style.left=slide.left-11;
            $('.fixedList').removeClass('fixed1');
        }
    }
    else{
        $('.fixedList').removeClass('fixed');
        $('.fixedList').removeClass('fixed1');
    }   
}