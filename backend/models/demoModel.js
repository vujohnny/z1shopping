import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema(
    {
        counterb1: {type: Number, require:true},
        counterb2: {type: Number, require:true}
    },
    {
        timestamps: true,
    }
);

const demoSchema = new mongoose.Schema(
    {
       title:{type:String, require:true},
       button1:{type:String, require:true},
       button2:{type:String, require:true},
       description:{type:String, require:true},
       img:{type:String, require:true},
       img2:{type:String, require:true},
       analytics:[analyticsSchema]
    }
);



const Demo = mongoose.model('Demo', demoSchema);
export default Demo;