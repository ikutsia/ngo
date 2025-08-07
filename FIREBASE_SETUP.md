# Firebase Authentication Setup

This guide will help you set up Firebase Authentication for the NGO website.

## 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter your project name (e.g., "ngo-website")
4. Choose whether to enable Google Analytics (optional)
5. Click "Create project"

## 2. Enable Authentication

1. In your Firebase project console, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Go to the "Sign-in method" tab
4. Enable "Email/Password" authentication
5. Click "Save"

## 3. Get Your Firebase Configuration

1. In your Firebase project console, click the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (</>)
5. Register your app with a nickname (e.g., "ngo-web-app")
6. Copy the Firebase configuration object

## 4. Update Firebase Configuration

Replace the placeholder configuration in `src/firebase/config.js` with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
};
```

## 5. Test the Authentication

1. Start your development server: `npm start`
2. Navigate to `/login` to test the login functionality
3. Navigate to `/signup` to test the signup functionality
4. Navigate to `/admin` to access the protected admin dashboard

## 6. Admin Functionality

### Features Implemented:

- ✅ Email/Password Authentication
- ✅ User Registration
- ✅ User Login/Logout
- ✅ Password Reset
- ✅ Protected Admin Routes
- ✅ Admin Dashboard with Tailwind Styling
- ✅ User Profile Management

### Admin Routes:

- `/login` - Login page
- `/signup` - Registration page
- `/forgot-password` - Password reset page
- `/admin` - Protected admin dashboard

### Security Features:

- Private routes that redirect unauthenticated users
- Firebase security rules (configure in Firebase Console)
- Email verification (can be enabled in Firebase Console)

## 7. Customization

### Adding More Admin Features:

1. Create new components in `src/components/admin/`
2. Add routes in `src/App.js`
3. Use the `useAuth()` hook to access user data
4. Style with Tailwind CSS classes

### Styling:

All components use Tailwind CSS classes that match your existing design system:

- Primary colors: `text-primary`, `bg-primary`
- Secondary colors: `text-secondary`, `bg-secondary`
- Gray colors: `text-gray-text`, `bg-gray-light`

## 8. Environment Variables (Recommended)

For production, store your Firebase config in environment variables:

1. Create a `.env` file in your project root:

```
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```

2. Update `src/firebase/config.js`:

```javascript
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
```

## 9. Next Steps

1. **Add more admin features**: User management, content editing, analytics
2. **Implement role-based access**: Different admin levels
3. **Add email verification**: Require email verification before admin access
4. **Add social login**: Google, Facebook, etc.
5. **Add audit logging**: Track admin actions
6. **Add two-factor authentication**: Enhanced security

## Troubleshooting

### Common Issues:

1. **"Firebase: Error (auth/user-not-found)"**: User doesn't exist
2. **"Firebase: Error (auth/wrong-password)"**: Incorrect password
3. **"Firebase: Error (auth/email-already-in-use)"**: Email already registered
4. **"Firebase: Error (auth/weak-password)"**: Password too weak

### Debug Tips:

- Check browser console for detailed error messages
- Verify Firebase configuration is correct
- Ensure Authentication is enabled in Firebase Console
- Check network connectivity
