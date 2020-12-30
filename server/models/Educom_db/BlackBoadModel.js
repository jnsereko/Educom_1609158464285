import BlackBoadModelGenerated from "./generated/BlackBoadModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = BlackBoadModelGenerated.init();
  
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
      return await BlackBoadModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...BlackBoadModelGenerated,
  ...customModel
};
