import React from 'react';
import styled from '@emotion/styled';

type CompanyAcquisitionEntryProps = {
  year: number;
  month: number;
  date: number;
  individualNum: string;
  companyName: string;
  waterReceiptDate: string;
  acquisitionPrice: number;
  miscExpense: number;
  acquisitionCost: number;
  currentBookValue: number;
  gainOnSale: number;
};

const CompanyAcquisitionEntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span`
  text-align: right;
  @media (max-width: 600px) {
    text-align: left;
  }
`;

const CompanyAcquisitionEntry: React.FC<CompanyAcquisitionEntryProps> = ({
  year,
  month,
  date,
  individualNum,
  companyName,
  waterReceiptDate,
  acquisitionPrice,
  miscExpense,
  acquisitionCost,
  currentBookValue,
  gainOnSale,
}) => {
  return (
    <CompanyAcquisitionEntryContainer>
      <RowContainer>
        <Label>年:</Label>
        <Value>{year}</Value>
      </RowContainer>
      <RowContainer>
        <Label>月:</Label>
        <Value>{month}</Value>
      </RowContainer>
      <RowContainer>
        <Label>日:</Label>
        <Value>{date}</Value>
      </RowContainer>
      <RowContainer>
        <Label>個別番号:</Label>
        <Value>{individualNum}</Value>
      </RowContainer>
      <RowContainer>
        <Label>会社名:</Label>
        <Value>{companyName}</Value>
      </RowContainer>
      <RowContainer>
        <Label>水道料金領収日:</Label>
        <Value>{waterReceiptDate}</Value>
      </RowContainer>
      <RowContainer>
        <Label>取得価額:</Label>
        <Value>{acquisitionPrice.toLocaleString()}</Value>
      </RowContainer>
      <RowContainer>
        <Label>雑費:</Label>
        <Value>{miscExpense.toLocaleString()}</Value>
      </RowContainer>
      <RowContainer>
        <Label>取得原価:</Label>
        <Value>{acquisitionCost.toLocaleString()}</Value>
      </RowContainer>
      <RowContainer>
        <Label>現在帳簿価額:</Label>
        <Value>{currentBookValue.toLocaleString()}</Value>
      </RowContainer>
      <RowContainer>
        <Label>譲渡益:</Label>
        <Value>{gainOnSale.toLocaleString()}</Value>
      </RowContainer>
    </CompanyAcquisitionEntryContainer>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  return (
    <CompanyAcquisitionEntry
      year={2029}
      month={6}
      date={5}
      individualNum="65"
      companyName="水道料金の調定"
      waterReceiptDate="3月分 1回目"
      acquisitionPrice={52011020}
      miscExpense={0}
      acquisitionCost={0}
      currentBookValue={3}
      gainOnSale={222}
    />
  );
};

export default SampleUsage;