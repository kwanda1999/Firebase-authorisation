//firestore database configuration

const axios = require('axios');
const fs = require('fs');

const serviceAccount = JSON.parse(fs.readFileSync('C:/Users/RoseNgwenya/Documents/Visual Studio 2022/VGA 2024/Firebase Authentification/vga-authetification-firebase-adminsdk-pq9ob-dd4a2de1c3.json'));

const baseUrl = 'https://firestore.googleapis.com/v1/projects/VGA-Authetification/databases/(default)/documents';
const usersCollection = 'users';  //collection of user emails and passwords
const adminsCollection = 'admins'; //collection of admin emails and passwords
const usersurl = `${baseUrl}/${usersCollection}?key=${serviceAccount.private_key}`;
const adminsurl = `${baseUrl}/${adminsCollection}?key=${serviceAccount.private_key}`;

axios.get(usersurl)
    .then(response => {
        console.log('User data:', response.data);
    })
    .catch(error => {
        console.error('Error retrieving user data:', error);
    });

axios.get(adminsurl)
    .then(response => {
        console.log('Admin data:', response.data);
    })
    .catch(error => {
        console.error('Error retrieving admin data:', error);
    });
