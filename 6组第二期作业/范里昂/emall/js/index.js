/*获取所有标签*/
let inputs = document.getElementsByTagName('input');
console.log(inputs);
let add = document.getElementsByClassName("add");
let address = document.getElementById("address");
let password = document.getElementById("password");
let repassword = document.getElementById("repassword");
let phone = document.getElementById("phone");
let mVcode = document.getElementById("mVcode");
let checkbox = document.getElementById("checkbox");

/*正则部分*/
//6~18个字符，可使用字母、数字、下划线，需以字母开头
let reg1 = /^[a-zA-Z]\w{5,17}/;
//6~16个字符，区分大小写
let reg2 = /\w{6,16}/;
//验证手机号
let reg3 = /^1[356789]\d{9}/;

/*验证邮箱地址*/

function Address() {
    inputs[0].onblur = function () {
        if (reg1.test(address['value'])) {
            add[0].innerHTML = '恭喜，该邮件地址可注册';
            add[0].style.color = 'green';
        } else {
            alert("输入有误，请重新输入");
            add[0].innerHTML = '请输入6~18个字符，可使用字母、数字、下划线，需以字母开头';
            add[0].style.color = 'red';
        }
    }
}
Address();

/*验证密码*/

function Password() {
    inputs[1].onblur = function () {
        if (reg2.test(password['value'])) {
            add[1].innerHTML = '恭喜，该密码可以使用';
            add[1].style.color = 'green';
            return true;
        } else {
            alert("输入有误，请重新输入");
            add[1].innerHTML = '请输入6~16个字符，区分大小写';
            add[1].style.color = 'red';
            return false;
        }
    };
}
Password();

/*确认密码*/

function Repassword() {
    inputs[2].onblur = function () {
        if (repassword['value'] == password['value']) {
            add[2].innerHTML = '恭喜，该密码正确';
            add[2].style.color = 'green';
        } else {
            alert("输入有误，请重新输入");
            add[2].innerHTML = '两次填写的密码不一致';
            add[2].style.color = 'red';
        }
    }
}
Repassword();

/*验证手机*/

function Phone() {
    inputs[3].onblur = function () {
        if (reg3.test(phone['value'])) {
            add[3].innerHTML = '手机号码可用';
            add[3].style.color = 'green';
            return true;
        } else {
            alert("输入有误，请重新输入");
            add[3].innerHTML = '请填写正确的手机号';
            add[3].style.color = 'red';
            return false;
        }
    }
}
Phone();

/*验证码*/

function MVcode() {
    inputs[4].onblur = function () {
        if (mVcode['value'] == "fm784x") {
            add[4].innerHTML = '验证码正确';
            add[4].style.color = 'green';
        } else {
            alert("输入有误，请重新输入");
            add[4].innerHTML = '请填写正确的验证码';
            add[4].style.color = 'red';
        }
    }
}
MVcode();

/*验证全部*/

function register() {
    let register = document.getElementById("register");
    register.onclick = function () {
    if(reg1.test(address['value']) && reg2.test(password['value']) && repassword['value'] == password['value'] && reg3.test(phone['value']) && mVcode['value'] == "fm784x" && checkbox.checked){
            alert("恭喜！注册成功！");
        }else {
            alert("信息填写不全，请核对信息");
        }
    }
}
register();