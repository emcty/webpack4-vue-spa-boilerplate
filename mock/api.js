module.exports = function(router) {
  //获取手机验证码
  router.post('/api/phone/', (req, res) => {
    res.json({
      "rtnCode": "0000",
      "rtnMsg": "",
      "data": {
        "verifyId": "1075651014477832193"
      }
    });
  });
  //获取用户信息
  router.post('/api/getUserInfo', (req, res) => {
    res.json({
      "rtnCode": "0000",
      "rtnMsg": "",
      "data": {
        "wxId": "oWJlp1Dqekd5xXaA5zxWjQGpZ6DQ",
        "wxName": "丁合",
        "bindWxStatus": "1",
        "wxHeadImgUrl": "http://thirdwx.qlogo.cn/mmopen/T5C6icTcSx9PWrDzttol3J6I0tYYlicbNCsUnPRxb4pH0gDB9FjhL3pyR1TP80L5NyiaDo0QztIejrXjsCoxjkKTlsKOS2JGfno/132"
      }
    });
  });
  //注册绑定
  router.post('/api/bindAccount', (req, res) => {
    res.json({"rtnCode":"0000","rtnMsg":"","data":{}});
  });
  //获取报单状态列表
  router.post('/api/getDeclaredStatus', (req, res) => {
    res.json({
      "rtnCode": "0000",
      "rtnMsg": "",
      "data": {
        "houseTypeList": [{
          "itemName": "商品房",
          "itemCode": "01"
        }, {
          "itemName": "央产房",
          "itemCode": "02"
        }, {
          "itemName": "回迁房",
          "itemCode": "03"
        }, {
          "itemName": "经济适用房",
          "itemCode": "04"
        }, {
          "itemName": "房改房",
          "itemCode": "05"
        }, {
          "itemName": "成本价房",
          "itemCode": "06"
        }, {
          "itemName": "按经济适用房管理",
          "itemCode": "07"
        }],
        "houseUseList": [{
          "itemName": "住宅",
          "itemCode": "01"
        }, {
          "itemName": "公寓",
          "itemCode": "02"
        }, {
          "itemName": "商业",
          "itemCode": "03"
        }, {
          "itemName": "办公",
          "itemCode": "04"
        }, {
          "itemName": "别墅",
          "itemCode": "05"
        }],
        "channelName": "测试渠道编码01",
        "marriageList": [{
          "itemName": "未婚",
          "itemCode": "01"
        }, {
          "itemName": "已婚",
          "itemCode": "02"
        }, {
          "itemName": "离异",
          "itemCode": "03"
        }, {
          "itemName": "丧偶",
          "itemCode": "04"
        }, {
          "itemName": "再婚",
          "itemCode": "05"
        }],
        "channelCode": "DH01"
      }
    })
  });
  //获取报单
  router.post('/api/getDeclaredForm', (req, res) => {
    res.json({
      // "tokenStatus":"failed",
      "rtnCode": "0000",
      "rtnMsg": "",
      data:{
        baseData:{
          applyMoney: "",
          dayBorrowingRate: "",
          borrowingName: "",
          idCard: "",
          marriageStatus: "", //婚姻状况
          housePropertyStatus: "1", //有无房本
        },
        ownHouse: {
          houseAttachNo: ""
        },
        // baseData:{
        //   "channelCode":11111,
        //   "channelName":"aaaa",
        //   applyMoney: "",
        //   dayBorrowingRate: "",
        //   borrowingName: "",
        //   idCard: "",
        //   marriageStatus: "", //婚姻状况
        //   housePropertyStatus: "0", //有无房本
        // },
        // noHouse: {
        //   houseType: "",
        //   houseUse: "",
        //   provinceCode: "",
        //   cityCode: "",
        //   countyCode: "",
        //   houseAddr: "",
        //   buildArea: "",
        //   provinceCode: ""
        // },
      }
    })
  });
  //图片上传
  router.post('/api/uploadImage', (req, res) => {
    res.json({
      "rtnCode": "0000", 
      "rtnMsg": "", 
      "data":{
        "attachId":"eeeeee",
        "attachAccessNo":"33333",
        "imageUrl":"https://avatar-static.segmentfault.com/809/196/809196179-5c00a2acb8c3d_huge256"
      }
    });
  });
  //图片删除
  router.post('/api/deleteImage', (req, res) => {
    res.json({
      "rtnCode": "0000", 
      "rtnMsg": "", 
    });
  });
  //报单列表
  router.post('/api/declaredFormList', (req, res) => {
    res.json({
      "rtnCode": "0000",
      "rtnMsg": "",
      "data": {
        "list": [{
          "orderStatusName": "报单完成",
          "finManagerName": "金融顾问",
          "loanMoney": 44444.0,
          "orderId": "1074969999958704130",
          "houseAddr": "etetete 天津市天津市(县)宁河县",
          "idCard": "2533535353",
          "orderProcess": "01",
          "orderCode": "B1545127794623",
          "channelName": "测试渠道编码01",
          "borrowingName": "test11111111",
          "finManagerPhone": "12345678912"
        }, {
          "orderStatusName": "报单完成",
          "finManagerName": "金融顾问",
          "loanMoney": 44444.0,
          "orderId": "1074969999958704130",
          "houseAddr": "etetete 天津市天津市(县)宁河县",
          "idCard": "2533535353",
          "orderProcess": "01",
          "orderCode": "B1545127794623",
          "channelName": "测试渠道编码01",
          "borrowingName": "test2222",
          "finManagerPhone": "12345678912"
        },{
          "orderStatusName": "报单完成",
          "finManagerName": "金融顾问",
          "loanMoney": 44444.0,
          "orderId": "1074969999958704130",
          "houseAddr": "etetete 天津市天津市(县)宁河县",
          "idCard": "2533535353",
          "orderProcess": "01",
          "orderCode": "B1545127794623",
          "channelName": "测试渠道编码01",
          "borrowingName": "test3333333",
          "finManagerPhone": "12345678912"
        },{
          "orderStatusName": "报单完成",
          "finManagerName": "金融顾问",
          "loanMoney": 44444.0,
          "orderId": "1074969999958704130",
          "houseAddr": "etetete 天津市天津市(县)宁河县",
          "idCard": "2533535353",
          "orderProcess": "01",
          "orderCode": "B1545127794623",
          "channelName": "测试渠道编码01",
          "borrowingName": "test44444444",
          "finManagerPhone": "12345678912"
        }]
      }
    })
  });
  //查看报单状态历程
  router.post('/api/orderProcessListByOrderCode', (req, res) => {
    res.json({
      "rtnCode": "0000",
      "rtnMsg": "",
      "data": {
        "list": [{
          "orderProcessDate": "2018-08-18",
          "orderProcess": "01",
          "orderStatus": "0"
        }, {
          "orderProcessDate": "2018-19-19",
          "orderProcess": "02",
          "orderStatus": "1"
        }]
      }
    })
  });
  //评房记录列表
  router.post('/api/getCommentRecord', (req, res) => {
    res.json({
      "rtnCode": "0000",
      "rtnMsg": "",
      "data": {
        "list": [{
          "planUse": "住宅",
          "houseAddr": "3号楼一单无",
          "houseType": "经济适用房",
          "evalMoney": 0.0,
          "collId": "1075338527060639745",
          "collStatus": "0",
          "collCode": "1545215658331",
          "applyTime": "2018-12-19 18:34:18",
          "collArea": 89.0
        }, {
          "planUse": "公寓",
          "houseAddr": "北京市区郁花园二里郁花园二里6号楼etete",
          "houseType": "经济适用房",
          "evalMoney": 0.0,
          "collId": "1075646876566249474",
          "collStatus": "0",
          "collCode": "1545289174545",
          "applyTime": "2018-12-20 14:59:35",
          "collArea": 34.0
        }]
      }
    })
  });
  //评房
  router.post('/api/commentHouse', (req, res) => {
    res.json({
      "rtnCode": "0000",
      "rtnMsg": "",
      "data": {
        "houseTypeList": [{
          "itemName": "商品房",
          "itemCode": "01"
        }, {
          "itemName": "成本价房",
          "itemCode": "02"
        }, {
          "itemName": "经济适用房",
          "itemCode": "03"
        }, {
          "itemName": "其它",
          "itemCode": "04"
        }],
        "planUseList": [{
          "itemName": "住宅",
          "itemCode": "住宅"
        }, {
          "itemName": "公寓",
          "itemCode": "公寓"
        }],
        "cityList": [{
          "itemName": "北京市区",
          "itemCode": "110100"
        }, {
          "itemName": "上海市区",
          "itemCode": "310100"
        }, {
          "itemName": "广州市",
          "itemCode": "440100"
        }, {
          "itemName": "深圳市",
          "itemCode": "440300"
        }, {
          "itemName": "武汉市",
          "itemCode": "420100"
        }, {
          "itemName": "南京市",
          "itemCode": "320100"
        }, {
          "itemName": "厦门市",
          "itemCode": "350200"
        }, {
          "itemName": "苏州市",
          "itemCode": "320500"
        }, {
          "itemName": "天津市",
          "itemCode": "120100"
        }]
      }
    })
  });
  //评房提交
  router.post('/api/commentSubmit', (req, res) => {
    res.json({
      "rtnCode": "0000",
      "rtnMsg": "",
      "data": {
        "collId": "1075646876566249474",
        "collValue": 0.0,
        "collCode": "1545289174545",
        "valueStatus": "0"
      }
    })
  });
  //搜索小区
  router.post('/api/searchVillage', (req, res) => {
    res.json({
      "rtnCode": "0000",
      "rtnMsg": "",
      "data": {
        "list": [{
          "constructionName": "国花园",
          "constructionId": "17976"
        }, {
          "constructionName": "郁花园二里",
          "constructionId": "16359"
        }, {
          "constructionName": "裕祥花园",
          "constructionId": "8522"
        }, {
          "constructionName": "名佳花园小区",
          "constructionId": "8860"
        }, {
          "constructionName": "郁花园一里",
          "constructionId": "16361"
        }, {
          "constructionName": "仁和花园",
          "constructionId": "17952"
        }, {
          "constructionName": "双花园小区",
          "constructionId": "12705"
        }, {
          "constructionName": "芙蓉花园",
          "constructionId": "18000"
        }, {
          "constructionName": "花园村小区",
          "constructionId": "10748"
        }, {
          "constructionName": "万城花园",
          "constructionId": "17457"
        }]
      }
    })
  });
  //搜索楼栋
  router.post('/api/searchBuild', (req, res) => {
    res.json({
      "rtnCode": "0000",
      "rtnMsg": "",
      "data": {
        "list": [{
          "buildName": "郁花园二里6号楼",
          "buildId": "39918"
        }, {
          "buildName": "郁花园二里23号楼",
          "buildId": "42630"
        }, {
          "buildName": "郁花园二里7号楼",
          "buildId": "42759"
        }, {
          "buildName": "郁花园二里13号楼",
          "buildId": "43371"
        }, {
          "buildName": "郁花园二里15号楼",
          "buildId": "44860"
        }, {
          "buildName": "郁花园二里17号楼",
          "buildId": "46114"
        }, {
          "buildName": "郁花园二里1号楼",
          "buildId": "46761"
        }, {
          "buildName": "郁花园二里30号楼",
          "buildId": "46894"
        }, {
          "buildName": "郁花园二里16号楼",
          "buildId": "47223"
        }, {
          "buildName": "郁花园二里2号楼",
          "buildId": "48518"
        }]
      }
    })
  });

}
