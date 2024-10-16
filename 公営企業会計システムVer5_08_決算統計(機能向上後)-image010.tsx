import React from 'react';
import styled from 'styled-components';

// 事業所情報のプロパティ型定義
interface OfficeInfoProps {
  officeName: string;
  businessType: string;
  manager: string;
}

// 評価情報のプロパティ型定義
interface EvaluationInfoProps {
  items: string[];
  values: (string | number)[];
}

// 決算統計事業詳細情報のプロパティ型定義
interface FinancialStatementDetailProps {
  officeCode: string;
  officeName: string;
  fiscalYear: string;
  officeInfo: OfficeInfoProps;
  evaluationInfo: EvaluationInfoProps;
}

// スタイル定義
const Container = styled.div`
  font-family: 'Meiryo UI', sans-serif;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 5px;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f0f0f0;
    text-align: left;
    white-space: nowrap;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 5px;
`;

// 決算統計事業詳細情報コンポーネント
const FinancialStatementDetail: React.FC<FinancialStatementDetailProps> = ({
  officeCode,
  officeName,
  fiscalYear,
  officeInfo,
  evaluationInfo,
}) => {
  return (
    <Container>
      <Title>決算統計事業詳細情報</Title>
      <p>
        令和02年度 事業: 事業 060 病院事業
      </p>

      <SectionTitle>事業情報</SectionTitle>
      <Table>
        <tbody>
          <tr>
            <th>事業所所在地</th>
            <td>{officeInfo.officeName || '-'}</td>
          </tr>
          <tr>
            <th>管理者名</th>
            <td>{officeInfo.manager || '-'}</td>
          </tr>
        </tbody>
      </Table>

      <SectionTitle>評価情報</SectionTitle>
      {evaluationInfo.items.map((item, index) => (
        <CheckboxContainer key={index}>
          <Checkbox
            checked={!!evaluationInfo.values[index]}
            readOnly
          />
          {item}
        </CheckboxContainer>
      ))}
    </Container>
  );
};

// サンプルデータ
const sampleData: FinancialStatementDetailProps = {
  officeCode: '060',
  officeName: '病院事業',
  fiscalYear: '令和02年度',
  officeInfo: {
    officeName: '東京都行政市',
    businessType: '行政 太郎',
    manager: '行政 太郎',
  },
  evaluationInfo: {
    items: ['設定なし', '設定工作', '黒・赤字別', '-', '-', '-', '-', '-'],
    values: ['', '', 0, 0, 0, 0, 0, 0],
  },
};

// 表示用コンポーネント
const App: React.FC = () => {
  return (
    <FinancialStatementDetail {...sampleData} />
  );
};

export default App;