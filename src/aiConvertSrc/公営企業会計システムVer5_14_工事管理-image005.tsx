import React, { useState } from 'react';
import styled from '@emotion/styled';

// 工事担当種別マスタ保守の型定義
type ConstructionType = {
  code: string;
  name: string;
};

// 工事担当種別マスタ保守のプロパティ型
type ConstructionTypeMasterMaintenanceProps = {
  constructionTypes: ConstructionType[];
  onCancel?: () => void;
  onSave?: (selectedType: ConstructionType) => void;
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const TableContainer = styled.div`
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  background-color: #e0e0e0;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f8f8f8;
  }
`;

const TableData = styled.td`
  padding: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 工事担当種別マスタ保守コンポーネント
const ConstructionTypeMasterMaintenance: React.FC<ConstructionTypeMasterMaintenanceProps> = ({
  constructionTypes,
  onCancel,
  onSave,
}) => {
  const [selectedTypeCode, setSelectedTypeCode] = useState('');
  const [selectedTypeName, setSelectedTypeName] = useState('');

  // 選択された工事担当種別の処理
  const handleSave = () => {
    const selectedType = constructionTypes.find(
      (type) => type.code === selectedTypeCode
    );
    if (selectedType && onSave) {
      onSave(selectedType);
    }
  };

  return (
    <Container>
      <Title>工事担当種別マスタ保守</Title>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <TableHeader>担当種別コード</TableHeader>
              <TableHeader>担当種別名称</TableHeader>
            </tr>
          </thead>
          <tbody>
            {constructionTypes.map((type) => (
              <TableRow key={type.code}>
                <TableData>{type.code}</TableData>
                <TableData>{type.name}</TableData>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <InputContainer>
        <Input
          type="text"
          value={selectedTypeCode}
          onChange={(e) => setSelectedTypeCode(e.target.value)}
          placeholder="担当種別コード"
        />
        <Input
          type="text"
          value={selectedTypeName}
          onChange={(e) => setSelectedTypeName(e.target.value)}
          placeholder="工事担当責任者"
          readOnly
        />
      </InputContainer>
      <ButtonContainer>
        <Button onClick={onCancel}>キャンセル</Button>
        <Button onClick={handleSave}>確定</Button>
        <Button onClick={() => console.log('終了')}>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleConstructionTypes: ConstructionType[] = [
  { code: '001', name: '工事担当責任者' },
  { code: '002', name: '工事担当技術' },
  { code: '003', name: '工事担当工事' },
  { code: '004', name: '工事担当一般' },
];

// 使用例
const SampleUsage: React.FC = () => {
  const handleCancel = () => {
    console.log('キャンセルされました');
  };

  const handleSave = (selectedType: ConstructionType) => {
    console.log('選択された工事担当種別:', selectedType);
  };

  return (
    <ConstructionTypeMasterMaintenance
      constructionTypes={sampleConstructionTypes}
      onCancel={handleCancel}
      onSave={handleSave}
    />
  );
};

export default ConstructionTypeMasterMaintenance;