import React from 'react';
import styled from '@emotion/styled';

// 支払科目設定コンポーネントの型定義
interface PaymentItemSettingProps {
  payee: string;
  bankCode: string;
  branchCode: string;
  onClose: () => void;
}

// 支払科目設定コンポーネント
const PaymentItemSetting: React.FC<PaymentItemSettingProps> = ({ payee, bankCode, branchCode, onClose }) => {
  return (
    <Container>
      <Title>支払科目設定</Title>
      <Content>
        <Row>
          <Label>節</Label>
          <Value>{payee}</Value>
        </Row>
        <Row>
          <Label>細節</Label>
          <Value>{bankCode}&nbsp;○○銀行支所・店</Value>
        </Row>
        <Row>
          <Label>明細</Label>
          <Value>{branchCode}&nbsp;○○銀行支所・店</Value>
        </Row>
      </Content>
      <ButtonContainer>
        <Button onClick={onClose}>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Content = styled.div`
  margin-bottom: 16px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Label = styled.div`
  width: 60px;
  font-weight: bold;
`;

const Value = styled.div`
  flex: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// サンプルデータ
const sampleData = {
  payee: '052019001',
  bankCode: '0008',
  branchCode: '0001',
};

// 使用例コンポーネント
const App: React.FC = () => {
  const handleClose = () => {
    // 閉じる処理
    console.log('Closed');
  };

  return (
    <div>
      <h1>支払科目設定の使用例</h1>
      <PaymentItemSetting
        payee={sampleData.payee || ''}
        bankCode={sampleData.bankCode || ''}
        branchCode={sampleData.branchCode || ''}
        onClose={handleClose}
      />
    </div>
  );
};

export default App;