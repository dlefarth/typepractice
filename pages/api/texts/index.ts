import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../middleware/mongodb';
import Text from '../../../models/Text';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';

const handler = withApiAuthRequired(
    async (req: NextApiRequest, res: NextApiResponse) => {
        switch (req.method) {
            case 'GET': await getTexts(req, res); break;
        }
    }
);

const getTexts = async (req: NextApiRequest, res: NextApiResponse) => {
    const texts = await Text.find({});

    res.status(200).json(texts);
}

export default connectDB(handler);