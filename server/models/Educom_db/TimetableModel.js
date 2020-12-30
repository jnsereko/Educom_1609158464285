import TimetableModelGenerated from "./generated/TimetableModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = TimetableModelGenerated.init();
  
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
      return await TimetableModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...TimetableModelGenerated,
  ...customModel
};
