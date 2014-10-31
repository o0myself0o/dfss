
var login = {
    
    ajaxMethod_: "LOGIN",
    account_: "04160187",
    pwd_: "880215",
    loginUrl_: "http://111.204.39.58:8080/DfssAjax.aspx",

    btnLoginClick: function() {
        this.account_ = $("#username").val();
        this.pwd_ = $("#password").val();
        var data = {AjaxMethod: this.ajaxMethod_, Account: this.account_, Pwd: this.pwd_};
        util.sendPost(this.loginUrl_, data, this.btnLoginClickCallback_);
    },

    btnLoginClickCallback_: function(rspText) {
        if(rspText == "true") {
            window.location.href = "pc-client/jbxx.aspx";
        } else if (rspText == "false") {
            alert("登陆失败");
        } else {
            alert(rspText);
        }
    }

};

var btnLoginO = $(".OF_loginBtn");
var btnLogin = document.createElement("input");
btnLogin.id = "btnLogin";
btnLogin.type = "button";
btnLogin.setAttribute("class", "submit");
btnLogin.value = "login";
btnLoginO.append(btnLogin);

btnLogin.onclick = function() {
    login.btnLoginClick();
};
