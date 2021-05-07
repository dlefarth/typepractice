import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../middleware/mongodb";
import withRole from "../../../middleware/withRole";
import Text from '../../../models/Text';

const handler = withApiAuthRequired(
  withRole(
    async (req: NextApiRequest, res: NextApiResponse) => {
      switch (req.method) {
        case 'PUT': await editText(req, res); break;
        case 'DELETE': await deleteText(req, res); break;
      }
    }
  ),
);

const editText = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const { name, text } = req.body;

  await Text.findOneAndUpdate({ _id: id }, { name, text }, { new: true });
  res.status(200).end();
};


const deleteText = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  await Text.deleteOne({ _id: id });
  res.status(200).end();
};

export default connectDB(handler);