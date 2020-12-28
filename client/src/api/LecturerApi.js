import LecturerApiGenerated from "./generated/LecturerApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class LecturerApi extends LecturerApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Lecturer List
  static getLecturerList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/lecturers")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default LecturerApi;