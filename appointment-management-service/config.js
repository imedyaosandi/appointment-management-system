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
const userManagerServiceUrl = 'https://ac4f2f3b-fbdf-446d-80af-dc4b33adcf65-dev.e1-us-east-azure.choreoapis.dev/appointmentservice/usermgt-service/v1.0';
const userManagerAPIkey = process.env.apiKey;

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
    userManagerAPIkey
};
