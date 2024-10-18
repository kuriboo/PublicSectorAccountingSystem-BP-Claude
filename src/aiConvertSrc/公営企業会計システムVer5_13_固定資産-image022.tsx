import React from 'react';
import styled from '@emotion/styled';

type FinancialAssistanceFormProps = {
  onSubmit: (data: FinancialAssistanceData) => void;
};

type FinancialAssistanceData = {
  workStartDate: string;
  workArea: string;
  memberType: string;
  transitExpense: {
    actualAmount: number;
    claimedAmount: number;
  };
  accommodationExpense: {
    actualAmount: number;
    claimedAmount: number;
  };
  travelPeriod: {
    from: string;
    to: string;
  };
  travelDestination: string;
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const FinancialAssistanceForm: React.FC<FinancialAssistanceFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Collect form data and call onSubmit with the data
    const data: FinancialAssistanceData = {
      workStartDate: '',
      workArea: '',
      memberType: '',
      transitExpense: {
        actualAmount: 0,
        claimedAmount: 0,
      },
      accommodationExpense: {
        actualAmount: 0,
        claimedAmount: 0,
      },
      travelPeriod: {
        from: '',
        to: '',
      },
      travelDestination: '',
    };
    onSubmit(data);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="workStartDate">作業开始日</Label>
          <Input type="date" id="workStartDate" required />
        </FormGroup>
        <FormGroup>
          <Label>出张区分</Label>
          <div>
            <Input type="radio" id="domestic" name="workArea" value="国内" required />
            <Label htmlFor="domestic">国内</Label>
          </div>
          <div>
            <Input type="radio" id="overseas" name="workArea" value="海外" />
            <Label htmlFor="overseas">海外</Label>
          </div>
          <div>
            <Input type="radio" id="dayTrip" name="workArea" value="日帰り" />
            <Label htmlFor="dayTrip">日帰り</Label>
          </div>
        </FormGroup>
        <FormGroup>
          <Label>会计区分</Label>
          <div>
            <Input type="radio" id="paidByCompany" name="accountingType" value="会社支払" required />
            <Label htmlFor="paidByCompany">会社支払</Label>
          </div>
          <div>
            <Input type="radio" id="paidByClient" name="accountingType" value="会計区分别" />
            <Label htmlFor="paidByClient">会计区分别</Label>
          </div>
        </FormGroup>
        <FormGroup>
          <Label>员工类型</Label>
          <Select id="memberType" required>
            <option value="">请选择</option>
            <option value="02">工事员工金</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>交通费用</Label>
          <div>
            <Label htmlFor="actualTransitAmount">实际费用</Label>
            <Input type="number" id="actualTransitAmount" required />
          </div>
          <div>
            <Label htmlFor="claimedTransitAmount">申请费用</Label>
            <Input type="number" id="claimedTransitAmount" required />
          </div>
        </FormGroup>
        <FormGroup>
          <Label>住宿费用</Label>
          <div>
            <Label htmlFor="actualAccommodationAmount">实际费用</Label>
            <Input type="number" id="actualAccommodationAmount" required />
          </div>
          <div>
            <Label htmlFor="claimedAccommodationAmount">申请费用</Label>
            <Input type="number" id="claimedAccommodationAmount" required />
          </div>
        </FormGroup>
        <FormGroup>
          <Label>出差期间</Label>
          <div>
            <Label htmlFor="travelStartDate">从</Label>
            <Input type="date" id="travelStartDate" required />
          </div>
          <div>
            <Label htmlFor="travelEndDate">至</Label>
            <Input type="date" id="travelEndDate" required />
          </div>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="travelDestination">出差地点</Label>
          <Select id="travelDestination" required>
            <option value="">请选择</option>
            <option value="02">工事现场金</option>
          </Select>
        </FormGroup>
        <Button type="submit">提交</Button>
      </form>
    </FormContainer>
  );
};

// Usage example
const App = () => {
  const handleSubmit = (data: FinancialAssistanceData) => {
    console.log('Submitted data:', data);
    // Process the submitted data
  };

  return (
    <div>
      <h1>Financial Assistance Form</h1>
      <FinancialAssistanceForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;