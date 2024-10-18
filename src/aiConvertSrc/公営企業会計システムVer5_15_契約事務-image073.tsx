import React from 'react';
import styled from '@emotion/styled';

interface Company {
  value: string;
  label: string;
}

interface Contract {
  value: string;
  label: string;
}

interface JobSalarySearchProps {
  companies: Company[];
  contracts: Contract[];
  onSearch: (company: string, contract: string, salaryMin: string, salaryMax: string, region: string, city: string) => void;
}

const JobSalarySearch: React.FC<JobSalarySearchProps> = ({ companies, contracts, onSearch }) => {
  const [selectedCompany, setSelectedCompany] = React.useState('');
  const [selectedContract, setSelectedContract] = React.useState('');
  const [salaryMin, setSalaryMin] = React.useState('');
  const [salaryMax, setSalaryMax] = React.useState('');
  const [selectedRegion, setSelectedRegion] = React.useState('');
  const [selectedCity, setSelectedCity] = React.useState('');

  // 検索ボタンクリック時のハンドラ
  const handleSearch = () => {
    onSearch(selectedCompany, selectedContract, salaryMin, salaryMax, selectedRegion, selectedCity);
  };

  return (
    <Container>
      <Title>業者別契約結果一覧表</Title>
      <Row>
        <Label>業種</Label>
        <Select value={selectedCompany} onChange={e => setSelectedCompany(e.target.value)}>
          <option value="">選択してください</option>
          {companies.map(c => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </Select>
      </Row>
      <Row>
        <Label>契約区分</Label>
        <Select value={selectedContract} onChange={e => setSelectedContract(e.target.value)}>
          <option value="">工事</option>
          {contracts.map(c => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </Select>
      </Row>
      <Row>
        <Label>金額</Label>
        <Input type="text" value={salaryMin} onChange={e => setSalaryMin(e.target.value)} />
        <Label>~</Label>
        <Input type="text" value={salaryMax} onChange={e => setSalaryMax(e.target.value)} />  
      </Row>
      <Row>
        <Label>契約区分</Label>
        <Select value={selectedRegion} onChange={e => setSelectedRegion(e.target.value)}>
          <option value=""></option>
        </Select>
        <Label>~</Label>
        <Select value={selectedCity} onChange={e => setSelectedCity(e.target.value)}>
          <option value=""></option>
        </Select>
      </Row>
      <Row>
        <Button onClick={handleSearch}>検索</Button>
      </Row>
    </Container>
  );
};

// サンプルデータと使用例
const SampleJobSalarySearch: React.FC = () => {
  const sampleCompanies = [
    { value: '001', label: '土木一式工事' },
    { value: '002', label: '建築一式工事' },
    { value: '003', label: '大工工事' },
  ];

  const sampleContracts = [
    { value: '001', label: '契約金額' },
    { value: '002', label: '落札金額' },
  ];
  
  const handleSearch = (company: string, contract: string, salaryMin: string, salaryMax: string, region: string, city: string) => {
    console.log(`Searching with: Company=${company}, Contract=${contract}, SalaryMin=${salaryMin}, SalaryMax=${salaryMax}, Region=${region}, City=${city}`);
  };

  return (
    <JobSalarySearch 
      companies={sampleCompanies} 
      contracts={sampleContracts}
      onSearch={handleSearch}
    />
  );
};

export default SampleJobSalarySearch;

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  margin-right: 10px;
  width: 100px;
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;
  width: 200px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 5px;
  }
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;
  width: 150px;
  box-sizing: border-box;
  margin-right: 10px;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 5px;
    margin-right: 0;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #0056b3;
  }
`;