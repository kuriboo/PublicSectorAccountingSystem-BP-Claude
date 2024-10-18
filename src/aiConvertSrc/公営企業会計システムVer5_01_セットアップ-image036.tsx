import React from 'react';
import styled from 'styled-components';

// 仕訳科目マスタリスト作成のプロパティ型定義
type MasterListProps = {
  year: number;
  fromDate: Date;
  toDate: Date;
};

// 仕訳科目マスタリストコンポーネント
const MasterList: React.FC<MasterListProps> = ({ year, fromDate, toDate }) => {
  return (
    <Container>
      <Title>仕訳科目マスタリスト作成</Title>
      <DateRange>
        {fromDate.toLocaleDateString()} ～ {toDate.toLocaleDateString()}
      </DateRange>
      <YearInput type="number" defaultValue={year} />
      <DateInputs>
        <div>
          <span>仕訳科目</span>
          <input type="text" defaultValue="00000000000000" />
          <span>～</span>
          <input type="text" defaultValue="99999999999999" />
        </div>
      </DateInputs>
      <Buttons>
        <button>OK</button>
        <button>クリア</button>
        <button>終了</button>
      </Buttons>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const DateRange = styled.div`
  font-size: 14px;
  color: #666;
`;

const YearInput = styled.input`
  margin-top: 20px;
  padding: 5px;
  font-size: 16px;
  width: 80px;
`;

const DateInputs = styled.div`
  margin-top: 20px;

  > div {
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    > span {
      margin: 0 5px;
    } 

    > input {
      padding: 5px;
      font-size: 16px;
      width: 150px;
    }
  }
`;

const Buttons = styled.div`
  margin-top: 20px;

  > button {
    margin-right: 10px;
    padding: 5px 15px;
    font-size: 14px;
  }
`;

// 使用例
const UsageExample = () => {
  const today = new Date();
  const fromDate = new Date(today.getFullYear(), today.getMonth(), 1);
  const toDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  
  return (
    <MasterList year={today.getFullYear()} fromDate={fromDate} toDate={toDate} />
  );
};

export default UsageExample;