const { Schema, model } = require('mongoose');
const { Reaction } = require('./Reaction');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: [1, 'Please enter a thought'],
      maxLength: [280, 'Brevity is key, dude']
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // Need a getter method for this
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual called reactionCount that counts the length of the reactions array
/*videoSchema
  .virtual('getResponses')
  // Getter
  .get(function () {
    return this.responses.length;
  });*/

// Initialize our Video model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
