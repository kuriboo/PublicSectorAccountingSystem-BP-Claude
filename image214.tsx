import React from 'react';
import styled from '@emotion/styled';

type ReceiptItemType = {
  title: string;
  items: string[];
  amount: number;
};

type ReceiptDataType = {
  date: string;
  documentNumber: number;
  items: ReceiptItemType[];
  taxRate: number;
  taxAmount: number;
  total: number;
};

type ReceiptProps = {
  data: ReceiptDataType;
};

const ReceiptWrapper = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
`;

const ReceiptHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ReceiptTitle = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const ReceiptDate = styled.p`
  margin: 0;
`;

const ReceiptTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const ReceiptTableHeader = styled.th`
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const ReceiptTableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const ReceiptTotalRow = styled.tr`
  font-weight: bold;
`;

const Receipt: React.FC<ReceiptProps> = ({ data }) => {
  // Calculate subtotal
  const subtotal = data.items.reduce((acc, item) => acc + item.amount, 0);

  return (
    <ReceiptWrapper>
      <ReceiptHeader>
        <ReceiptTitle>領収証</ReceiptTitle>
        <ReceiptDate>発行日: {data.date}</ReceiptDate>
      </ReceiptHeader>
      <ReceiptTable>
        <thead>
          <tr>
            <ReceiptTableHeader>品名</ReceiptTableHeader>
            <ReceiptTableHeader>金額</ReceiptTableHeader>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, index) => (
            <tr key={index}>
              <ReceiptTableCell>
                {item.title}
                <ul>
                  {item.items.map((subItem, subIndex) => (
                    <li key={subIndex}>{subItem}</li>
                  ))}
                </ul>
              </ReceiptTableCell>
              <ReceiptTableCell>¥{item.amount.toLocaleString()}</ReceiptTableCell>
            </tr>
          ))}
          <ReceiptTotalRow>
            <ReceiptTableCell>小計</ReceiptTableCell>
            <ReceiptTableCell>¥{subtotal.toLocaleString()}</ReceiptTableCell>
          </ReceiptTotalRow>
          <ReceiptTotalRow>
            <ReceiptTableCell>消費税等({data.taxRate}%)</ReceiptTableCell>
            <ReceiptTableCell>¥{data.taxAmount.toLocaleString()}</ReceiptTableCell>
          </ReceiptTotalRow>
          <ReceiptTotalRow>
            <ReceiptTableCell>合計金額</ReceiptTableCell>
            <ReceiptTableCell>¥{data.total.toLocaleString()}</ReceiptTableCell>
          </ReceiptTotalRow>
        </tbody>
      </ReceiptTable>
    </ReceiptWrapper>
  );
};

// Usage example
const sampleData: ReceiptDataType = {
  date: '令和6年4月30日',
  documentNumber: 201,  
  items: [
    {
      title: '労務',
      items: [
        '水道事業収益',
        '営業収益',
        '受託工事収益',
        '受託工事収入',
        '給水管等修繕工事収入',
        '給水管等修繕工事収入',
      ],
      amount: 536800,
    },
    {
      title: '流動資産',
      items: [
        '水道事業収益',
        '営業収益',      
        '受託工事収益',
        '受託工事収入',
        '給水管等修繕工事収入',
        '給水管等修繕工事収入',
      ],
      amount: 488000,
    },
    {
      title: '流動負債',
      items: [
        'その他流動負債',
        '仮受消費税及び地方消費税',
        '仮受消費税及び地方消費税',
        '仮受消費税及び地方消費税',
        '仮受消費税及び地方消費税',
      ], 
      amount: 48600,
    },
  ],
  taxRate: 10,
  taxAmount: 0,
  total: 0,
};

const App: React.FC = () => {
  return (
    <div>
      <Receipt data={sampleData} />
    </div>
  );  
};

export default App;