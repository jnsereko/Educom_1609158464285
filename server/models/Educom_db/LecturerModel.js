import LecturerModelGenerated from "./generated/LecturerModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = LecturerModelGenerated.init();
  
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
      return await LecturerModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...LecturerModelGenerated,
  ...customModel
};
