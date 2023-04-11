// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose'
import { DB_HOST } from '@src/consts/config'
import UserEntity from  '@src/entities/subscriberEntity'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    mongoose.connect(DB_HOST)
    UserEntity;
    res.status(200).json('success')
  } catch(err) {
    res.status(400).json(err)
  }
}
