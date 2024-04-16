import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('661e9740b8f0355c9cc5');

export const account = new Account(client);
export { ID } from 'appwrite';
