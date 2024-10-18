import React from 'react';
import styled from 'styled-components';

type WorkDetailsProps = {
  workCode: string;
  workName: string;
  workCategory: string;
  fiscalYear: string;
  workAmount: number;
  workUnit: string;
  workSNM: string;
  detailList: Array<{
    code: string;
    workCategory: string;
    workAmount: number;
    workSNM: string;
    workUnit: string;
  }>;
};

const WorkDetails: React.FC<WorkDetailsProps> = ({
  workCode,
  workName,
  workCategory,
  fiscalYear,
  workAmount,
  workUnit,
  workSNM,
  detailList,
}) => {
  // 仕訳明細リストの表示
  const renderDetailList = () => {
    if (!detailList || detailList.length === 0) return null;

    return detailList.map((detail, index) => (
      <tr key={index}>
        <td>{detail.code}</td>
        <td>{detail.workCategory}</td>
        <td>{detail.workAmount}</td>
        <td>{detail.workUnit}</td>
        <td>{detail.workSNM}</td>
      </tr>
    ));
  };

  return (
    <Container>
      <h2>仕訳明細一覧</h2>
      <SummaryInfo>
        <div>
          <label>会計年度</label>
          <span>{fiscalYear || '-'}</span>
        </div>
        <div>
          <label>仕訳番号</label>
          <span>{workCode || '-'}</span>
        </div>
        <div>
          <label>仕訳名</label>
          <span>{workName || '-'}</span>
        </div>
        <div>
          <label>仕訳合計金額</label>
          <span>{workAmount ? `${workAmount} ${workUnit}` : '-'}</span>
        </div>
      </SummaryInfo>
      
      <DetailTable>
        <thead>
          <tr>
            <th>コード</th>
            <th>仕訳科目区分</th>
            <th>金額</th>
            <th>借方科目</th> 
            <th>貸方科目</th>
          </tr>
        </thead>
        <tbody>{renderDetailList()}</tbody>
      </DetailTable>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;

  h2 {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

const SummaryInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;

  > div {
    min-width: 200px;
  }

  label {
    font-weight: bold;
    margin-right: 10px;
  }
`;

const DetailTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }
`;

// サンプルデータ
const sampleData: WorkDetailsProps = {
  workCode: 'SUD6070',
  workName: '仕訳明細一覧',
  workCategory: '05',
  fiscalYear: '平成29',
  workAmount: 600000,
  workUnit: '積算',
  workSNM: '0001',
  detailList: [
    {
      code: '01',
      workCategory: '仮受金積算科目',
      workAmount: 662119001,
      workUnit: '仮受金積算税',
      workSNM: '0001',
    },
    {
      code: '02',
      workCategory: '仮払金積算科目',
      workAmount: 069149001,
      workUnit: '仮払金積算税',
      workSNM: '0001', 
    },
    // ...
  ],
};

const App: React.FC = () => {
  return (
    <div>
      <h1>仕訳明細一覧表示</h1>
      <WorkDetails {...sampleData} />
    </div>
  );
};

export default App;