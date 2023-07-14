const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema

({
    StudentName: {type: String, required: true},
    
    Discord: {type: String, required: true},

    PhNumber: {type: String, required: true},
})

module.exports = mongoose.model('student', studentSchema);