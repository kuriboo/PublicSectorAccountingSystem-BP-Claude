import React from 'react';
import styled from '@emotion/styled';

type MasterProps = {
  store: string;
  storeCode: string;
  period: number;
  registeredDate: string;
  number: string;
  partCode: string;
  processCode: string;
  quantity: number;
  supplementColor: string;
  supplementCode: string;
  consumption: number;
  unit: string;
  remarks: string;
  taxIncluded: boolean;
  directDelivery: boolean;
  taxRate: number;
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

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

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const ButtonContainer = styled.div`
  text-align: right;
  button {
    margin-left: 10px;
  }
`;

const Master: React.FC<MasterProps> = ({
  store,
  storeCode,
  period,
  registeredDate,
  number,
  partCode,
  processCode,
  quantity,
  supplementColor,
  supplementCode,
  consumption,
  unit,
  remarks,
  taxIncluded,
  directDelivery,
  taxRate,
}) => {
  return (
    <Container>
      <Title>単価マスタ</Title>
      <Table>
        <tbody>
          <tr>
            <th>事業部</th>
            <td>{store || '-'}</td>
            <th>事業部コード</th>
            <td>{storeCode || '-'}</td>
          </tr>
          <tr>
            <th>年度</th>
            <td>{period || '-'}</td>
            <th>登録コード</th>
            <td>{number || '-'}</td>
          </tr>
          <tr>
            <th>コード</th>
            <td colSpan={3}>{partCode || '-'}</td>
          </tr>
          <tr>
            <th>事業部名</th>
            <td>{processCode || '-'}</td>
            <th>名称</th>
            <td>{supplementColor || '-'}</td>
          </tr>
          <tr>
            <th>事位</th>
            <td>足</td>
            <th>単価率</th>
            <td>{consumption ? `${consumption}%` : '-'}</td>
          </tr>
          <tr>
            <th>税込/抜</th>
            <td>{taxIncluded ? '税込' : '税抜'}</td>
            <th>単価</th>
            <td>{quantity || '-'}</td>
          </tr>
        </tbody>
      </Table>
      
      <Table>
        <tbody>
          <tr>
            <th>適用開始年月日</th>
            <th>単価</th>
          </tr>
          <tr>
            <td>{registeredDate || '-'}</td>
            <td>{quantity || '-'}</td>
          </tr>
        </tbody>  
      </Table>

      <ButtonContainer>
        <button>前データ</button>
        <button>次データ</button>
        <button>OK</button>
        <button>クリア</button>
        <button>終了</button>
      </ButtonContainer>
    </Container>
  );
};

// Usage example
const sampleData: MasterProps = {
  store: '9999999',
  storeCode: '00001000',
  period: 999999,
  registeredDate: '2019/04/16',
  number: '999999',
  partCode: '00001',
  processCode: '000002',
  quantity: 1500,
  supplementColor: '27センチ', 
  supplementCode: '27センチ',
  consumption: 5.00,
  unit: 'g',
  remarks: '',
  taxIncluded: false,
  directDelivery: false, 
  taxRate: 5.00,
};

const App: React.FC = () => {
  return (
    <div>
      <Master {...sampleData} />
    </div>
  );
};

export default App;