import LessonApiGenerated from "./generated/LessonApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class LessonApi extends LessonApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Lesson List
  static getLessonList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/lessons")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default LessonApi;