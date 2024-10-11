Here is the Next.js + TypeScript component based on the provided image:

import React from 'react';
import styled from 'styled-components';

// Component prop types
interface ContractRegistrationProps {
  contractDate: string;
  productCode: string;
  productName: string;
  paymentType: string;
  contractNo: string;
  contractYear: number;
  viewContract: () => void;
  viewContractDetails: () => void;
  contractStatus: string;
  salesTax: number;
  salesAmount: number;
  total: number;
  paymentMethod: string;
  shouldCleared: boolean;
  shouldTax: boolean;
  handleSubmit: () => void;
  handleCancel: () => void;
  handlePrint: () => void;
}

// Styled components
const Container = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Label = styled.label`
  width: 120px;
  @media (max-width: 600px) {
    width: auto;
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
`;

const ReadOnlyInput = styled(Input)`
  background-color: #e0e0e0;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  @media (max-width: 600px) {
    margin-bottom: 10px;
  }  
`;

const RadioLabel = styled.label`
  margin-right: 20px;
`;

// Contract registration component
const ContractRegistration: React.FC<ContractRegistrationProps> = ({
  contractDate,
  productCode,
  productName,
  paymentType,
  contractNo,
  contractYear,
  viewContract,
  viewContractDetails,
  contractStatus,
  salesTax,
  salesAmount,
  total,
  paymentMethod,
  shouldCleared,
  shouldTax,
  handleSubmit,
  handleCancel,
  handlePrint
}) => {
  return (
    <Container>
      <Row>
        <Label>Contract Date:</Label>
        <ReadOnlyInput type="text" value={contractDate} readOnly />
      </Row>
      <Row>  
        <Label>Product Code:</Label>
        <ReadOnlyInput type="text" value={productCode} readOnly />
      </Row>
      <Row>
        <Label>Nickname:</Label>
        <Input type="text" value={productName} />
      </Row>
      <Row>
        <Label>View Contract:</Label>
        <Button onClick={viewContract}>View</Button>
      </Row>
      <Row>
        <Label>Contract Years:</Label>
        <Input type="number" value={contractYear} />  
      </Row>
      <Row>
        <Label>View Details:</Label>
        <Button onClick={viewContractDetails}>View</Button>
      </Row>
      <Row>
        <Label>Contract Status:</Label>
        <ReadOnlyInput type="text" value={contractStatus} readOnly />
      </Row>
      <Row>  
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Number</th>
              <th>Unit</th>
              <th>Amount</th>
              <th>Sub-total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>960000 DIF(A1)</td>
              <td>0.75</td>
              <td>Book</td>
              <td>1000.00</td>
              <td>6,000</td>
            </tr>  
          </tbody>
        </table>
      </Row>
      <Row>  
        <Label>Sales Tax:</Label>
        <ReadOnlyInput type="number" value={salesTax} readOnly />
      </Row>
      <Row>
        <Label>Sales Amount:</Label>    
        <ReadOnlyInput type="number" value={salesAmount} readOnly />
      </Row>
      <Row>  
        <Label>Total:</Label>
        <ReadOnlyInput type="number" value={total} readOnly />  
      </Row>
      <Row>
        <Label>Payment Method:</Label>
        <div>
          <RadioLabel>
            <input type="radio" checked={paymentMethod === 'cash'} readOnly />
            Cash
          </RadioLabel>
          <RadioLabel>  
            <input type="radio" checked={paymentMethod === 'taxed'} readOnly />
            Taxed
          </RadioLabel>
        </div>  
      </Row>
      <Row>
        <Label>Payment Terms:</Label>
        <div>  
          <RadioLabel>
            <input type="radio" checked={!shouldCleared} readOnly />
            Not Cleared
          </RadioLabel>
          <RadioLabel>
            <input type="radio" checked={shouldCleared} readOnly />  
            Cleared
          </RadioLabel>
        </div>
      </Row>  
      <Row>
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={handleCancel}>Cancel</Button> 
        <Button onClick={handlePrint}>Print</Button>
      </Row>
    </Container>  
  );
};

// Sample data
const sampleData: ContractRegistrationProps = {
  contractDate: '2023-09-13',
  productCode: '00001', 
  productName: '総務課',
  paymentType: 'Cash',
  contractNo: '8999999',
  contractYear: 7,
  viewContract: () => alert('View contract'),
  viewContractDetails: () => alert('View contract details'),
  contractStatus: '行削除',
  salesTax: 480, 
  salesAmount: 6000,
  total: 6480,
  paymentMethod: 'cash',
  shouldCleared: false,
  shouldTax: true,
  handleSubmit: () => alert('Submitted'),
  handleCancel: () => alert('Cancelled'),
  handlePrint: () => alert('Printing')
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>Contract Registration Example</h1>
      <ContractRegistration {...sampleData} />
    </div>
  );  
};

export default App;