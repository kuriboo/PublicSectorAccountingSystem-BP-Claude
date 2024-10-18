import React from 'react';
import styled from '@emotion/styled';

// 集計先行番号のコンポーネント
type SummaryNoProps = {
  label: string;
  value: string;
};

const SummaryNoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SummaryNoLabel = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;

const SummaryNoValue = styled.div`
  padding: 5px 10px;
  border: 1px solid #ccc;
`;

const SummaryNo: React.FC<SummaryNoProps> = ({ label, value }) => {
  return (
    <SummaryNoWrapper>
      <SummaryNoLabel>{label}</SummaryNoLabel>
      <SummaryNoValue>{value}</SummaryNoValue>
    </SummaryNoWrapper>
  );
};

// 集計条件のコンポーネント
type SummaryConditionProps = {
  projectCode: string;
  department: string;
  jobCategory: string;
  payType: string;
  indent: boolean;
};

const SummaryConditionWrapper = styled.div`
  margin-bottom: 20px;
`;

const SummaryConditionItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const SummaryConditionLabel = styled.div`
  width: 100px;
  font-weight: bold;
`;

const SummaryConditionValue = styled.div`
  padding: 5px 10px;
  border: 1px solid #ccc;
`;

const SummaryCondition: React.FC<SummaryConditionProps> = ({
  projectCode,
  department,
  jobCategory,
  payType,
  indent,
}) => {
  return (
    <SummaryConditionWrapper>
      <SummaryConditionItem>
        <SummaryConditionLabel>プロジェクトコード</SummaryConditionLabel>
        <SummaryConditionValue>{projectCode}</SummaryConditionValue>
      </SummaryConditionItem>
      <SummaryConditionItem>
        <SummaryConditionLabel>部門名称</SummaryConditionLabel>
        <SummaryConditionValue>{department}</SummaryConditionValue>
      </SummaryConditionItem>
      <SummaryConditionItem>
        <SummaryConditionLabel>作業分類</SummaryConditionLabel>
        <SummaryConditionValue>{jobCategory}</SummaryConditionValue>
      </SummaryConditionItem>
      <SummaryConditionItem>
        <SummaryConditionLabel>支払区分</SummaryConditionLabel>
        <SummaryConditionValue>{payType}</SummaryConditionValue>
      </SummaryConditionItem>
      <SummaryConditionItem>
        <SummaryConditionLabel>集計左行番号</SummaryConditionLabel>
        <SummaryConditionValue>{indent ? '帳票出力無し' : ''}</SummaryConditionValue>
      </SummaryConditionItem>
    </SummaryConditionWrapper>
  );
};

// 集計材料のテーブルのコンポーネント
type MaterialSummaryTableProps = {
  data: {
    materialDate: string;
    workerName: string;
    workDate: string;
    workHours: number;
    expenses: number;
    remarks: string;
  }[];
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ccc;
    padding: 5px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const MaterialSummaryTable: React.FC<MaterialSummaryTableProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>データがありません。</div>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>材料日</th>
          <th>作業者</th>
          <th>作業日</th>
          <th>時間</th>
          <th>経費</th>
          <th>備考</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.materialDate}</td>
            <td>{item.workerName}</td>
            <td>{item.workDate}</td>
            <td>{item.workHours}</td>
            <td>{item.expenses}</td>
            <td>{item.remarks}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// サンプルデータ
const sampleData = [
  {
    materialDate: '0620902',
    workerName: '菅野和当金',
    workDate: '',
    workHours: 11,
    expenses: 3456,
    remarks: '不可',
  },
  {
    materialDate: '0620902',
    workerName: '菅野和当金',
    workDate: '',
    workHours: 11,
    expenses: 4567,
    remarks: '不可',
  },
  {
    materialDate: '0620903',
    workerName: '法定福利費引当金',
    workDate: '',
    workHours: 11,
    expenses: 1234,
    remarks: '不可',
  },
];

// 使用例
const SampleUsage: React.FC = () => {
  return (
    <div>
      <SummaryNo label="集計先行番号" value="1.5 事務活動にかかるキャシュ・フロー" />
      <SummaryCondition
        projectCode="1"
        department="阿佐ヶ谷"
        jobCategory="1"
        payType="1"
        indent={false}
      />
      <MaterialSummaryTable data={sampleData} />
    </div>
  );
};

export default SampleUsage;