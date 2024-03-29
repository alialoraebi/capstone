const mongoose = require('mongoose'); 

const restaurantSchema = new mongoose.Schema({
    
    category: {
        type: String,
        required: true,
        
    },
    
    name: {
        type: String,
        required: true,
        minlength: 4
    },
      
    price: {
        type: Number,
        required: true,
    }
    
    });

    const Restaurant = mongoose.model('Restaurant', restaurantSchema);
    module.exports = Restaurant;
