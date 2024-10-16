import React from 'react';
import styled from 'styled-components';

// 伝票のプロパティ型定義
type VoucherProps = {
  code: string;
  name: string;
  unitPrice: number;
  unit: string;
  quantity: number;
  amount: number;
  dueDate: string;
  accountCode: string;
  tax: number;
  department: string;
  project: string;
  remarks: string;
};

// スタイル定義
const VoucherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const VoucherHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const VoucherTitle = styled.h2`
  font-size: 24px;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const VoucherInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const VoucherInfoItem = styled.span`
  font-size: 14px;
  margin-bottom: 5px;
`;

const VoucherTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const VoucherTableHeader = styled.th`
  padding: 10px;
  text-align: left;
  background-color: #ddd;
  border: 1px solid #ccc;
`;

const VoucherTableCell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

const VoucherRemarks = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const VoucherRemarksLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
`;

const VoucherRemarksText = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  resize: vertical;
`;

// 伝票コンポーネント
const Voucher: React.FC<VoucherProps> = ({
  code,
  name,
  unitPrice,
  unit,
  quantity,
  amount,
  dueDate,
  accountCode,
  tax,
  department,
  project,
  remarks,
}) => {
  return (
    <VoucherContainer>
      <VoucherHeader>
        <VoucherTitle>要素マスタ保守</VoucherTitle>
        <VoucherInfo>
          <VoucherInfoItem>行政市水道事業会計</VoucherInfoItem>
          <VoucherInfoItem>総務課 予算・会計担当 ぎょうせい太郎</VoucherInfoItem>
          <VoucherInfoItem>平成29年09月04日</VoucherInfoItem>
        </VoucherInfo>
      </VoucherHeader>
      
      <VoucherTable>
        <thead>
          <tr>
            <VoucherTableHeader>要素コード</VoucherTableHeader>
            <VoucherTableHeader>要素名</VoucherTableHeader>
            <VoucherTableHeader>単位</VoucherTableHeader>
            <VoucherTableHeader>単価</VoucherTableHeader>
            <VoucherTableHeader>数量</VoucherTableHeader>
            <VoucherTableHeader>金額</VoucherTableHeader>
            <VoucherTableHeader>集計科目</VoucherTableHeader>
            <VoucherTableHeader>税区分</VoucherTableHeader>
            <VoucherTableHeader>期限</VoucherTableHeader>
            <VoucherTableHeader>部署</VoucherTableHeader>
            <VoucherTableHeader>プロジェクト</VoucherTableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <VoucherTableCell>{code}</VoucherTableCell>
            <VoucherTableCell>{name}</VoucherTableCell>
            <VoucherTableCell>{unit}</VoucherTableCell>
            <VoucherTableCell>{unitPrice}</VoucherTableCell>
            <VoucherTableCell>{quantity}</VoucherTableCell>
            <VoucherTableCell>{amount}</VoucherTableCell>
            <VoucherTableCell>{accountCode}</VoucherTableCell>
            <VoucherTableCell>{tax}</VoucherTableCell>
            <VoucherTableCell>{dueDate}</VoucherTableCell>
            <VoucherTableCell>{department}</VoucherTableCell>
            <VoucherTableCell>{project}</VoucherTableCell>
          </tr>
        </tbody>
      </VoucherTable>

      <VoucherRemarks>
        <VoucherRemarksLabel>備考:</VoucherRemarksLabel>
        <VoucherRemarksText value={remarks} readOnly />
      </VoucherRemarks>
    </VoucherContainer>
  );
};

// サンプル利用コンポーネント
const SampleUsage: React.FC = () => {
  const sampleData: VoucherProps = {
    code: '002010643',
    name: '固定資産原始建設',
    unitPrice: 0,
    unit: '年度',
    quantity: 1,
    amount: 0,
    dueDate: '随時',
    accountCode: 1,
    tax: 0,
    department: '総務課',
    project: '本郷',
    remarks: '経営分析マスタの元となります。',
  };

  return <Voucher {...sampleData} />;
};

export default SampleUsage;