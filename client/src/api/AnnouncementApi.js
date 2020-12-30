import AnnouncementApiGenerated from "./generated/AnnouncementApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class AnnouncementApi extends AnnouncementApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Announcement List
  static getAnnouncementList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/announcements")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default AnnouncementApi;