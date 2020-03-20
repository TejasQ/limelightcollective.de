const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  env: {
    FB_TOKEN: process.env.FB_TOKEN,
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
  },
};
