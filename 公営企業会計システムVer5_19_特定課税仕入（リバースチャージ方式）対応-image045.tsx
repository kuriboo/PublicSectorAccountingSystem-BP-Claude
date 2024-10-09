// UserCard.tsx
import React from 'react';

interface UserCardProps {
  name: string;
  title: string;
  avatarUrl: string;
  description: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, title, avatarUrl, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {/* User Avatar */}
      <div className="flex justify-center">
        <img src={avatarUrl} alt={`${name}'s avatar`} className="w-24 h-24 rounded-full" />
      </div>

      {/* User Name */}
      <h2 className="text-2xl font-bold text-center mt-4">{name}</h2>

      {/* User Title */}
      <p className="text-gray-600 text-center">{title}</p>

      {/* User Description */}
      <p className="text-gray-700 mt-4">{description}</p>
    </div>
  );
};

// Example usage
const ExampleUserCard: React.FC = () => {
  const userData = {
    name: 'John Doe',
    title: 'Software Engineer',
    avatarUrl: 'https://example.com/avatar.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.',
  };

  return (
    <div className="max-w-sm mx-auto">
      <UserCard {...userData} />
    </div>
  );
};

export default UserCard;