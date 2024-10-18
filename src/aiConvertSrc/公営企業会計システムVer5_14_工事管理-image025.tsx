import React from 'react';
import styled from '@emotion/styled';

// 担当者設定プロパティの型定義
interface AssignmentSettingsProps {
  responsible: string; // 担当者
  memo: string; // 担当者メモ
  onResponsibleChange: (responsible: string) => void; // 担当者変更時のコールバック
  onMemoChange: (memo: string) => void; // メモ変更時のコールバック
  onOk: () => void; // OKボタンクリック時のコールバック
  onCancel: () => void; // キャンセルボタンクリック時のコールバック
}

// 担当者設定コンポーネント
const AssignmentSettings: React.FC<AssignmentSettingsProps> = ({
  responsible,
  memo,
  onResponsibleChange,
  onMemoChange,
  onOk,
  onCancel,
}) => {
  return (
    <Container>
      <TabHeader>
        <TabItem>明細編集</TabItem>
        <TabItem selected>行別院</TabItem>
      </TabHeader>
      <SettingsTable>
        <tbody>
          <tr>
            <th>担当権別名称</th>
            <td>工事担当者仕事</td>
          </tr>
          <tr>
            <th>担当者氏名</th>
            <td>さょう色いー郎</td>
          </tr>
        </tbody>
      </SettingsTable>
      <InputContainer>
        <InputLabel>
          担当者別
          <Input
            type="text"
            value={responsible}
            onChange={(e) => onResponsibleChange(e.target.value)}
          />
        </InputLabel>
        <InputLabel>
          担当者
          <Input
            type="text"
            value={memo}
            onChange={(e) => onMemoChange(e.target.value)}
          />
        </InputLabel>
      </InputContainer>
      <ButtonContainer>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onCancel}>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData = {
  responsible: '001',
  memo: '工事担当責任者',
};

// サンプル用のコンポーネント
const SampleAssignmentSettings = () => {
  const [responsible, setResponsible] = React.useState(sampleData.responsible);
  const [memo, setMemo] = React.useState(sampleData.memo);

  const handleOk = () => {
    console.log('OK clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <AssignmentSettings
      responsible={responsible}
      memo={memo}
      onResponsibleChange={setResponsible}
      onMemoChange={setMemo}
      onOk={handleOk}
      onCancel={handleCancel}
    />
  );
};

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
  border: 1px solid #ccc;
  padding: 16px;
  width: 400px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const TabHeader = styled.div`
  display: flex;
`;

const TabItem = styled.div<{ selected?: boolean }>`
  padding: 8px 16px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#ccc' : 'transparent')};
`;

const SettingsTable = styled.table`
  margin-top: 8px;
  width: 100%;

  th {
    background-color: #f0f0f0;
    text-align: left;
    padding: 4px;
  }

  td {
    padding: 4px;
  }
`;

const InputContainer = styled.div`
  margin-top: 16px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  margin-top: 4px;
`;

const ButtonContainer = styled.div`
  margin-top: 16px;
  text-align: right;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  & + & {
    margin-left: 8px;
  }
`;

export default SampleAssignmentSettings;