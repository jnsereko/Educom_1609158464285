import AttendanceModelGenerated from "./generated/AttendanceModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = AttendanceModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await AttendanceModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...AttendanceModelGenerated,
  ...customModel
};
