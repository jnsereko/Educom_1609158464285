import actionsFunction from "./generated/LecturerActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import LecturerApi from "../../api/LecturerApi";
 
 actionsFunction.loadLecturerList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return LecturerApi
     .getLecturerList()
     .then(list => {
       dispatch(actionsFunction.loadLecturerSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
