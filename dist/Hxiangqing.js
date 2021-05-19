var flag = true;

$(window).scroll(function(){
    if(flag){
        var st=$(this).scrollTop();
        // 内容区块展示时 对应的导航点亮
$("#float-jiekou img").each(function(){
    if(st>=$(this).offset().top-$(this).outerHeight()/2){
        var index=$(this).index();
        $(".cebian div").eq(index).addClass("heise").siblings().removeClass("heise");

    }
})
    }


})

 // 点击导航栏 对应的内用区块展示
$(".cebian div").click(function(){
    flag=false;
    var index=$(this).index();
    $("body,html")
    .stop()
    .animate(
       {scrollTop:$("#float-jiekou img").eq(index).offset().top},
    800,function(){
        flag=true;
    });
    $(this).addClass("heise").siblings().removeClass("heise")
})

// 接口

let parsObj = new URLSearchParams(location.search);
let id = parsObj.get("id");
if(id==null){
    alert("商品找不到");
    location.href = "Httomie.html";

}else{
console.log(id);
    $.get("http://jx.xuzhixiang.top/ap/api/detail.php",{id},res=>{
    console.log(res.data);
    $(".img-img").attr("src", res.data.pimg)
    $(".pname").html(res.data.pname)
    $(".pprice").html(res.data.pprice)

    $(".jrgoud").click(function(){
        let uid=localStorage.getItem("uid");
        let pid=res.data.pid;
        $.get("http://jx.xuzhixiang.top/ap/api/add-product.php",{
           uid,
           pid,
           pnum:1,
   
        },res=>{
            console.log(res);
            location.href = "BOOS.html";
            
        })
      
   })
   

})
}
$(window).scroll(function(){
    clearTimeout(timer);
    timer = setTimeout(() => {
      var st = $(this).scrollTop()
      if(st>=300){
        ;
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
    console.log(locasd);
   ssdsadsa.innerHTML=locasd;
   }
   gudyjg()
   
//    $("#float-jiekou img").each(function(){
//     if(st>=$(this).offset().top-$(this).outerHeight()/2){
//         var index=$(this).index();
//         $(".cebian div").eq(index).addClass("heise").siblings().removeClass("heise");

//     }
// })
let sdassza= $(".zhifu").offset().top;
console.log(sdassza);


 

