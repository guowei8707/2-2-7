function Logon(Email, passWord) {
    this.Email = "-1";
    this.passWord = "-1";
    this.isEmail = false;
    this.ispassWord = false;
}

var logonObj = new Logon();

var isEmail = function(Email) {
    var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    ret = reg.test(Email);
    console.log("isEmail ret = " + ret);
    logonObj.isEmail = ret;
    return ret;
}

var isPassword = function(passWord) {
    var reg = /^[a-zA-Z]\w{5,17}$/;
    ret = reg.test(passWord);
    console.log("ispassWord ret = " + ret);
    logonObj.ispassWord = ret;
    return ret;
}

var log = function() {
    logonObj.Email = getval("Email");
    logonObj.passWord = getval("passWord");
    console.log(logonObj);
    isEmail(logonObj.Email);
    console.log(logonObj);
    isPassword(logonObj.passWord);
    console.log(logonObj);

    if (logonObj.isEmail && logonObj.ispassWord) {
        alert("登录成功！");
        document.getElementById("emailHint").style.display = "none";
        document.getElementById("pwHint").style.display = "none";
        document.getElementById("submitL").type = "submit";
    } else {

        alert("登录失败！");
        //console.log('x = ' + x);
        document.getElementById("emailHint").style.display = "inline";
        document.getElementById("pwHint").style.display = "inline";
    }
}