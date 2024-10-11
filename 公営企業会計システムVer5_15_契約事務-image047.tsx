import React, { useState } from 'react';
import styled from '@emotion/styled';

type Props = {
  items: string[];
  initialYear?: number;
  initialDistrict?: string;
  initialJob?: string;
  onSubmit: (values: { year: number; district: string; job: string; }) => void;
};

const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: 10 }, (_, i) => currentYear - i);

const districts = ['区分1', '区分2', '区分3', '区分4', '区分5'];
const jobs = ['仕事1', '仕事2', '仕事3'];

const CompanyDirectoryForm: React.FC<Props> = ({
  items,
  initialYear = currentYear,
  initialDistrict = '',
  initialJob = '',
  onSubmit,
}) => {
  const [year, setYear] = useState(initialYear);
  const [district, setDistrict] = useState(initialDistrict);
  const [job, setJob] = useState(initialJob);

  const handleSubmit = () => {
    onSubmit({ year, district, job });
  };

  return (
    <Form>
      <Title>指名業者名</Title>
      <Row>
        <Label>
          年度
          <Select value={year} onChange={e => setYear(Number(e.target.value))}>
            {yearOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </Select>
        </Label>
        <Label>
          業務区分
          <Select value={job} onChange={e => setJob(e.target.value)}>
            <option value="">全て</option>
            {jobs.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </Select>
        </Label>
        <Label>
          工事
          <Select value={district} onChange={e => setDistrict(e.target.value)}>
            <option value="">全て</option>
            {districts.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </Select>
        </Label>
      </Row>
      <ItemsArea>
        {items.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </ItemsArea>
      <Row>
        <Button onClick={handleSubmit}>検索</Button>
        <ClearButton>クリア</ClearButton>
        <Button primary>終了</Button>
      </Row>
    </Form>
  );
};

export default CompanyDirectoryForm;

// Sample usage
const App: React.FC = () => {
  const items = [
    '429100001:2017-010-42910001-SM1',
    '429100022:2017-010-42910002-SM1',
    '429100061:月分手当等',
  ];

  const handleSubmit = (values: { year: number; district: string; job: string; }) => {
    console.log(values);
  };

  return <CompanyDirectoryForm items={items} onSubmit={handleSubmit} />;
};

// Styled components
const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
`;

const Row = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

const Select = styled.select`
  flex: 1;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ItemsArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 120px;
  padding: 8px;
  border: 1px solid #ccc;
  overflow-y: scroll;
`;

const Item = styled.div`
  padding: 4px;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  color: ${props => (props.primary ? '#fff' : '#333')};
  background-color: ${props => (props.primary ? '#007bff' : '#fff')};
  border: 1px solid ${props => (props.primary ? '#007bff' : '#ccc')};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const ClearButton = styled(Button)`
  color: #333;
  background-color: #f0f0f0;
  border-color: #ccc;
`;