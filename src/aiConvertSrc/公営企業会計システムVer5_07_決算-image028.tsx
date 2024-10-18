import React from 'react';
import styled from '@emotion/styled';

type Props = {
  items: string[];
  onDownload?: () => void;
  onCancel?: () => void;
};

const FileList: React.FC<Props> = ({ items, onDownload, onCancel }) => {
  return (
    <Container>
      <Title>新しいファルダー</Title>
      <ItemList>
        {items.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </ItemList>
      <ButtonContainer>
        <Button onClick={onDownload}>保存(S)</Button>
        <Button onClick={onCancel}>ｷｬﾝｾﾙ</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  width: 300px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const ItemList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  padding: 5px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const Button = styled.button`
  margin-left: 10px;
`;

// Usage example
const App: React.FC = () => {
  const items = ['test_zrmk.csv', 'Microsoft Excel CSV ファイル'];

  const handleDownload = () => {
    console.log('Download clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <div>
      <h1>File List Example</h1>
      <FileList
        items={items}
        onDownload={handleDownload}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default App;