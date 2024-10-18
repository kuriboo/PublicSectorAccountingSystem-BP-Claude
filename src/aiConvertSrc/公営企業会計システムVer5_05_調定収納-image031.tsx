import React from 'react';
import styled from '@emotion/styled';

// 収納内容照会の型定義
type InquiryContent = {
  no: string;
  subject: string;
  category: string;
  paymentDate: string;
  amount: number;
  paymentStatus: string;
  settlementDate: string;
  note: string;
}

// コンポーネントのPropsの型定義
type InquiryFormProps = {
  fromDate: string;
  toDate: string;
  individual: boolean;
  corporation: boolean;
  unpaid: boolean;
  paid: boolean;
  inProgress: boolean;
  store: boolean;
  remittance: boolean;
  other: boolean;
  contentsTotal: number;
  withdrawalTotal: number;
  unpaidDate: string;
  creditCard: boolean;
  cash: boolean;
  year: string;
  month: string;
  inquiryContents: InquiryContent[];
}

// スタイル定義
const Container = styled.div`
  font-family: sans-serif;
`;

const Form = styled.form`
  background-color: #f0f0f0;
  padding: 16px;

  @media (max-width: 767px) {
    padding: 8px;
  }
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 16px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const FieldSet = styled.fieldset`
  border: none;
  padding: 0;
`;

const Legend = styled.legend`
  font-weight: bold;
`;

const Label = styled.label`
  margin-right: 8px;
`;

const DateInput = styled.input`
  margin-right: 8px;
  width: 120px;
`;

const NumberInput = styled.input`
  width: 120px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  th, td {
    border: 1px solid #ccc;
    padding: 4px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

// 収納内容照会フォームコンポーネント
const InquiryForm: React.FC<InquiryFormProps> = ({
  fromDate,
  toDate,
  individual,
  corporation,
  unpaid,
  paid,
  inProgress,
  store, 
  remittance,
  other,
  contentsTotal,
  withdrawalTotal,
  unpaidDate,
  creditCard,
  cash,
  year,
  month,
  inquiryContents
}) => {

  const renderInquiryContents = () => {
    // 収納内容が空の場合は空の行を表示
    if (inquiryContents.length === 0) {
      return (
        <tr>
          <td colSpan={9}>データがありません</td>
        </tr>
      );
    }

    // 収納内容をテーブル行として表示
    return inquiryContents.map(content => (
      <tr key={content.no}>
        <td>{content.no}</td>
        <td>{content.subject}</td>
        <td>{content.category}</td>
        <td>{content.paymentDate}</td>
        <td>{content.amount.toLocaleString()}</td>
        <td>{content.paymentStatus}</td>  
        <td>{content.settlementDate}</td>
        <td>{content.note}</td>
      </tr>
    ));
  };

  return (
    <Container>
      <h2>収納内容照会</h2>
      <Form>
        <Row>
          <Label>
            締日:  
            <DateInput type="text" value={fromDate} />
            〜
            <DateInput type="text" value={toDate} />
          </Label>

          <FieldSet>
            <Legend>種別</Legend>
            <Label>
              <input type="checkbox" checked={individual} />
              個別
            </Label>
            <Label>  
              <input type="checkbox" checked={corporation} />
              法人
            </Label>
          </FieldSet>
        </Row>

        <Row>  
          <FieldSet>
            <Legend>調定状況</Legend>

            <Label>
              <input type="checkbox" checked={unpaid} />
              未納
            </Label>
            <Label>
              <input type="checkbox" checked={paid} />
              納入済
            </Label>
          </FieldSet>

          <Label>
            納付金額 
            <NumberInput type="number" value={contentsTotal} />
            〜  
            <NumberInput type="number" value={withdrawalTotal} />
          </Label>
        </Row>

        <Row>
          <FieldSet>  
            <Legend>納付科目</Legend>
            {/* 他の項目も同様に */}  
          </FieldSet>

          <FieldSet>
            <Legend>納入期限</Legend>  
            <Label>
              <input type="radio" checked={unpaidDate === 'before'} />
              指定なし  
            </Label>
            <Label>
              <input type="radio" checked={unpaidDate === 'fixed'} />
              固定
            </Label>
            {/* 他の項目も同様に */}
          </FieldSet>
        </Row>

        {/* 他の行も同様に */}

      </Form>

      <Table>
        <thead>
          <tr>
            <th>調定番号</th>
            <th>種別</th>
            <th>区分</th>  
            <th>納付日</th>
            <th>調定金額</th>
            <th>調定日</th>
            <th>納期日</th>  
            <th>摘要</th>
          </tr>  
        </thead>
        <tbody>
          {renderInquiryContents()}
        </tbody>
      </Table>
      
    </Container>
  );
};

// 使用例
const sampleData: InquiryContent[] = [
  {
    no: '11111111',
    subject: '個別',
    category: '5',
    paymentDate: 'H30.4.1',
    amount: 98000,
    paymentStatus: '納入済',
    settlementDate: 'H30.4.1',  
    note: '個人住民税'
  },
  // 他のデータも同様に
];

const UsageExample: React.FC = () => {
  return (
    <InquiryForm
      fromDate="H29.4.1"  
      toDate="H30.3.31"
      individual={true}
      corporation={false}
      unpaid={false}
      paid={true}
      inProgress={false}
      store={false}
      remittance={false}
      other={false} 
      contentsTotal={0}
      withdrawalTotal={99999999999}
      unpaidDate=""
      creditCard={false}
      cash={false}
      year="R4"
      month="4"
      inquiryContents={sampleData}
    />            
  );
};

export default UsageExample;