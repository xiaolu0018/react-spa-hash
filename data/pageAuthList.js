module.exports = (req, res) =>
  res.json({
    success: true,
    message: "",
    data: {
      gridButton: [
        { actionKey: "O_edit", url: "test/edit" },
        { actionKey: "O_del", url: "test/del" }
      ]
    }
  });
