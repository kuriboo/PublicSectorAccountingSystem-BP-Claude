import React from 'react';
import styled from '@emotion/styled';

type AutoSettingFormProps = {
  budgetCode: string;
  autoBudgetDate: string;
  content: string;
  onChangeBudgetCode: (value: string) => void;
  onChangeAutoBudgetDate: (value: string) => void;
  onChangeContent: (value: string) => void;
  onClickPrev: () => void;
  onClickNext: () => void;
  onSubmit: () => void;
  onCancel: () => void;
  onFinish: () => void;
};

const AutoSettingForm: React.FC<AutoSettingFormProps> = ({
  budgetCode,
  autoBudgetDate,
  content,
  onChangeBudgetCode,
  onChangeAutoBudgetDate,
  onChangeContent,
  onClickPrev,
  onClickNext,
  onSubmit,
  onCancel,
  onFinish,
}) => {
  return (
    <Container>
      <Title>自由設定内容マスタメンテ</Title>
      <RadioGroup>
        <RadioButton type="radio" name="type" value="register" defaultChecked />
        <RadioLabel>登録</RadioLabel>
        <RadioButton type="radio" name="type" value="update" />
        <RadioLabel>訂正</RadioLabel>
        <RadioButton type="radio" name="type" value="delete" />
        <RadioLabel>削除</RadioLabel>
      </RadioGroup>
      <FormGroup>
        <Label>資産番号</Label>
        <Input type="text" value={budgetCode} onChange={(e) => onChangeBudgetCode(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>自由設定項目コード</Label>
        <Input type="text" />
      </FormGroup>
      <FormGroup>
        <Label>内容</Label>
        <Input type="text" value={content} onChange={(e) => onChangeContent(e.target.value)} />
      </FormGroup>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>自由設定項目コード</TableHeaderCell>
            <TableHeaderCell>名称</TableHeaderCell>
            <TableHeaderCell>開始番号1</TableHeaderCell>
            <TableHeaderCell>内容</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>001001</TableCell>
            <TableCell>対応要領</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <ButtonGroup>
        <Button onClick={onClickPrev}>前データ</Button>
        <Button onClick={onClickNext}>次データ</Button>
        <SubmitButton onClick={onSubmit}>OK</SubmitButton>
        <CancelButton onClick={onCancel}>クリア</CancelButton>
        <FinishButton onClick={onFinish}>終了</FinishButton>
      </ButtonGroup>
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
`;

const RadioGroup = styled.div`
  margin-top: 8px;
`;

const RadioButton = styled.input`
  margin-right: 4px;
`;

const RadioLabel = styled.label`
  margin-right: 16px;
`;

const FormGroup = styled.div`
  margin-top: 16px;
`;

const Label = styled.div`
  margin-bottom: 4px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

const Table = styled.table`
  margin-top: 16px;
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableHeaderCell = styled.th`
  padding: 8px;
  border: 1px solid #ccc;
  text-align: center;
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
  text-align: center;
`;

const ButtonGroup = styled.div`
  margin-top: 16px;
  text-align: center;
`;

const Button = styled.button`
  margin: 0 4px;
  padding: 4px 8px;
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: white;
  font-weight: bold;
`;

const CancelButton = styled(Button)`
  background-color: #dc3545;
  color: white;
  font-weight: bold;
`;

const FinishButton = styled(Button)`
  background-color: #28a745;
  color: white;
  font-weight: bold;
`;

export default AutoSettingForm;

// Usage example
const App: React.FC = () => {
  return (
    <AutoSettingForm
      budgetCode="8002200"  
      autoBudgetDate=""
      content="〇〇地区詰所貸与工事"
      onChangeBudgetCode={(value) => console.log(value)}
      onChangeAutoBudgetDate={(value) => console.log(value)} 
      onChangeContent={(value) => console.log(value)}
      onClickPrev={() => console.log('Prev clicked')}
      onClickNext={() => console.log('Next clicked')}
      onSubmit={() => console.log('Submit clicked')}
      onCancel={() => console.log('Cancel clicked')}
      onFinish={() => console.log('Finish clicked')}
    />
  );
};