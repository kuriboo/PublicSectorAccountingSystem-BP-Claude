import React from 'react';
import styled from '@emotion/styled';

// 所属分類の型定義
type Division = {
  id: string;
  name: string;
  selected: boolean;
};

// 分類名称の型定義
type ClassificationName = {
  id: string;
  name: string;
};

// プロパティの型定義
interface Props {
  divisions: Division[];
  classificationNames: ClassificationName[];
  onDivisionChange: (id: string) => void;
  onClassificationNameChange: (id: string) => void;
  onOk: () => void;
  onCancel: () => void;
}

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const DivisionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const DivisionLabel = styled.label`
  margin-right: 8px;
`;

const DivisionRadio = styled.input`
  margin-right: 4px;
`;

const ClassificationNamesContainer = styled.div`
  margin-bottom: 16px;
`;

const ClassificationNameLabel = styled.label`
  display: block;
  margin-bottom: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 4px 8px;
`;

// コンポーネント定義
const ClassificationSettings: React.FC<Props> = ({
  divisions,
  classificationNames,
  onDivisionChange,
  onClassificationNameChange,
  onOk,
  onCancel,
}) => {
  // 所属分類の変更ハンドラ
  const handleDivisionChange = (id: string) => {
    onDivisionChange(id);
  };

  // 分類名称の変更ハンドラ
  const handleClassificationNameChange = (id: string) => {
    onClassificationNameChange(id);
  };

  return (
    <Container>
      <div>
        {divisions.map((division) => (
          <DivisionContainer key={division.id}>
            <DivisionLabel>
              <DivisionRadio
                type="radio"
                checked={division.selected}
                onChange={() => handleDivisionChange(division.id)}
              />
              {division.name}
            </DivisionLabel>
          </DivisionContainer>
        ))}
      </div>
      <ClassificationNamesContainer>
        {classificationNames.map((classificationName) => (
          <ClassificationNameLabel key={classificationName.id}>
            <input
              type="radio"
              checked={classificationName.selected}
              onChange={() => handleClassificationNameChange(classificationName.id)}
            />
            {classificationName.name}
          </ClassificationNameLabel>
        ))}
      </ClassificationNamesContainer>
      <ButtonContainer>
        <Button onClick={onCancel}>キャンセル</Button>
        <Button onClick={onOk}>OK</Button>
      </ButtonContainer>
    </Container>
  );
};

// 使用例
const divisions: Division[] = [
  { id: '1', name: '所属大分類', selected: true },
  { id: '2', name: '所属中分類', selected: false },
  { id: '3', name: '所属小分類', selected: false },
];

const classificationNames: ClassificationName[] = [
  { id: '1', name: '総務課' },
  { id: '2', name: '営業課' },
  { id: '3', name: '技術課' },
  { id: '4', name: '水道管理維持課' },
  { id: '5', name: '水道建設課' },
  { id: '6', name: '下水道用センター' },
];

const SampleUsage: React.FC = () => {
  // 分類の変更ハンドラ
  const handleDivisionChange = (id: string) => {
    console.log(`Division changed: ${id}`);
  };

  // 分類名称の変更ハンドラ  
  const handleClassificationNameChange = (id: string) => {
    console.log(`Classification name changed: ${id}`);
  };

  // OKボタンのハンドラ
  const handleOk = () => {
    console.log('OK button clicked');
  };

  // キャンセルボタンのハンドラ
  const handleCancel = () => {
    console.log('Cancel button clicked');
  };

  return (
    <ClassificationSettings
      divisions={divisions}
      classificationNames={classificationNames}
      onDivisionChange={handleDivisionChange}
      onClassificationNameChange={handleClassificationNameChange}
      onOk={handleOk}
      onCancel={handleCancel}
    />
  );
};

export default SampleUsage;