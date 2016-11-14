;(function($){
    var $form = $('#form');
    var $userName = $('#username');
    var $password = $('#password');
    var $verify = $('#verify');
    var $submit = $('#submit');
    var $tip = $('#tip');
    
    $submit.click(function () {
        $tip.stop(false,true);
        //首先判断为空的情况
        if (!$userName.val()) {
            setTip("用户名不能为空！！！");
            return false;
        } else if (!$password.val()) {
            setTip("密码不能为空！！！");
            return false;
        } else if (!$verify.val()) {
            setTip("验证码不能为空！！！");            
            return false;
        }

        //密码错误的情况和用户名不存在的情况
        var userName = $userName.val();
        var password = $password.val();
        if (!localStorage.getItem(userName)) {
            setTip("用户名不存在，请先注册！");
            return false;
        } else {
            var localPas = JSON.parse(localStorage.getItem(userName))
            if (localPas.password !== password) {
                setTip("密码错误！");
                return false;
            }
        };

        $.ajax({
            type: 'get',
            beforeSend: function(){
                setTip("正在登陆...");
            },
            url: '../../data/data.json',
            success: function(data){
                console.log(data);
                setTip("登录成功！");
            }   
        });
    })    

    function setTip(txt){
        $tip.animate({'opacity':1}).html(txt).delay(3000).animate({'opacity':0});
    }
})(jQuery)