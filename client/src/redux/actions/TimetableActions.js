import actionsFunction from "./generated/TimetableActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import TimetableApi from "../../api/TimetableApi";
 
 actionsFunction.loadTimetableList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return TimetableApi
     .getTimetableList()
     .then(list => {
       dispatch(actionsFunction.loadTimetableSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
