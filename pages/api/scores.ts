import { getSession } from '@auth0/nextjs-auth0';
import connectDB from '../../middleware/mongodb';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import Score from '../../models/Score';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = withApiAuthRequired(
    async (req: NextApiRequest, res: NextApiResponse) => {
        switch (req.method) {
            case 'POST': await addScore(req, res); break;
            case 'GET': await getScores(req, res); break;
        }
    }
);

const addScore = async (req: NextApiRequest, res: NextApiResponse) => {
    const { user: { sub: user } } = getSession(req, res);
    const { score } = req.body;

    if (!score) return;

    await new Score({ user, score }).save();
    res.status(200);
}

const getScores = async (req: NextApiRequest, res: NextApiResponse) => {
    const { user: { sub: user } } = getSession(req, res);
    const scores = await Score.find({ user });
    res.json(scores);
}

export default connectDB(handler);