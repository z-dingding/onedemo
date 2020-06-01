
class Menu{
    constructor(id){
      this.box =document.querySelector(id);
      this.ul =this.box.querySelector("ul");
      this.lis =document.querySelectorAll("li");
    }
}


  // 目标： 默认显示一个 当前的样式
        // 点击导航，实现切换
        // key 表示的当前显示的是第几个

        (function tabClick(key) {
          // 获取所有的导航
          var navs = document.querySelectorAll('nav a');
          // 遍历 给导航 绑定事件，并且添加当前样式
          for (var i = 0; i < navs.length; i++) {
              // 如果是用户指定的当前样式
              if (key == i) {
                  navs[i].classList.add('active');
                  // 拿到要显示内容section的id
                  var secId = navs[i].dataset['cont'];
                  // 获取对应的section标签
                  document.querySelector('#' + secId).style.display = 'block';
              }

              // 给每一个导航绑定点击事件
              navs[i].onclick = function () {
                  // 排他
                  // 之前有active样式的清除, 之前显示的section 隐藏
                  var currentNav = document.querySelector('.active');
                  // 获取对应的内容区域 ，让其隐藏
                  var currentId = currentNav.dataset['cont'];
                  // 去掉导航的active 样式
                  currentNav.classList.remove('active');
                  // 对应的内容区域
                  document.querySelector('#' + currentId).style.display = 'none';

                  // 突出显示自己 导航添加样式  对应的section 显示
                  // 给自己添加active样式,classList 属性返回元素的类名，作为 DOMTokenList 对象
                  this.classList.add('active');
                  // 对应的section模块显示出来 获取自定义属性值的使用
                  var myId = this.dataset['cont'];
                  document.querySelector('#' + myId).style.display = 'block';
              }
          }

      })(0);
