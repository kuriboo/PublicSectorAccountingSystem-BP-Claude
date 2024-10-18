import React from 'react';
import styled from 'styled-components';

// 指名業者選定調書コンポーネントのプロパティ型定義
interface GinkoShoshoProps {
  fyHinban?: string; // 平成29年
  year?: number; // 年度
  receiptNo?: string; // 受付区分
  remark?: string; // 備考
  defaultValue?: string; // 物件番号のデフォルト値
}

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  margin-right: 10px;
  width: 100px;
  
  @media (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  padding: 5px 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 300px;
  
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Select = styled.select`
  padding: 5px 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100px;
`;

const TextArea = styled.textarea`
  padding: 5px 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
  height: 100px;
  resize: none;
`;

// 指名業者選定調書コンポーネント
const GinkoShosho: React.FC<GinkoShoshoProps> = ({
  fyHinban = '平成29',
  year = 29,
  receiptNo = '',
  remark = '',
  defaultValue = '4292001232017-020-42920012-SM1',
}) => {
  return (
    <Container>
      <Title>指名業者選定調書</Title>
      <Row>
        <Label>平成</Label>
        <Select defaultValue={fyHinban}>
          <option value="平成28">28</option>
          <option value="平成29">29</option>
          <option value="平成30">30</option>
        </Select>
        <Label>年度</Label>
        <Select defaultValue={year}>
          <option value={28}>28</option>
          <option value={29}>29</option>
          <option value={30}>30</option>
        </Select>
      </Row>
      <Row>
        <Label>受付区分</Label>
        <Select defaultValue={receiptNo}>
          <option value="">-</option>
          <option value="契約">契約</option>
          <option value="変更">変更</option>
        </Select>
      </Row>
      <Row>
        <Label>物件</Label>
        <Input type="text" defaultValue={defaultValue} />
      </Row>
      <Row>
        <Label>全選択</Label>
        <Input type="checkbox" />
      </Row>
      <Row>
        <Label>備考</Label>
        <TextArea defaultValue={remark} />
      </Row>
    </Container>
  );
};

export default GinkoShosho;

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>指名業者選定調書 サンプル</h1>
      <GinkoShosho />
    </div>
  );
};