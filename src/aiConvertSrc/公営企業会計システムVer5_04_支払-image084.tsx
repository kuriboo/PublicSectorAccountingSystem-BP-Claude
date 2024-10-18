import React from 'react';
import styled from 'styled-components';

// 公共料金支払データの型定義
type PublicChargePaymentData = {
  company: string;
  paymentDate: string;
  message: string;
};

// 公共料金支払コンポーネントのプロパティ型定義
type PublicChargePaymentProps = {
  data: PublicChargePaymentData;
};

// 公共料金支払コンポーネント
const PublicChargePayment: React.FC<PublicChargePaymentProps> = ({ data }) => {
  // プロパティのデフォルト値を設定
  const defaultData: PublicChargePaymentData = {
    company: '',
    paymentDate: '',
    message: '',
  };

  // プロパティが未定義の場合はデフォルト値を使用
  const { company, paymentDate, message } = data || defaultData;

  return (
    <Container>
      <Title>公共料金支払データ登録</Title>
      <DataSection>
        <DataItem>
          <Label>会計区分</Label>
          <Value>{company}</Value>
        </DataItem>
        <DataItem>
          <Label>処理日</Label>
          <Value>{paymentDate}</Value>
        </DataItem>
      </DataSection>
      <Message>{message}</Message>
      <ButtonGroup>
        <Button>取込</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータを使用した公共料金支払コンポーネントの表示例
const SamplePublicChargePayment: React.FC = () => {
  const sampleData: PublicChargePaymentData = {
    company: '01 水道事業会計',
    paymentDate: '令和04年07月21日',
    message: '公共料金事前通知サービスで作成したファイルを取り込み、支払データを一括登録します。\n取込ボタンを押し、ファイルを選択してください。',
  };

  return <PublicChargePayment data={sampleData} />;
};

// スタイリング
const Container = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const DataSection = styled.div`
  margin-bottom: 20px;
`;

const DataItem = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Label = styled.div`
  width: 100px;
  font-weight: bold;
`;

const Value = styled.div`
  flex: 1;
`;

const Message = styled.div`
  white-space: pre-line;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export default SamplePublicChargePayment;