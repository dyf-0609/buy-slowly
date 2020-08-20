//商品放大镜
var left = document.querySelector('.wrap .leftT');
var mask = document.querySelector('.mask');
var maxBox = document.querySelector('.maxBox');
var maxImg = document.querySelector('.maxBox img');

left.onmouseenter = function() {
    mask.style.display = 'block';
    maxBox.style.display = 'block';
}
left.onmouseleave = function() {
    mask.style.display = 'none';
    maxBox.style.display = 'none';
}
left.onmousemove = function(ev) {
    var e = ev || event;
    // 蒙板的定位值
    var maskX = e.clientX - offset(left, false).left - mask.clientWidth / 2;
    var maskY = e.clientY - offset(left, false).top - mask.clientHeight / 2;

    // 边界判断
    if (maskX <= 0) {
        maskX = 0;
    }
    if (maskX >= (left.clientWidth - mask.clientWidth)) {
        maskX = left.clientWidth - mask.clientWidth;
    }
    if (maskY <= 0) {
        maskY = 0;
    }
    if (maskY >= (left.clientHeight - mask.clientHeight)) {
        maskY = left.clientHeight - mask.clientHeight;
    }
    mask.style.left = maskX + 'px';
    mask.style.top = maskY + 'px';

    // 移动比例
    var scaleX = maskX / (left.clientWidth - mask.clientWidth);
    var scaleY = maskY / (left.clientHeight - mask.clientHeight);

    // 大图移动的坐标
    var maxImgX = scaleX * (maxImg.clientWidth - maxBox.clientWidth);
    var maxImgY = scaleY * (maxImg.clientHeight - maxBox.clientHeight);

    maxImg.style.left = -maxImgX + 'px';
    maxImg.style.top = -maxImgY + 'px';
}

//小商品放大
var  imgs = $2('.img1');
var  midImg = $1('.midImg');
var  maxImg = $1('.maxImg');
for (var  i = 0; i < 5; i++) {    
    (function(x) {        
        imgs[x].onmouseenter = function() {            
            midImg.src = '../image/mid' + (x + 1) + '.jpg'            
            maxImg.src = '../image/max' + (x + 1) + '.jpg'            
            prv = x;        
        }    
    })(i)
} 

//right 轮播图
var main = $1('.wrap .main .list')
var content = $1('.wrap .content');
var prev = $1('.pre');
var next = $1('.next');
var li = $2('.main .list li');
var liHeight = li[0].clientHeight * 3;
// 当前显示图片的下标
var imgIndex = 0;
//向后切换
function moveNext() {
    // 下标递增
    imgIndex++;
    // 临界值判断
    if (imgIndex >= li.length / 3) {
        imgIndex = 0;
        main.scrollTop = 0;
    }
    animate(main, { 'scrollTop': imgIndex * liHeight });
    console.log(imgIndex * liHeight);
}
//向前切换
function movePrev() {
    // 图片切换
    imgIndex--;
    if (imgIndex < 0) {
        imgIndex = li.length / 3 - 1;
        main.scrollTop = (li.length - 1) * liHeight;
    }
    animate(main, { 'scrollTop': imgIndex * liHeight });
}
// 点击下一页
next.onclick = function() {
    moveNext();
}
// 点击上一页
prev.onclick = function() {
    movePrev();
}

//中间商品数据获取
var show = $1('.show');
var ope = $2('.ope .list li');
//console.log(ope);
var mtitle = $1('.title p');
var bk = $1('.bk');
var cg = $1('.price span');
//console.log(mtitle);
for (let index = 0; index < 9; index++) {
    (function(x) {
        ope[x].onclick = function() {
            console.log(x);
            ajax({
                url: '../data/link.json',
                type: 'get',
                data: 'null',
                dataType: 'json',
                success: function(data) {
                    var json = JSON.parse(data);
                    var needJson = json[x];
                    console.log(mtitle.innerHtml);
                    mtitle.innerHTML = `<span>新品</span>${needJson.tit.titMsg}`
                    bk.innerText = needJson.contr;
                    cg.innerText = needJson.showhead.charge;
                },
                error: function(status) {
                    alert(status);
                }
            });
        }
    })(index)
}