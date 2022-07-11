const axios = require('axios');

const getProductData = (urlTail) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc${urlTail}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `${process.env.AUTH_TOKEN}`
    }
  };
  console.log("options", options.url)
  console.log('auth', process.env.AUTH_TOKEN)
  return axios.get(options.url, options.headers);
}

const postProductData = (urlTail) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/${urlTail}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${process.env.AUTH_TOKEN}`
    }
  };

  return axios.post(options.url, options.headers);
}

const putProductData = (urlTail) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/${urlTail}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${process.env.AUTH_TOKEN}`
    }
  };

  return axios.put(options.url, options.headers);
}

module.exports = {
  getProductData,
  postProductData,
  putProductData,
}




