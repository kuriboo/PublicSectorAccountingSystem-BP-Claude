import React from 'react';
import styled from '@emotion/styled';

type Props = {
  /** 要変更出負担行為の同意書にチェックを入れるかどうか */
  isChecked: boolean;
  /** チェックボックスの値が変更されたときに呼び出されるコールバック関数 */
  onChange: (isChecked: boolean) => void;
};

/**
 * 要変更出負担行為同意書コンポーネント
 */
const ConfirmationForm: React.FC<Props> = ({ isChecked, onChange }) => {
  return (
    <Container>
      <Title>印刷対象帳票名</Title>
      <FormGroup>
        <Checkbox
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <Label>要変更出負担行為同意書(工事)とりまとめ</Label>
      </FormGroup>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};



// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  color: #333;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
  transform: scale(1.2);
  cursor: pointer;
`;

const Label = styled.label`
  font-size: 16px;
  color: #555;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

// 使用例
const App: React.FC = () => {
  const [isChecked, setIsChecked] = React.useState(true);

  const handleChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <div>
      <h1>Confirmation Form Example</h1>
      <ConfirmationForm isChecked={isChecked} onChange={handleChange} />
    </div>
  );
};

export default App;