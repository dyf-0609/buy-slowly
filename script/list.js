// 好价排行榜
$('.menu-r').mouseover(function(){
    $(this).find('.r-list').slideDown(200); 
})
$('.menu-r').mouseleave(function(){
    $(this).find('.r-list').slideUp(200); 
})

$(function(){
    //加载商品数据
    $.ajax({
        url:'../data/hj.json',
        type:'get',
        dataType:'json',
        success:function(jsonArr){
            $.each(jsonArr,function(i,ite){
                $.each(ite,function(j,item){
                    var goodsDom=` <li>
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
                $('.bd-con-goods'+[i]).append(goodsDom);
                })   
        })
                
        }
    })
})

//商品轮播图
var mySwiper = new Swiper ('.swiper-containerbd', {
    //direction: 'vertical', // 垂直切换选项
    direction: 'horizontal',//水平
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
    el: '.swiper-pagination',
    clickable :true,
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
//轮播图按钮显示隐藏
$('.swiper-containerbd').mouseenter(function(){
    $(this).find('.swiper-button-prev').show();
    $(this).find('.swiper-button-next').show();
})
$('.swiper-containerbd').mouseleave(function(){
    $(this).find('.swiper-button-prev').hide();
    $(this).find('.swiper-button-next').hide();
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