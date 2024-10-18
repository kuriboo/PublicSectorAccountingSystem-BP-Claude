import React from 'react';

import { useState } from 'react';
import styled from '@emotion/styled';

type InputFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange }) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <Input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
    </InputWrapper>
  );
};

type SelectFieldProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

const SelectField: React.FC<SelectFieldProps> = ({ label, value, options, onChange }) => {
  return (
    <SelectWrapper>
      <Label>{label}</Label>
      <Select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </SelectWrapper>
  );
};

type TableRowProps = {
  label: string;
  value: string;
};

const TableRow: React.FC<TableRowProps> = ({ label, value }) => {
  return (
    <Row>
      <RowLabel>{label}</RowLabel>
      <RowValue>{value}</RowValue>
    </Row>
  );
};

const MemberRegistrationForm: React.FC = () => {
  const [belongsTo, setBelongsTo] = useState('');
  const [memberNumber, setMemberNumber] = useState('');
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [isValid, setIsValid] = useState(false);

  // サンプル実装のための仮のデータ
  const sampleData = {
    belongsTo: '所属部署',
    memberNumber: '041001',
    name: '山田太郎',
    jobTitle: '営業',
    company: 'ABC株式会社',
  };

  const handleSubmit = () => {
    // バリデーションチェック
    const isAllFilled = belongsTo && memberNumber && name && jobTitle && company;
    setIsValid(isAllFilled);

    if (isAllFilled) {
      // TODO: フォームの送信処理を実装
      console.log('フォーム送信');
    }
  };

  return (
    <Container>
      <Title>新規登録入力画面</Title>
      <InputField label="所属部門" value={belongsTo} onChange={setBelongsTo} />
      <InputField label="社員番号" value={memberNumber} onChange={setMemberNumber} />
      <InputField label="氏名" value={name} onChange={setName} />
      <SelectField
        label="役職区分"
        value={jobTitle}
        options={['', '部長', '課長', '平社員']}
        onChange={setJobTitle}
      />
      <InputField label="会社名" value={company} onChange={setCompany} />

      <SubmitButton onClick={handleSubmit} disabled={!isValid}>
        登録
      </SubmitButton>

      <TableTitle>登録情報</TableTitle>
      <TableRow label="所属" value={sampleData.belongsTo} />
      <TableRow label="社員番号" value={sampleData.memberNumber} />
      <TableRow label="氏名" value={sampleData.name} />
      <TableRow label="役職" value={sampleData.jobTitle} />
      <TableRow label="会社名" value={sampleData.company} />
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  margin-bottom: 15px;
`;

const SelectWrapper = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 200px;
  padding: 5px;
`;

const Select = styled.select`
  width: 200px;
  padding: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 20px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const TableTitle = styled.h3`
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const RowLabel = styled.div`
  width: 100px;
  font-weight: bold;
`;

const RowValue = styled.div`
  flex: 1;
`;

export default MemberRegistrationForm;