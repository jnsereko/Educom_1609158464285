import HomeworkResultsModelGenerated from "./generated/HomeworkResultsModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = HomeworkResultsModelGenerated.init();
  
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
      return await HomeworkResultsModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...HomeworkResultsModelGenerated,
  ...customModel
};
