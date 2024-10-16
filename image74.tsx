import React from 'react';
import styled from 'styled-components';

type Industry = {
  code: string;
  name: string;
};

type Props = {
  industries: Industry[];
  selectedIndustry: string;
  onChangeIndustry: (industryCode: string) => void;
  jobTypes: string[];
  selectedJobType: string;
  onChangeJobType: (jobType: string) => void;
  fromSalary: string;
  toSalary: string;
  onChangeFromSalary: (salary: string) => void; 
  onChangeToSalary: (salary: string) => void;
  prefectures: string[];
  selectedPrefecture: string;
  onChangePrefecture: (prefecture: string) => void;
  workerNumbers: string[];
  selectedWorkerNumber: string;
  onChangeWorkerNumber: (workerNumber: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.div`
  margin-bottom: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 5px;
  font-size: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
`;

const ConditionSearchForm: React.FC<Props> = ({
  industries,
  selectedIndustry,
  onChangeIndustry,
  jobTypes,
  selectedJobType,
  onChangeJobType,
  fromSalary,
  toSalary,
  onChangeFromSalary,
  onChangeToSalary,
  prefectures,
  selectedPrefecture,
  onChangePrefecture,
  workerNumbers,
  selectedWorkerNumber,
  onChangeWorkerNumber,
  onSubmit,
  onCancel,
}) => {
  return (
    <Container>
      <Title>業者別契約結果一覧表</Title>
      <FormGroup>
        <Label>業種</Label>
        <Select
          value={selectedIndustry}
          onChange={(e) => onChangeIndustry(e.target.value)}
        >
          {industries.map((industry) => (
            <option key={industry.code} value={industry.code}>
              {industry.name}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>職種</Label>
        <Select
          value={selectedJobType}
          onChange={(e) => onChangeJobType(e.target.value)}
        >
          {jobTypes.map((jobType) => (
            <option key={jobType} value={jobType}>
              {jobType}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>給与区分</Label>
        <Input
          type="text"
          value={fromSalary}
          onChange={(e) => onChangeFromSalary(e.target.value)}
        />
        〜
        <Input
          type="text"
          value={toSalary}
          onChange={(e) => onChangeToSalary(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>地区</Label>
        <Select
          value={selectedPrefecture}
          onChange={(e) => onChangePrefecture(e.target.value)}
        >
          {prefectures.map((prefecture) => (
            <option key={prefecture} value={prefecture}>
              {prefecture}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>契約人数分</Label>
        <Select
          value={selectedWorkerNumber}
          onChange={(e) => onChangeWorkerNumber(e.target.value)}
        >
          {workerNumbers.map((workerNumber) => (
            <option key={workerNumber} value={workerNumber}>
              {workerNumber}
            </option>
          ))}
        </Select>
      </FormGroup>
      <ButtonContainer>
        <Button onClick={onSubmit}>検索</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Usage example
const industries = [
  { code: '001', name: '土木・建築工事' },
  { code: '002', name: '電気・ガス工事' },
  { code: '003', name: '土工事' },
];

const ConditionSearchFormExample: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = React.useState('001');
  const [selectedJobType, setSelectedJobType] = React.useState('');
  const [fromSalary, setFromSalary] = React.useState('');
  const [toSalary, setToSalary] = React.useState('');
  const [selectedPrefecture, setSelectedPrefecture] = React.useState('');
  const [selectedWorkerNumber, setSelectedWorkerNumber] =
    React.useState('');

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted');
  };

  const handleCancel = () => {
    // Handle form cancellation
    console.log('Form cancelled');
  };

  return (
    <ConditionSearchForm
      industries={industries}
      selectedIndustry={selectedIndustry}
      onChangeIndustry={setSelectedIndustry}
      jobTypes={['職種1', '職種2', '職種3']}
      selectedJobType={selectedJobType}
      onChangeJobType={setSelectedJobType}
      fromSalary={fromSalary}
      toSalary={toSalary}
      onChangeFromSalary={setFromSalary}
      onChangeToSalary={setToSalary}
      prefectures={['東京', '大阪', '名古屋']}
      selectedPrefecture={selectedPrefecture}
      onChangePrefecture={setSelectedPrefecture}
      workerNumbers={['1人', '2人', '3人']}
      selectedWorkerNumber={selectedWorkerNumber}
      onChangeWorkerNumber={setSelectedWorkerNumber}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

export default ConditionSearchFormExample;