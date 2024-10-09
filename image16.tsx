import React from 'react';

// Define the types for the component props
interface ProfileCardProps {
  name: string;
  title: string;
  description: string;
  avatarUrl: string;
}

// Profile card component
const ProfileCard: React.FC<ProfileCardProps> = ({ name, title, description, avatarUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {/* Display the avatar image */}
      <img src={avatarUrl} alt={`${name}'s avatar`} className="w-24 h-24 rounded-full mx-auto mb-4" />
      
      {/* Display the name */}
      <h2 className="text-2xl font-bold text-center">{name}</h2>
      
      {/* Display the title if provided */}
      {title && <p className="text-gray-600 text-center">{title}</p>}
      
      {/* Display the description if provided */}
      {description && <p className="text-gray-500 mt-4">{description}</p>}
    </div>
  );
};

// Sample data for the profile card
const sampleData: ProfileCardProps = {
  name: '仕事科目',
  title: '',
  description: '',
  avatarUrl: 'path/to/avatar.jpg',
};

// Example usage of the profile card component
const ProfileCardExample: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Profile Card Example</h1>
      <ProfileCard {...sampleData} />
    </div>
  );
};

export default ProfileCardExample;