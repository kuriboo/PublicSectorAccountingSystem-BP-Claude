import React from 'react';
import styled from 'styled-components';

// コンポーネントのプロパティの型定義
type RenameDialogProps = {
  currentName: string;
  onNameChange: (name: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
};

// ダイアログのスタイル
const DialogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 90%;

  @media (max-width: 480px) {
    width: 100%;
    max-width: none;
  }
`;

const DialogTitle = styled.h2`
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RadioWrapper = styled.div`
  margin-bottom: 20px;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
`;

const CheckboxWrapper = styled.div`
  margin-bottom: 20px;
`;

const CheckboxLabel = styled.label`
  margin-right: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// リネームダイアログのコンポーネント
const RenameDialog: React.FC<RenameDialogProps> = ({
  currentName,
  onNameChange,
  onSubmit,
  onCancel,
}) => {
  const [newName, setNewName] = React.useState(currentName);
  const [selectedOption, setSelectedOption] = React.useState('');
  const [checked, setChecked] = React.useState(false);

  // 名前の入力変更時のハンドラ
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setNewName(name);
    onNameChange(name);
  };

  // ラジオボタンの選択変更時のハンドラ
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  // チェックボックスの変更時のハンドラ
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <DialogWrapper>
      <DialogTitle>項目名称</DialogTitle>
      <InputWrapper>
        <InputLabel>項目名称:</InputLabel>
        <InputField type="text" value={newName} onChange={handleNameChange} />
      </InputWrapper>
      <RadioWrapper>
        <RadioLabel>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
          />
          各種中学生額
        </RadioLabel>
      </RadioWrapper>
      <RadioWrapper>
        <RadioLabel>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
          />
          各種文字
        </RadioLabel>
      </RadioWrapper>
      <CheckboxWrapper>
        <CheckboxLabel>
          <input type="checkbox" checked={checked} onChange={handleCheckboxChange} />
          帳票出力無し
        </CheckboxLabel>
      </CheckboxWrapper>
      <ButtonWrapper>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onCancel}>キャンセル</Button>
      </ButtonWrapper>
    </DialogWrapper>
  );
};

// サンプルデータを用いた使用例
const SampleRenameDialog = () => {
  const [name, setName] = React.useState('資金期首残高');

  const handleNameChange = (newName: string) => {
    setName(newName);
  };

  const handleSubmit = () => {
    console.log('Submitted:', name);
  };

  const handleCancel = () => {
    console.log('Canceled');
  };

  return (
    <RenameDialog
      currentName={name}
      onNameChange={handleNameChange}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

export default SampleRenameDialog;