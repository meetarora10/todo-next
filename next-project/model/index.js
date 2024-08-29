const mongoose = require('mongoose');
const userSchema= new mongoose.Schema(
    {
        title: String,
        description: String,
    },
    {
        timestamps:true,
    }
);
const Topic=mongoose.models.Topic || mongoose.model("Topic",userSchema);
export default Topic;