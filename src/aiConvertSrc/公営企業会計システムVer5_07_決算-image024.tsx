import React from 'react';
import styled from 'styled-components';

// 型定義
interface FormData {
  startDate: string;
  endDate: string;
  departureCode: string;
  arrivalCode: string;
  ticketType: string;
  printLevel: string;
}

// スタイル定義
const Container = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const DateInput = styled.input`
  padding: 5px;
  width: 120px;
`;

const Select = styled.select`
  padding: 5px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const ButtonGroup = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 5px;
  font-size: 16px;
`;

// コンポーネント定義
const TicketSearchForm: React.FC = () => {
  // フォームの状態管理
  const [formData, setFormData] = React.useState<FormData>({
    startDate: '',
    endDate: '',
    departureCode: '',
    arrivalCode: '',
    ticketType: '',
    printLevel: '',
  });

  // フォームの入力変更時の処理
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // フォーム送信時の処理
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // ここでフォームデータを送信する処理を実装
    console.log(formData);
  };

  return (
    <Container>
      <Title>割引金計算書</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>期間指定</Label>
          <DateInput type="date" name="startDate" value={formData.startDate} onChange={handleChange} required /> ～ 
          <DateInput type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label>前年度処分区分</Label>
          {/* ここでは仮のセレクトボックスを表示 */}
          <Select name="departureCode" value={formData.departureCode} onChange={handleChange}>
            <option value="">出発地を選択</option>
            <option value="071">地点A</option>
            <option value="072">地点B</option>
          </Select> → 
          <Select name="arrivalCode" value={formData.arrivalCode} onChange={handleChange}>
            <option value="">到着地を選択</option>
            <option value="071">地点A</option>
            <option value="072">地点B</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>
            <Checkbox type="checkbox" name="ticketType" value="定期" checked={formData.ticketType === '定期'} onChange={handleChange} />
            定期
          </Label>
          <Label>
            <Checkbox type="checkbox" name="ticketType" value="回数" checked={formData.ticketType === '回数'} onChange={handleChange} />
            回数
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            <Checkbox type="radio" name="printLevel" value="詳細" checked={formData.printLevel === '詳細'} onChange={handleChange} />
            詳細
          </Label>
          <Label>
            <Checkbox type="radio" name="printLevel" value="目次" checked={formData.printLevel === '目次'} onChange={handleChange} />
            目次
          </Label>
        </FormGroup>
        <ButtonGroup>
          <Button type="submit">検索</Button>
          <Button type="reset">クリア</Button>
        </ButtonGroup>
      </form>
    </Container>
  );
};

export default TicketSearchForm;

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>チケット検索</h1>
      <TicketSearchForm />
    </div>
  );
};