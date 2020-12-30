// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import AdminModel from "../models/Educom_db/AdminModel";
import AnnouncementModel from "../models/Educom_db/AnnouncementModel";
import AttendanceModel from "../models/Educom_db/AttendanceModel";
import BlackBoadModel from "../models/Educom_db/BlackBoadModel";
import ClassModel from "../models/Educom_db/ClassModel";
import ClassResourcesModel from "../models/Educom_db/ClassResourcesModel";
import ExamResultsModel from "../models/Educom_db/ExamResultsModel";
import HomeworkResultsModel from "../models/Educom_db/HomeworkResultsModel";
import LecturerModel from "../models/Educom_db/LecturerModel";
import LessonModel from "../models/Educom_db/LessonModel";
import StudentModel from "../models/Educom_db/StudentModel";
import TimetableModel from "../models/Educom_db/TimetableModel";
import UserModel from "../models/Educom_db/UserModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.Educom_db_dbUrl);

    // Start Init Models

		AdminModel.init();
		AnnouncementModel.init();
		AttendanceModel.init();
		BlackBoadModel.init();
		ClassModel.init();
		ClassResourcesModel.init();
		ExamResultsModel.init();
		HomeworkResultsModel.init();
		LecturerModel.init();
		LessonModel.init();
		StudentModel.init();
		TimetableModel.init();
		UserModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_Educom_db = await mongoose.connect(
        "mongodb://" + properties.Educom_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_Educom_db;
  }
}

export default new Database();
