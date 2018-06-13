let oinputs = document.getElementsByTagName("input");
let op=document.getElementsByClassName("p");
let reg = /^[a-zA-Z]\w{5,17}$/;
oinputs[0].onblur=function () {
    let ovalue = oinputs[0].value;
    if(reg.test(ovalue)){
        op[0].innerHTML="恭喜，该邮件地址可注册";
        op[0].style.color="green";
    }else {
        op[0].innerHTML="该邮件地址已被注册";
        op[0].style.color="red";
    }
};
let reg1 = /^[a-zA-Z0-9]{6,16}$/;
oinputs[1].onblur=function () {
    let ovalue = oinputs[1].value;
    if(reg1.test(ovalue)){
        op[1].innerHTML="密码强度：中";
        op[1].style.color="green";
    }else {
        op[1].innerHTML="密码长度应为6~16个字符";
        op[1].style.color="red";
    }
};
oinputs[2].onblur=function () {
    if(oinputs[2].value===oinputs[1].value){
        op[2].innerHTML="恭喜验证成功";
        op[2].style.color="green";
    }else {
        op[2].innerHTML="两次填写的密码不一致";
        op[2].style.color="red";
    }
};
let reg2 = /^1\d{10}$/;
oinputs[3].onblur=function () {
    let ovalue = oinputs[3].value;
    if(reg2.test(ovalue)){
        op[3].innerHTML="手机号码可用";
        op[3].style.color="green";
    }else {
        op[3].innerHTML="请填写正确的手机号";
        op[3].style.color="red";
    }
};
oinputs[7].onclick=function () {
    if(reg.test(oinputs[0].value)&&reg1.test(oinputs[1].value)&&oinputs[2].value===oinputs[1].value&&reg2.test(oinputs[3].value)){
        alert("恭喜你注册成功");
    }else {
        alert("请您核对后提交");
    }
};
