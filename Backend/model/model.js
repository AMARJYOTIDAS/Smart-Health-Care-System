const mongoose = require("mongoose");

const loginShema = new mongoose.Schema[
  ({
    email: {
      required: true,
      typeof: String,
    },
    password: {
      required: true,
      typeof: String,
    },
  },
  { times: timestamp })
]();

const user = loginShema 
export default loginShema
