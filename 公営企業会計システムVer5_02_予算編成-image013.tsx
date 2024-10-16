import React from 'react';
import styled from 'styled-components';

// 枠配分総括表の型定義
type AllocationSummaryProps = {
  year: number;
  companyCode: string;
  companyName: string;
  settlementDate: string;
  status: '事業科目' | '予算科目' | '所属別';
  ranges: {
    fromDate: string;
    toDate: string;
    fromAccount: string;
    toAccount: string;
    fromCostCenter: string;
    toCostCenter: string;
  }[];
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

// 枠配分総括表コンポーネント
const AllocationSummary: React.FC<AllocationSummaryProps> = ({
  year,
  companyCode,
  companyName,
  settlementDate,
  status,
  ranges,
}) => {
  return (
    <Container>
      <Title>枠配分総括表</Title>
      <div>
        <span>会社番号：{companyCode}</span>
        <span>予算・会計担当 ぎょうせい太郎</span>
      </div>
      <div>平成{year - 1988}年度</div>
      <RadioGroup>
        <label>
          <input type="radio" checked={status === '事業科目'} readOnly />
          事業科目
        </label>
        <label>
          <input type="radio" checked={status === '予算科目'} readOnly />
          予算科目
        </label>
        <label>
          <input type="radio" checked={status === '所属別'} readOnly />
          所属別
        </label>
      </RadioGroup>
      <Table>
        <thead>
          <tr>
            <th>所属</th>
            <th>所属</th>
            <th>予算科目</th>
            <th>予算科目</th>
            <th>事業科目</th>
            <th>事業科目</th>
          </tr>
        </thead>
        <tbody>
          {ranges.map((range, index) => (
            <tr key={index}>
              <td>{range.fromCostCenter}</td>
              <td>{range.toCostCenter}</td>
              <td>{range.fromAccount}</td>
              <td>{range.toAccount}</td>
              <td>{range.fromDate}</td>
              <td>{range.toDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ButtonGroup>
        <button>OK</button>
        <button>クリア</button>
        <button>終了</button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータ
const sampleData: AllocationSummaryProps = {
  year: 2023,
  companyCode: '29',
  companyName: 'ぎょうせい株式会社',
  settlementDate: '令和29年06月09日',
  status: '事業科目',
  ranges: [
    {
      fromCostCenter: '000000',
      toCostCenter: '999999',
      fromAccount: '0000000000000',
      toAccount: '9999999999999999',
      fromDate: '000000',
      toDate: '999999',
    },
  ],
};

// 使用例
const AllocationSummaryExample: React.FC = () => {
  return <AllocationSummary {...sampleData} />;
};

export default AllocationSummaryExample;