const mongoose = require('mongoose');
const schema = {
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "NewextUser",
    },
    content: {
        type: String,
        trim: true,
    },
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat",
    }
}

const messageSchema = mongoose.Schema(schema, {
    timestamps: true,
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;