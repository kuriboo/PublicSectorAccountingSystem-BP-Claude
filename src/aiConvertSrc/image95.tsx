import React from 'react';
import styled from 'styled-components';

// Case information type definition
type CaseInfo = {
  caseYear: number;
  caseNumber: string;
  caseName: string;
  isProduct: boolean;
};

// Defect details type definition
type DefectDetails = {
  receivedDate: string;
  shippedDate: string;
  orderNumber: string;
  productNumber: string;
};

// Case report input props type definition
type CaseReportInputProps = {
  caseInfo?: CaseInfo;
  defectDetails?: DefectDetails;
  onSubmit: (caseInfo: CaseInfo, defectDetails: DefectDetails) => void;
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Case report input component
const CaseReportInput: React.FC<CaseReportInputProps> = ({ caseInfo = {}, defectDetails = {}, onSubmit }) => {
  const [formCaseInfo, setFormCaseInfo] = React.useState<CaseInfo>(caseInfo);
  const [formDefectDetails, setFormDefectDetails] = React.useState<DefectDetails>(defectDetails);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formCaseInfo, formDefectDetails);
  };

  return (
    <Container>
      <Title>Case Information Input</Title>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Label>Year</Label>
          <Input
            type="number"
            value={formCaseInfo.caseYear || ''}
            onChange={(e) => setFormCaseInfo({ ...formCaseInfo, caseYear: Number(e.target.value) })}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label>Case Number</Label>
          <Input
            type="text"
            value={formCaseInfo.caseNumber || ''}
            onChange={(e) => setFormCaseInfo({ ...formCaseInfo, caseNumber: e.target.value })}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label>Case Category</Label>
          <Select
            value={formCaseInfo.isProduct ? 'product' : 'other'}
            onChange={(e) => setFormCaseInfo({ ...formCaseInfo, isProduct: e.target.value === 'product' })}
            required
          >
            <option value="product">Product</option>
            <option value="other">Other</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Label>Defect Category</Label>
          <Select
            value={formDefectDetails.receivedDate ? 'shipped' : 'received'}
            onChange={(e) =>
              setFormDefectDetails({
                ...formDefectDetails,
                receivedDate: e.target.value === 'received' ? new Date().toISOString() : '',
                shippedDate: e.target.value === 'shipped' ? new Date().toISOString() : '',
              })
            }
            required
          >
            <option value="shipped">Shipped</option>
            <option value="received">Received</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Label>Order Number</Label>
          <Input
            type="text"
            value={formDefectDetails.orderNumber || ''}
            onChange={(e) => setFormDefectDetails({ ...formDefectDetails, orderNumber: e.target.value })}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label>Product Number</Label>
          <Input
            type="text"
            value={formDefectDetails.productNumber || ''}
            onChange={(e) => setFormDefectDetails({ ...formDefectDetails, productNumber: e.target.value })}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label>Full Information</Label>
          <TextArea rows={4} readOnly value="Example full information" />
        </InputGroup>
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </Container>
  );
};

// Sample data
const sampleCaseInfo: CaseInfo = {
  caseYear: 2023,
  caseNumber: 'C001',
  caseName: 'Sample Case',
  isProduct: true,
};

const sampleDefectDetails: DefectDetails = {
  receivedDate: '2023-05-01',
  shippedDate: '2023-05-05',
  orderNumber: 'ORD123',
  productNumber: 'PROD456',
};

// Example usage component
const CaseReportInputExample: React.FC = () => {
  const handleSubmit = (caseInfo: CaseInfo, defectDetails: DefectDetails) => {
    console.log('Submitted:', caseInfo, defectDetails);
  };

  return (
    <div>
      <h1>Case Report Input Example</h1>
      <CaseReportInput caseInfo={sampleCaseInfo} defectDetails={sampleDefectDetails} onSubmit={handleSubmit} />
    </div>
  );
};

export default CaseReportInputExample;