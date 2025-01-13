// Read configuration from the environment

// Datbase configruation
const dbHost = process.env.dbHost;
const dbUser = process.env.dbUser;
const dbPassword = process.env.dbPassword;
const dbName = process.env.dbName;
const dbPort = process.env.dbPort;

// Twilio configruation
const twilioAccountSid = process.env.accountSid;
const twilioAuthToken = process.env.authToken;
const twilioFromPhoneNumber = process.env.number;

// User Manager configruation
const userManagerServiceUrl = process.env.CHOREO_APP_SVC_USER_MGT_CON_SERVICEURL;
const userManagerAPIkey = process.env.CHOREO_APP_SVC_USER_MGT_CON_CHOREOAPIKEY;
const tokenUrl = process.env.CHOREO_APP_SVC_USER_MGT_CON_TOKENURL
const consumerKey = process.env.CHOREO_APP_SVC_USER_MGT_CON_CONSUMERKEY
const consumerSecret = process.env.CHOREO_APP_SVC_USER_MGT_CON_CONSUMERSECRET

module.exports = {
    dbHost,
    dbUser,
    dbPassword,
    dbName,
    dbPort,
    twilioAccountSid,
    twilioAuthToken,
    twilioFromPhoneNumber,
    userManagerServiceUrl,
    userManagerAPIkey,
    tokenUrl,
    consumerKey,
    consumerSecret
};
