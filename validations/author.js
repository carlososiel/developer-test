var Joi = require('joi');
 
module.exports = Joi.object({    
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),  
});