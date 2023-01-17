// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from "../../../utils/dbConnection"
import PROPERTIES from "../../../models/properties"

export default async function handler(req, res) {
  if(req.method !== "GET") return res.status(500).send({ message: "Only get calls are supported" })
  await connectDB()
  const property = await PROPERTIES.findById(req.query.propertyId)
  return res.send(property)  
}
