import React from 'react';
import styled from '@emotion/styled';

interface BusinessEconomicSystemProps {
  companyCode: string;
  companyName: string;
  projectCode: string;
  projectName: string;
  department: string;
  items: {
    code: string;
    name: string;
    completed: boolean;
    amount: number;
    taxAmount: number;
  }[];
  startDate: string;
  endDate: string;
  totalAmount: number;
  mainPoints: number;
}

const Container = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
  box-sizing: border-box;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none; 
  border-radius: 3px;
  cursor: pointer;

  &.primary {
    background-color: #007bff;
    color: #fff;
  }

  &.cancel {
    background-color: #6c757d;
    color: #fff;
  }
`;

const BusinessEconomicSystem: React.FC<BusinessEconomicSystemProps> = ({
  companyCode,
  companyName,
  projectCode,
  projectName,
  department,
  items,
  startDate,
  endDate,
  totalAmount,
  mainPoints,
}) => {
  return (
    <Container>
      <Title>業者経歴保守</Title>
      <div>
        <label>業者:</label>
        <Input value={companyCode} readOnly />
        <label>大規模広域物産(火薬中)特定工事企業体</label>
      </div>
      <div>
        <label>業種:</label>
        <Select value={companyName}>
          <option>建築一式工事</option>
        </Select>
      </div>
      <div>
        <label>明細編集:</label>
        <Button className="primary">行削除</Button>
      </div>
      <Table>
        <thead>
          <tr>
            <th>件名1</th>
            <th>件名2</th>
            <th>完成者</th>
            <th>工事名</th>
            <th>工事場所</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>
                <Input value={item.code} />
              </td>
              <td>{item.name}</td>
              <td>
                <input type="checkbox" checked={item.completed} readOnly />
              </td>
              <td>{item.amount}</td>
              <td>{item.taxAmount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <label>件名:</label>
        <Input value={projectName} />
      </div>
      <div>
        <label>発注者:</label>
        <Input value={department} />
      </div>
      <div>
        <label>期間:</label>
        <Input type="date" value={startDate} />
        <span>～</span>
        <Input type="date" value={endDate} />
      </div>
      <div>
        <label>完成高:</label>
        <Input type="number" value={totalAmount} readOnly />
        <label>主観点数:</label>
        <Input type="number" value={mainPoints} />
      </div>
      <div>
        <Button className="primary">OK</Button>
        <Button className="cancel">クリア</Button>
        <Button>終了</Button>
      </div>
    </Container>
  );
};

// サンプルデータ
const sampleData: BusinessEconomicSystemProps = {
  companyCode: '0000000001',
  companyName: '建築一式工事',
  projectCode: '001',  
  projectName: 'アスファルト舗装工事',
  department: '第一工場',
  items: [
    {
      code: 'IT001',
      name: 'アスファルト舗装復旧工事',
      completed: true,
      amount: 1234567,
      taxAmount: 123456,
    },
  ],
  startDate: '2029-09-06',
  endDate: '2029-09-28',
  totalAmount: 1234000,
  mainPoints: 70,
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>業者経歴保守システム</h1>
      <BusinessEconomicSystem {...sampleData} />
    </div>
  );
};

export default App;