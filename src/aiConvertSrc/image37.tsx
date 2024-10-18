import React from 'react';
import styled from 'styled-components';

// 振替条件設定のプロパティ型
type TransferConditionProps = {
  documentNumber?: string;
  issueDate?: string;
  subject?: string;
  paymentDate?: string;
  transferType?: 'immediate' | 'fixed';
  transferDate?: string;
  transferAmount?: number;
  note?: string;
};

// 振替明細のプロパティ型
type TransferDetailProps = {
  date: string;
  amount: number;
  subject: string;
  note: string;
};

// 振替条件設定コンポーネント
const TransferCondition: React.FC<TransferConditionProps> = ({
  documentNumber = '',
  issueDate = '',
  subject = '',
  paymentDate = '',
  transferType = 'immediate',
  transferDate = '',
  transferAmount = 0,
  note = '',
}) => {
  return (
    <TransferConditionWrapper>
      <TitleWrapper>
        <Title>振替条件設定</Title>
      </TitleWrapper>
      <ContentWrapper>
        <InputWrapper>
          <Label>文書番号</Label>
          <Input type="text" value={documentNumber} readOnly />
        </InputWrapper>
        <InputWrapper>
          <Label>振替番号</Label>
          <Input type="text" value={subject} readOnly />
        </InputWrapper>
        <InputWrapper>
          <Label>振替日</Label>
          <Input type="text" value={paymentDate} readOnly />
        </InputWrapper>
        <SelectWrapper>
          <input type="radio" id="immediate" value="immediate" checked={transferType === 'immediate'} readOnly />
          <label htmlFor="immediate">当座科目</label>
          <input type="radio" id="fixed" value="fixed" checked={transferType === 'fixed'} readOnly />
          <label htmlFor="fixed">仕訳科目</label>
        </SelectWrapper>
        {transferType === 'fixed' && (
          <>
            <Label>振替日</Label>
            <Input type="text" value={transferDate} readOnly />
          </>
        )}
        <InputWrapper>
          <Label>振替金額</Label>
          <Input type="number" value={transferAmount} readOnly />
        </InputWrapper>
        <InputWrapper>
          <Label>摘要</Label>
          <Input type="text" value={note} readOnly />
        </InputWrapper>
      </ContentWrapper>
      <ButtonWrapper>
        <Button>表示</Button>
      </ButtonWrapper>
    </TransferConditionWrapper>
  );
};

// 振替明細コンポーネント 
const TransferDetail: React.FC<{ details: TransferDetailProps[] }> = ({ details }) => {
  return (
    <TransferDetailWrapper>
      <Table>
        <thead>
          <tr>
            <Th>振替番号</Th>
            <Th>振替金額</Th>
            <Th>振替日</Th>
            <Th>摘要</Th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index}>
              <Td>{detail.date}</Td>
              <Td>{detail.amount.toLocaleString()}</Td>
              <Td>{detail.subject}</Td>
              <Td>{detail.note}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TransferDetailWrapper>
  );
};

// サンプルデータ
const sampleTransferCondition: TransferConditionProps = {
  documentNumber: '平成27年度',
  subject: '振替への振替',
  paymentDate: '平成28年03月01日〜平成28年03月27日',
  transferType: 'fixed',
  transferDate: '平成28日',
  transferAmount: 999999999999,
  note: '摘要',
};

const sampleTransferDetails: TransferDetailProps[] = [
  { date: '35 2016-03-20', amount: 800, subject: '税金への振替', note: '' },
  { date: '36 2016-03-20', amount: 10000, subject: 'リース税 その他の振替', note: '' },
  { date: '37 2016-03-20', amount: 800, subject: '税金 5% その他の振替', note: '' },
  { date: '38 2016-03-24', amount: 60, subject: '消費税仮譲', note: '' },
  { date: '39 2016-03-25', amount: 1000, subject: '振替入力', note: '' },
  { date: '40 2016-03-25', amount: 8000, subject: '電子書籍購入費 消費税分', note: '' },
  { date: '41 2016-03-25', amount: 800, subject: '電子書籍購入 消費税分', note: '' },
  { date: '42 2016-03-25', amount: 80, subject: '書籍 消費税分', note: '' },
  { date: '43 2016-03-27', amount: 80000, subject: '電子書籍 消費税分', note: '' },
];

// サンプル表示用コンポーネント
const App: React.FC = () => {
  return (
    <>
      <TransferCondition {...sampleTransferCondition} />
      <TransferDetail details={sampleTransferDetails} />
    </>
  );
};

// スタイリング
const TransferConditionWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const ButtonWrapper = styled.div`
  text-align: right;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const TransferDetailWrapper = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 8px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  text-align: left;
`;

const Td = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

export default App;