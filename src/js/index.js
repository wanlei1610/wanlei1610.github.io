/**
 * Created by Administrator on 2016/10/18.
 */
angular.module('index',['pp.service'])
    .controller('indexController',function($scope, MainService,$rootScope){
        var data = $scope.data = {};
        var actions = $scope.actions = {};

        //MainService.aHrefClass = 'index';
        $rootScope.aHrefClass = 'index';

        //.site_data_t部分的数据
        data.sdt = [
            {
                url: '../imgs/acount_ico1.png',
                p1: '3,565',
                p2: '注册人数'
            },
            {
                url: '../imgs/acount_ico2.png',
                p1: '￥313,765,998',
                p2: '累计交易金额'
            },
            {
                url: '../imgs/acount_ico3.png',
                p1: '￥229,301,644',
                p2: '回款总额'
            },
            {
                url: '../imgs/acount_ico4.png',
                p1: '￥4,169,893',
                p2: '待收总额'
            }
        ];

        //site_data_b部分的数据
        data.sdb = [
            {
                className: 'left_dl',
                tit: '安全保障',
                p1: '所有标均提供本息担保',
                p2: '风险覆盖充足安全'
            },
            {
                className: 'middle_dl',
                tit: '高收益',
                p1: '16%收益率',
                p2: '20倍银行存款利息'
            },
            {
                className: 'right_dl',
                tit: '门槛低',
                p1: '50元起投，0手续费',
                p2: '零用钱也可理财'
            }
        ];

        //index_main_l_bottom部分的数据
        data.mlb = [
            {
                dt: '抵押',
                userName: 'Y06PP0197( 一）',
                progress: '0.7%',
                money: '￥10,000',
                num1: '15.00%',
                num2: '+6.50%',
                time: '6',
                num3: '72851',
                btnClass: 'btn'
            },
            {
                dt: '抵押',
                userName: 'Y06PP0197( 二）',
                progress: '0.7%',
                money: '￥10,000',
                num1: '15.00%',
                num2: '+6.50%',
                time: '6',
                num3: '正在还款',
                btnClass: 'btn_ing'
            },
            {
                dt: '抵押',
                userName: 'Y06PP0197( 一）',
                progress: '0.7%',
                money: '￥10,000',
                num1: '15.00%',
                num2: '+6.50%',
                time: '6',
                num3: '正在还款',
                btnClass: 'btn_ing'
            }
        ];

        actions.setSlide = function(){
            var imgWidth = document.body.offsetWidth;

            var outBox = document.getElementById("out_box");
            var slide = new MGS({
                outBox: "out_box",
                imgs: ['../imgs/banner01.jpg','../imgs/banner02.jpg','../imgs/banner03.jpg','../imgs/banner04.jpg','../imgs/banner05.jpg'],
                aHref: "#",
                imgSize: {width:imgWidth,height:400},
                timeStep: 3000
            });
        }
        actions.setSlide();
    });