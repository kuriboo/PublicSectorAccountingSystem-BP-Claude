import React from 'react';
import styled from 'styled-components';

type ReservationFormProps = {
  reservation: {
    date: string;
    division: string;
    divisionCode: string;
    branch: string;
    branchCode: string;
    deadline: string;
    seatType: string;
    numberOfPeople: number;
  };
  breakdown: {
    subtotal: number;
    foodExpenses: number;
    drinkExpenses: number;
    taxAmount: number;
    serviceCharge: number;
    total: number;
  };
  reservationAmount: number;
  taxRate: number;
  reservationRate: number;
  reservationTax: number;
  tipRate: number;
  tipAmount: number;
};

const ReservationForm: React.FC<ReservationFormProps> = ({
  reservation,
  breakdown,
  reservationAmount,
  taxRate,
  reservationRate,
  reservationTax,
  tipRate,
  tipAmount,
}) => {
  return (
    <FormWrapper>
      <FormSection>
        <SectionTitle>予約科目</SectionTitle>
        <FormField>
          <Label>予算節</Label>
          <Value>{reservation.division}</Value>
        </FormField>
        <FormField>
          <Label>予算細節</Label>
          <Value>{reservation.divisionCode}</Value>
        </FormField>
        <FormField>
          <Label>予算明細</Label>
          <Value>{reservation.branch}</Value>
        </FormField>
        <FormField>
          <Label>科目検索</Label>
          <Value>{reservation.branchCode}</Value>
        </FormField>
        <FormField>
          <Label>収入区分</Label>
          <Value>現金</Value>
        </FormField>
      </FormSection>

      <FormSection>
        <SectionTitle>予算残情報</SectionTitle>
        <BreakdownField>
          <Label>前</Label>
          <Value>{breakdown.subtotal.toLocaleString()}</Value>
        </BreakdownField>
        <BreakdownField>
          <Label>予算現額</Label>
          <Value>{breakdown.foodExpenses.toLocaleString()}</Value>
        </BreakdownField>
        <BreakdownField>
          <Label>負担累計</Label>
          <Value>{breakdown.drinkExpenses.toLocaleString()}</Value>
        </BreakdownField>
        <BreakdownField>
          <Label>予定累計</Label>
          <Value>{breakdown.taxAmount.toLocaleString()}</Value>
        </BreakdownField>
        <BreakdownField>
          <Label>予定残額</Label>
          <Value>{breakdown.serviceCharge.toLocaleString()}</Value>
        </BreakdownField>
      </FormSection>

      <FormSection>
        <FormField>
          <Label>決定額</Label>
          <Value>{reservationAmount.toLocaleString()}</Value>
        </FormField>
        <FormField>
          <Label>税抜額</Label>
          <Value>{(reservationAmount / (1 + taxRate / 100)).toFixed(0)}</Value>
        </FormField>
        <FormField>
          <Label>消費税率</Label>
          <Value>{taxRate}%</Value>
        </FormField>
        <FormField>
          <Label>消費税額</Label>
          <Value>{reservationTax.toLocaleString()}</Value>
        </FormField>
        <TipField>
          <Label>伸税率</Label>
          <Value>{tipRate}%</Value>
        </TipField>
        <TipField>
          <Label>伸税額</Label>
          <Value>{tipAmount.toLocaleString()}</Value>
        </TipField>
      </FormSection>

      <ButtonGroup>
        <Button>削除</Button>
        <Button primary>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonGroup>
    </FormWrapper>
  );
};

// サンプルデータを使用した使用例
const SampleUsage: React.FC = () => {
  const sampleData: ReservationFormProps = {
    reservation: {
      date: '2023/01/13',
      division: '○○事業費', 
      divisionCode: '0001',
      branch: '印刷製本費',
      branchCode: '0001',
      deadline: '電子書籍費',
      seatType: '課税',
      numberOfPeople: 1,
    },
    breakdown: {
      subtotal: 0,
      foodExpenses: 1000000,
      drinkExpenses: -1000000, 
      taxAmount: -1000000,
      serviceCharge: 0,
      total: -1000000,
    },
    reservationAmount: 1000000,
    taxRate: 8,
    reservationRate: 325304,
    reservationTax: 74074,
    tipRate: 0,
    tipAmount: 0,
  };

  return (
    <div>
      <h2>予約処理科目登録</h2>
      <ReservationForm {...sampleData} />
    </div>
  );
};

export default SampleUsage;

// styled-components

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: #f0f0f0;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  background-color: white;
  border-radius: 8px;
`;

const SectionTitle = styled.h3`
  margin: 0;
  color: #333;
`;

const FormField = styled.div`
  display: flex;
  align-items: center;
`;

const BreakdownField = styled(FormField)`
  justify-content: space-between;
`;

const TipField = styled(FormField)`
  justify-content: flex-end;
`;

const Label = styled.div`
  width: 120px;
  color: #666;
`;

const Value = styled.div`
  flex: 1;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.primary ? '#007bff' : '#f0f0f0')};
  color: ${(props) => (props.primary ? 'white' : '#333')};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;