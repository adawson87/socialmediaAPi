const {Schema, model, SchemaTypes} = require("mongoose")
const reactionSchema = new Schema(
    {
    reactionid:{
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        createdAt:{
            type:   Date, 
            default: Date.now
        },
        userName: {
            type: String,
            required: true,
        },

       reactionBody: {
           type: String,
           required: true,
           maxlength: 280
       }
           
    },
    {
        toJSON:{
           getters: true,
        },
        id: false,
    }
)

module.exports = reactionSchema