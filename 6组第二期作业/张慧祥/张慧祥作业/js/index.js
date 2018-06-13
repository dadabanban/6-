let oList=document.getElementById("list").getElementsByTagName("input");
let btn=document.getElementById("btn");
let code=document.getElementById("auth code");
for(let i=0;i<oList.length;i++){
    oList[i].onblur=function () {
        if(this.validity.valid){
            this.nextElementSibling.style.display="block"
        }else {
            this.nextElementSibling.nextElementSibling.style.display="block"
        }
    }
}
let str="qwertyuioplkjhgfdsazxcvbnm"+"0123456789"+"QWERTYUIOPLKJHGFDSAZXCVBNM";
function getCode() {
    let arr="",n=null;
    for (let i=0;i<4;i++) {
        n = Math.round(Math.random() * 61);
        arr += str[n];
    }
    code.innerHTML=arr
}
getCode();
btn.onclick=getCode;