import React from 'react';
import styled from '@emotion/styled';

interface MasterMaintenanceProps {
  title: string;
  onSave?: () => void;
  onCancel?: () => void;
  onDelete?: () => void;
}

const MasterMaintenance: React.FC<MasterMaintenanceProps> = ({ 
  title,
  onSave,
  onCancel,
  onDelete
}) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <DateText>平成19年02月26日</DateText>
      </Header>
      
      <Content>
        <Row>
          <Label>画面ID</Label>
          <Value>CME6200</Value>
        </Row>
        <Row>
          <Label>契約執行団</Label>
          <Value />
        </Row>
        <Row>
          <Label>出力位置</Label>
          <Value>7</Value>
        </Row>
        <Row>
          <Label>選択文章</Label>
          <Value>1</Value>
        </Row>
        <Row>
          <Label>明細編集</Label>
          <Value />
        </Row>
        <Row>
          <Label>行削除</Label>
          <Value />
        </Row>

        <TextArea>
          <TextAreaLabel>文章</TextAreaLabel>
          <TextAreaInput />
        </TextArea>
      </Content>

      <Footer>
        <Button onClick={onSave}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onDelete}>終了</Button>
      </Footer>
    </Container>
  );
};

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  font-family: sans-serif;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between; 
  width: 100%;
  margin-bottom: 16px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const DateText = styled.div`
  font-size: 16px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Label = styled.div`
  width: 100px;
  font-weight: bold;
  margin-right: 8px;

  @media (max-width: 600px) {
    margin-bottom: 4px;
  }
`;

const Value = styled.div`
  flex: 1;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

const TextAreaLabel = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`;

const TextAreaInput = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 8px;
`;

// Usage example
const UsageExample: React.FC = () => {
  const handleSave = () => {
    console.log('Save button clicked');
  };

  const handleCancel = () => {
    console.log('Cancel button clicked');
  };

  const handleDelete = () => {
    console.log('Delete button clicked');
  };

  return (
    <MasterMaintenance 
      title="文章マスタ保守"
      onSave={handleSave}
      onCancel={handleCancel} 
      onDelete={handleDelete}
    />
  );
};

export default MasterMaintenance;