 // ----------------------------------------------------------------

      // fadeToggle() 淡入淡出
      // slideDown("slow"); //滑动
      // ----------------------------------------------------------------
      let timer = null;
      let count = 0;
      // 移入
      // 第一次放上去的时候 下滑
      // children 子元素
      $(".top-ul").children().mouseover(function () {
        // 第一次划过的时
        if (count == 0) {
          let num = $("li").index($(this)); //获取下标
          // 箭头隐藏和出现
          $(".kailong").css("display", "none").eq(num).css("display", "block"); //显示
          $(".top-shoubiao").css("display", "none").eq(num).slideDown('slow'); //显示

          count++;
        }
         else {  
          let num = $("li").index($(this)); //获取下标
          // 箭头
          $(".kailong").css("display", "none").eq(num).css("display", "block"); //显示
          // 防抖
          clearTimeout(timer);
          timer = setTimeout(() => {
            $(".top-shoubiao")
              .css("display", "none")
              .eq(num)
              .css("display", "block"); //显示
             return false;

          }, 500);
        }
        return false;
      });
      // 主要内容消失
      // //   内容盒子移处0.5秒后的时候消失，防止下一个还没显示就消失   减少之间的卡顿
      let pos=0;
      $(".top-ul-sz").mouseleave(function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
          $(".top-shoubiao").css("display", "none");
          count = 0;
        }, 500);
        return false;
      });
    //   移入到top主要内容消失
      $(".top").mouseover(function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
          $(".top-shoubiao").css("display", "none");
          count = 0;
        }, 500);
        return false;
      });






    //   移入出现黑色背景
      $(".yinying").mouseover(function () {
        $(".yinying").css("background", "rgb(13, 14, 13)");
      });
      $(".top-ul").mouseover(function () {
        $(".yinying").css("background", "rgb(13, 14, 13)");
      });
      $(".top").mouseover(function () {
        $(".yinying").css("background", "rgb(13, 14, 13)");
      });
      //   移入出现黑色背景
    //   移入黑色背景消失
      $(".top").mouseout(function () {
        $(".yinying").css("background", "none");
      });
     
    
 


    // 顶部的滑过效果
    // 配送)
    // 移入
    $(".peisong").mouseover(function(){
        $(".top-left-zi").css("display", "block"); 
    })
    // 内容移出
    $(".top-left-zi").mouseout(function () {
        $(".top-left-zi").css("display", "none");
        $(".kailong-denglu").css("display", "none");
      });
//  右边3个的淡入淡出
    $(".you").mouseover(function(){
        let int=$(".you").index($(this))
        console.log(int); //fadeIn("slow")
        $(".you-neirong").css("display", "none").eq(int).css("display", "block"); //滑动
    })
    $(".you-neirong").mouseout(function(){
        let int=$(".you-neirong").index($(this))
        $(".you-neirong").css("display", "none")
    })




    // -------------------------------------------
  //  内容
 
  // 回到顶部
$(".dingbu").click(function(){
  $("body,html").stop().animate({scrollTop:0},1000)
})


 // 下拉
  $(window).scroll(function(){
    clearTimeout(timer);
    timer = setTimeout(() => {
      var st = $(this).scrollTop()

      if(st>250){
        
             $(".top-min").css("display","none")//头子
             $(".ttes").css("display","none")//logu隐藏
             $(".yinying").addClass("yinying-top-JQ")//把阴影定位到顶部
             $(".top-ul").addClass("top-ul-top-JQ ")// 7个li到顶部位置
             $(".top-ul-sz").addClass("top-ul-sz-top-JQ")// // 下拉内容
             // 左边的
             $(".top-left").addClass("top-left-top-JQ")
             $(".xin-esasx").addClass("xin-left")
             $(".peisong-tes").css("display","none")
             $(".khfw").css("display","none")
             $("#top-right").addClass("top-right-top-JQ")//权重问题出不来
       
           }else{
       
             $(".top-min").css("display","block")//头子
             $(".ttes").css("display","block")//logu隐藏
             $(".yinying").removeClass("yinying-top-JQ")//把阴影定位到顶部
             $(".top-ul").removeClass("top-ul-top-JQ ")// 7个li到顶部位置
             $(".top-ul-sz").removeClass("top-ul-sz-top-JQ")// // 下拉内容
             // 左边的
             $(".top-left").removeClass("top-left-top-JQ")
             $(".xin-esasx").removeClass("xin-left")
       
             $(".peisong-tes").css("display","block")
             $(".khfw").css("display","block")
             $("#top-right").removeClass("top-right-top-JQ")//权重问题出不来
       
            
       
           }
     
    
    }, 100)
  

  })
    //   顶部购物袋显示
    function gudyjg(){
      let ssdsadsa=document.querySelector(".locasd")
      let locasd=localStorage.getItem("locassed")
     ssdsadsa.innerHTML=locasd;
     }
     gudyjg()


 
   
   