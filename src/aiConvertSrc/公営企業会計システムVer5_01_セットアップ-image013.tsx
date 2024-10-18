import React from 'react';
import styled from 'styled-components';

// マスタ情報の型定義
type Master = {
  code: string;
  name: string;
};

// プロパティの型定義
type Props = {
  projectCode: string;
  name: string;
  charge: string;
  deleteList: Master[];
  addList: Master[];
  onBack: () => void;
  onSave: () => void;
  onCancel: () => void;
};

// スタイルコンポーネントの定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: 10px;
  @media (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  padding: 5px;
  width: 200px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ListContainer = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 10px;
  width: 50%;
  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const ListItem = styled.li`
  margin-bottom: 5px;
`;

const Button = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  @media (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

// コンポーネントの実装
const ProjectSettingsForm: React.FC<Props> = ({
  projectCode,
  name,
  charge,
  deleteList,
  addList,
  onBack,
  onSave,
  onCancel,
}) => {
  return (
    <Container>
      <Row>
        <Label>自由設定項目コード:</Label>
        <Input type="text" value={projectCode} readOnly />
      </Row>
      <Row>
        <Label>名称:</Label>
        <Input type="text" value={name} />
      </Row>
      <Row>
        <Label>略名:</Label>
        <Input type="text" value={charge} />
      </Row>
      <ListContainer>
        <List>
          <Label>明細編集:</Label>
          {deleteList.map((item) => (
            <ListItem key={item.code}>
              {item.code} {item.name}
            </ListItem>
          ))}
        </List>
        <List>
          <Label>行削除:</Label>
          {addList.map((item) => (
            <ListItem key={item.code}>
              {item.code} {item.name}
            </ListItem>
          ))}
        </List>
      </ListContainer>
      <Row>
        <Button onClick={onBack}>前データ</Button>
        <Button onClick={onSave}>次データ</Button>
        <Button onClick={onCancel}>終了</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onSave}>OK</Button>
      </Row>
    </Container>
  );
};

// サンプルデータと使用例
const sampleData = {
  projectCode: '000001',
  name: '保存年限',
  charge: '保存年限',
  deleteList: [
    { code: '000001', name: '7年保存' },
    { code: '000002', name: '3年保存' },
    { code: '000003', name: '6年保存' },
  ],
  addList: [],
};

const SampleUsage: React.FC = () => {
  const handleBack = () => {
    console.log('Previous data');
  };

  const handleSave = () => {
    console.log('Save data');
  };

  const handleCancel = () => {
    console.log('Cancel');
  };

  return (
    <ProjectSettingsForm
      projectCode={sampleData.projectCode}
      name={sampleData.name}
      charge={sampleData.charge}
      deleteList={sampleData.deleteList}
      addList={sampleData.addList}
      onBack={handleBack}
      onSave={handleSave}  
      onCancel={handleCancel}
    />
  );
};

export default SampleUsage;