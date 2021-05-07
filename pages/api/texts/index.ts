import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import withRole from '../../../middleware/withRole';
import connectDB from '../../../middleware/mongodb';
import Text from '../../../models/Text';

const handler = withApiAuthRequired(
    withRole(
        async (req: NextApiRequest, res: NextApiResponse) => {
            switch (req.method) {
                case 'GET': await getTexts(req, res); break;
                case 'POST': await addText(req, res); break;
            }
        }
    ),
);

const getTexts = async (req: NextApiRequest, res: NextApiResponse) => {
    const texts = await Text.find({});

    res.status(200).json(texts);
}

const addText = async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, text } = req.body;
    const saved = await new Text({ name, text }).save();
    res.status(200).json(saved);
};

export default connectDB(handler);