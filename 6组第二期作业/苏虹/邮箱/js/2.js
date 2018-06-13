let oInput = document.getElementsByClassName("oInputs");
let oMust = document.getElementsByClassName("oMusts");
let reg = /^[a-zA-Z][a-zA-Z\d_]{5,17}/;
let reg1 = /^[a-zA-Z\d]{6,16}$/;
let reg2 = /^1[35678]\d{9}/;
var reg3 = /\d{6}/;
let ary = [reg,reg1,reg2,reg3];
let ary1 = ["恭喜，该邮件地址可注册","密码设置正确","手机号码可用","短信验证成功"];
let ary2 = ["长度应为6~18个字符","该密码不符合标准","请填写正确的手机号","请重新获取验证码"];
for (let i = 0;i<oInput.length;i++){
    oInput[i].onblur=function () {
        if (ary[i].test(this.value)){
           oMust[i].innerHTML=ary1[i];
           oMust[i].style.color = "green"
        }else {
            oMust[i].innerHTML = ary2[i];
            oMust[i].style.color = "red"
        }
    }
}
var aWord = document.getElementById("aWord");
var must2 = document.getElementsByClassName("must")[2];
aWord.onblur = function () {
    if (oInput[1].value===aWord.value&&aWord.value!==""){
        must2.innerHTML = "密码正确";
        must2.style.color = "green";
    }else {
        must2.innerHTML = "两次填写的密码不一致";
        must2.style.color = "red";
    }
};
var oDiv = document.getElementById("div1");
var aDiv = document.getElementById("aDiv");
aDiv.onclick = function () {
    var str = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    var ary = [];
    while (ary.length<4){
        var res = str[Math.floor(Math.random()*62)];
        if (ary.indexOf(res)===-1){
            ary.push(res)
        }
    }
    var str1 = ary.join("");
    oDiv.innerHTML = str1
};
var code = document.getElementById("code");
var must4 = document.getElementsByClassName("must")[4];
code.onblur = function () {
    if (code.value===oDiv.innerHTML){
        must4.innerHTML = "验证码正确";
        must4.style.color = "green";
    }else {
        must4.innerHTML = "请重新输入验证码";
        must4.style.color = "red";
    }
};
var oInputs = document.getElementsByClassName("oInput");
var musts = document.getElementsByClassName("must");
for (var i = 0;i<oInputs.length;i++){
    ~(function (i) {
        var zhuFen = musts[i].innerHTML;
        var peiXun = musts[i].style.color;
        oInputs[i].onfocus = function () {
            musts[i].innerHTML =zhuFen;
            musts[i].style.color = peiXun
        }
    })(i);
}
var checkbox = document.getElementsByTagName("input")[6];
var oLogin = document.getElementById("login");
oLogin.onclick=function () {
    if (reg.test(oInput[0].value)&&reg1.test(oInput[1].value)&&oInput[1].value===aWord.value&&aWord.value!==""&&reg2.test(oInput[2].value)&&code.value===oDiv.innerHTML&&reg3.test(oInput[3].value)){
        alert("注册成功")
    }else {
        alert("注册失败");
    }
};