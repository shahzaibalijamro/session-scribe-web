// // firebase-admin.js
// import admin from 'firebase-admin';

// // Initialize Firebase Admin SDK
// if (!admin.apps.length) {
//   // For production, use environment variables or service account key
//   admin.initializeApp({
//     credential: admin.credential.applicationDefault(), // or use service account
//     projectId: process.env.FIREBASE_PROJECT_ID
//   });
// }

// export const verifyIdToken = async (idToken) => {
//   try {
//     const decodedToken = await admin.auth().verifyIdToken(idToken);
//     return decodedToken;
//   } catch (error) {
//     throw new Error('Invalid Firebase ID token');
//   }
// };


// config/firebase-admin.js
import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  try {
    console.log('🔧 Initializing Firebase Admin with service account...');
    
    // Read the service account key file
    const serviceAccountPath = join(__dirname, 'serviceAccountKey.json');
    const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: serviceAccount.project_id
    });
    
    console.log('✅ Firebase Admin initialized successfully');
    console.log('📋 Project ID:', serviceAccount.project_id);
    console.log('📧 Service Account Email:', serviceAccount.client_email);
    
  } catch (error) {
    console.error('❌ Firebase Admin initialization failed:', error.message);
    console.error('💡 Make sure serviceAccountKey.json exists in the config folder');
    throw error;
  }
}

export const verifyIdToken = async (idToken) => {
  try {
    console.log('🔍 Verifying ID token...');
    console.log('📏 Token length:', idToken?.length);
    
    if (!idToken) {
      throw new Error('No ID token provided');
    }
    
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    
    console.log('✅ Token verified successfully');
    console.log('👤 User info:', {
      uid: decodedToken.uid,
      email: decodedToken.email,
      name: decodedToken.name || decodedToken.displayName
    });
    
    return decodedToken;
    
  } catch (error) {
    console.error('❌ Token verification failed:', error.message);
    console.error('🔍 Error code:', error.code);
    
    // Provide specific error messages
    if (error.code === 'auth/id-token-expired') {
      throw new Error('Firebase token has expired. Please sign in again.');
    } else if (error.code === 'auth/invalid-id-token') {
      throw new Error('Invalid Firebase token format.');
    } else if (error.code === 'auth/project-not-found') {
      throw new Error('Firebase project not found. Check your project configuration.');
    } else if (error.code === 'auth/insufficient-permission') {
      throw new Error('Insufficient permissions. Check your service account setup.');
    } else {
      throw new Error(`Token verification failed: ${error.message}`);
    }
  }
};