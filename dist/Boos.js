let id=localStorage.getItem("uid")
$.get("http://jx.xuzhixiang.top/ap/api/cart-list.php",{id}).then(res=>{
    console.log(res);
    let arr=res.data;
    let aRRdat=arr.map(
        (v)=>`
        
        <div class="zynr">
        <div class="xianxian"></div>
        <div> <input class="dnasuan-dsa" type="checkbox" style="    margin-left: -15px;"></div>
    
        <!-- 图片 -->
        <div class="tipian-da"><img src="${v.pimg}" alt=""></div>
        <!-- 文字 -->
        <div class="wenzi-dsa">
            <a href="">
               ${v.pname}
            </a>
            <p>款号# 5749691X5EG6476</p>
            <p>款式：<span class="kuanshi">${v.pdesc}</span> </p>
            <p class="youhuo">有货</p>
            <p>预计发货后2-4个工作日送达</p>
            <p class="bianji"><span>编辑</span><span><input type="checkbox">加入心愿单</span><span class="shanchu" pid="${v.pid}">删除</span></p>
        </div>
        <!-- 数量 -->
        <div class="shuliang-dsa"><input class="DSADSADAS" type="number" min=1 value="${v.pnum}" pid-dara="${v.pid}"></div>
        <!-- 单价 -->
        <div class="zongjia-dsaxa">单价: <span >￥</span ><span class="dange" >${v.pprice}</span > </div>
        <div class="zongjia-dsaxa">总价: <span >￥</span ><span class="zongjia" >${v.pprice * v.pnum}</span > </div>


    </div>
        `
    )
    $(".dangehezifuqi").html(aRRdat)
    // 修改商品数量 获取单个商品总价
        function zjlj(){
            let input =document.querySelectorAll(".DSADSADAS")
            console.log(input);
            input.forEach((v,i)=>{
                v.onchange=function(){
                    if(this.value<1){
                    alert("没个10年脑瘫就做不出来这操作")
                    this.value=1;
                    }
                    let pnum = this.value; //数量
                    console.log(this.value);






                            let dange=document.querySelectorAll(".dange")
                            let zongjia=document.querySelectorAll(".zongjia")
                            let dangeT=(dange[i].innerHTML*1)
                            let zongjiaT=dangeT*pnum;
                            zongjia[i].innerHTML=zongjiaT
                        // 修改商品数量 
                        let uid = localStorage.getItem("uid");
                        let pid = this.getAttribute("pid-dara");
                        $.get(gxgwcsl,{pnum,uid,pid})
        bgx()
        shuliang()

                }
             })

        }
        zjlj()

        // 删除功能
        function shanchu(){
            let buttonts = document.querySelectorAll(".shanchu");
            buttonts.forEach(function(v,i){
                v.onclick=function(){
                    let pid = v.getAttribute("pid");
                    console.log(pid);
                    let uid = localStorage.getItem("uid");
                    $.get(soverm,{pid,uid})//删除数据
                //   v.parentNode.parentNode.remove();
            v.parentNode.parentNode.parentNode.remove();
            bgx()
            dxk()
            shuliang()
            
    
                }
            })

        }
        shanchu()

        // ************封装 勾选框被勾选，总价进入到底部的总价*************
        function bgx(){
            let dibuzongjia=document.querySelector(".dibuzongjia")//侧边总价
            let dnasuan=document.querySelectorAll(".dnasuan-dsa")//单选
            let zongjia=document.querySelectorAll(".zongjia")
            let zongjianum = 0; //存放商品总价
            for(let i=0;i<dnasuan.length;i++){
                if(dnasuan[i].checked==true){
                    zongjianum+=zongjia[i].innerHTML*1
                }
            }
            dibuzongjia.innerHTML=zongjianum;

        }
        bgx()
        // *********单选框的功能 单个的都被勾上了 全选为够
        function dxk(){
            let dnasuan=document.querySelectorAll(".dnasuan-dsa")//单选
            let quanxuan=document.querySelector(".quanxuan")//全选
            let arr=[...dnasuan];
            let isArr= arr.every((v)=>v.checked==true)
            quanxuan.checked=isArr;


        }
       
        dxk()
        // 全选框点击 单选框==全选
        function quanxuan(){
            let quanxuan=document.querySelector(".quanxuan")//全选
            let dnasuan=document.querySelectorAll(".dnasuan-dsa")//单选
            quanxuan.onchange=function(){
                dnasuan.forEach((v,i)=>{
                    v.checked=this.checked;
    
                })
                bgx()
                shuliang()
            }
        }
        quanxuan()
        // 单选
         function danxuan(){
            let dnasuan=document.querySelectorAll(".dnasuan-dsa")//单选
            dnasuan.forEach((v,i)=>{
                v.onclick=function(){
                    bgx()
                    dxk()
                    shuliang()
                }
    
            })
         }
         danxuan()

          // ******单选被勾上的时候  获取勾选按钮的数量放到   选中了几个
          function shuliang(){
            //   单选 全选 输入框都要加
            let dnasuan=document.querySelectorAll(".dnasuan-dsa")//单选
            let input =document.querySelectorAll(".DSADSADAS")
            let xuanzhongle=document.querySelector(".xuanzhongle")
        
          //   let see=input[0].value;
            let sed=0;
            let locassed=0; // 购物车一共有几个
            dnasuan.forEach((v,i)=>{
                locassed+=input[i].value*1;

                if(v.checked==true){
                  sed+=input[i].value*1;
                }
            })
            xuanzhongle.innerHTML=sed
            localStorage.setItem("locassed",locassed)
            gudyjg()
        
          }
        //   顶部购物袋显示
           function gudyjg(){
            let ssdsadsa=document.querySelector(".locasd")
            let locasd=localStorage.getItem("locassed")
           ssdsadsa.innerHTML=locasd;
           }
           gudyjg()
           
           
         

       

       
      





    


  
 































})