const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectDB_online = () => {};
const connectDB_offline = async () => {
  await mongoose
    .connect(process.env.DB_URL, {
      autoIndex: true,
    })
    .then(
      () => console.log("db_offline connected"),
      (err) => console.log("db_offline doesn't connect")
    );
};

module.exports = {
  connectDB_online,
  connectDB_offline,
};
