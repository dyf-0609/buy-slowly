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

//注册
var user=document.querySelector('.user');
var pwd=document.querySelector('.pwd');
var add=document.querySelector('.reg-panel .btn');
var reg=/^(1|\+861)[3-8]{1}\d{9}$/;

add.onclick=function(){
    if(!user.value||!pwd.value){
        alert('手机或密码不能为空！');
        return false;
    }else if(!reg.test(user.value)){
        alert('手机号不符合');
        return false;
    }
    //数据请求
    ajax({
        url:'../data/login.php',
        type:'post',
        data:{
            type:'add',
            user:user.value,
            pwd:pwd.value
        },
        dataType:'json',
        success:function(data){
            var json=JSON.parse(data);
            alert(json.msg);
            if(json.err==3){
                setCookie({
                    key:'username',
                    val:user.value,
                    days:7
                });
                setCookie({
                    key:'password',
                    val:pwd.value,
                    days:31
                });
            open('login.html','_self');
           }   
       },
        error:function(status){
        alert('提交失败');
       }
    });
}