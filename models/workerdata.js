const mongoose = require('mongoose');
const workerSchema = new mongoose.Schema

({
    WorkerName: {type: String, required: true},
    
    Title: {type: String, required: true},

    PhNumber: {type: String, required: true},
})

module.exports = mongoose.model('worker', workerSchema);