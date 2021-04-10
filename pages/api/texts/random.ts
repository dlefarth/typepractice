import connectDB from '../../../middleware/mongodb';
import Text from '../../../models/Text';

const handler = async (req, res) => {
    const texts = await Text.aggregate([{ $sample: { size: 1 } }]);

    res.status(200).json(texts[0]);
}

export default connectDB(handler);