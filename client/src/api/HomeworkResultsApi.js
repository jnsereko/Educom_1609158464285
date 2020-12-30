import HomeworkResultsApiGenerated from "./generated/HomeworkResultsApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class HomeworkResultsApi extends HomeworkResultsApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get HomeworkResults List
  static getHomeworkResultsList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/homeworkresultss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default HomeworkResultsApi;