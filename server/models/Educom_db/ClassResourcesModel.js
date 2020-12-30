import ClassResourcesModelGenerated from "./generated/ClassResourcesModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ClassResourcesModelGenerated.init();
  
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
      return await ClassResourcesModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ClassResourcesModelGenerated,
  ...customModel
};
