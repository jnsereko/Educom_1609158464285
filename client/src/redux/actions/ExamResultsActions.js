import actionsFunction from "./generated/ExamResultsActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import ExamResultsApi from "../../api/ExamResultsApi";
 
 actionsFunction.loadExamResultsList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return ExamResultsApi
     .getExamResultsList()
     .then(list => {
       dispatch(actionsFunction.loadExamResultsSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
