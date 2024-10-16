import React from 'react';
import styled from 'styled-components';

interface CompanyAccountingSystemProps {
  accountTitle?: string;
  fiscalYear?: number;
  requiredField?: boolean;
  inputFields?: {
    travelExpenses: number;
    accommodation: number;
    amountPerDay: number;
    days: number;
    money: number;
    consumptionTax: number;
    executionDate: string;
  };
  remarks?: string;
  taxAmount?: number;
  requestAmount?: number;
}

const CompanyAccountingSystem: React.FC<CompanyAccountingSystemProps> = ({
  accountTitle = '',
  fiscalYear = new Date().getFullYear(),
  requiredField = true,
  inputFields = {
    travelExpenses: 0,
    accommodation: 0,
    amountPerDay: 0,
    days: 0,
    money: 0,
    consumptionTax: 0,
    executionDate: '',
  },
  remarks = '',
  taxAmount = 0,
  requestAmount = 0,
}) => {
  return (
    <Container>
      <Title>予算精算システム</Title>
      <AccountingForm>
        <FormGroup>
          <Label>会計年度:</Label>
          <Input type="number" value={fiscalYear} required={requiredField} />
        </FormGroup>
        <FormGroup>
          <Label>負担先:</Label>
          <Input type="text" value={accountTitle} required={requiredField} />
        </FormGroup>
        <Table>
          <thead>
            <tr>
              <TableHeader>No</TableHeader>
              <TableHeader>区分</TableHeader>
              <TableHeader>区分名</TableHeader>
              <TableHeader>相手先</TableHeader>
              <TableHeader>金額</TableHeader>  
              <TableHeader>消費税</TableHeader>
              <TableHeader>実行日</TableHeader>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <TableData>1</TableData>
              <TableData>151</TableData>
              <TableData>旅費交通費</TableData>
              <TableData>ぎょうせい交通</TableData>
              <TableData>{inputFields.travelExpenses}</TableData>
              <TableData>{inputFields.consumptionTax}</TableData>
              <TableData>{inputFields.executionDate}</TableData>
            </TableRow>
            <TableRow>
              <TableData>2</TableData>
              <TableData>152</TableData>
              <TableData>宿泊費</TableData>
              <TableData>ぎょうせい運送</TableData>
              <TableData>{inputFields.accommodation}</TableData>
              <TableData>{inputFields.consumptionTax}</TableData>
              <TableData>{inputFields.executionDate}</TableData>
            </TableRow>      
          </tbody>
        </Table>
        <TotalGroup>
          <AmountPerDay>
            <Label>日当:</Label>
            <Input type="number" value={inputFields.amountPerDay} />
          </AmountPerDay>
          <Days>  
            <Label>日数:</Label>
            <Input type="number" value={inputFields.days} />
          </Days>
          <TaxAmount>
            <Label>消費税:</Label>
            <Label>{taxAmount}</Label>  
          </TaxAmount>
        </TotalGroup>
        <TotalAmount>
          <Label>合計請求額:</Label>
          <Label>{requestAmount}</Label>
        </TotalAmount>
        <Remarks>
          <Label>備考:</Label>  
          <TextArea value={remarks} />
        </Remarks>
      </AccountingForm>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// Sample data for preview
const sampleData: CompanyAccountingSystemProps = {
  accountTitle: 'ぎょうせい運送', 
  fiscalYear: 2023,
  requiredField: true,
  inputFields: {
    travelExpenses: 8200,
    accommodation: 4080, 
    amountPerDay: 0,
    days: 0,
    money: 0,
    consumptionTax: 909,
    executionDate: '2023-06-17',
  },
  remarks: '',
  taxAmount: 900,
  requestAmount: 13280,
};

const PreviewCompanyAccountingSystem: React.FC = () => {
  return <CompanyAccountingSystem {...sampleData} />;
};

// Styled components
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const AccountingForm = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  background-color: #f8f8f8;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

const TableData = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TotalGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const AmountPerDay = styled.div``;

const Days = styled.div``;

const TaxAmount = styled.div``;

const TotalAmount = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Remarks = styled.div`
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const ButtonGroup = styled.div`
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export default CompanyAccountingSystem;