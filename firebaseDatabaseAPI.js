// Firebase Realtime Database API for Nexus Chat App

import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    databaseURL: 'YOUR_DATABASE_URL',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID'
};

// Initialize Firebase App
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// CRUD Operations

// Create User
export const createUser = (userId, userData) => {
    return database.ref('users/' + userId).set(userData);
};

// Read User
export const readUser = (userId) => {
    return database.ref('users/' + userId).once('value').then(snapshot => snapshot.val());
};

// Update User
export const updateUser = (userId, userData) => {
    return database.ref('users/' + userId).update(userData);
};

// Delete User
export const deleteUser = (userId) => {
    return database.ref('users/' + userId).remove();
};

// Create Message
export const createMessage = (messageId, messageData) => {
    return database.ref('messages/' + messageId).set(messageData);
};

// Read Message
export const readMessage = (messageId) => {
    return database.ref('messages/' + messageId).once('value').then(snapshot => snapshot.val());
};

// Update Message
export const updateMessage = (messageId, messageData) => {
    return database.ref('messages/' + messageId).update(messageData);
};

// Delete Message
export const deleteMessage = (messageId) => {
    return database.ref('messages/' + messageId).remove();
};

// Create Conversation
export const createConversation = (conversationId, conversationData) => {
    return database.ref('conversations/' + conversationId).set(conversationData);
};

// Read Conversation
export const readConversation = (conversationId) => {
    return database.ref('conversations/' + conversationId).once('value').then(snapshot => snapshot.val());
};

// Update Conversation
export const updateConversation = (conversationId, conversationData) => {
    return database.ref('conversations/' + conversationId).update(conversationData);
};

// Delete Conversation
export const deleteConversation = (conversationId) => {
    return database.ref('conversations/' + conversationId).remove();
};

// Create Group
export const createGroup = (groupId, groupData) => {
    return database.ref('groups/' + groupId).set(groupData);
};

// Read Group
export const readGroup = (groupId) => {
    return database.ref('groups/' + groupId).once('value').then(snapshot => snapshot.val());
};

// Update Group
export const updateGroup = (groupId, groupData) => {
    return database.ref('groups/' + groupId).update(groupData);
};

// Delete Group
export const deleteGroup = (groupId) => {
    return database.ref('groups/' + groupId).remove();
};