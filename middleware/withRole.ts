import { getSession } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

const withRole = (handler) => async (req: NextApiRequest, res: NextApiResponse) => {
    return handler(req, res);
};

export default withRole;