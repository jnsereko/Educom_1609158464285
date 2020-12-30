import ExamResultsApiGenerated from "./generated/ExamResultsApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ExamResultsApi extends ExamResultsApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get ExamResults List
  static getExamResultsList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/examresultss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ExamResultsApi;