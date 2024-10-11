import React from 'react';
import styled from 'styled-components';

// 契約変更プロパティの型定義
type ContractChangeProps = {
  contractNumber: string;
  isAllSelect?: boolean;
  startYear: string;
  startMonth: string;
  startDay: string;
  endYear: string;
  endMonth: string;
  endDay: string;
  addOptions: string[];
  removeOptions: string[];
  floors: string[];
}

// 契約変更コンポーネント
const ContractChange: React.FC<ContractChangeProps> = ({
  contractNumber,
  isAllSelect = false,
  startYear,
  startMonth, 
  startDay,
  endYear,
  endMonth,
  endDay,
  addOptions,
  removeOptions,
  floors
}) => {
  // 値が入っていない場合のデフォルト値
  const defaultStartYear = startYear || '';
  const defaultStartMonth = startMonth || '';
  const defaultStartDay = startDay || ''; 
  const defaultEndYear = endYear || '';
  const defaultEndMonth = endMonth || '';
  const defaultEndDay = endDay || '';

  return (
    <Container>
      <h2>契約変更情報</h2>
      <Row>
        <Label>契約番号</Label>
        <span>{contractNumber}</span>
      </Row>
      <Row>
        <Label>物件</Label>
        <span>429100068:上鶴の受付登録JV</span>
      </Row>
      <Row>
        <input type="checkbox" checked={isAllSelect} readOnly/>
        <Label>全選択</Label>
      </Row>
      <h3>記載年月日</h3>
      <Row>
        <Label>決議年月日</Label>
        <span>{defaultStartYear}年{defaultStartMonth}月{defaultStartDay}日</span>
      </Row>
      <Row>
        <Label>決議年月日</Label>
        <span>{defaultEndYear}年{defaultEndMonth}月{defaultEndDay}日</span>
      </Row>

      <h3>添付書類</h3>
      {addOptions.map((option, index) => (
        <Row key={index}>
          <input type="checkbox" checked readOnly/>
          <Label>{option}</Label>
        </Row>
      ))}
     
      <h3>特記事項</h3>
      {removeOptions.map((option, index) => (
        <Row key={index}>
          <input type="checkbox" checked readOnly/>
          <Label>{option}</Label>
        </Row>
      ))}

      <h3>備考</h3>
      {floors.map((floor, index) => (
        <Row key={index}>
          <input type="checkbox" checked readOnly/>
          <Label>{floor}</Label>
        </Row>
      ))}
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;

  h2, h3 {
    margin-bottom: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.label`
  margin-left: 8px;
`;

// サンプルデータ
const sampleData: ContractChangeProps = {
  contractNumber: 'R229',
  isAllSelect: true,
  startYear: '平成29',
  startMonth: '09',
  startDay: '05',
  endYear: '平成29',
  endMonth: '09',  
  endDay: '05',
  addOptions: [
    '文章マスタ位置No2起票者1',
    '文章マスタ位置No2起票者2',
    '文章マスタ位置No2起票者3',
  ],
  removeOptions: [
    '文章マスタ位置No4契約保証金',
    '文章マスタ位置No4特記事項3',
    '文章マスタ位置No4特記事項4',
    '文章マスタ位置No4特記事項5',
  ],
  floors: [
    '文章マスタ位置No5別紙参照',
    '文章マスタ位置No5備考2',
    '文章マスタ位置No5備考3',
    '文章マスタ位置No5備考4',
  ],
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <ContractChange {...sampleData} />
    </div>
  );
};

export default App;