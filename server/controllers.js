const Model = require("./model.js");

const get = (req, res) => {
  const urlTail = req.url
  Model.getProductData(urlTail)
  .then((success) => {
    console.log('test 2', success.data)
    res.status(200).send(success.data)
  })
  .catch((error) => {
    //console.log('error test', error)
    res.status(500).send(error.message);
  })
}

const post = (req, res) => {
  const urlTail = req.body.url
  Model.postProductData(urlTail)
  .then((success) => {
    res.status(201).send(success)
  })
  .catch((error) => {
    res.status(500).send(error.message);
  })
}

const put = (req, res) => {
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