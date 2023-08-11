import mongoose from 'mongoose';

const communitySchema = new mongoose.Schema(
	{
		title: String,
		content: String,
		communityNum: Number,
		test: String,
	},
	{ collection: 'Community' }
);

const Community = mongoose.model('Community', communitySchema);
export { Community };
