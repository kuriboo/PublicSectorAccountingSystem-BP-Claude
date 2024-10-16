import React from 'react';
import styled from '@emotion/styled';

type JobData = {
  id: string;
  companyName: string;
  employmentStatus: string;
  annualIncome: number;
  region: string;
  publishedDate: string;
  registrationNo: string;
}

type CompanyJobSearchProps = {
  data: JobData[];
}

const CompanyJobSearch: React.FC<CompanyJobSearchProps> = ({ data }) => {
  return (
    <Container>
      <Header>
        <Title>行政市水道事業会計</Title>
        <Subtitle>総務課 予算・会計担当 ぎょうせい太郎</Subtitle>
        <Date>令和29年09月05日</Date>
      </Header>
      
      <SearchBar>
        <Input placeholder="ぎょうせい工務店" />
        <IdInput placeholder="0000001111" />
        <Button>明細編集</Button>
        <Button>行削除</Button>
      </SearchBar>

      <Table>
        <thead>
          <tr>
            <Th>変更届出日</Th>
            <Th>業者名</Th>
            <Th>略名</Th>
            <Th>提案力</Th>
            <Th>JV区分</Th>
            <Th>登録区分</Th>
            <Th>資本金</Th>
          </tr>
        </thead>
        <tbody>
          {data.map(job => (
            <tr key={job.id}>
              <Td>{job.publishedDate}</Td>
              <Td>{job.companyName}</Td>
              <Td>{job.companyName}</Td>
              <Td>キャリイワケアシ</Td>
              <Td>{job.region}</Td>
              <Td>本店録</Td>
              <Td>{job.annualIncome}</Td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Footer>
        <Label>業者名</Label>
        <Input />
        
        <Label>略名</Label>
        <Input />

        <Label>変更届出日</Label>
        <DateInput type="date" />

        <Label>資本金</Label>
        <Input />

        <CheckboxContainer>
          <Checkbox type="checkbox" id="hontenroku" />
          <CheckboxLabel htmlFor="hontenroku">本店録</CheckboxLabel>
          
          <Checkbox type="checkbox" id="shitenroku" />
          <CheckboxLabel htmlFor="shitenroku">支店録</CheckboxLabel>
        </CheckboxContainer>
        
        <Label>営業年数</Label>
        <NumberInput type="number" />
        
        <Label>完成高</Label>
        <NumberInput type="number" />
        
        <Label>自己資本率</Label>
        <NumberInput type="number" />
        
        <Label>営業年数</Label>
        <NumberInput type="number" min={0} />

        <Label>区分別職員数</Label>
        <NumberInput type="number" min={0} />

        <Button>経理</Button>
        <Button>行ギャンセル</Button>
        <Button primary>終了</Button>
      </Footer>
      
    </Container>
  );
};

// Sample data for demonstration
const sampleData: JobData[] = [
  {
    id: '1',
    companyName: 'ぎょうせい工務店',
    employmentStatus: '正社員',
    annualIncome: 5000000,
    region: '関東',
    publishedDate: '令和29年09月05日',
    registrationNo: '0000001111',
  },
  // Add more sample data...
];

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>Company Job Search</h1>
      <CompanyJobSearch data={sampleData} />
    </div>
  );
};

// Styled components
const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  margin: 0;
`;

const Subtitle = styled.p`
  margin: 5px 0;
`;

const Date = styled.p`
  margin: 0;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 5px;
  margin-right: 10px;
`;

const IdInput = styled(Input)`
  width: 150px;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 10px 20px;
  background-color: ${props => (props.primary ? '#007bff' : '#f0f0f0')};
  color: ${props => (props.primary ? '#fff' : '#333')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const Th = styled.th`
  background-color: #f0f0f0;
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const Footer = styled.footer`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 10px;
  align-items: center;
`;

const Label = styled.label`
  font-weight: bold;
`;

const DateInput = styled.input`
  padding: 5px;
`;

const NumberInput = styled.input`
  padding: 5px;
  width: 100px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const CheckboxLabel = styled.label`
  margin-right: 10px;
`;

export default CompanyJobSearch;