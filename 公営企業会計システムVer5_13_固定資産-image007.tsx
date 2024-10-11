import React from 'react';
import styled from '@emotion/styled';

// 型定義
interface WorkHistoryProps {
  fiscalYear: string;
  workPlace: string;
  startDate: string;
  endDate: string;
  baseAmount: number;
  bonusAmount: number;
  pensionAmount: number;
  remarks: string;
}

interface WorkHistoryFormProps {
  workHistories: WorkHistoryProps[];
}

// スタイル定義
const FormContainer = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const FormTitle = styled.h2`
  font-size: 18px;
  margin: 0;
`;

const FormButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  padding: 4px 8px;
  font-size: 14px;
`;

const FormFields = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
`;

const FormField = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  label {
    font-size: 14px;
    width: 80px;
  }

  input {
    padding: 4px;
    font-size: 14px;
    width: 120px;
  }
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const WorkHistoryForm: React.FC<WorkHistoryFormProps> = ({ workHistories }) => {
  return (
    <FormContainer>
      <FormHeader>
        <FormTitle>賃金台帳検索(個別)</FormTitle>
        <FormButtons>
          <Button>表示</Button>
        </FormButtons>
      </FormHeader>
      <FormFields>
        <FormField>
          <label>平成29</label>
          <span>年度</label>
          <label>処理日</label>
          <input type="text" defaultValue="平成29年04月01日" />
        </FormField>
        <FormField>
          <label>~</label>
          <input type="text" />
        </FormField>
        <FormField>
          <label>起案所属</label>
          <input type="text" defaultValue="000000" />
          <label>~</label>
          <input type="text" defaultValue="999999" />
        </FormField>
        <FormField>
          <label>節</label>
          <input type="text" />
          <label>細節</label>
          <input type="text" />
        </FormField>
        <FormField>    
          <label>明細金額</label>
          <input type="number" defaultValue={0} />
          <label>~</label>
          <input type="number" defaultValue={999999999999} />
        </FormField>
        <FormField>
          <label>摘要: 工事名場所</label>
          <input type="text" style={{ width: 300 }} />
        </FormField>
        <FormField>    
          <label>相手先</label>
          <input type="text" style={{ width: 300 }} />
        </FormField>
      </FormFields>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>処理日</th>
              <th>負担番号</th>  
              <th>支払種別</th>
              <th>負担所属額</th>
              <th>摘要</th>
            </tr>
          </thead>
          <tbody>
            {workHistories.map((history, index) => (
              <tr key={index}>
                <td>{history.fiscalYear}/{history.workPlace}</td>
                <td>{history.startDate}</td>
                <td>工事</td>
                <td>{history.baseAmount.toLocaleString()}</td>
                <td>{history.remarks}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <FormButtons>
        <Button>明細情報</Button>  
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </FormButtons>
    </FormContainer>
  );
};

// サンプルデータ
const sampleWorkHistories: WorkHistoryProps[] = [
  {
    fiscalYear: '29/09/17',
    workPlace: '146',
    startDate: '工事',   
    endDate: '',
    baseAmount: 74075,
    bonusAmount: 0,
    pensionAmount: 0, 
    remarks: '片倉技研 9,200 照会確認済'
  },
  {
    fiscalYear: '29/09/17',
    workPlace: '147',
    startDate: '共済入口',
    endDate: '',  
    baseAmount: 46297,
    bonusAmount: 0,
    pensionAmount: 0,
    remarks: '片倉技研'
  },
  {
    fiscalYear: '29/09/06',
    workPlace: '169', 
    startDate: '工事',
    endDate: '',
    baseAmount: 46297,
    bonusAmount: 0, 
    pensionAmount: 0,
    remarks: '下水道工事に伴う配水管移設工事'
  },
];

const App: React.FC = () => {
  return (
    <div>
      <WorkHistoryForm workHistories={sampleWorkHistories} />  
    </div>
  );
};

export default App;