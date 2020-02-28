
const apiURL = require('../src/api/url.js');
const delay = require("mocker-api/utils/delay");
module.exports = delay(Object.entries(apiURL).reduce((tot, item) => {
  let [key, value] = item;
  let method = 'POST';
  if (key.includes('GET')) {
    method = 'GET';
  }
  let mockConfigKey = ''
  if (tot[`${method} ${value}`]) {
    return tot;
  } else {
    let files;
    try {

      files = require(`./${key}.js`);
    } catch (error) {
      files = {
        data: {},
        dataList: null,
        success: true,
        message: 'ajax success'
      }
    }
    key && (tot[`${method} ${value}`] = files || {})
    return tot;
  }
}, {
  'POST /WATCH/URL':apiURL
}), 300);
