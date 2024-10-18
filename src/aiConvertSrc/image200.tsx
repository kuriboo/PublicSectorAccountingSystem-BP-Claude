import React from 'react';
import styled from '@emotion/styled';

type IconProps = {
  src: string;
  alt: string;
  size?: number;
};

const IconWrapper = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Icon: React.FC<IconProps> = ({ src, alt, size = 40 }) => {
  return (
    <IconWrapper size={size}>
      <IconImage src={src} alt={alt} />
    </IconWrapper>
  );
};

type TextProps = {
  text: string;
  color?: string;
  fontSize?: number;
};

const TextWrapper = styled.p<{ color: string; fontSize: number }>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize}px;
  margin: 0;
  padding: 0;
`;

const Text: React.FC<TextProps> = ({ text, color = '#333', fontSize = 16 }) => {
  return <TextWrapper color={color} fontSize={fontSize}>{text}</TextWrapper>;
};

type UserInfoProps = {
  iconSrc: string;
  iconAlt: string;
  name: string;
  systemName: string;
};

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const UserInfo: React.FC<UserInfoProps> = ({ iconSrc, iconAlt, name, systemName }) => {
  return (
    <UserInfoWrapper>
      <Icon src={iconSrc} alt={iconAlt} />
      <div>
        <Text text={name} fontSize={18} />
        <Text text={systemName} fontSize={14} color="#666" />
      </div>
    </UserInfoWrapper>
  );
};

// Usage example
const UserInfoExample = () => {
  return (
    <UserInfo
      iconSrc="path/to/icon.png"
      iconAlt="User Icon"
      name="John Doe"
      systemName="System Name"
    />
  );
};

export default UserInfoExample;