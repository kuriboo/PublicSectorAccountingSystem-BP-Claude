import React from 'react';
import styled from 'styled-components';

interface EmployeeInfoFormProps {
  employeeNumber?: string;
  employeeName?: string;
  factory?: string;
  department?: string;
  joiningDate?: string;
  leavingDate?: string;
  inactiveDate?: string;
  employmentInsuranceStart?: string;
  employmentInsuranceEnd?: string;
  accidentCompensationStart?: string;
  accidentCompensationEnd?: string;
  healthInsuranceStart?: string;
  healthInsuranceEnd?: string;
  pensionStart?: string;
  pensionEnd?: string;
  medicalCheckupStart?: string;
  medicalCheckupEnd?: string;
  dormitoryStart?: string;
  dormitoryEnd?: string;
  loanStart?: string;
  loanEnd?: string;
  contractRenewalStart?: string;
  contractRenewalEnd?: string;
  overtimeAllowance?: string;
  nightShiftAllowance?: string;
  mealAllowance?: string;
  qualification?: string;
  postalCode?: string;
  address?: string;
  phoneNumber?: string;
  emergencyContactName?: string;
  emergencyContactRelation?: string;
  emergencyContactPhoneNumber?: string;
  accountHolderName?: string;
  accountNumber?: string;
  bankName?: string;
  bankBranchName?: string;
  registrationDate?: string;
  registrationNumber?: string;
}

const EmployeeInfoForm: React.FC<EmployeeInfoFormProps> = ({
  employeeNumber = '',
  employeeName = '',
  factory = '',
  department = '',
  joiningDate = '',
  leavingDate = '',
  inactiveDate = '',
  employmentInsuranceStart = '',
  employmentInsuranceEnd = '',
  accidentCompensationStart = '',
  accidentCompensationEnd = '',
  healthInsuranceStart = '',
  healthInsuranceEnd = '',
  pensionStart = '',
  pensionEnd = '',
  medicalCheckupStart = '',
  medicalCheckupEnd = '',
  dormitoryStart = '',
  dormitoryEnd = '',
  loanStart = '',
  loanEnd = '',
  contractRenewalStart = '',
  contractRenewalEnd = '',
  overtimeAllowance = '',
  nightShiftAllowance = '',
  mealAllowance = '',
  qualification = '',
  postalCode = '',
  address = '',
  phoneNumber = '',
  emergencyContactName = '',
  emergencyContactRelation = '',
  emergencyContactPhoneNumber = '',
  accountHolderName = '',
  accountNumber = '',
  bankName = '',
  bankBranchName = '',
  registrationDate = '',
  registrationNumber = '',
}) => {
  return (
    <Container>
      <Header>給排水工事一覧(検索条件入力)</Header>
      <SubHeader>標準版創作福認め面談 上下水道局 2017 999NM ○○者 平成30年02月27日</SubHeader>

      <Section>
        <SectionTitle>受付年度</SectionTitle>
        <Input type="text" defaultValue="平成30" />
        <Spacer />
        <Input type="text" defaultValue="平成30" />
      </Section>

      <Section>
        <SectionTitle>受付番号</SectionTitle>
        <Input type="text" defaultValue="0000" />
        <Spacer />
        <Input type="text" defaultValue="9999" />
      </Section>

      <Section>
        <SectionTitle>進捗検索</SectionTitle>
        <Row>
          <DateInput type="text" defaultValue="" />
          <Spacer />
          <DateInput type="text" defaultValue="" />
        </Row>
        <Row>
          <DateInput type="text" defaultValue="" />
          <Spacer />
          <DateInput type="text" defaultValue="" />
        </Row>
        <Row>
          <Radio type="radio" name="progress" />
          <RadioLabel>調査済</RadioLabel>
          <Radio type="radio" name="progress" />
          <RadioLabel>収納済</RadioLabel>
          <Radio type="radio" name="progress" />
          <RadioLabel>全て</RadioLabel>
        </Row>
      </Section>

      <Section>
        <SectionTitle>工事概要検索</SectionTitle>
        <DropdownContainer>
          <Dropdown>
            <option value="">用途</option>
          </Dropdown>
          <Dropdown>
            <option value="">種別</option>
          </Dropdown>
        </DropdownContainer>
        <DropdownContainer>
          <Dropdown>
            <option value="">地区</option>
          </Dropdown>
          <Spacer /> 
        </DropdownContainer>
        <Input type="text" placeholder="関連工事" />
        <DateInput type="text" defaultValue="" />
        <Spacer />
        <DateInput type="text" defaultValue="" />
      </Section>

      <Section>
        <SectionTitle>水栓情報検索</SectionTitle>
        <Input type="text" placeholder="水栓番号" />
        <Input type="text" placeholder="量水器番号" />
        <Input type="text" placeholder="メータ形式" />
        <Input type="text" placeholder="メータ口径" />
        <Input type="text" placeholder="メータ" />
      </Section>

      <Section>
        <SectionTitle>自由項目検索</SectionTitle>
        <LabelRow>
          <Label>給水工事合併番号</Label>
          <Input type="text" defaultValue="" />
          <Label>番号</Label>
          <Input type="text" defaultValue="" />
        </LabelRow>
        <LabelRow>
          <Label>道路河川等占有番号</Label>
          <Input type="text" defaultValue="" />
        </LabelRow>
        <LabelRow>  
          <Label>受水槽設置場所</Label>
          <Input type="text" placeholder="受水槽設置場所" />
        </LabelRow>
        <LabelRow>
          <Label>受水槽容量</Label>  
          <Input type="text" placeholder="受水槽容量" />
        </LabelRow>
        <Row>  
          <DateInput type="text" defaultValue="" />
          <Spacer />
          <DateInput type="text" defaultValue="" />  
        </Row>
        <Row>
          <DateInput type="text" defaultValue="" />
          <Spacer />  
          <DateInput type="text" defaultValue="" />
        </Row>
      </Section>
      
      <Section>
        <SectionTitle>アクセス監視</SectionTitle>
        <RadioButtonsContainer>
          <Radio type="radio" name="access" />
          <RadioLabel>受付登録</RadioLabel>
          <Radio type="radio" name="access" />  
          <RadioLabel>納付通知書登録</RadioLabel>
        </RadioButtonsContainer>
      </Section>

      <ButtonsContainer>
        <Button>検索</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonsContainer>
    </Container>
  );
};

// Sample data for preview
const sampleData: EmployeeInfoFormProps = {
  employeeNumber: '123456',
  employeeName: '山田太郎',
  factory: '本社工場',
  department: '総務部',
  joiningDate: '2020-04-01',
  leavingDate: '',
  inactiveDate: '',
  employmentInsuranceStart: '2020-04-01',
  employmentInsuranceEnd: '',
  accidentCompensationStart: '2020-04-01', 
  accidentCompensationEnd: '',
  healthInsuranceStart: '2020-04-01',
  healthInsuranceEnd: '',
  pensionStart: '2020-04-01',
  pensionEnd: '',
  medicalCheckupStart: '2020-04-01',
  medicalCheckupEnd: '',
  dormitoryStart: '2020-04-01',
  dormitoryEnd: '',
  loanStart: '',
  loanEnd: '',
  contractRenewalStart: '2021-04-01',
  contractRenewalEnd: '2022-03-31',
  overtimeAllowance: '2000',
  nightShiftAllowance: '3000',
  mealAllowance: '1000',  
  qualification: '英検2級',
  postalCode: '123-4567', 
  address: '東京都新宿区西新宿1-1-1',
  phoneNumber: '090-1234-5678',
  emergencyContactName: '山田花子',
  emergencyContactRelation: '妻',  
  emergencyContactPhoneNumber: '080-9876-5432',
  accountHolderName: '山田太郎',
  accountNumber: '1234567',
  bankName: 'みずほ銀行',
  bankBranchName: '新宿支店',  
  registrationDate: '2020-04-01',
  registrationNumber: 'R1234567890',
};

// Preview component
const Preview: React.FC = () => {
  return <EmployeeInfoForm {...sampleData} />;  
};

// Styled components
const Container = styled.div`
  padding: 24px;
  background-color: #f0f0f0;
`;

const Header = styled.h2`
  margin: 0 0 8px;
  font-size: 20px;
`;

const SubHeader = styled.div`
  margin-bottom: 24px;
  font-size: 14px;
`;

const Section = styled.div`
  margin-bottom: 32px;
`;

const SectionTitle = styled.div`
  margin-bottom: 8px;
  font-weight: bold;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const LabelRow = styled(Row)`
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 8px;
  align-items: center;
`;

const Spacer = styled.span`
  margin: 0 8px;
`;

const Input = styled.input`
  width: 120px;
  height: 24px;
  padding: 0 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const DateInput = styled(Input)`
  width: 100px;
`;

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Dropdown = styled.select`
  width: 120px;
  height: 24px;
  margin-right: 8px;
  padding: 0 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  background-color: white;
`;

const Label = styled.label`
  margin-right: 8px;
  font-size: 14px;
`;

const RadioButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Radio = styled.input`
  margin: 0 4px 0 16px;
`;

const RadioLabel = styled.label`
  font-size: 14px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Preview;