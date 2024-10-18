import React from 'react';
import styled from 'styled-components';

type FormProps = {
  title: string;
  onSubmit: (data: { [key: string]: string }) => void;
};

const Form: React.FC<FormProps> = ({ title, onSubmit }) => {
  // 状態管理用のstate
  const [data, setData] = React.useState<{ [key: string]: string }>({});

  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(data);
  };

  // フォーム入力時の処理
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>{title}</Title>
      <FormGroup>
        <Label>
          <Input
            type="text"
            name="date"
            placeholder="平成29年08月"
            onChange={handleChange}
          />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label>
          <Input type="radio" name="type" value="前年度当月決算と比較" onChange={handleChange} />
          前年度当月決算と比較
        </Label>
        <Label>
          <Input type="radio" name="type" value="当月予算と比較" onChange={handleChange} />
          当月予算と比較
        </Label>
      </FormGroup>
      <FormGroup>
        <Label>
          <Input type="checkbox" name="tax" onChange={handleChange} />
          税抜
        </Label>
        <Label>
          <Input type="checkbox" name="taxIncluded" onChange={handleChange} />
          税込
        </Label>
      </FormGroup>
      <ButtonGroup>
        <Button type="submit">OK</Button>
        <Button type="reset">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonGroup>
    </StyledForm>
  );
};

// スタイリング用のStyled Componentsを定義
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin: 0 10px;
`;

const Input = styled.input`
  padding: 5px;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// サンプルデータを用いた使用例
const FormExample: React.FC = () => {
  const handleSubmit = (data: { [key: string]: string }) => {
    console.log(data);
  };

  return (
    <Form
      title="月別損益計算書作成"
      onSubmit={handleSubmit}
    />
  );
};

export default FormExample;