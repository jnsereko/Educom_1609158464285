import BlackBoadApiGenerated from "./generated/BlackBoadApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class BlackBoadApi extends BlackBoadApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get BlackBoad List
  static getBlackBoadList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/blackboads")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default BlackBoadApi;