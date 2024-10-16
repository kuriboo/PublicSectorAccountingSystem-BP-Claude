import React from 'react';
import styled from '@emotion/styled';

// 注記コードの型定義
type NoteCode = {
  code: string;
  name: string;
};

// 注記保守画面のプロパティ型定義
type NoteMaintenanceProps = {
  noteCodes: NoteCode[];
  onConfirm: (note: string, name: string) => void;
  onCancel: () => void;
};

// 注記保守画面のコンポーネント
const NoteMaintenance: React.FC<NoteMaintenanceProps> = ({ 
  noteCodes, 
  onConfirm,
  onCancel
}) => {
  const [selectedNoteCode, setSelectedNoteCode] = React.useState<NoteCode | null>(null);
  const [name, setName] = React.useState<string>('');

  // 注記コードを選択したときの処理
  const handleNoteCodeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const code = event.target.value;
    const noteCode = noteCodes.find((n) => n.code === code);
    setSelectedNoteCode(noteCode || null);
  };

  // 名称を変更したときの処理
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  // 確定ボタンを押したときの処理
  const handleConfirm = () => {
    if (selectedNoteCode) {
      onConfirm(selectedNoteCode.code, name);
    }
  };

  return (
    <Container>
      <Title>注記種別保守</Title>
      <NoteCodeArea>
        <Label>注記種別名称</Label>
        <Select value={selectedNoteCode?.code || ''} onChange={handleNoteCodeChange}>
          <option value="">選択してください</option>
          {noteCodes.map((noteCode) => (
            <option key={noteCode.code} value={noteCode.code}>
              {noteCode.code}
            </option>
          ))}
        </Select>
      </NoteCodeArea>
      <NameArea>
        <Label>名称</Label>
        <Input type="text" value={name} onChange={handleNameChange} />
      </NameArea>
      <ButtonArea>
        <ConfirmButton onClick={handleConfirm}>確定</ConfirmButton>
        <CancelButton onClick={onCancel}>クリア</CancelButton>
        <EndButton>終了</EndButton>
      </ButtonArea>
    </Container>
  );
};

// 注記保守画面の表示サンプル
const SampleNoteMaintenance: React.FC = () => {
  const sampleNoteCodes: NoteCode[] = [
    { code: '001', name: '指定給水装置工事事業者' },
    { code: '002', name: '注記名称テスト××' },
  ];

  const handleConfirm = (note: string, name: string) => {
    console.log(`Selected Note: ${note}, Name: ${name}`);
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  return (
    <NoteMaintenance 
      noteCodes={sampleNoteCodes}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );
};

// styled-components によるスタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const NoteCodeArea = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const NameArea = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 5px;
  font-size: 16px;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 16px;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin: 0 5px;
`;

const ConfirmButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

const CancelButton = styled(Button)`
  background-color: #dc3545;
  color: #fff;
`;

const EndButton = styled(Button)`
  background-color: #28a745;
  color: #fff;
`;

export default SampleNoteMaintenance;