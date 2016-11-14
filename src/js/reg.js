;(function ($) {
    var $email = $("#reg_email");
    var $username = $("#reg_username");
    var $password = $("#reg_password");
    var $confirm_password = $("#reg_confirm_password");
    var $recommend = $("#reg_recommend");
    var $agree = $("#agree");
    var $btn = $("#reg_btn");
    var $tip = $("#reg_tip");
    var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    $btn.click(function(){
        if (!$email.val()) {
            setTip("邮箱地址不能为空！！！");
            return false;
        } else if (reg.test(!$email.val())) {
            setTip("邮箱地址格式不正确！！！");
            return false;
        } else if (!$username.val()) {
            setTip("用户名不能为空！！！");
            return false;
        } else if (!$username.val()) {
            setTip("用户名不能为空！！！");
            return false;
        } else if (!$password.val()) {
            setTip("密码不能为空！！！");
            return false;
        } else if (!$confirm_password.val()) {
            setTip("请确认密码！！！");
            return false;
        } else if (!$recommend.val()) {
            setTip("推荐人不能为空！！！");
            return false;
        } else if (!$agree.prop("checked")) {
            setTip("请阅读使用协议！！！");
            return false;
        }
        var userName = $username.val();
        var password = $password.val();
        var email = $email.val();
        var recommend = $recommend.val();

        localStorage.setItem(userName, '{"username":"'+userName+'","password":"'+password+'","email":"'+email+'","recommend":"'+recommend+'"}');
        setTip("注册成功，点击立即登录即可登录！！！");
    })

    function setTip(txt){
        $tip.animate({'opacity':1}).html(txt).delay(3000).animate({'opacity':0});
    }

})(jQuery)