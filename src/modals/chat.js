const mongoose = require("mongoose");

const schema = {
    chatName: {
        type: String,
        trim: true,
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "NewextUser",
    }],
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
    },
}

const chatSchema = new mongoose.Schema(schema, {
    timestamps: true,
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
