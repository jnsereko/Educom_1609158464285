import AdminModelGenerated from "./generated/AdminModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = AdminModelGenerated.init();
  
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
      return await AdminModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...AdminModelGenerated,
  ...customModel
};
