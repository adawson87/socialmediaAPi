const {Schema, model, SchemaTypes} = require("mongoose")
const reactionSchema = require("./Reaction")
const thoughtSchema = new Schema(
    {
    Thoughttext:{
            type: String,
            required: true,
            minlength: 1,
            maxlength:  280
    
        },
        createdAt:{
            type:   Date, 
            default: Date.now
        },
        userName: {
            type: String,
            required: true,
        },

       reaction: [reactionSchema],
           
    },
    {
        toJSON:{
           getters: true,
        },
        id: false,
    }
)
thoughtSchema.virtual('reactionCount').get(function(){return this.reaction.length})
const Thought = model("thought", thoughtSchema)
module.exports = Thought