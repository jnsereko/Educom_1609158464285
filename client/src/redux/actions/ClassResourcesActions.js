import actionsFunction from "./generated/ClassResourcesActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import ClassResourcesApi from "../../api/ClassResourcesApi";
 
 actionsFunction.loadClassResourcesList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return ClassResourcesApi
     .getClassResourcesList()
     .then(list => {
       dispatch(actionsFunction.loadClassResourcesSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
