var Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = Joi.object({    
    name: Joi.string().required(),
    author: Joi.objectId().required(),  
    category: Joi.objectId().required(),  
});