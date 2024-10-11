import React from 'react';
import styled from '@emotion/styled';

// 案件情報抽出処理の型定義
type CaseInfoExtractionProps = {
  fiscalYear: string;
  department: string;
  workType: string;
  caseList: string[];
  onOk: () => void;
  onCancel: () => void;
  onExecute: () => void;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  font-size: 14px;
  width: 80px;
`;

const Select = styled.select`
  padding: 5px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 120px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Input = styled.input`
  padding: 5px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ccc; 
  width: 120px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const CaseInfoList = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  background-color: #fff;
  height: 200px;
  overflow-y: scroll;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 14px;

  &.primary {
    background-color: #007bff;
    color: #fff;
  }

  &.secondary {
    background-color: #6c757d;
    color: #fff;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

// 案件情報抽出処理コンポーネント
const CaseInfoExtraction: React.FC<CaseInfoExtractionProps> = ({
  fiscalYear,
  department,
  workType,
  caseList,
  onOk,
  onCancel,
  onExecute,
}) => {
  // 抽出区分の選択肢
  const extractOptions = ['新規', '再抽出'];

  // 年度の選択肢（現在の年度から過去5年分）
  const currentYear = new Date().getFullYear();
  const fiscalYearOptions = Array.from({ length: 5 }, (_, i) => currentYear - i);

  return (
    <Container>
      <Title>案件情報抽出処理</Title>
      <Row>
        <Label>年度</Label>
        <Select value={fiscalYear}>
          {fiscalYearOptions.map((year) => (
            <option key={year} value={year.toString()}>
              {year}
            </option>
          ))}
        </Select>
        <Label>年度</Label>
        <Input type="text" value={department} readOnly />
        <Label>工事</Label>
        <Input type="text" value={workType} readOnly />
      </Row>
      <Row>
        <Label>抽出区分</Label>
        <Select>
          {extractOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </Row>
      <CaseInfoList>
        {caseList.map((caseInfo, index) => (
          <div key={index}>{caseInfo}</div>
        ))}
      </CaseInfoList>
      <ButtonGroup>
        <Button className="primary" onClick={onExecute}>
          終了
        </Button>
        <Button className="secondary" onClick={onCancel}>
          クリア
        </Button>
        <Button className="secondary" onClick={onOk}>
          終了
        </Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータ
const sampleData: CaseInfoExtractionProps = {
  fiscalYear: '2029',
  department: '総務課',
  workType: '予算・会計担当',
  caseList: [
    '429100081',
    '429100043',
    '429100065:大規模定期点検(JV案件)',
    '429100065:月分手当等',
    '429100072:工事の受付登録',
    '429100083:工事の受付登録Ⅳ',
  ],
  onOk: () => console.log('OK clicked'),
  onCancel: () => console.log('Cancel clicked'),
  onExecute: () => console.log('Execute clicked'),
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>案件情報抽出処理サンプル</h1>
      <CaseInfoExtraction {...sampleData} />
    </div>
  );
};

export default App;