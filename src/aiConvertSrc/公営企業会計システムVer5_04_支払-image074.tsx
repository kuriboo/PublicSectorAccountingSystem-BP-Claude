import React from 'react';
import styled from 'styled-components';

type CheckboxListProps = {
  checkboxItems: string[];
  onItemChange: (checkedItems: string[]) => void;
};

const CheckboxList: React.FC<CheckboxListProps> = ({ checkboxItems, onItemChange }) => {
  const [checkedItems, setCheckedItems] = React.useState<string[]>([]);

  const handleCheckboxChange = (item: string) => {
    const updatedCheckedItems = checkedItems.includes(item)
      ? checkedItems.filter((i) => i !== item)
      : [...checkedItems, item];
    setCheckedItems(updatedCheckedItems);
    onItemChange(updatedCheckedItems);
  };

  return (
    <Container>
      <Title>印刷対象範囲名</Title>
      <CheckboxContainer>
        {checkboxItems.map((item) => (
          <CheckboxItem key={item}>
            <Checkbox
              type="checkbox"
              checked={checkedItems.includes(item)}
              onChange={() => handleCheckboxChange(item)}
            />
            <Label>{item}</Label>
          </CheckboxItem>
        ))}
      </CheckboxContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const Label = styled.label`
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const checkboxItems = ['負担行為伺兼命令書(一般)', '控除明細内訳', '債権者一覧', '税区分別・税率別金額合計一覧'];

const App = () => {
  const handleItemChange = (checkedItems: string[]) => {
    console.log('Checked items:', checkedItems);
  };

  return <CheckboxList checkboxItems={checkboxItems} onItemChange={handleItemChange} />;
};

export default App;