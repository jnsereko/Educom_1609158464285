import AnnouncementModelGenerated from "./generated/AnnouncementModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = AnnouncementModelGenerated.init();
  
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
      return await AnnouncementModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...AnnouncementModelGenerated,
  ...customModel
};
