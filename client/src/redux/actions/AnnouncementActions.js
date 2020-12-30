import actionsFunction from "./generated/AnnouncementActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import AnnouncementApi from "../../api/AnnouncementApi";
 
 actionsFunction.loadAnnouncementList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return AnnouncementApi
     .getAnnouncementList()
     .then(list => {
       dispatch(actionsFunction.loadAnnouncementSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
