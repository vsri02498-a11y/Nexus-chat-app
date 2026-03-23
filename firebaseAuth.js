// firebaseAuth.js

const firebase = require('firebase/app');
require('firebase/auth');

// Initialize Firebase (make sure to replace this with your own configuration)
const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID'
};

firebase.initializeApp(firebaseConfig);

// Function for user registration
const registerUser = async (email, password) => {
    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        return userCredential;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Function for user login
const loginUser = async (email, password) => {
    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        return userCredential;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Function for user logout
const logoutUser = async () => {
    try {
        await firebase.auth().signOut();
    } catch (error) {
        throw new Error(error.message);
    }
};

// Function for password reset
const resetPassword = async (email) => {
    try {
        await firebase.auth().sendPasswordResetEmail(email);
    } catch (error) {
        throw new Error(error.message);
    }
};

// Function for token verification
const verifyToken = async (token) => {
    try {
        const user = await firebase.auth().verifyIdToken(token);
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = { registerUser, loginUser, logoutUser, resetPassword, verifyToken };