import React from 'react';
import styled from 'styled-components';

// 異動情報の型定義
type TransferInfo = {
  executionDate: string;
  withdrawalBranchCode: string;
  depositBranchCode: string;
  amount: number;
  monthlyInterest: number;
  transferFee: number;
  monthlyDueDate: number;
  limitedOffer: number;
  remarks: string;
  taxRate: number;
  taxInAmount: number;
  notifiedExternalTransfer: number;
  notifiedRemoteTransfer: number;
  newYearRemittance: number;
  dueYearRemittance: number;
};

// スタイル定義
const TransferInfoWrapper = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
`;

const TransferInfoTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 8px;
    border: 1px solid #ccc;
  }

  th {
    background-color: #e0e0e0;
    text-align: left;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
`;

// 異動情報コンポーネント
const TransferInfoComponent: React.FC<TransferInfo> = ({
  executionDate,
  withdrawalBranchCode,
  depositBranchCode,
  amount,
  monthlyInterest,
  transferFee,
  monthlyDueDate,
  limitedOffer,
  remarks,
  taxRate,
  taxInAmount,
  notifiedExternalTransfer,
  notifiedRemoteTransfer,
  newYearRemittance,
  dueYearRemittance,
}) => {
  return (
    <TransferInfoWrapper>
      <TransferInfoTable>
        <tbody>
          <tr>
            <th>異動年月日</th>
            <td>{executionDate || '-'}</td>
            <th>異動区分コード</th>
            <td>{withdrawalBranchCode || '-'}</td>
          </tr>
          <tr>
            <th>借方店番号</th>
            <td>{withdrawalBranchCode || '-'}</td>
            <th>貸方店番号</th>
            <td>{depositBranchCode || '-'}</td>
          </tr>
          <tr>
            <th>異動金額</th>
            <td>{amount || 0}</td>
            <th>月割改良借知額</th>
            <td>{monthlyInterest || 0}</td>
          </tr>
          <tr>
            <th>振込手数料</th>
            <td>{transferFee || 0}</td>
            <th>月割返済満了額</th>
            <td>{monthlyDueDate || 0}</td>
          </tr>
          <tr>
            <th>限定勧奨額</th>
            <td>{limitedOffer || 0}</td>
            <th>摘要</th>
            <td>{remarks || '-'}</td>
          </tr>
          <tr>
            <th>税率</th>
            <td>{taxRate || 0}</td>
            <th>税入金額</th>
            <td>{taxInAmount || 0}</td>
          </tr>
          <tr>
            <th>届出外取引額</th>
            <td>{notifiedExternalTransfer || 0}</td>
            <th>届出外振替額</th>
            <td>{notifiedRemoteTransfer || 0}</td>
          </tr>
          <tr>
            <th>年頭振替引落額</th>
            <td>{newYearRemittance || 0}</td>
            <th>年度末振替引落額</th>
            <td>{dueYearRemittance || 0}</td>
          </tr>
        </tbody>
      </TransferInfoTable>
      <ButtonWrapper>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonWrapper>
    </TransferInfoWrapper>
  );
};

// サンプルデータ
const sampleTransferInfo: TransferInfo = {
  executionDate: '2018-08-31',
  withdrawalBranchCode: '8724',
  depositBranchCode: '0',
  amount: 5000000,
  monthlyInterest: 0,
  transferFee: 0,
  monthlyDueDate: 0,
  limitedOffer: 100,
  remarks: '取得',
  taxRate: 10,
  taxInAmount: 500000,
  notifiedExternalTransfer: 0,
  notifiedRemoteTransfer: 0, 
  newYearRemittance: 0,
  dueYearRemittance: 0,
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>異動情報</h1>
      <TransferInfoComponent {...sampleTransferInfo} />
    </div>
  );
};

export default App;