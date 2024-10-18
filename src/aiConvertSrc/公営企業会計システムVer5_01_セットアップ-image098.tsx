import React from 'react';
import styled from '@emotion/styled';

type Industry = '製造' | '卸売';
type JobType = '営業' | '事務';

interface CashFlowProps {
  companyName: string;
  fiscalYear: number;
  industry: Industry;
  jobType: JobType;
}

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    max-width: 100%;
    border-radius: 0;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Select = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    background-color: #0056b3;
  }
`;

const Notice = styled.p`
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.5;
`;

const CashFlow: React.FC<CashFlowProps> = ({
  companyName,
  fiscalYear,
  industry,
  jobType,
}) => {
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform cash flow calculation based on selected values
    // ...
  };

  return (
    <Container>
      <Title>キャッシュ・フロー計算書マスタコピー</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>業務種類(コピー元)</Label>
          <Select value={industry}>
            <option value="製造">製造</option>
            <option value="卸売">卸売</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>業務種類(コピー先)</Label>
          <Select value={jobType}>
            <option value="営業">営業</option>
            <option value="事務">事務</option>
          </Select>
        </FormGroup>
        <SubmitButton type="submit">実行</SubmitButton>
      </Form>
      <Notice>
        画面指定された「業務種類(コピー元)」から 「業務種類(コピー先)」のデータを作成します。
        異なる業務種類間でのデータコピーが可能です。
        同一の業務種類では次年度へのデータコピーが可能です。
        注意）「業務種類(コピー先)」に既にデータが存在する場合、上書きされます。
        「業務種類(コピー先)」で伝票集計指示入力、補正額入力をしている場合、
        入力した金額は削除されます。
      </Notice>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <CashFlow
      companyName="行政市事業会計"
      fiscalYear={2023}
      industry="製造"
      jobType="営業"
    />
  );
};

export default App;