const expressAsyncHandler = require("express-async-handler");

const accessChat = expressAsyncHandler(async (req, res) => {
    const userId = req.body;

    

})

const fetchChats = expressAsyncHandler(async (req, res) => {

})

module.exports = {
    accessChat,
    fetchChats,
}