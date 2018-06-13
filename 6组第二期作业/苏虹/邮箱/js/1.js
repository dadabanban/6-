var getEle = (function () {
    var oId = function (ele) {
        var id = document.getElementById(ele);
        return id
    };
    var oMust = function (num) {
        var must = document.getElementsByClassName("must")[num];
        return must
    };
    return{
        oId:oId,
        oMust:oMust
    }
})();
var oAddress =getEle.oId("address");
var must = getEle.oMust(0);
var reg = /^[a-z][a-zA-Z\d_]{5,17}/;
function oInput(ele,ele1,reg,ttext,ftext) {
    ele.onblur=function(){
        if (ele.value!==""){
            if (reg.test(ele.value)){
                ele1.innerHTML = ttext;
                ele1.style.color = "green";
            }else{
                ele1.innerHTML = ftext;
                ele1.style.color = "red";
            }
        }else {
            ele1.innerHTML = ftext;
            ele1.style.color = "red";
        }
    };
}
oInput(oAddress,must,reg,"恭喜，该邮件地址可注册","长度应为6~18个字符");
var oWord = getEle.oId("word");
//var reg1 = /^[a-zA-Z\d]{6,16}$/;
var reg1 = /^(a-z|A-Z|\d){6,16}$/;
var must1 = getEle.oMust(1);
oInput(oWord,must1,reg1,"密码设置正确","该密码不符合标准");
var aWord = getEle.oId("aWord");
var must2 = getEle.oMust(2);
aWord.onblur = function () {
    if (oWord.value===aWord.value&&aWord.value!==""){
        must2.innerHTML = "密码正确";
        must2.style.color = "green";
    }else {
        must2.innerHTML = "两次填写的密码不一致";
        must2.style.color = "red";
    }
};
var iphone = getEle.oId("iphone");
var must3 = getEle.oMust(3);
var reg2 = /^1[35678]\d{9}/;
oInput(iphone,must3,reg2,"手机号码可用","请填写正确的手机号");
var oDiv = getEle.oId("div1");
var aDiv = getEle.oId("aDiv");
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
var code = getEle.oId("code");
var must4 = getEle.oMust(4);
code.onblur = function () {
    if (code.value===oDiv.innerHTML){
        must4.innerHTML = "验证码正确";
        must4.style.color = "green";
    }else {
        must4.innerHTML = "请重新输入验证码";
        must4.style.color = "red";
    }
};
var oNote = getEle.oId("note");
var must5 = getEle.oMust(5);
var reg3 = /\d{6}/;
oInput(oNote,must5,reg3,"短信验证成功","请重新获取验证码");
var oLogin = getEle.oId("login");
oLogin.onclick=function () {
    if (reg.test(oAddress.value)&&reg1.test(oWord.value)&&oWord.value===aWord.value&&aWord.value!==""&&reg2.test(iphone.value)&&code.value===oDiv.innerHTML&&reg3.test(oNote.value)){
        alert("注册成功")
    }else {
        alert("注册失败")
    }
};
var oInputs = document.getElementsByClassName("oInput");
console.log(oInputs);
var musts = document.getElementsByClassName("must");
console.log(musts);
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


