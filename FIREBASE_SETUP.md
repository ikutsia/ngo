# Firebase Setup Guide

## 1. Firebase Project Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing project
3. Enable Authentication and Firestore Database

## 2. Authentication Setup

1. In Firebase Console, go to "Authentication" → "Sign-in method"
2. Enable "Email/Password" authentication
3. Add your admin email addresses

## 3. Create Admin Users (IMPORTANT)

Since public signup is disabled, you must create admin users directly in Firebase Console:

1. Go to Firebase Console → "Authentication" → "Users"
2. Click "Add user"
3. Enter email and temporary password
4. Share credentials with your admin team
5. Users should change password on first login

## 4. Firestore Database Setup

1. Go to Firebase Console → "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (we'll add security rules)
4. Select a location close to your users

## 5. Firestore Security Rules (CRITICAL)

Replace the default rules with these secure rules that only allow authenticated users:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write only for authenticated users
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

**What this does:**

- ✅ **Authenticated users** (like you when logged in) can read and write
- ❌ **Unauthenticated users** cannot access any data
- ✅ **Secure** - no public access
- ✅ **Functional** - your admin panel will work

## 6. Environment Variables

Add these to your `.env.local` file and Netlify environment variables:

```
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
REACT_APP_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

## 7. Test the Authentication

1. Start your app locally: `npm start`
2. Go to `/login`
3. Use admin credentials created in step 3
4. You should be redirected to `/admin` dashboard

## 8. Admin Functionality

- **Login only** - No public signup
- **Protected routes** - Only authenticated users can access `/admin`
- **Project management** - Add, edit, delete projects via admin panel
- **Secure** - Only you and your team can modify data

## 9. Troubleshooting

### Common Issues:

1. **"Permission denied" error**: Check that you're logged in and Firestore rules allow authenticated users
2. **"Firebase not initialized"**: Check environment variables are set correctly
3. **"Invalid API key"**: Verify your Firebase project credentials

### Debug Steps:

1. Check browser console for Firebase debug messages
2. Verify you're logged in before accessing admin features
3. Check Firestore rules in Firebase Console
4. Ensure Firestore database is created and enabled

## 10. Security Best Practices

- ✅ Use strong passwords for admin accounts
- ✅ Regularly rotate admin credentials
- ✅ Monitor Firebase Console for suspicious activity
- ✅ Consider implementing role-based access for larger teams
- ✅ Keep Firebase SDK versions updated

## 11. Deployment

1. Push changes to GitHub
2. Netlify will automatically deploy
3. Ensure environment variables are set in Netlify dashboard
4. Test admin functionality on live site

---

**Need help?** Check the browser console for detailed error messages and refer to this guide for troubleshooting steps.
