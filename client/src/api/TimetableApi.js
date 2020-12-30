import TimetableApiGenerated from "./generated/TimetableApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class TimetableApi extends TimetableApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Timetable List
  static getTimetableList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/timetables")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default TimetableApi;