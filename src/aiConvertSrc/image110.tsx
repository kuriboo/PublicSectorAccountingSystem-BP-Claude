import React from 'react';
import styled from 'styled-components';

// 区分一括変換のコンポーネントの型定義
type SegmentConversionProps = {
  startSegment?: string; // 開始区分番号
  endSegment?: string; // 終了区分番号
  startProductNumber?: string; // 開始資産番号
  endProductNumber?: string; // 終了資産番号
  startDepartment?: string; // 開始部門
  endDepartment?: string; // 終了部門
  onConvert: () => void; // 変換ボタン押下時の処理
  onCancel: () => void; // クリアボタン押下時の処理
  onExecute: () => void; // 終了ボタン押下時の処理
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
`;

const Select = styled.select`
  padding: 5px;
  margin-left: 10px;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
`;

// 区分一括変換コンポーネント
const SegmentConversion: React.FC<SegmentConversionProps> = ({
  startSegment = '',
  endSegment = '', 
  startProductNumber = '',
  endProductNumber = '',
  startDepartment = '',
  endDepartment = '',
  onConvert,
  onCancel,
  onExecute,
}) => {
  return (
    <Container>
      <InputGroup>
        <Label>開始区分番号</Label>
        <Input type="text" value={startSegment} />
        <Label>〜</Label>
        <Input type="text" value={endSegment} />
      </InputGroup>
      <InputGroup>  
        <Label>資産番号</Label>
        <Input type="text" value={startProductNumber} />
        <Label>〜</Label>  
        <Input type="text" value={endProductNumber} />
      </InputGroup>
      <InputGroup>
        <Label>部門</Label>
        <Input type="text" value={startDepartment} />
        <Label>〜</Label>
        <Input type="text" value={endDepartment} />  
      </InputGroup>
      <InputGroup>
        <Label>会計区分</Label>
        <Select>
          <option>予測用</option>
        </Select>  
        <Label>→</Label>
        <Select>
          <option>予測用</option>  
        </Select>
      </InputGroup>
      <ButtonGroup>
        <Button onClick={onConvert}>変換</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onExecute}>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータ
const sampleData = {
  startSegment: '0000000',
  endSegment: '9999999999',
  startProductNumber: '0',
  endProductNumber: '9999999999',
  startDepartment: '部門1', 
  endDepartment: '部門2',
};

// 使用例
const App: React.FC = () => {
  return (
    <SegmentConversion
      {...sampleData} 
      onConvert={() => console.log('Convert')}
      onCancel={() => console.log('Cancel')} 
      onExecute={() => console.log('Execute')}
    />
  );
};

export default App;