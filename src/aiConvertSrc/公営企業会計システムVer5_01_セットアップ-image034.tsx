import React from 'react';
import styled from '@emotion/styled';

type FiscalYear = '令和' | '昭和' | '平成';

type Company = {
  name: string;
  kana: string;
};

type Props = {
  fiscalYear: FiscalYear;
  year: number;
  company: Company;
  managementCode: string;
  newCode: string;
  onConfirm: () => void;
  onCancel: () => void;
  onSubmit: () => void;
};

const Container = styled.div`
  font-family: sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  font-size: 16px;
`;

const Select = styled.select`
  width: 100%;
  padding: 5px;
  font-size: 16px;
`;

const Option = styled.option``;

const RadioGroup = styled.div`
  display: flex;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
`;

const RadioInput = styled.input`
  margin-right: 5px;
`;

const TableWrapper = styled.div`
  margin-bottom: 15px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 5px;
  border: 1px solid #ccc;
  background: #f0f0f0;
`;

const TableCell = styled.td`
  padding: 5px;
  border: 1px solid #ccc;
`;

const ButtonGroup = styled.div`
  text-align: center;
`;

const Button = styled.button`
  margin: 0 5px;
  padding: 5px 15px;
  font-size: 16px;
`;

const GroupMasterForm: React.FC<Props> = ({
  fiscalYear,
  year,
  company,
  managementCode,
  newCode,
  onConfirm,
  onCancel,
  onSubmit,
}) => {
  return (
    <Container>
      <Title>投資グループマスタ</Title>
      <FormGroup>
        <Label>令和02年度</Label>
        <Input type="text" value={`${year}`} readOnly />
      </FormGroup>
      <FormGroup>
        <RadioGroup>
          <RadioLabel>
            <RadioInput type="radio" checked={fiscalYear === '令和'} readOnly />
            令和
          </RadioLabel>
          <RadioLabel>
            <RadioInput type="radio" checked={fiscalYear === '昭和'} readOnly />
            昭和
          </RadioLabel>
          <RadioLabel>
            <RadioInput type="radio" checked={fiscalYear === '平成'} readOnly />
            平成
          </RadioLabel>
        </RadioGroup>
      </FormGroup>
      <FormGroup>
        <Label>投資グループマスタ</Label>
        <Select>
          <Option>投資入力</Option>
          <Option>投資入力用グループ</Option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>名称</Label>
        <Input type="text" value={company.name} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>検索</Label>
        <Input type="text" value={company.kana} readOnly />
      </FormGroup>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <TableHeader>所属コード</TableHeader>
              <TableHeader>所属名称</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableCell>{managementCode}</TableCell>
              <TableCell>管理者</TableCell>
            </tr>
          </tbody>
        </Table>
      </TableWrapper>
      <FormGroup>
        <Label>所属設定</Label>
        <Input type="text" value={newCode} readOnly />
      </FormGroup>
      <ButtonGroup>
        <Button onClick={onConfirm}>所属</Button>
        <Button onClick={onCancel}>行ｷｬﾝｾﾙ</Button>
        <Button onClick={onSubmit}>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

export default GroupMasterForm;

// Usage example:
const SampleData = {
  fiscalYear: '令和' as FiscalYear,
  year: 2,
  company: {
    name: '投資入力',
    kana: '投資入力用グループ',
  },
  managementCode: '9999999',
  newCode: '9999999',
};

const SampleUsage: React.FC = () => {
  const handleConfirm = () => {
    console.log('Confirm button clicked');
  };

  const handleCancel = () => {
    console.log('Cancel button clicked');
  };

  const handleSubmit = () => {
    console.log('Submit button clicked');
  };

  return (
    <GroupMasterForm
      {...SampleData}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
      onSubmit={handleSubmit}
    />
  );
};