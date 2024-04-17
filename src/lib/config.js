import {  Databases, ID } from "appwrite";
import { client, COLLECTION_ID , DATABASE_ID } from "./appwrite";

const database = new Databases(client);


const createBlog = async (formData) => {
  try {
    const now = new Date(); // Get current timestamp
    const data = { ...formData, created_at: now.toISOString() };
    return database.createDocument(
      DATABASE_ID,
      COLLECTION_ID ,
      ID.unique(),
      data
    );
  } catch (e) {
    console.error(e.message);
  }
};

const getBlogs = async () => {
  try {
    return database.listDocuments(DATABASE_ID, COLLECTION_ID );
  } catch (e) {
    console.error(e.message);
  }
};

const updateBlog = async ({ documentID, title,
  slag,
  content,
  summary,}) => {
  try {
    return database.updateDocument(DATABASE_ID, COLLECTION_ID , documentID, {
      title,
      slag,
      content,
      summary,
      
    });
  } catch (e) {
    console.error(e.message);
  }
};

const deleteBlog = async (documentID) => {
  try {
    return database.deleteDocument(DATABASE_ID, COLLECTION_ID , documentID);
  } catch (e) {
    console.error(e.message);
  }
};

export {
 
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
};