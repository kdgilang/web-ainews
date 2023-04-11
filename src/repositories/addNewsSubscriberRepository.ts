import SubscriberEntity from '@src/entities/subscriberEntity'
import { ISubscriberModel } from '@src/models/subscriberModel'

export default async function addNewsSubscriberRepository(params: ISubscriberModel): Promise<ISubscriberModel> {
  try {
    const subscriber = new SubscriberEntity(params)

    const response = await subscriber.save()
  
    return response
  } catch(err) {
    console.log(err)
    throw err
  }
}