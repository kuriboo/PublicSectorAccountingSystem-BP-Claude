import React from 'react';
import styled from 'styled-components';

// 企業情報の型定義
type CompanyInfo = {
  name: string;
  code: string;
  startDate: string;
  endDate: string;
  paymentDate: string;
};

// プロパティの型定義
type Props = {
  companyInfo: CompanyInfo;
};

// コンポーネントのスタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span`
  margin-left: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
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

// コンポーネントの実装
const CompanyInfoComponent: React.FC<Props> = ({ companyInfo }) => {
  // 企業情報が未定義の場合のデフォルト値
  const defaultInfo: CompanyInfo = {
    name: '',
    code: '',
    startDate: '',
    endDate: '',
    paymentDate: '',
  };

  // 企業情報が未定義の場合はデフォルト値を使用
  const info = companyInfo || defaultInfo;

  return (
    <Container>
      <Title>未払金一覧表（未払）作成</Title>
      <InfoRow>
        <Label>範囲指定</Label>
        <Value>{info.startDate ? `${info.startDate}～${info.endDate}` : '未定義'}</Value>
      </InfoRow>
      <InfoRow>
        <Label>決定処理日</Label>
        <Value>{info.paymentDate || '未定義'}</Value>
      </InfoRow>
      <InfoRow>
        <Label>支払予定日</Label>
        <Value>{info.paymentDate ? `${info.paymentDate} 以降` : '未定義'}</Value>
      </InfoRow>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータを用いた使用例
const sampleData: CompanyInfo = {
  name: '株式会社サンプル',
  code: '9999999999',
  startDate: '2023年04月01日',
  endDate: '2023年09月30日',
  paymentDate: '2023年10月01日',
};

const UsageExample: React.FC = () => {
  return (
    <div>
      <h1>企業情報コンポーネントの使用例</h1>
      <CompanyInfoComponent companyInfo={sampleData} />
    </div>
  );
};

export default UsageExample;