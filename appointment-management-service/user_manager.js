const axios = require('axios');
const oauth = require('axios-oauth-client');
const configs = require('./config');
const { userManagerServiceUrl, userManagerAPIkey, tokenUrl, consumerKey, consumerSecret } = configs;

const getClientCredentials = oauth.clientCredentials(
  axios.create(),
{
  url: 'https://sts.choreo.dev/oauth2/token',
  client_id: 'B9R66Cpknoynbc5H6WxRrlidUVYa',
  client_secret: 'AdOnjkWpalfPm5KeRy0oaK8CJrMa'
  });
  //  'https://sts.choreo.dev/oauth2/token',
  //   'B9R66Cpknoynbc5H6WxRrlidUVYa',
  //   'test'
  //   //'AdOnjkWpalfPm5KeRy0oaK8CJrMa'
  //  );
const getAccessToken = async () => {
try{
const auth = await getClientCredentials();
console.log('token response ===================*****************> ',auth);
return auth.access_token;
}catch (error) {
         console.error('Error fetching token details:', error);
         throw error;
     }
}
//const accessToken = auth.access_token;

const createApiClient = async () => {
  const accessToken = await getAccessToken();
  return axios.create({
    baseURL: userManagerServiceUrl,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
      'Choreo-API-Key': userManagerAPIkey,
    }
  });
};

//const api = axios.create({
//    baseURL: userManagerServiceUrl,
//    headers: {
//      'Content-Type': 'application/json',
//      'Authorization': `Bearer ${accessToken}`,
//      'Choreo-API-Key': userManagerAPIkey,
//    }
//  });

const getUserDetails = async (email) => {
    try {
        const api = await createApiClient();
        const response = await api.get(`/users/${email}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw error;
    }
};

module.exports = getUserDetails;
