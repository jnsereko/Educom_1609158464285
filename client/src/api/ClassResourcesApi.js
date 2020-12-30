import ClassResourcesApiGenerated from "./generated/ClassResourcesApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ClassResourcesApi extends ClassResourcesApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get ClassResources List
  static getClassResourcesList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/classresourcess")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ClassResourcesApi;