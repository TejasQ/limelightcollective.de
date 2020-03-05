const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  env: {
    FB_TOKEN: process.env.FB_TOKEN,
  },
};
