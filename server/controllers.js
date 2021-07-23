var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products',
  headers: {
    'Authorization': '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'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
