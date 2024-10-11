import React from 'react';
import styled from '@emotion/styled';

interface MemberDataProps {
  name: string;
  birth: string;
  address: string;
  phone: string;
  mail: string;
}

interface MemberFormProps {
  memberData: MemberDataProps;
  onSubmit: (data: MemberDataProps) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 60%;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const DateInputs = styled.div`
  display: flex;
  gap: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const MemberForm: React.FC<MemberFormProps> = ({ memberData, onSubmit }) => {
  const [formData, setFormData] = React.useState<MemberDataProps>(memberData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container>
      <Title>会計連携データ出力</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          出力設定
          <Input type="text" name="name" value={formData.name} onChange={handleChange} />
        </Label>
        <Label>
          前回出力履歴
          <div>
            日時: {formData.birth}<br />
            内容: すべて　通常
          </div>
        </Label>
        <Label>
          出力先
          <Input type="text" name="address" value={formData.address} onChange={handleChange} />
        </Label>
        <Label>
          調定
          <RadioGroup>
            <label>
              <input type="radio" name="adjustmentType" value="normal" defaultChecked /> 通常
            </label>
            <label>  
              <input type="radio" name="adjustmentType" value="correction" /> 精算
            </label>
            <label>
              <input type="radio" name="adjustmentType" value="both" /> 通常＋精算
            </label>
          </RadioGroup>
        </Label>
        <Label>
          調定年月
          <div>
            調定年月　<Input type="text" name="adjustmentStartDate" />　～　<Input type="text" name="adjustmentEndDate" />
          </div>
        </Label>
        <Label>  
          調定変更
          <div>
            調定年月　<Input type="text" name="adjustmentChangeStartDate" />　～　<Input type="text" name="adjustmentChangeEndDate" />
          </div>
        </Label>
        <Label>
          収納
          <div>
            収納年月日　<Input type="text" name="paymentStartDate" />　～　<Input type="text" name="paymentEndDate" />  
          </div>
          <div>
            収納処理年月日　<Input type="text" name="paymentProcessingStartDate" />　～　<Input type="text" name="paymentProcessingEndDate" />
          </div>
        </Label>

        <ButtonGroup>
          <Button type="button">ロググアウト</Button>
          <div>
            <Button type="submit">ＯＫ</Button>
            <Button type="button">クリア</Button>
            <Button type="button">終了</Button>  
          </div>
        </ButtonGroup>
      </Form>
    </Container>
  );
};

// Usage example
const sampleData: MemberDataProps = {
  name: '水道管理システム連携データ',
  birth: '2017/09/19 23:24:59',
  address: 'C:¥Syosei¥Ryo-kin¥連携データ',
  phone: '',
  mail: '',
};

const App: React.FC = () => {
  const handleSubmit = (data: MemberDataProps) => {
    console.log('Submitted data:', data);
    // Handle form submission
  };

  return <MemberForm memberData={sampleData} onSubmit={handleSubmit} />;
};

export default App;