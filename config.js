const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";


module.exports = {
  //For Enabling Commands Like AUTO_STATUS_RED Type true For Disenabling Type false
  ANTILINK: toBool(process.env.ANTI_LINK) || true,
  //_________________________________________________________________________________________________________________________________
  LOGS: toBool(process.env.LOGS) || true,
  //_________________________________________________________________________________________________________________________________
  ANTILINK_ACTION: process.env.ANTI_LINK || "delete",
  //_________________________________________________________________________________________________________________________________
  AUTO_REACT: process.env.AUTO_REACT || 'true',
  //_________________________________________________________________________________________________________________________________
  AUDIO_DATA: process.env.AUDIO_DATA || "Phoenix-MD;Abhishek Suresh;https://graph.org/file/8976892f2f615077b48cd.jpg",
  //_________________________________________________________________________________________________________________________________
  AUTO_STATUS_READ: process.env.AUTO_STATUS_READ || 'false',
  //_________________________________________________________________________________________________________________________________
  SESSION_ID: process.env.SESSION_ID || "Phoenix~3d550d8c143c274c9e2393b8ec7f24ec", //Enter Your Session Id Here
  //_________________________________________________________________________________________________________________________________
  SUDO: process.env.SUDO || "+357 95 171357",
  //_________________________________________________________________________________________________________________________________
  SPAM_COUNT: process.env.SPAM_COUNT || "10",
  //_________________________________________________________________________________________________________________________________
  LANG: process.env.LANG || "Romanian",
  //_________________________________________________________________________________________________________________________________
  HANDLERS: process.env.HANDLER === "false" || '^[.]',
  //_________________________________________________________________________________________________________________________________
  RMBG_KEY: process.env.RMBG_KEY || false,
  //_________________________________________________________________________________________________________________________________
  BRANCH: "main",
  //_________________________________________________________________________________________________________________________________
  STICKER_DATA: "Slot 777",
  //_________________________________________________________________________________________________________________________________
  WELCOME_MSG: process.env.WELCOME_MSG || "👋 Salut *@user* bine ai vanit, rău ai nimerit *@gname*\n*Total Members:* @count\n*Group Description:*\n@gdesc {pp}",
  //_________________________________________________________________________________________________________________________________
  GOODBYE_MSG: process.env.GOODBYE_MSG || "👋 papa, drum bun Cale batuta, cine te prinde sa te futa *@user* From *@gname*\n*Total Members:* @count {pp}",
  //_________________________________________________________________________________________________________________________________
  DATABASE_URL: DATABASE_URL,
  //_________________________________________________________________________________________________________________________________
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "tzeakaman",
  //_________________________________________________________________________________________________________________________________
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  //_________________________________________________________________________________________________________________________________
  OWNER_NAME: process.env.OWNER_NAME || "Stefan",
  //_________________________________________________________________________________________________________________________________
  OWNER_NUMBER: process.env.OWNER_NUMBER || "+357 95 171357",
  //_________________________________________________________________________________________________________________________________
  BOT_NAME: process.env.BOT_NAME || "Stefan bot",
  //_________________________________________________________________________________________________________________________________
  WORK_TYPE: process.env.WORK_TYPE || "private",
  //_________________________________________________________________________________________________________________________________
  MENTION_DATA: "Phoenix-MD;919074692450;https://graph.org/file/63942461d4b8d78b360d3.jpg;https://graph.org/file/bb3ac71ec991cef3d5216.mp4",
  //_________________________________________________________________________________________________________________________________
  BASE_URL: "https://abhi-api-bvws.onrender.com/",
  //_________________________________________________________________________________________________________________________________
  //Database
  DATABASE:
    DATABASE_URL === "./lib/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
};
