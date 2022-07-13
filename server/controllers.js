const Model = require("./model.js");

const get = (req, res) => {
  console.log('getting')
  const urlTail = req.url
  // console.log('test 1', urlTail)
  Model.getProductData(urlTail)
  .then((success) => {
    // console.log('test 2', success.data)
    res.status(200).send(success.data)
  })
  .catch((error) => {
    // console.log('error test);
    res.status(500).send(error);
  })
}

const post = (req, res) => {
  console.log("posting");
  const urlTail = req.url
  // console.log(req.body);
  Model.postProductData(urlTail,req.body)
  .then((success) => {
    res.status(201).send(success.data)
  })
  .catch((error) => {
    console.log(error)
    res.status(500).send(error);
  })
}

const put = (req, res) => {
  console.log("putting");
  const urlTail = req.body.url
  Model.putProductData(urlTail)
  .then((success) => {
    res.status(201).send(success)
  })
  .catch((error) => {
    res.status(500).send(error.message);
  })
}

module.exports = {
  get,
  post,
  put,
}