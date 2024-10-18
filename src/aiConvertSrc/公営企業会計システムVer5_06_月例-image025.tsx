import React from 'react';
import styled from 'styled-components';

// 銀行預金別資金残高表作成コンポーネントの型定義
interface BankDepositBalanceProps {
  date: string; // 作成日
  division: '日次' | '月次'; // 作表区分
}

// 銀行預金別資金残高表作成コンポーネント
const BankDepositBalance: React.FC<BankDepositBalanceProps> = ({ date, division }) => {
  return (
    <Container>
      <Title>銀行預金別資金残高表作成</Title>
      <Content>
        <Label>範囲指定</Label>
        <DateInput type="text" defaultValue={date} />
        <Label>作表区分</Label>
        <DivisionRadio>
          <DivisionInput
            type="radio"
            name="division"
            value="日次"
            defaultChecked={division === '日次'}
          />
          <DivisionLabel>日次</DivisionLabel>
          <DivisionInput
            type="radio"
            name="division"
            value="月次"
            defaultChecked={division === '月次'}
          />
          <DivisionLabel>月次</DivisionLabel>
        </DivisionRadio>
      </Content>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 400px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Content = styled.div`
  background-color: white;
  padding: 16px;
  margin-bottom: 16px;
`;

const Label = styled.div`
  margin-bottom: 8px;
`;

const DateInput = styled.input`
  margin-bottom: 16px;
  padding: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const DivisionRadio = styled.div`
  display: flex;
  align-items: center;
`;

const DivisionInput = styled.input`
  margin-right: 4px;
`;

const DivisionLabel = styled.label`
  margin-right: 16px;
`;

const ButtonGroup = styled.div`
  text-align: right;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 4px 16px;
`;

// サンプルデータを用いた使用例
const App: React.FC = () => {
  return (
    <BankDepositBalance
      date="令和03年12月07日"
      division="日次"
    />
  );
};

export default App;