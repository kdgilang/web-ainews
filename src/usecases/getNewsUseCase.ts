import { Configuration, OpenAIApi } from "openai"

export default async function getNewsUseCase() {

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
  const openai = new OpenAIApi(configuration)

  // const completion = await openai.createCompletion({
  //   model: "text-davinci-003",
  //   prompt: "Hello world",
  // })
  const response = await openai.createImage({
    prompt: "A cute baby sea otter",
    n: 2,
    size: "1024x1024",
  })

  return response
}