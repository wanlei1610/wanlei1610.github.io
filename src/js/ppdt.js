/**
 * Created by Administrator on 2016/10/18.
 */
angular.module('ppdt',['pp.service'])
    .controller('ppdtController',function($scope, MainService,$rootScope){
        var data = $scope.data = {};
        var actions = $scope.actions = {};

        //MainService.aHrefClass = 'ppdt';
        $rootScope.aHrefClass = 'ppdt';

        data.msg = [
            {
                aHref: '平平关于近期不实言论的严正声明',
                time: '2016-04-06'
            },
            {
                aHref: '平平与天谷信息全面战略合作',
                time: '2016-03-30'
            },
            {
                aHref: '应P2P新规要求转型在即 平平集团赴贷齐乐交流研讨',
                time: '2016-03-21'
            },
            {
                aHref: '国付宝充值公告',
                time: '2016-03-17'
            },
            {
                aHref: '2015年12月 平平贷风险备用金托管报告',
                time: '2016-02-03'
            },
            {
                aHref: '2015年11月 平平贷风险备用金托管报告',
                time: '2015-12-01'
            },
            {
                aHref: '平平财富董事长林慧尔应邀参加2015中国互联网金融国际论坛',
                time: '2015-11-26'
            },
            {
                aHref: '热烈庆祝平平财富苏州分公司东渚营业部隆重开业',
                time: '2015-07-24'
            },
            {
                aHref: '宁波平平投资咨询有限公司应邀参加2015·上海新金融年会暨互联网金融外滩峰会',
                time: '2015-07-23'
            },
            {
                aHref: '江苏苏州分公司客户来宁波总公司考察交流',
                time: '2015-07-23'
            }
        ];
    });