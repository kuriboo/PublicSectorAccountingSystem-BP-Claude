import React from 'react';
import styled from '@emotion/styled';

// 契約事務の流れを表すコンポーネントの型定義
interface ContractFlowProps {
  /** 契約事務の流れのデータ */
  data: {
    csvConvert: string;
    accountReport: string;
    pdfConvert: string;
  };
}

// 契約事務の流れを表すコンポーネント
const ContractFlow: React.FC<ContractFlowProps> = ({ data }) => {
  // プロパティが未定義の場合は空文字列を設定
  const { csvConvert = '', accountReport = '', pdfConvert = '' } = data;

  return (
    <Wrapper>
      <FlowItem>
        <Label>CSV連携<br/>データ取得<br/>マスタ作成</Label>
        <Item>{csvConvert}</Item>
      </FlowItem>
      <Arrow />
      <FlowItem>
        <Label>業者情報取込<br/>車輌処理</Label>
        <Item>{accountReport}</Item>
      </FlowItem>
      <Arrow />
      <FlowItem>
        <Label>業者情報取込<br/>契約処理</Label>
        <Item>{accountReport}</Item>
      </FlowItem>
      <Arrow />
      <FlowItem>
        <Label>CSV連携<br/>データ納品</Label>
        <Item>{csvConvert}</Item>
      </FlowItem>
    </Wrapper>
  );
};

// 全体のラッパー
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

// 流れの各項目
const FlowItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

// 項目のラベル
const Label = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  line-height: 1.2;
`;

// 項目の内容
const Item = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  min-width: 100px;
  text-align: center;
`;

// 矢印
const Arrow = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 0 10px 20px;
  border-color: transparent transparent transparent #999;

  @media (max-width: 600px) {
    transform: rotate(90deg);
  }
`;

// 契約事務の流れのサンプルデータ
const sampleData = {
  csvConvert: 'CSV連携',
  accountReport: '業者情報取込',
  pdfConvert: 'PDF変換',
};

// サンプルデータを使用した表示用コンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h1>契約事務の流れ</h1>
      <ContractFlow data={sampleData} />
    </div>
  );
};

export default App;