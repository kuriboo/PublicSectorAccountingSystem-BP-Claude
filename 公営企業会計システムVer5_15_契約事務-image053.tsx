import React from 'react';
import styled from '@emotion/styled';

type ContractDetailProps = {
  contractNumber: string;
  contractDate: string;
  contractType: string;
  contractName: string;
  contractAmount: number;
  contractPeriodFrom: string;
  contractPeriodTo: string;
  paymentMethod: string;
  paymentDate: string;
  taxRate: number;
  taxAmount: number;
};

const ContractDetail: React.FC<ContractDetailProps> = ({
  contractNumber,
  contractDate,
  contractType,
  contractName,
  contractAmount,
  contractPeriodFrom,
  contractPeriodTo,
  paymentMethod,
  paymentDate,
  taxRate,
  taxAmount,
}) => {
  // 必須項目のバリデーションチェック
  if (!contractNumber || !contractName || !contractAmount) {
    return <div>契約情報が不足しています。</div>;
  }

  return (
    <Container>
      <Title>本契約締結入力</Title>
      <Row>
        <RowTitle>契約番号</RowTitle>
        <RowValue>{contractNumber}</RowValue>
      </Row>
      <Row>
        <RowTitle>業種</RowTitle>
        <RowValue>水道施設工事</RowValue>
      </Row>
      <Row>
        <RowTitle>委託区分</RowTitle>
        <RowValue>工事</RowValue>
      </Row>
      <Row>
        <RowTitle>契約の名称</RowTitle>
        <RowValue>{contractName}</RowValue>
      </Row>
      <Row>
        <RowTitle>工事名</RowTitle>
        <RowValue>{contractName}</RowValue>
      </Row>
      <Row>
        <RowTitle>工事場所</RowTitle>
        <RowValue>市内さいわい町１丁目からＳ丁目</RowValue>
      </Row>
      <SectionTitle>議会承認</SectionTitle>
      <Row>
        <RowTitle>議会承認日</RowTitle>
        <RowValue>{paymentDate}</RowValue>
      </Row>
      <Row>
        <RowTitle>契約日</RowTitle>
        <RowValue>{contractDate}</RowValue>
      </Row>
      <Row>
        <RowTitle>議会承認日</RowTitle>
        <RowValue>{paymentDate}</RowValue>
      </Row>
      <Row>
        <RowTitle>契約金額(税込)</RowTitle>
        <RowValue>{contractAmount.toLocaleString()}円</RowValue>
      </Row>
      <Row>
        <RowTitle>契約金額(税抜)</RowTitle>
        <RowValue>{(contractAmount / (1 + taxRate / 100)).toLocaleString()}円</RowValue>
      </Row>
      <ButtonRow>
        <Button>管理</Button>
        <Button>保証人</Button>
        <SubmitButton>OK</SubmitButton>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonRow>
    </Container>
  );
};

// サンプルデータを使用した表示用コンポーネント
const ContractDetailSample: React.FC = () => {
  const sampleData: ContractDetailProps = {
    contractNumber: '42910009',
    contractDate: '平成29年09月12日',
    contractType: '委託',
    contractName: 'ごうどう総合建築株式会社',
    contractAmount: 3000000,
    contractPeriodFrom: '年 月 日',
    contractPeriodTo: '年 月 日',
    paymentMethod: '可決',
    paymentDate: '平成29年09月06日',
    taxRate: 8,
    taxAmount: 2777778,
  };

  return <ContractDetail {...sampleData} />;
};

// スタイリング
const Container = styled.div`
  font-family: 'Meiryo', sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 20px;
  color: rgb(10, 50, 140);
  border-bottom: 1px solid rgb(10, 50, 140);
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  color:  rgb(10, 50, 140);
  margin-top: 30px;
  margin-bottom: 10px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RowTitle = styled.div`
  width: 150px;
  font-weight: bold;
`;

const RowValue = styled.div`
  flex: 1;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;

  button {
    margin-left: 10px;
  }
`;

const Button = styled.button`
  padding: 5px 15px;
  font-size: 14px;
`;

const SubmitButton = styled(Button)`
  background-color: rgb(0, 176, 240);
  color: white;
  font-weight: bold;
`;

export default ContractDetailSample;