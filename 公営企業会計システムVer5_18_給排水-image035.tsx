import React from 'react';
import styled from '@emotion/styled';

type NayoseProps = {
  denpyoNumber: string;
  registrationDate: string;
  applyType: '登録' | '訂正' | '削除' | '取消';
  syukeiType: '年度' | '通期' | '月次';
  applicantName: string;
  workPlace: string;
  depCode: string;
  createDate: string;
  slipDate: string;
  accountingDate: string;
  kubun: string;
  taxCode: string;
  remarks: string;
  specifics: {
    nendo: string;
    accountCode: string;
    content: string;
    debitTax: number;
    creditTax: number;
    tax: number;
    debitAmount: number;
    creditAmount: number;
  }[];
};

const Wrapper = styled.div`
  font-family: sans-serif;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  padding: 16px;
  border: 1px solid #ccc;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: inline-block;
  width: 100px;
  @media (max-width: 600px) {
    width: auto;
    margin-bottom: 4px;
  }  
`;

const Value = styled.span`
  display: inline-block;
  @media (max-width: 600px) {
    display: block;
  }
`;

const Specifics = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;
  th, td {
    border: 1px solid #ccc;
    padding: 4px;
    text-align: center;
  }
`;

const Nayose: React.FC<NayoseProps> = ({
  denpyoNumber,
  registrationDate,
  applyType,
  syukeiType, 
  applicantName,
  workPlace,
  depCode,
  createDate,
  slipDate,
  accountingDate,
  kubun,
  taxCode,
  remarks,
  specifics
}) => {
  return (
    <Wrapper>
      <div>
        <Label>伝票番号:</Label>
        <Value>{denpyoNumber || '-'}</Value>
      </div>
      <div>
        <Label>登録日:</Label> 
        <Value>{registrationDate || '-'}</Value>
      </div>
      <div>
        <Label>申請者情報:</Label>
        <Value>{applicantName || '-'}</Value>
      </div>
      <div>
        <Label>勤務先:</Label>
        <Value>{workPlace || '-'}</Value>
      </div>
      <div>
        <Label>所属:</Label>
        <Value>{depCode || '-'}</Value>
      </div>
      <div>
        <Label>起算番号:</Label>
        <Value>{taxCode || '-'}</Value>
      </div>
      <div>
        <Label>作成日:</Label>
        <Value>{createDate || '-'}</Value>
      </div>
      <div>
        <Label>伝票日付:</Label>
        <Value>{slipDate || '-'}</Value>
      </div>
      <div>
        <Label>会計日付:</Label>
        <Value>{accountingDate || '-'}</Value>  
      </div>
      <div>
        <Label>取消日:</Label>
        <Value>{kubun || '-'}</Value>
      </div>
      <div>
        <Label>摘要:</Label>  
        <Value>{remarks || '-'}</Value>
      </div>
      
      {specifics.length > 0 && (
        <Specifics>
          <thead>
            <tr>
              <th>年度</th>
              <th>勘定科目</th>
              <th>摘要</th>
              <th>借方税額</th>
              <th>借方金額</th>  
              <th>貸方税額</th>
              <th>貸方金額</th>
            </tr>
          </thead>
          <tbody>
            {specifics.map((item, index) => (
              <tr key={index}>
                <td>{item.nendo}</td>
                <td>{item.accountCode}</td>
                <td>{item.content}</td>
                <td>{item.debitTax.toLocaleString()}</td>  
                <td>{item.debitAmount.toLocaleString()}</td>
                <td>{item.creditTax.toLocaleString()}</td>
                <td>{item.creditAmount.toLocaleString()}</td>
              </tr>
            ))}  
          </tbody>
        </Specifics>
      )}
    </Wrapper>
  );
};

// Usage example
const specifics = [
  {
    nendo: '令4',
    accountCode: '157600',
    content: '旅費交通費',
    debitTax: 0, 
    debitAmount: 157600,
    creditTax: 0,
    creditAmount: 157600 
  }
];

const NayoseSample = () => {
  return (
    <Nayose
      denpyoNumber="0000000004"  
      registrationDate="令和04年12月19日"
      applyType="登録"
      syukeiType="年度"
      applicantName="千葉市中央区以下に掲載がない場合"
      workPlace="千葉市中央区以下に掲載がない場合" 
      depCode="行政大郎"
      createDate="令和04年12月19日"
      slipDate="令和4年07月12日"
      accountingDate="年 月 日"
      kubun="適用上段5678901234567890"
      taxCode="555-5555"
      remarks="出張旅費（南北支社 第1四半期）"
      specifics={specifics}
    />
  );  
};

export default NayoseSample;