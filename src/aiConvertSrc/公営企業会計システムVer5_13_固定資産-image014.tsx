import React from 'react';
import styled from 'styled-components';

// 土地明細入力のプロパティ型定義
interface LandDetailInputProps {
  data?: {
    number?: number;
    address?: string;
    owner?: string;
    area?: number;
    acquisitionDate?: string;
    transferTaxDueDate?: string;
    transferTaxType?: string;
  };
  onSave?: (data: LandDetailInputProps['data']) => void;
  onCancel?: () => void;
}

// 土地明細入力コンポーネント
const LandDetailInput: React.FC<LandDetailInputProps> = ({ data = {}, onSave, onCancel }) => {
  // 土地明細データのステート
  const [landDetail, setLandDetail] = React.useState(data);

  // 保存ボタンクリック時の処理
  const handleSave = () => {
    onSave?.(landDetail);
  };

  // キャンセルボタンクリック時の処理  
  const handleCancel = () => {
    onCancel?.();
  };

  return (
    <Container>
      <Title>土地明細編集</Title>

      <InputRow>
        <Label>整理番号</Label>
        <NumberInput type="number" value={landDetail.number} onChange={e => setLandDetail(prev => ({ ...prev, number: Number(e.target.value) }))} />
      </InputRow>

      <InputRow>
        <Label>所在地</Label>
        <Input value={landDetail.address} onChange={e => setLandDetail(prev => ({ ...prev, address: e.target.value }))} />
      </InputRow>

      <InputRow>
        <Label>取得地名称</Label>
        <Input value={landDetail.owner} onChange={e => setLandDetail(prev => ({ ...prev, owner: e.target.value }))} />
      </InputRow>

      <InputRow>
        <Label>地番</Label>
        <Input value={landDetail.area} onChange={e => setLandDetail(prev => ({ ...prev, area: Number(e.target.value) }))} />
        <Label>㎡</Label>
      </InputRow>

      <InputRow>
        <Label>取得年月日</Label>
        <DateInput type="date" value={landDetail.acquisitionDate} onChange={e => setLandDetail(prev => ({ ...prev, acquisitionDate: e.target.value }))} />
      </InputRow>

      <InputRow>
        <Label>登記年月日</Label>
        <DateInput type="date" value={landDetail.transferTaxDueDate} onChange={e => setLandDetail(prev => ({ ...prev, transferTaxDueDate: e.target.value }))} />
      </InputRow>

      <InputRow>
        <Label>元所有者氏名</Label>
        <Input value={landDetail.transferTaxType} onChange={e => setLandDetail(prev => ({ ...prev, transferTaxType: e.target.value }))} />
      </InputRow>

      <ButtonContainer>
        <Button onClick={handleSave}>OK</Button>
        <Button onClick={handleCancel}>クリア</Button>
        <Button onClick={handleCancel}>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData: LandDetailInputProps['data'] = {
  number: 1200,
  address: '東京都港区赤坂1丁目',
  owner: '赤坂',
  area: 70.00,
  acquisitionDate: '2023-03-11',
  transferTaxDueDate: '2023-03-11',
  transferTaxType: 'きょう税',
};

// 使用例
const Example: React.FC = () => {
  const handleSave = (data: LandDetailInputProps['data']) => {
    console.log('Saved:', data);
  };

  return (
    <div>
      <h2>土地明細入力 使用例</h2>
      <LandDetailInput data={sampleData} onSave={handleSave} />
    </div>
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 400px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  margin: 0 0 16px;
`;

const InputRow = styled.div`
  display: flex; 
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  width: 110px;
`;

const Input = styled.input`
  flex: 1;
  padding: 4px;
`;

const NumberInput = styled(Input)`
  width: 80px;
`;

const DateInput = styled(Input)`
  width: 140px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  margin-left: 8px;
`;

export default LandDetailInput;