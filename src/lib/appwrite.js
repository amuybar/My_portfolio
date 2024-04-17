import { Client, Account, Databases, ID } from 'appwrite';

// Initialize the Appwrite client
export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('661e9740b8f0355c9cc5');

// Initialize the Account service
export const account = new Account(client);

// Initialize the Database service
export const database = new Databases(client);

// Define your database and collection IDs
export {ID};
export const DATABASE_ID = '661e9fdf7f24f70c7db5';
export const COLLECTION_ID = '661e9ff5051d84d1dad7';