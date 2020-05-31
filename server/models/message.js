const mongoose = require("mongoose");
const User = require("./user");

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    maxLength: 160
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

messageSchema.pre("remove", async function (next) {
  //find the author
  //remove the id of the message from their messages list
  //save that user
  //return next
  try {
    let user = await User.findById(this.userId);
    user.message.remove(this.id); //remove is a mongoose synchronous method
    await user.save();
    return next();
  } catch (err) {
    return next(err);
  }
})

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;