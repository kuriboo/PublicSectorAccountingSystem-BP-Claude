import React from 'react';
import styled from '@emotion/styled';

// 型定義
interface SupportPerformanceFormProps {
  startDate: string;
  endDate: string;
  issuedDate: string;
  paymentPeriod: string;
  invoiceNumber: string;
  transactionNumber: string;
  paymentMethod: string;
  supportDetails: Array<{
    projectName: string;
    startDate: string;
    duration: number;
    endDate: string;
    supportPerson: string;
    supportContent: string;
    supportDays: number;
  }>;
  remarks: string;
  onSubmit: () => void;
  onPrint: () => void;
  onCsv: () => void;
}

// スタイリング
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const FormRow = styled.div`
  display: flex;
  margin-bottom: 15px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const FormLabel = styled.label`
  width: 120px;
  margin-right: 10px;
`;

const FormInput = styled.input`
  flex: 1;
  padding: 5px;
`;

const FormSelect = styled.select`
  flex: 1;
  padding: 5px;
`;

const FormTextarea = styled.textarea`
  flex: 1;
  padding: 5px;
`;

const FormButton = styled.button`
  padding: 8px 15px;
  margin-right: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const FormTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 15px;

  th, td {
    padding: 8px;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }
`;

// コンポーネント
const SupportPerformanceForm: React.FC<SupportPerformanceFormProps> = ({
  startDate,
  endDate,
  issuedDate,
  paymentPeriod,
  invoiceNumber,
  transactionNumber,
  paymentMethod,
  supportDetails,
  remarks,
  onSubmit,
  onPrint,
  onCsv,
}) => {
  return (
    <FormContainer>
      <FormRow>
        <FormLabel>請求対象期間</FormLabel>
        <FormInput type="date" value={startDate} />
        <span>～</span>
        <FormInput type="date" value={endDate} />
      </FormRow>
      <FormRow>
        <FormLabel>支払日</FormLabel>
        <FormInput type="date" value={paymentPeriod} />
      </FormRow>
      <FormRow>
        <FormLabel>発行日</FormLabel>
        <FormInput type="date" value={issuedDate} />
      </FormRow>
      <FormRow>
        <FormLabel>請求番号</FormLabel>
        <FormInput type="text" value={invoiceNumber} />
      </FormRow>
      <FormRow>
        <FormLabel>支払金額</FormLabel>
        <FormInput type="number" />
      </FormRow>
      <FormRow>
        <FormLabel>振込番号</FormLabel>
        <FormInput type="text" value={transactionNumber} />
      </FormRow>
      <FormRow>
        <FormLabel>支払方法</FormLabel>
        <FormSelect value={paymentMethod}>
          <option value="">未選択</option>
          <option value="振込">振込</option>
          <option value="小切手">小切手</option>
          <option value="その他">その他</option>
        </FormSelect>
      </FormRow>
      <FormRow>
        <FormLabel>摘要</FormLabel>
        <FormTextarea value={remarks} />
      </FormRow>

      <FormTable>
        <thead>
          <tr>
            <th>所属</th>
            <th>氏名</th>
            <th>作業日</th>
            <th>開始日</th>
            <th>終了日</th>
            <th>作業内容</th>
            <th>支払日数</th>
            <th>支払金額</th>
            <th>稼働率</th>
          </tr>
        </thead>
        <tbody>
          {supportDetails.map((detail, index) => (
            <tr key={index}>
              <td>{detail.projectName}</td>
              <td>{detail.supportPerson}</td>
              <td>{detail.duration}</td>
              <td>{detail.startDate}</td>
              <td>{detail.endDate}</td>
              <td>{detail.supportContent}</td>
              <td>{detail.supportDays}</td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </FormTable>

      <FormRow>
        <FormButton onClick={onSubmit}>登録</FormButton>
        <FormButton onClick={onPrint}>印刷</FormButton>
        <FormButton onClick={onCsv}>CSV</FormButton>
      </FormRow>
    </FormContainer>
  );
};

// サンプルデータ
const sampleData: SupportPerformanceFormProps = {
  startDate: '2023-07-01',
  endDate: '2023-07-31',  
  issuedDate: '2023-08-01',
  paymentPeriod: '2023-08-31',
  invoiceNumber: '1234567',
  transactionNumber: '7654321',
  paymentMethod: '振込',
  supportDetails: [
    {
      projectName: '経営企画部',
      supportPerson: '鈴木一郎',
      duration: 16,
      startDate: '2023-07-01',
      endDate: '2023-07-31', 
      supportContent: 'テスト管理',
      supportDays: 12,
    },
    {
      projectName: '経営企画部',
      supportPerson: '山田太郎',
      duration: 17,
      startDate: '2023-07-01',
      endDate: '2023-07-31',
      supportContent: '月次決算',
      supportDays: 15,
    },
  ],
  remarks: 'サンプルデータ',
  onSubmit: () => alert('登録ボタンがクリックされました'),
  onPrint: () => alert('印刷ボタンがクリックされました'), 
  onCsv: () => alert('CSVボタンがクリックされました'),
};

// 使用例
export default function App() {
  return (
    <div>
      <h1>請求業務実績入力</h1>
      <SupportPerformanceForm {...sampleData} />
    </div>
  );
}