import { getUserData } from '../../src/services/spotify'

export default async (_, res) => {
  const response = await getUserData()
  const json = await response.json()

  return res.status(200).json(json)
}
