import React from 'react';
import styled from 'styled-components';

interface BankInfo {
  bank: string;
  branch: string;
  accountNumber: string;
}

interface BankInfoListProps {
  bankInfoList: BankInfo[];
}

const BankInfoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BankInfoItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const BankInfoLabel = styled.div`
  font-weight: bold;
  min-width: 60px;
`;

const BankInfoValue = styled.div`
  flex: 1;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const BankInfoList: React.FC<BankInfoListProps> = ({ bankInfoList }) => {
  return (
    <BankInfoListContainer>
      {bankInfoList.map((bankInfo, index) => (
        <BankInfoItem key={index}>
          <BankInfoLabel>銀行</BankInfoLabel>
          <BankInfoValue>{bankInfo.bank || '-'}</BankInfoValue>
          <BankInfoLabel>支店</BankInfoLabel>
          <BankInfoValue>{bankInfo.branch || '-'}</BankInfoValue>
          <BankInfoLabel>相手先</BankInfoLabel>
          <BankInfoValue>{bankInfo.accountNumber || '-'}</BankInfoValue>
        </BankInfoItem>
      ))}
      <div>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </div>
    </BankInfoListContainer>
  );
};

// Usage example
const SampleBankInfoList: React.FC = () => {
  const sampleData: BankInfo[] = [
    { bank: '銀行', branch: '000', accountNumber: '9999' },
    { bank: '支店', branch: '000', accountNumber: '999' },
    { bank: '相手先', branch: '1111111111', accountNumber: '99999999999' },
  ];

  return (
    <div>
      <h2>金融機関別相手先マスタリスト</h2>
      <BankInfoList bankInfoList={sampleData} />
    </div>
  );
};

export default SampleBankInfoList;