import React from 'react';
import styled from 'styled-components';

// 特定収入額修正入力コンポーネントの型定義
type IncomeRecordProps = {
  tokuNum: string;
  name: string;
  incomeDate: string;
  baseAmount: number;
  specialAddAmount: number;
  specialDeductAmount: number;
  totalAmount: number;
  incomeTaxAmount: number;
  netAmount: number;
  note: string;
};

// スタイル定義
const IncomeRecordWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 4px;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const IncomeRecordTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const IncomeRecordLabel = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`;

const IncomeRecordContent = styled.div`
  margin-bottom: 8px;

  @media (min-width: 768px) {
    width: 48%;
  }
`;

// 特定収入額修正入力コンポーネント
const IncomeRecord: React.FC<IncomeRecordProps> = ({
  tokuNum,
  name,
  incomeDate,
  baseAmount,
  specialAddAmount,
  specialDeductAmount,
  totalAmount,
  incomeTaxAmount,
  netAmount,
  note
}) => {
  return (
    <IncomeRecordWrapper>
      <IncomeRecordTitle>特定収入額修正入力</IncomeRecordTitle>
      <IncomeRecordContent>
        <IncomeRecordLabel>特別番号</IncomeRecordLabel>
        <div>{tokuNum || '-'}</div>
      </IncomeRecordContent>
      <IncomeRecordContent>
        <IncomeRecordLabel>管理者</IncomeRecordLabel>
        <div>{name || '-'}</div>
      </IncomeRecordContent>
      <IncomeRecordContent>
        <IncomeRecordLabel>個別調定</IncomeRecordLabel>
        <div>{incomeDate || '-'}</div>
      </IncomeRecordContent>
      <IncomeRecordContent>
        <IncomeRecordLabel>税込金額</IncomeRecordLabel>
        <div>{baseAmount.toLocaleString() || '0'}</div>
      </IncomeRecordContent>
      <IncomeRecordContent>
        <IncomeRecordLabel>特別加算</IncomeRecordLabel>
        <div>{specialAddAmount.toLocaleString() || '0'}</div>
      </IncomeRecordContent>
      <IncomeRecordContent>
        <IncomeRecordLabel>特別控除</IncomeRecordLabel>
        <div>{specialDeductAmount.toLocaleString() || '0'}</div>
      </IncomeRecordContent>
      <IncomeRecordContent>
        <IncomeRecordLabel>合計</IncomeRecordLabel>
        <div>{totalAmount.toLocaleString() || '0'}</div>
      </IncomeRecordContent>
      <IncomeRecordContent>
        <IncomeRecordLabel>所得税率</IncomeRecordLabel>
        <div>
          {incomeTaxAmount > 0 ? `${incomeTaxAmount}%` : '0%'}
        </div>
      </IncomeRecordContent>
      <IncomeRecordContent>
        <IncomeRecordLabel>特定収入</IncomeRecordLabel>
        <div>{netAmount.toLocaleString() || '0'}</div>
      </IncomeRecordContent>
      <IncomeRecordContent>
        <IncomeRecordLabel>備考</IncomeRecordLabel>
        <div>{note || '-'}</div>
      </IncomeRecordContent>
    </IncomeRecordWrapper>
  );
};

export default IncomeRecord;

// 使用例
const SampleIncomeRecord = () => {
  const incomeRecordData: IncomeRecordProps = {
    tokuNum: '2019-2724',
    name: '経理担当 さょうせい 太郎',
    incomeDate: '令和02年01月24日',
    baseAmount: 6456240,
    specialAddAmount: 0,
    specialDeductAmount: 0,
    totalAmount: 6456240,
    incomeTaxAmount: 0,
    netAmount: 6456240,
    note: '',
  };

  return <IncomeRecord {...incomeRecordData} />;
};