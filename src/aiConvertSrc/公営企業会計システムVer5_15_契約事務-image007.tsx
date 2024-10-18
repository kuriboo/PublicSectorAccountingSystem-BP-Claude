import React from 'react';
import styled from 'styled-components';

// 工事業種登録の型定義
type ConstructionType = {
  code: string;
  name: string;
};

// 許可区分の型定義
type PermitCategory = '工事' | '特定工事企業';

// 工事業種登録コンポーネントの型定義
interface ConstructionRegistrationProps {
  constructionType: ConstructionType;
  permitCategory: PermitCategory;
  permitNumber: string;
  expirationDate: string;
  capital: number;
  completedConstructionAmount: number;
  employees: number;
  civilEngineeringTechnicians: number;
  architects: number;
  technicians: number;
  onSubmit: () => void;
  onCancel: () => void;
}

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const FormGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 3px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 工事業種登録コンポーネント
const ConstructionRegistration: React.FC<ConstructionRegistrationProps> = ({
  constructionType,
  permitCategory,
  permitNumber,
  expirationDate,
  capital,
  completedConstructionAmount,
  employees,
  civilEngineeringTechnicians,
  architects,
  technicians,
  onSubmit,
  onCancel,
}) => {
  return (
    <Container>
      <FormGroup>
        <Label>業種コード：</Label>
        <span>{constructionType.code}</span>
      </FormGroup>
      <FormGroup>
        <Label>許可区分：</Label>
        <Select value={permitCategory}>
          <option value="工事">工事</option>
          <option value="特定工事企業">特定工事企業</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>許可番号：</Label>
        <Input type="text" value={permitNumber} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>有効期限：</Label>
        <Input type="text" value={expirationDate} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>資本金（千円）：</Label>
        <span>{capital.toLocaleString()}</span>
      </FormGroup>
      <FormGroup>
        <Label>完工高（千円）：</Label>
        <span>{completedConstructionAmount.toLocaleString()}</span>
      </FormGroup>
      <FormGroup>
        <Label>技術者：</Label>
        <table>
          <tbody>
            <tr>
              <td>一級</td>
              <td>{civilEngineeringTechnicians}</td>
              <td>二級</td>
              <td>{civilEngineeringTechnicians}</td>
              <td>その他</td>
              <td>{civilEngineeringTechnicians}</td>
              <td>許点</td>
              <td>{technicians}</td>
            </tr>
          </tbody>
        </table>
      </FormGroup>
      <FormGroup>
        <Label>点数：</Label>
        <table>
          <tbody>
            <tr>
              <td>土建点数</td>
              <td>{employees}</td>
              <td>客観点数</td>
              <td>{employees}</td>
              <td>総合点</td>
              <td>{employees}</td>
            </tr>
          </tbody>
        </table>
      </FormGroup>
      <FormGroup>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onSubmit}>終了</Button>
      </FormGroup>
    </Container>
  );
};

// サンプルデータ
const sampleConstructionType: ConstructionType = {
  code: '0002',
  name: '建築一式工事',
};

const samplePermitCategory: PermitCategory = '工事';
const samplePermitNumber = '0000000001';
const sampleExpirationDate = '平成29年09月04日';
const sampleCapital = 345678;
const sampleCompletedConstructionAmount = 0;
const sampleEmployees = 84;
const sampleCivilEngineeringTechnicians = 12;
const sampleArchitects = 12;
const sampleTechnicians = 20;

// 使用例コンポーネント
const UsageExample: React.FC = () => {
  const handleSubmit = () => {
    console.log('Submit clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <ConstructionRegistration
      constructionType={sampleConstructionType}
      permitCategory={samplePermitCategory}
      permitNumber={samplePermitNumber}
      expirationDate={sampleExpirationDate}
      capital={sampleCapital}
      completedConstructionAmount={sampleCompletedConstructionAmount}
      employees={sampleEmployees}
      civilEngineeringTechnicians={sampleCivilEngineeringTechnicians}
      architects={sampleArchitects}
      technicians={sampleTechnicians}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

export default UsageExample;