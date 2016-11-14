/*
params:{
    outBox: IdName,
    imgs: [],
    aHref: "#",
    imgSize: {width:'',height:''}
    timeStep: 3000
}
 */
;(function (window){
function Slide(config) {
    this._init(config);
};

Slide.prototype = {
    constructor: Slide,
    _init: function (config) {
        //初始化参数
        this.outBox = document.getElementById(config.outBox);
        this.imgs = config.imgs;
        this.aHref = config.aHref || "#";
        this.timeStep = config.timeStep || 3000;
        this.imgWidth = config.imgSize.width;
        this.imgHeight = config.imgSize.height;

        //当前下标
        this.currentIndex = 0;  

        //对以下方法的调用
        this.renderHtml();  //渲染html结构，并将之后用到的一些公用的变量用this提取出来
        this.setStyle();    //设置元素的样式
        
        this.setAni();
        this.mouseEvent();
    },

    //渲染html结构，并将之后用到的一些公用的变量用this提取出来
    renderHtml: function() {
        //1.将图片列表追加到html结构中
        var imgArr = [],
            i = 0;
        this.len = this.imgs.length;
        var ul = document.createElement("ul");
        //设置图片的最大宽度为满屏
        var maxW = document.body.offsetWidth;
        //因为要做无缝协接，所以要比传进的图片多一张（最后一张图片为第一张图片）
        for (; i <= this.len; i++) {
            var li = document.createElement("li");      
            var a = document.createElement("a");
            a.href = this.aHref;
            var img = document.createElement("img");
            img.style.width = this.imgWidth + "px";
            img.src =  i === this.len ? this.imgs[0] : this.imgs[i];                
            a.appendChild(img);
            li.appendChild(a);
            ul.appendChild(li);
        }            
        this.outBox.appendChild(ul);

        //2.将数字列表也添加到html结构中
        var ol = document.createElement("ol");
        for (i = 0; i < this.len; i++) {
            var li = document.createElement("li");
            if (i === 0) {
                li.className = "current";
            }
            li.innerHTML = i + 1;
            ol.appendChild(li);
        }
        (this.outBox).appendChild(ol);

        //3.将轮播图上的左右箭头也添加到html结构中去
        var arrowDiv = document.createElement("div");
        arrowDiv.id = "arrow_box";
        var arrowLeft = document.createElement("a");
        arrowLeft.className = "arrow_left";
        arrowLeft.href = "javascript:;";
        arrowLeft.innerHTML = "<";
        var arrowRight = document.createElement("a");
        arrowRight.className = "arrow_right";
        arrowRight.href = "javascript:;";
        arrowRight.innerHTML = ">";
        arrowDiv.appendChild(arrowLeft);
        arrowDiv.appendChild(arrowRight);
        this.outBox.appendChild(arrowDiv);

        //获取之后将会用到的相应数据
        this.ul = this.outBox.getElementsByTagName("ul")[0];            
        this.ulLis = this.outBox.getElementsByTagName("ul")[0].getElementsByTagName("li");
        this.olLis = this.outBox.getElementsByTagName("ol")[0].getElementsByTagName("li");
        
    },
    //设置渲染html的基本样式
    setStyle: function () {
        var imgs = this.outBox.getElementsByTagName("img"),
            //1.设置ul的宽度（为所有图片的宽度之和）和高度          
            ulWidth = this.imgWidth * (this.len + 1),
            ulHeight = this.imgHeight,
            ul = this.outBox.getElementsByTagName("ul")[0];

        for (var i = 0; i < imgs.length; i++) {
            imgs[i].style.width = this.imgWidth + "px";
            imgs[i].style.height = this.imgHeight + "px";
        }   

        this.outBox.style.width = this.imgWidth  + "px";  
        this.outBox.style.height = this.imgHeight + "px";  
        this.outBox.style.position = "relative";
        this.outBox.style.overflow = "hidden";

        ul.style.width = ulWidth + "px";      
        ul.style.height = ulHeight + "px"; 
        ul.style.position = 'absolute';

        for (var i = 0; i < this.ulLis.length; i++) {
            this.ulLis[i].style.float = "left";
        }

        document.getElementById("arrow_box").style.display = "none";                
    },

    //设置自动轮播时的函数
    autoPlay: function () {    
        var that = this;
        //利用排他思想，先把所有的ul和ol中的li的类名清空，然后给当前的索引对应的li添加current类名
        for (var i = 0; i < this.len; i++) {
            this.ulLis[i].className = "";
            this.olLis[i].className = "";
        }
        //当到了倒数第二张图片时，做到倒数第一张的动画，然后瞬间定位到第一张
        if (this.currentIndex >= this.len) { 
            if (this.currentIndex === this.len) {
                animate(this.ul, {left:-this.imgWidth*this.currentIndex}, function(){
                    that.ul.style.left = 0;
                    that.currentIndex = 0;
                    that.olLis[0].className = "current"; 
                });
            }
            
        } else if (this.currentIndex <= 0) {//当到了第一张张图片时，先瞬间定位到倒数第一张，然后动画到倒数第二张            
            this.ul.style.left = -(this.len) * this.imgWidth + "px";
            animate(this.ul, {left:-(this.len - 1) * this.imgWidth});
            this.currentIndex = this.len - 1;
            this.olLis[this.currentIndex].className = "current";  
        } else {
            this.olLis[this.currentIndex].className = "current";  
            this.animation();
        }
    },
    //设置间隔函数
    setAni: function () {
        var that = this;   
        this.timer = setInterval(function(){
            that.currentIndex++;  
            that.autoPlay();
            // console.log(that.timeStep);       
        },that.timeStep);
    },
    //设置鼠标移上事件
    mouseEvent: function () {
        var that = this,
            i;
        //1.设置整个大盒子的鼠标移上事件
        this.outBox.onmouseover = function () {
            document.getElementById("arrow_box").style.display = "block";
            clearInterval(that.timer);
        }
        this.outBox.onmouseout = function () {
            document.getElementById("arrow_box").style.display = "none";
            that.timer = setInterval(function(){
                that.currentIndex++; 
                that.autoPlay();
            },that.timeStep);
        }
        //2.设置ol中li的鼠标划过事件
        for (i = 0; i < this.len; i++) {
            this.olLis[i].index = i;
            this.olLis[i].onmouseover = function () {
                for (var i = 0; i < that.len; i++) {
                    that.ulLis[i].className = "";
                    that.olLis[i].className = "";
                }
                this.className = "current";
                that.ulLis[this.index].className = "current";
                that.currentIndex = this.index;
                that.animation();
            }
        }
        //3.设置左右箭头的点击事件
        var arrowLeft = document.getElementById("arrow_box").getElementsByTagName("a")[0];
        var arrowRight = document.getElementById("arrow_box").getElementsByTagName("a")[1];
        arrowLeft.onclick = function () {
            that.currentIndex--;
            that.autoPlay();
        }
        arrowRight.onclick = function () {
            that.currentIndex++;
            that.autoPlay();
        }
    },
    animation: function (fn) {
        animate(this.ul, {left:-this.imgWidth*this.currentIndex}, fn);
    }
}

function animate(obj, json, fn) {
    clearInterval(obj.timer);
    var leader,target,step;
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {
                leader = getStyle(obj, k) * 100;
                target = json[k] * 100;
                step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
                if (leader !== target) {
                    flag = false;
                }
            } else if (k === "zIndex") {
                obj.style[k] = json[k];
            } else {
                leader = parseInt(getStyle(obj, k)) || 0;
                target = json[k];
                step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
                if (leader !== target) {
                    flag = false;
                }
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15);
}

function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}

window.MGS = Slide;
})(window);
    