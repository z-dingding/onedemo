
var dragDiv = document.querySelector(".div_drag");
var targetDiv = document.querySelector(".div_dragTwo");

dragDiv.ondragstart = function () {
    console.log("拖拽开始");
}

dragDiv.ondragleave = function () {
    console.log("拖拽离开");
}

dragDiv.ondragend = function () {
    console.log('拖拽结束...');
}

dragDiv.ondrag = function () {
    console.log('拖拽');
}


//当被拖拽元素进入时触发
targetDiv.ondragenter = function () {
    console.log("来了.");
}

// 当被拖拽元素离开时触发
targetDiv.ondragleave = function () {

    console.log("走了..");
}

// 当拖拽元素在 目标元素上时，连续触发
targetDiv.ondragover = function (e) {
    //阻止拖拽事件的默认行为
    e.preventDefault(); //【重要】一定要加这一行代码，否则，后面的方法 ondrop() 无法触发。

    console.log("拖拽元素在 目标元素上");
}

// 当在目标元素上松开鼠标是触发
targetDiv.ondrop = function () {
    console.log("松开鼠标了....");
}




//临时的盒子 用于存放当前拖拽的元素
var boxs = document.querySelectorAll('.div_drag div');
var two = document.querySelector('.div_dragTwo');
var temp = null;
//给小盒子分别绑定拖拽事件
for (var i = 0; i < boxs.length; i++) {
    boxs[i].ondragstart = function () {
        //                保持当前拖拽的元素
        temp = this;
        console.log(temp);
    }

    boxs[i].ondragend = function () {
        //               当拖拽结束 ，清空temp
        temp = null;
        console.log(temp);
    }
}

//        目标元素的拖拽事件
two.ondragover = function (e) {
    //            阻止拖拽的默认行为
    e.preventDefault();
}
//        当在目标元素上松开鼠标是触发
two.ondrop = function () {
    //将拖拽的元素追加到 two里面来
    targetDiv.appendChild(temp);
}




//================================== 记住密码相关================================
var btn = document.querySelector(".login");
var remberpwd = document.querySelector("#remember");
var account = document.querySelector(".account");
var pwd = document.querySelector(".pwd");

var storageAccount = window.localStorage.getItem("account");
var storagePwd = window.localStorage.getItem("pwd");
if(storageAccount != null){
    account.value = storageAccount;
    pwd.value=storagePwd;

}
btn.onclick= function () {
    if (remberpwd.checked) {
        //记住数据
        window.localStorage.setItem('account', account.value);
        window.localStorage.setItem('pwd', pwd.value);
    } else {
        // 清除数据
        window.localStorage.removeItem('account');
        window.localStorage.removeItem('pwd');
    }
}

var networkState = window.online
alert("网络状态为"+networkState);


window.addEventListener('online', function () {
    alert('网络连接建立！');
});

window.addEventListener('offline', function () {
    alert('网络连接断开！');
});