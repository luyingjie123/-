// 登陆
function dsadwadsa(){
    let zhanghaoCs=false;
let zhanghaokongCs=false;
let mimaCs=false;
let mimakongCs=false;

$(".zhanghao").blur(function(){
    zhanghao()
})
function zhanghao(){
    let rr=/^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}|[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+|guchi$/
    if(rr.test($(".zhanghao").val())){
    $(".ZUOnonoe").eq(0).css("display","none")
    zhanghaoCs=true;
    }else{
    $(".ZUOnonoe").eq(0).css("display","block")
    }
  // 失去焦点时显示不能为空
    if($(".zhanghao").val()==""){
    $(".ZUOnonoe").eq(1).css("display","block")
    $(".ZUOnonoe").eq(0).css("display","none")
    }else{
        zhanghaokongCs=true
    $(".ZUOnonoe").eq(1).css("display","none")
    }
}
// 密码
$(".mima").blur(function(){
    mima()
})
function mima(){
    let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}|123456$/;
    if(reg.test($(".mima").val())){
        panduan=true;
    $(".ZUOnonoe").eq(2).css("display","none")
    mimaCs=true;
    }else{
    $(".ZUOnonoe").eq(2).css("display","block")
    }
  // 失去焦点时显示不能为空
    if($(".mima").val()==""){
    $(".ZUOnonoe").eq(3).css("display","block")
    $(".ZUOnonoe").eq(2).css("display","none")
    }else{
        mimakongCs=true;
    $(".ZUOnonoe").eq(3).css("display","none")
    }
}
$(".btn-denglu").click(function(){
    mima()
    zhanghao()
    if(zhanghaoCs&&zhanghaokongCs&&mimaCs&&mimakongCs==true){
        
    let username= $(".zhanghao").val()
    let password=$(".mima").val()
    let url = "http://jx.xuzhixiang.top/ap/api/login.php";
    $.get(url,{username,password}).then(res=>{
        console.log(res);
        if ((res.data.code = 1)) {
            let uid = res.data.id;
            let token = res.data.token;
            let username = res.data.username;
            localStorage.setItem("uid", uid);
            localStorage.setItem("token", token);
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            alert(res.msg);
            location.href = "home page.html"; 

          } else {
            alert(res.msg);


          }

        
    })
    }




})

}
dsadwadsa()


// 弹窗
function tanchuang() {
     // 获取弹窗
     var modal = document.getElementById("myModal");
     // 打开弹窗的按钮对象
     var btn = document.getElementById("myBtn");
     // 获取 <span> 元素，用于关闭弹窗
     var span = document.querySelector(".close");
     // 点击按钮打开弹窗
     btn.onclick = function () {
       modal.style.display = "block";
     };
     // 点击 <span> (x), 关闭弹窗
     span.onclick = function () {
       modal.style.display = "none";
     };
     // 在用户点击其他地方时，关闭弹窗
     window.onclick = function (event) {
       if (event.target == modal) {
         modal.style.display = "none";
       }
     };
  }
  tanchuang() 

//   注册
let ltj6661=false
let ltj6662=false
let ltj6663=false
let ltj6664=false
function zucezczh(){
    let rr=/^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}|[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+|guchi|lxrsb$/
if(rr.test($(".zc-zh").val())){
    $(".shoujihao-mm").eq(0).css("display","none")
 ltj6661=true

}else{
    $(".shoujihao-mm").eq(0).css("display","block")
}
// 失去焦点时显示不能为空
if($(".zc-zh").val()==""){
$(".shoujihao-mm").eq(1).css("display","block")
$(".shoujihao-mm").eq(0).css("display","none")

}else{
$(".shoujihao-mm").eq(1).css("display","none")
ltj6662=true

}

}
$(".zc-zh").blur(function(){
    zucezczh()
    
})
// 验证码
function yanzhengmazcyzm(){
    let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}|123456$/;
    if(reg.test($(".zc-yzm").val())){
        panduan=true;
    $(".shoujihao-mm").eq(2).css("display","none")
    ltj6663=true
  
    }else{
    $(".shoujihao-mm").eq(2).css("display","block")
    }
  // 失去焦点时显示不能为空
    if($(".zc-yzm").val()==""){
    $(".shoujihao-mm").eq(3).css("display","block")
    $(".shoujihao-mm").eq(2).css("display","none")
    }else{
    $(".shoujihao-mm").eq(3).css("display","none")
    ltj6664=true
    }
}
$(".zc-yzm").blur(function(){
    yanzhengmazcyzm()

 
})
// 密码(非必填)
function mimazczhdsac(){
    let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}|123456$/;
    if(reg.test($(".zc-zh-dsac").val())){
    $(".shoujihao-mm").eq(4).css("display","none")
    }else{
    $(".shoujihao-mm").eq(4).css("display","block")
    }
      // 失去焦点时显示不能为空
     if($(".zc-zh-dsac").val()==""){
        $(".shoujihao-mm").eq(4).css("display","none")
        }
}
$(".zc-zh-dsac").blur(function(){
    mimazczhdsac()
})

$(".cjzh-ttssa").click(function(){
    mimazczhdsac()
    yanzhengmazcyzm()

    if(ltj6661&&ltj6662&&ltj6663&&ltj6664==true){
        let  usernameaaa=document.querySelector(".zc-zh")
        let  passwordaaa=document.querySelector(".zc-yzm")
            let username = usernameaaa.value;
            let password = passwordaaa.value;
            let url = "http://jx.xuzhixiang.top/ap/api/reg.php";
            let params = { username, password };
            axios.get(url, { params }).then((res) => {
            let SSS=res.data.msg
              if(SSS.length==7){
                alert("账号存在，请换个账号注册")
                // 失败的时候让输入框的内容的消失
                usernameaaa.value="";
                passwordaaa.value="";
            }else{
                alert("注册成功")
                
            location.href = "GUCHdenglu.html";
            }

            });
    
      
    }
})







