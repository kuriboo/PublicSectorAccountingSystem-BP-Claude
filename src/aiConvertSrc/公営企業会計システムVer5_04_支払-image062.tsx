import React from 'react';
import styled from '@emotion/styled';

// 支出負担行為伺入力のプロパティ
type ExpenseEntryFormProps = {
  onSave?: () => void;
  onCancel?: () => void;
};

// 支出負担行為伺入力コンポーネント
const ExpenseEntryForm: React.FC<ExpenseEntryFormProps> = ({ onSave, onCancel }) => {
  return (
    <Container>
      <Title>支出負担行為伺入力(一般)</Title>
      <FormGroup>
        <Label>負担処理日</Label>
        <Input type="date" defaultValue="令和06年10月02日" />
      </FormGroup>
      <RadioGroup>
        <RadioButton type="radio" id="register" name="action" defaultChecked />
        <RadioLabel htmlFor="register">登録</RadioLabel>
        <RadioButton type="radio" id="update" name="action" />
        <RadioLabel htmlFor="update">訂正</RadioLabel>
        <RadioButton type="radio" id="delete" name="action" />
        <RadioLabel htmlFor="delete">削除</RadioLabel>
      </RadioGroup>
      <FormGroup>
        <Label>予定年度</Label>
        <Input type="text" defaultValue="令和06" />
      </FormGroup>
      <FormGroup>
        <Label>契約年月日</Label>
        <Input type="date" />
        <Span>~</Span>
        <Input type="date" />
      </FormGroup>
      <FormGroup>
        <Label>期間</Label>
        <Input type="date" />
      </FormGroup>
      <TextArea rows={3} placeholder="日用品の購入" />

      <SupplyTable>
        <thead>
          <tr>
            <th>予算節</th>
            <th>予算細節</th>
            <th>予算明細</th>
            <th>税</th>
            <th>負担額</th>
            <th>消費税額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>経費(備消耗品費)</td>
            <td>経費(消耗品費)</td>
            <td>経費(消耗品費・経費)</td>
            <td>課税</td>
            <td>10,000</td>
            <td>909</td>
          </tr>
          <tr>
            <td>経費(備消耗品費)</td>
            <td>経費(消耗品費)</td>
            <td>経費(消耗品費・経費)</td>
            <td>課税</td>
            <td>15,000</td>
            <td>1,111</td>
          </tr>
        </tbody>
      </SupplyTable>

      <TotalGroup>
        <TotalItem>
          <TotalLabel>合計負担額</TotalLabel>
          <TotalValue>25,000</TotalValue>
        </TotalItem>
        <TotalItem>
          <TotalLabel>合計本体額</TotalLabel>
          <TotalValue>22,980</TotalValue>
        </TotalItem>
        <TotalItem>
          <TotalLabel>合計消費税額</TotalLabel>  
          <TotalValue>2,020</TotalValue>
        </TotalItem>
      </TotalGroup>

      <ActionBar>
        <Button onClick={onSave}>登　録</Button>
        <Button onClick={onCancel}>取消</Button>
      </ActionBar>  
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: inline-block;
  width: 120px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Span = styled.span`
  margin: 0 8px;
`;

const RadioGroup = styled.div`
  margin-bottom: 16px;
`;

const RadioButton = styled.input`
  margin-right: 4px;
`;

const RadioLabel = styled.label`
  margin-right: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 16px;
`;

const SupplyTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;

  th, td {
    padding: 8px;
    border: 1px solid #ccc;
  }
`;

const TotalGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

const TotalItem = styled.div`
  margin-left: 32px;
`;

const TotalLabel = styled.div`
  font-weight: bold;
`;

const TotalValue = styled.div`
  text-align: right;
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 8px;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

// サンプルデータを用いた使用例
const App: React.FC = () => {
  const handleSave = () => {
    // 登録処理
    console.log('Saved');
  };

  const handleCancel = () => {
    // 取消処理  
    console.log('Canceled');
  };

  return (
    <div>
      <h1>支出負担行為伺入力</h1>
      <ExpenseEntryForm onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
};

export default App;