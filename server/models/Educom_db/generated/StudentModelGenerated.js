/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE StudentModelGenerated.js PLEASE EDIT ../StudentModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_Educom_db";
import mongoose, { Schema } from "mongoose";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {
  /**
   * Init  schema
   */
  init() {
    const db = Database.getConnection();

    /**
      * Student
      */
    const studentSchema = new mongoose.Schema({
      email: {
        type: "String"
      },
      isHandRaised: {
        type: "Boolean"
      },
      isMuted: {
        type: "Boolean"
      },
      name: {
        type: "String"
      },
      password: {
        type: "String"
      },
      // RELATIONS
      
      
      // EXTERNAL RELATIONS
      /*
      studentId: {
        type: Schema.ObjectId,
        ref: "Lesson"
      },
      studentId: {
        type: Schema.ObjectId,
        ref: "Attendance"
      },
      */
    });

    generatedModel.setModel(db.connection.model("Student", studentSchema));

    return studentSchema;
  },

  /**
   * Set Model
   */
  setModel: model => {
    generatedModel.model = model;
  },

  /**
   * Get model
   */
  getModel: () => {
    return generatedModel.model;
  },

  // Start queries
    

  // CRUD METHODS


  /**
  * StudentModel.create
  *   @description CRUD ACTION create
  *   @param Student obj Object to insert
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * StudentModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id Student
  *
  */
  async delete(id) {
    return await generatedModel.model.findByIdAndRemove(id);
  },
  
  /**
  * StudentModel.findByname
  *   @description CRUD ACTION findByname
  *   @param Objectid key Id of the resource name to search
  *
  */
  async findByname(key) {
    return await generatedModel.model.find({ 'name' : key});
  },
  
  /**
  * StudentModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id Student
  *   @returns Student
  *
  */
  async get(id) {
    return await generatedModel.model.findOne({ _id : id });
  },
  
  /**
  * StudentModel.list
  *   @description CRUD ACTION list
  *   @returns ARRAY OF Student
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  
  /**
  * StudentModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id Student
  *   @returns Student
  *
  */
  async update(item) { 
    return await generatedModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  },
  


};

export default generatedModel;
