import actionsFunction from "./generated/BlackBoadActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import BlackBoadApi from "../../api/BlackBoadApi";
 
 actionsFunction.loadBlackBoadList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return BlackBoadApi
     .getBlackBoadList()
     .then(list => {
       dispatch(actionsFunction.loadBlackBoadSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
