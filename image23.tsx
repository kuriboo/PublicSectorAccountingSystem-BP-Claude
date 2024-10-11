import React from 'react';
import styled from 'styled-components';

type TravelExpenseFormProps = {
  department: string;
  name: string;
  dateFrom: string;
  dateTo: string;
  destination: string;
  purpose: string;
  transportation: string[];
  accommodation: string[];
  amountTransportation: number;
  amountAccommodation: number;
  amountTotal: number;
  remarks: string;
  onSubmit: (data: TravelExpenseFormData) => void;
};

type TravelExpenseFormData = {
  department: string;
  name: string;
  dateFrom: string;
  dateTo: string; 
  destination: string;
  purpose: string;
  transportation: string[];
  accommodation: string[];
  amountTransportation: number;
  amountAccommodation: number; 
  amountTotal: number;
  remarks: string;
};

const TravelExpenseForm: React.FC<TravelExpenseFormProps> = ({
  department,
  name,
  dateFrom,
  dateTo,
  destination, 
  purpose,
  transportation,
  accommodation,
  amountTransportation,
  amountAccommodation,
  amountTotal,
  remarks,
  onSubmit,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Perform validation
    if (!department || !name || !dateFrom || !dateTo || !destination || !purpose) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Prepare form data
    const data: TravelExpenseFormData = {
      department,
      name,
      dateFrom,
      dateTo,
      destination,
      purpose,
      transportation,
      accommodation,
      amountTransportation: amountTransportation || 0,
      amountAccommodation: amountAccommodation || 0,
      amountTotal: amountTotal || 0,
      remarks: remarks || '',
    };
    
    // Call onSubmit callback with form data
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Cell colSpan={2}>
          <Text>振替伝票（単票）</Text>
        </Cell>
        <Cell>
          <Text>決定</Text>  
        </Cell>
      </Row>
      <Row>
        <Cell>
          <Text>平成 27年度</Text>
        </Cell>
        <Cell>
          <Text>行政管理通常計</Text>
        </Cell>
        <Cell>
          <Text>平成 27年 4月 7日</Text>
        </Cell>
      </Row>
      <Row>
        <HeaderCell>所属</HeaderCell>
        <HeaderCell colSpan={2}>科目</HeaderCell>
        <HeaderCell>予算計上年月日</HeaderCell>
        <HeaderCell>支出負担行為年月日</HeaderCell>
        <HeaderCell>金額</HeaderCell>
        <HeaderCell>起案者</HeaderCell>
      </Row>
      <Row>
        <DataCell>{department}</DataCell>
        <DataCell colSpan={2}></DataCell>
        <DataCell></DataCell>
        <DataCell></DataCell>
        <DataCell></DataCell>
        <DataCell>{name}</DataCell>
      </Row>
      <Row>
        <HeaderCell colSpan={3}>借方科目</HeaderCell>
        <HeaderCell colSpan={3}>貸方科目</HeaderCell>
        <HeaderCell>金額</HeaderCell>
      </Row>
      <Row>
        <DataCell colSpan={3}>
          事務費用<br />
          事務費用<br />
          ○○事業<br />
          印刷製本費<br />
          ○○印刷製本費
        </DataCell>
        <DataCell colSpan={3}>  
          渡航費県<br />
          旅費<br />
          費用弁償<br />
          費用弁償<br />
          費用弁償
        </DataCell>
        <DataCell>
          {amountTransportation.toLocaleString()}円
        </DataCell>
      </Row>
      <Row>
        <DataCell colSpan={3}>
          旅費交通費<br /> 
          旅費交通費<br />
          費用弁償<br />
          費用弁償
        </DataCell>
        <DataCell colSpan={3}>
          渡航費県<br />
          旅費<br />
          費用弁償<br />
          費用弁償
        </DataCell>
        <DataCell>
          {amountAccommodation.toLocaleString()}円  
        </DataCell>
      </Row>
      <Row>
        <HeaderCell colSpan={5}>摘要</HeaderCell>
        <HeaderCell>合計</HeaderCell>
      </Row>
      <Row>
        <DataCell colSpan={6}>
          {dateFrom}　～　{dateTo}<br />
          {destination}<br />
          {purpose}
        </DataCell>
        <TotalCell>
          {amountTotal.toLocaleString()}円
        </TotalCell>  
      </Row>
      <Row>
        <HeaderCell>起案者</HeaderCell>
        <DataCell colSpan={3}>{name}</DataCell>
        <HeaderCell>資金予算区分</HeaderCell>
        <DataCell></DataCell>
      </Row>
    </Form>
  );
};

// Styled components
const Form = styled.form`
  display: table;
  width: 100%;
  border-collapse: collapse;
`;

const Row = styled.div`
  display: table-row;
`;

const Cell = styled.div`
  display: table-cell;
  border: 1px solid #ccc;
  padding: 8px;
`;

const HeaderCell = styled(Cell)`
  font-weight: bold;
  text-align: center;
  background-color: #f0f0f0;
`;

const DataCell = styled(Cell)`
  text-align: left;
  vertical-align: top;
`;

const TotalCell = styled(Cell)`
  font-weight: bold;
  text-align: right;
`;

const Text = styled.span`
  display: block;
  margin-bottom: 4px;
`;

// Sample usage
const App: React.FC = () => {
  const handleSubmit = (data: TravelExpenseFormData) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <TravelExpenseForm
      department="総務部"
      name="山田太郎"
      dateFrom="2022/04/01"
      dateTo="2022/04/03"
      destination="東京都"
      purpose="会議出席"
      transportation={['飛行機', '電車']}
      accommodation={['ホテル']}
      amountTransportation={30000}
      amountAccommodation={20000}
      amountTotal={50000}
      remarks="備考"
      onSubmit={handleSubmit}
    />
  );
};

export default App;