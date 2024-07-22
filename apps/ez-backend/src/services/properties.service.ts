import { Property, PropertyDocument } from "../models/property.model";

export default class PropertiesService {
  /**
   * Gets a property by identifier
   * @param id 
   * @returns Property
   */
  async getProperty(id: string) {
    const proprty = await Property.findById(id);
    return proprty;
  }

  /**
   * Saves a new property in the database
   * @param property 
   * @returns Saved property
   */
  async createProperty(property: PropertyDocument) {
    const newProperty = new Property(property);
    return newProperty.save();
  }

  async filterProperties(params: any) {
    const properties = await Property.find();
    return properties;
  }
}