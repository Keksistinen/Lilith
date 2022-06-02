const mongoose = require('mongoose');
const blacklistSchema = new mongoose.Schema

({
    MoronName: {type: String, required: true},
    
    Reason: {type: String, required: true},

})

module.exports = mongoose.model('blacklist', blacklistSchema);