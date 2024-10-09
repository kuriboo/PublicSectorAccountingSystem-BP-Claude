// UserProfile.tsx
import React from 'react';

type UserProfileProps = {
  profileImageUrl: string;
  userName: string;
  userDescription: string;
  userRole: string;
};

const UserProfile: React.FC<UserProfileProps> = ({
  profileImageUrl,
  userName,
  userDescription,
  userRole,
}) => {
  return (
    <div className="flex items-center space-x-4">
      {/* Profile Image */}
      {profileImageUrl ? (
        <img
          src={profileImageUrl}
          alt={`${userName}'s profile`}
          className="w-16 h-16 rounded-full"
        />
      ) : (
        <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
      )}

      <div>
        {/* User Name */}
        <h2 className="text-xl font-bold">
          {userName ? userName : 'Unknown User'}
        </h2>
        
        {/* User Description */}
        {userDescription && (
          <p className="text-gray-600">{userDescription}</p>
        )}
        
        {/* User Role */}
        {userRole && (
          <p className="text-sm text-gray-500">{userRole}</p>  
        )}
      </div>
    </div>
  );
};

// Sample data for demonstration
const sampleUser = {
  profileImageUrl: 'https://example.com/profile.jpg',
  userName: 'John Doe',
  userDescription: 'Software Engineer',
  userRole: 'Admin',
};

// Usage example
const UserProfileExample: React.FC = () => {
  return (
    <div>
      <h1>User Profile Example</h1>
      <UserProfile {...sampleUser} />
    </div>
  );  
};

export default UserProfile;