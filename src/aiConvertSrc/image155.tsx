import React from 'react';
import styled from 'styled-components';

// 小分類データの型定義
type SubdivisionData = {
  code: string;
  name: string;
};

// コンポーネントのPropsの型定義
type Props = {
  subdivisionCode: string;
  largeClassificationName: string;
  middleClassificationName: string;
  subdivision: SubdivisionData;
  onCodeChange: (code: string) => void;
  onNameChange: (name: string) => void;
  onOk: () => void;
  onCancel: () => void;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.label`
  flex: 1;
  margin-right: 8px;
`;

const Input = styled.input`
  flex: 2;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// コンポーネントの定義
const SubdivisionForm: React.FC<Props> = ({
  subdivisionCode,
  largeClassificationName,
  middleClassificationName,
  subdivision,
  onCodeChange,
  onNameChange,
  onOk,
  onCancel,
}) => {
  return (
    <Container>
      <Row>
        <Label>コード</Label>
        <Input
          type="text"
          value={subdivisionCode}
          onChange={(e) => onCodeChange(e.target.value)}
        />
      </Row>
      <Row>
        <Label>大分類</Label>
        <Input type="text" value={largeClassificationName} readOnly />
      </Row>
      <Row>
        <Label>中分類</Label>
        <Input type="text" value={middleClassificationName} readOnly />
      </Row>
      <Row>
        <Label>小分類</Label>
        <Input
          type="text"
          value={subdivision.name}
          onChange={(e) => onNameChange(e.target.value)}
        />
      </Row>
      <ButtonContainer>
        <Button onClick={onCancel}>キャンセル</Button>
        <Button onClick={onOk}>OK</Button>
      </ButtonContainer>
    </Container>
  );
};

// 使用例
const sampleData: SubdivisionData = {
  code: '999',
  name: '藤稲隼',
};

const SampleUsage: React.FC = () => {
  const handleCodeChange = (code: string) => {
    console.log('Code changed:', code);
  };

  const handleNameChange = (name: string) => {
    console.log('Name changed:', name);
  };

  const handleOk = () => {
    console.log('OK clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <SubdivisionForm
      subdivisionCode={sampleData.code}
      largeClassificationName="所属部署"
      middleClassificationName="所属課"
      subdivision={sampleData}
      onCodeChange={handleCodeChange}
      onNameChange={handleNameChange}
      onOk={handleOk}
      onCancel={handleCancel}
    />
  );
};

export default SampleUsage;