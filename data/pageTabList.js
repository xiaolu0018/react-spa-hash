module.exports = (req, res) => {
  let menu = req.body.menuId;
  let list = [];
  switch (menu) {
    case "609":
      list = [
        {
          tapId: 794,
          menuId: 609,
          orderIndex: 1,
          tapName: "test1-tab",
          url: "/pages/test1/tab"
        }
      ];
      break;
    case "611":
      list = [
        {
          tapId: 594,
          menuId: 611,
          orderIndex: 1,
          tapName: "test2-tab1",
          url: "/pages/test2/tab1"
        },{
          tapId: 595,
          menuId: 611,
          orderIndex: 2,
          tapName: "test2-tab2",
          url:"/pages/test2/tab2"
        }
      ];
      break;
    default:
      list = [];
      break;
  }
  return res.json({
    success: true,
    message: "",
    data: list
  });
};
