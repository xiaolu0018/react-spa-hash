
module.exports = (req, res) => {//GET 请求
  return res.json({
    dataList: [],
    success: true,
    message: null,
    data: {
      name:'测试名称',
      time:'2019-07-23 11:24'
    },
    pageNum: 1,
    pageSize: 10,
    totalNum: 30
  });
}