/**
 * Created by cdyk on 2018/6/9.
 */
var oDiv = document.getElementById("regMain");
var iptList = oDiv.getElementsByTagName("input");
var tipList = document.getElementsByClassName("nameTips");
var regBtn = document.getElementsByClassName("regBtn")[0];
var tipAry = ["6~18个字符，可使用字母、数字、下划线，需以字母开头", "6~16个字符，区分大小写", "请再次填写密码", "忘记密码时，可以通过该手机号码快速找回密码", "请填写图片中的字符，不区分大小写"];
//校验规则
var successAry = ["恭喜，该邮件地址可注册", "密码强度:弱", "√", "手机号码可用", "验证码正确"];//校验成功提示
var warnAry = ["长度应为6-18个字符且需以字母开头", "密码长度应为6~16个字符", "两次填写的密码不一致", "请填写正确的手机号", "验证码不正确，请重新填写"];
//校验错误提示
var regWarnAry = ["请填写邮件地址", "请填写密码", "请填写确认密码", "请填写手机号码", "请填写验证码"];//立即注册校验
//var flag=null;
let iptAry = [...iptList];
let classNameAry = [];
iptAry.forEach((item)=> {
    classNameAry.push(item.className)
})

for (let i = 0; i < iptList.length; i++) {
    iptList[i].onfocus = function () {
        //输入框获取焦点时
        tipList[i].innerHTML = tipAry[i];
        tipList[i].style.color = "#999";
        this.className = classNameAry[i] + " focusStyle";
    }
    iptList[i].onblur = function () {
        //输入框失去焦点时
        if(this.value){
            var cfmPwdReg = new RegExp('^' + iptList[1].value + '$', 'g');//确认密码的变量
            var regAry = [/[a-zA-Z]\w{5,17}/, /^\S{6,16}$/, cfmPwdReg, /^1\d{10}/, /adsk/];//正则
            if (regAry[i].test(this.value)) {
                tipList[i].innerHTML = successAry[i];
                tipList[i].style.color = "green";
                this.className = classNameAry[i] + " passStyle";
            } else {
                tipList[i].innerHTML = warnAry[i];
                this.className = classNameAry[i] + " warnStyle";
                tipList[i].style.color = "red";
            }
        }
    }
}
regBtn.onclick = function () {
    for (let i = 0; i < iptList.length; i++) {
        if (!iptList[i].value) {
            iptList[i].className = classNameAry[i] + " warnStyle";
            tipList[i].style.color = "red";
            tipList[i].innerHTML = regWarnAry[i];
            break
        }
    }
}
