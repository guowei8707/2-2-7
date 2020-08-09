function Register(phoneNum, verificationCode, isphoneNum, isverificationCode) {
    this.phoneNum = "-1";
    this.verificationCode = "-1";
    this.isphoneNum = false;
    this.isverificationCode = false;
}

var registerObj = new Register();

var getval = function(id) {
    var x = document.getElementById(id).value;
    console.log("x = " + x);
    return x;
}

var isphoneNum = function(phoneNum) {
    var reg = /^\d{11}$/;
    ret = reg.test(phoneNum);
    console.log("ret = " + ret);
    registerObj.isphoneNum = ret;
    return ret;
}

var isverificationCode = function(verificationCode) {
    var reg = /^\d{6}$/;
    ret = reg.test(verificationCode);
    console.log("ret = " + ret);
    registerObj.isverificationCode = ret;
    return ret;
}

var getcode = function() {
    var x = getval("phoneNum");
    registerObj.phoneNum = x;
    console.log(registerObj);
    isphoneNum(registerObj.phoneNum);
    if (registerObj.isphoneNum) {
        alert("验证码已发送！")
    } else {
        alert("请输入正确的手机号！")
    }

}

var submitregister = function() {
    var x = getval("verificationCode");
    registerObj.verificationCode = x;
    console.log(registerObj);
    isverificationCode(registerObj.verificationCode);
    if (registerObj.isphoneNum && registerObj.isverificationCode) {
        alert("注册成功!");
    } else {
        alert("注册失败！验证码纯数字且必须是6位");
    }
}