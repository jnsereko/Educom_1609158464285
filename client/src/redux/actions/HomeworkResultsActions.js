import actionsFunction from "./generated/HomeworkResultsActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import HomeworkResultsApi from "../../api/HomeworkResultsApi";
 
 actionsFunction.loadHomeworkResultsList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return HomeworkResultsApi
     .getHomeworkResultsList()
     .then(list => {
       dispatch(actionsFunction.loadHomeworkResultsSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
