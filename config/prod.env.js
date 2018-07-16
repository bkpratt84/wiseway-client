'use strict'
require('now-env')

module.exports = {
  NODE_ENV: '"production"',
  Firebase_Key: JSON.stringify(process.env.Firebase_Key),
  Firebase_AuthDomain: JSON.stringify(process.env.Firebase_AuthDomain),
  Firebase_DatabaseURL: JSON.stringify(process.env.Firebase_DatabaseURL),
  Firebase_ProjectID: JSON.stringify(process.env.Firebase_ProjectID),
  Firebase_StorageBucket: JSON.stringify(process.env.Firebase_StorageBucket),
  API_Base_URL: JSON.stringify(process.env.API_Base_URL)
}
