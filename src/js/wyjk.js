/**
 * Created by Administrator on 2016/10/18.
 */
angular.module('wyjk', ['pp.service'])
    .controller('wyjkController', function ($scope, MainService, $rootScope) {
        var data = $scope.data = {};
        var actions = $scope.actions = {};

        //MainService.aHrefClass = 'wyjk';
        $rootScope.aHrefClass = 'wyjk';

        data.mainMsg = [
            {
                ulClass: 'wyjk_page_main_l fl',
                contentArr: [
                    {
                        dt: '信用标',
                        dd: ['信用额度借款','无抵押、无担保、纯信用','网站给予的信用额度内发布借款','针对有还款保障的优质人群'],
                        p: '通过网站的资信审查获得信用额度',
                        aHref: '立即发布',
                        liClass: 'wyjk_page_main_li01'
                    },
                    {
                        dt: '抵押标',
                        dd: ['固定资产抵押借款','小微企业现场审核抵押发布借款','汽车、房产、货物等抵押贷款','逾期24小时内赔付'],
                        p: '以固定资产为抵押，需线下审核的标',
                        aHref: '立即发布',
                        liClass: 'wyjk_page_main_li02'
                    },
                    {
                        dt: '流转标',
                        dd: ['即投即计息，资金无闲置','没有满标和复审这个概念','会员一投标马上就可以产生利息','资金量大。（相对于普通标）'],
                        p: '通过网站的资信审查获得信用额度',
                        aHref: '立即发布',
                        liClass: 'wyjk_page_main_li03'
                    }
                ]
            },
            {
                ulClass: 'wyjk_page_main_l fl',
                contentArr: [
                    {
                        dt: '担保标',
                        dd: ['担保额度借款','担保标将先由有担保额度的用户进行担保，等担保额度满了自动会进行投标'],
                        p: '以担保额度为借款依据的标',
                        aHref: '立即发布',
                        liClass: 'wyjk_page_main_li04'
                    },
                    {
                        dt: '秒还标',
                        dd: ['秒还庆祝借款','借款人标满瞬间送出利息','免手续费，自动审核，自动还款','不定期送出秒还标'],
                        p: '自动通过审核并且标满即自动还款',
                        aHref: '立即发布',
                        liClass: 'wyjk_page_main_li05'
                    },
                    {
                        dt: '理财产品',
                        dd: ['即投即计息，资金无闲置','没有满标和复审这个概念','会员一投标马上就可以产生利息','资金量大。（相对于普通标）'],
                        p: '通过网站的资信审查获得信用额度',
                        aHref: '立即发布',
                        liClass: 'wyjk_page_main_li06'
                    }
                ]
            }
        ];
    });