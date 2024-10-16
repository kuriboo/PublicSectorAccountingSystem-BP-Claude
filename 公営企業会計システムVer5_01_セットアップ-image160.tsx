import React from 'react';
import styled from 'styled-components';

// 文章マスタ保守のプロパティの型定義
type MasterMaintenanceProps = {
  paintId?: string;
  cm5600?: string;
  inputArea?: string;
  characterCount?: number;
  lineCount?: number;
  text?: string;
  onTextChange?: (text: string) => void;
  onOk?: () => void;
  onCancel?: () => void;
  onFinish?: () => void;
};

// 文章マスタ保守コンポーネント
const MasterMaintenance: React.FC<MasterMaintenanceProps> = ({
  paintId = '',
  cm5600 = '',
  inputArea = '',
  characterCount = 0,
  lineCount = 0, 
  text = '',
  onTextChange,
  onOk,
  onCancel,
  onFinish,
}) => {
  // テキストエリアの変更ハンドラ
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onTextChange) {
      onTextChange(e.target.value);
    }
  };

  return (
    <Container>
      <Header>
        <Label>画面ID</Label>
        <Input type="text" value={paintId} readOnly />
        <Label>CM5600</Label>
        <Input type="text" value={cm5600} readOnly />
        <Label>入札執行回</Label>
        <Input type="text" value={inputArea} readOnly />
      </Header>
      <Body>
        <Label>出力位置</Label>
        <CountLabel>{characterCount}</CountLabel>
        <Label>選択文章</Label>
        <CountLabel>{lineCount}</CountLabel>
      </Body>
      <Footer>
        <Label>文章</Label>
        <TextArea value={text} onChange={handleTextChange} />
      </Footer>
      <ButtonContainer>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <FinishButton onClick={onFinish}>終了</FinishButton>
      </ButtonContainer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-right: 8px;
`;

const Input = styled.input`
  margin-right: 16px;
`;

const CountLabel = styled.span`
  margin-right: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  margin-left: 8px;
`;

const FinishButton = styled(Button)`
  margin-left: auto;
`;

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const handleTextChange = (text: string) => {
    console.log('Text changed:', text);
  };

  const handleOk = () => {
    console.log('OK clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  const handleFinish = () => {
    console.log('Finish clicked');
  };

  return (
    <MasterMaintenance
      paintId="画面ID"
      cm5600="CM5600"
      inputArea="入札執行回"
      characterCount={10}
      lineCount={5}
      text="サンプルテキスト"
      onTextChange={handleTextChange}
      onOk={handleOk}
      onCancel={handleCancel}  
      onFinish={handleFinish}
    />
  );
};

export default MasterMaintenance;