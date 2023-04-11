// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import addNewsSubscriberRepository from '@src/repositories/addNewsSubscriberRepository'
import mongoose from 'mongoose'
import { DB_HOST } from '@src/consts/config'
mongoose.connect(DB_HOST)
import '@src/entities/subscriberEntity'
import { ISubscriberModel } from '@src/models/subscriberModel'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    if (req.method !== 'POST') {
      res.status(405).send('Only POST requests allowed')
      return
    }

    const params: ISubscriberModel = JSON.parse(req.body)
    const response = await addNewsSubscriberRepository(params)

    res.status(200).json(response)
  } catch(err) {
    res.status(400).json(err)
  }
}
