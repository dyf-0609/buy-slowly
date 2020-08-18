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
            $.each(jsonArr,function(index,item){
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
            $('.bd-con-goods').append(goodsDom);
            })   
        }
    })
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