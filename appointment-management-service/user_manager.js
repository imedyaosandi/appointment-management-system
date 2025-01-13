const axios = require('axios');
const oauth = require('axios-oauth-client');
const configs = require('./config');
const { userManagerServiceUrl, userManagerAPIkey, tokenUrl, consumerKey, consumerSecret } = configs;

const getClientCredentials = oauth.clientCredentials(
  axios.create(),{
  url: tokenUrl,
  grant_type: 'client_credentials',
  client_id: consumerKey,
  client_secret: consumerSecret
  });
const accessToken = async () => {
try{
const auth = await getClientCredentials();
console.log('token response ===================*****************> ',resp);
return auth.access_token;
}catch (error) {
         console.error('Error fetching token details:', error);
         throw error;
     }
}
//const accessToken = auth.access_token;

const api = axios.create({
    baseURL: userManagerServiceUrl,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
      'Choreo-API-Key': userManagerAPIkey,
    }
  });

const getUserDetails = async (email) => {
    try {
        const response = await api.get(`/users/${email}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw error;
    }
};

module.exports = getUserDetails;
