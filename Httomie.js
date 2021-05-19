
// 接口\
let uid = localStorage.getItem("uid");

$.get("http://jx.xuzhixiang.top/ap/api/productlist.php",{uid},res=>{
    let str="";
    res.data.forEach(i => {
        str+=`
        
        <a href="Hxiangqing.html?id=${i.pid}">
        <div class="shujufq">
          <div class="danxuan-shujufq">
            <input type="checkbox" />
          </div>
          <!-- 死页面 -->
          <div class="siyemian">
            <img
              src="https://res.gucci.cn/resources/2021/4/21/16189956288569590_ts_316X316.png"
              alt=""
            />
          </div>
          <!-- 活数据 -->
          <div class="huoshuju">
            <img
              src="${i.pimg}"
              alt=""
            />
            <p class="bt-wax">${i.pname}</p>
            <p class="jg-guchi">￥2750</p>
            <p><a href="">${i.pprice}</a></p>
          </div>
        </div>
        </a> 
        
        `
    });
    $(".neirong ").html(str)
     // 通过添加数据库的内容 修改img的内容
    //  $(".TOP-TOP-IMG").attr("src", res.data[6].pimg)
    console.log($(".shujufq"));
    $(".shujufq").mouseenter(function(){
        let num=$(".shujufq").index($(this))
        $(".siyemian").eq(num).css("display","none")
        $(".huoshuju").eq(num).css("display","block")
    
    })
    $(".shujufq").mouseleave(function(){
    
        let num=$(".shujufq").index($(this))
        $(".siyemian").eq(num).css("display","block")
        $(".huoshuju").eq(num).css("display","none")
    
    })

})
  //   顶部购物袋显示
  function gudyjg(){
    let ssdsadsa=document.querySelector(".locasd")
    let locasd=localStorage.getItem("locassed")
   ssdsadsa.innerHTML=locasd;
   }
   gudyjg()


   



   


