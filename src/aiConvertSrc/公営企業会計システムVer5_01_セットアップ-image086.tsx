import React from 'react';
import styled from 'styled-components';

// 銘柄情報の型定義
type StockInfo = {
  id: number;
  name: string;
  industry: string;
  fundType: string;
  politics: string;
  isSmallMidCap: boolean;
  isChina: boolean;
  event: string;
};

// プロパティの型定義
type Props = {
  stockInfo?: StockInfo;
  onOk?: () => void;
  onCancel?: () => void;
};

// コンポーネントのスタイル定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 400px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.div`
  width: 120px;
`;

const Value = styled.div`
  flex: 1;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 4px 16px;
  border-radius: 4px;
  background-color: #1976d2;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

// メインコンポーネント
const StockInfoView: React.FC<Props> = ({ stockInfo, onOk, onCancel }) => {
  // デフォルト値の設定
  const info = stockInfo || {
    id: 0,
    name: '',
    industry: '',
    fundType: '',
    politics: '',
    isSmallMidCap: false,
    isChina: false,
    event: '',
  };

  return (
    <Container>
      <Header>銘柄情報</Header>
      <Row>
        <Label>項目名称1</Label>
        <Value>{info.id}</Value>
      </Row>
      <Row>
        <Label>CF区分</Label>
        <Value>{info.industry}</Value>
      </Row>
      <Row>
        <Label>金融HP寧区分</Label>
        <Value>{info.fundType}</Value>
      </Row>
      <Row>
        <Label>政行区分</Label>
        <Value>{info.politics}</Value>
      </Row>
      <Row>
        <Label>インデント</Label>
        <Value>
          <input type="checkbox" checked={info.isSmallMidCap} readOnly />
          中小型も力成し
        </Value>
      </Row>
      <Footer>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onCancel}>キャンセル</Button>
      </Footer>
    </Container>
  );
};

// 使用例
const SampleData: StockInfo = {
  id: 250,
  name: '小計',
  industry: '金融HP公益区HP',
  fundType: '1行政行',
  politics: '11政府',
  isSmallMidCap: true,
  isChina: false,
  event: '',
};

const UsageExample: React.FC = () => {
  return (
    <div>
      <h2>銘柄詳細画面サンプル</h2>
      <StockInfoView
        stockInfo={SampleData}
        onOk={() => alert('OKがクリックされました')}
        onCancel={() => alert('キャンセルがクリックされました')}
      />
    </div>
  );
};

export default UsageExample;