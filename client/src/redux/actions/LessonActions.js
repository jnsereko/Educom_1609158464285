import actionsFunction from "./generated/LessonActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import LessonApi from "../../api/LessonApi";
 
 actionsFunction.loadLessonList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return LessonApi
     .getLessonList()
     .then(list => {
       dispatch(actionsFunction.loadLessonSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
