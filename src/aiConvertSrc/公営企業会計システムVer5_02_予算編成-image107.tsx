import React from 'react';
import styled from 'styled-components';

// 予算調整後控除対象仕入税額算出画面のプロパティ型定義
interface TaxDeductionFormProps {
  year?: number; // 会計年度
  predictedTax?: number; // 予算措置区分
  actualResults?: number; // 最終査定値
  count?: number; // 査定額の回数
}

// スタイル定義
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100vh;
  background-color: #f0f0f0;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`;

const FormTable = styled.table`
  width: 100%;
  max-width: 400px;
  border-collapse: collapse;

  th, td {
    padding: 10px;
    text-align: left;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f0f0f0;
  }
`;

// 予算調整後控除対象仕入税額算出コンポーネント
const TaxDeductionForm: React.FC<TaxDeductionFormProps> = ({
  year = new Date().getFullYear(),
  predictedTax = 0,
  actualResults = 0,
  count = 1
}) => {
  return (
    <FormWrapper>
      <Title>予算調整後控除対象仕入税額算出</Title>
      <FormTable>
        <tbody>
          <tr>
            <th>会計年度</th>
            <td>{year}年度</td>
          </tr>
          <tr>
            <th>予算措置区分</th>
            <td>{predictedTax === 0 ? '当初予算' : '補正予算'}</td>
          </tr>
          <tr>
            <th>最終査定値</th>
            <td>{actualResults.toLocaleString()}円</td>
          </tr>
          <tr>
            <th>査定回数</th>
            <td>{count}回</td>
          </tr>
        </tbody>
      </FormTable>
    </FormWrapper>
  );
};

// サンプルデータを使用した使用例
const TaxDeductionFormExample: React.FC = () => {
  const sampleData: TaxDeductionFormProps = {
    year: 2022,
    predictedTax: 1,
    actualResults: 1500000,
    count: 2
  };

  return <TaxDeductionForm {...sampleData} />;
};

export default TaxDeductionForm;