import React from 'react';
import styled from '@emotion/styled';

type FolderProps = {
  name: string;
  folders: string[];
};

const FolderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FolderName = styled.div`
  font-weight: bold;
`;

const FolderList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const FolderItem = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;

  &::before {
    content: '□';
    font-size: 12px;
  }
`;

const Folder: React.FC<FolderProps> = ({ name, folders }) => {
  return (
    <FolderContainer>
      <FolderName>{name}</FolderName>
      {folders.length > 0 ? (
        <FolderList>
          {folders.map((folder, index) => (
            <FolderItem key={index}>{folder}</FolderItem>
          ))}
        </FolderList>
      ) : (
        <div>No folders</div>
      )}
    </FolderContainer>
  );
};

// Usage example
const App: React.FC = () => {
  const folders: FolderProps[] = [
    {
      name: '支払',
      folders: ['202008随時データ', '202009随時データ'],
    },
    {
      name: '月例',
      folders: [],
    },
  ];

  return (
    <div>
      {folders.map((folder, index) => (
        <Folder key={index} name={folder.name} folders={folder.folders} />
      ))}
    </div>
  );
};

export default App;