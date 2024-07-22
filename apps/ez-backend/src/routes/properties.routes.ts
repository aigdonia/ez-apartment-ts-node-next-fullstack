import { before, GET, POST, route } from "awilix-express";
import { Request, Response } from "express";
import bodyParser from "body-parser";

@route('/properties')
export default class PropertiesAPI {
  propertiesService: any;

  constructor({ propertiesService }: { propertiesService: any }) {
    this.propertiesService = propertiesService;
  }

  @route('/:id')
  @GET()
  async getProperty(req: Request, res: Response) {
    const property = await this.propertiesService.getProperty(req.params.id);
    res.json(property);
  }

  @GET()
  async filterProperties(req: Request, res: Response) {
    const {query: params} = req;
    const properties = await this.propertiesService.filterProperties(params);

    res.json({ message: "Filter Properties", params, properties });
  }

  //TODO: Validate request body using zod
  @POST()
  @before([bodyParser.json()])
  async createProperty(req: Request, res: Response) {
    try {
      const property = await this.propertiesService.createProperty(req.body);
      res.json({
        message: "Property Created",
        property
      });
    } catch (error) {
      res.status(500).json({ message: "Error creating property" });
    }
  }

}