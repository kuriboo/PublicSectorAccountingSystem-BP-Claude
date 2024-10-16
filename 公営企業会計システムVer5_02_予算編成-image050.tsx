import React from 'react';
import styled from 'styled-components';

type ReservationFormProps = {
  /** 予算区分 */
  budgetCategory: string;
  /** 予算細目 */
  budgetSubcategory: string;
  /** 補正 */
  supplementFlag: boolean;
  /** 金額範囲 */
  amountRange: {
    /** 所属 */
    department: string;
    /** 開始金額 */
    startAmount: number;
    /** 終了金額 */
    endAmount: number;
  };
  /** 印字レベル */
  printLevel: '節' | '細節' | '目細節';
  /** 帳票種別 */
  reportType: '税込' | '税抜';
};

const ReservationForm: React.FC<ReservationFormProps> = ({
  budgetCategory,
  budgetSubcategory,
  supplementFlag,
  amountRange,
  printLevel,
  reportType,
}) => {
  // 金額のフォーマット
  const formatAmount = (amount: number) => {
    return amount.toLocaleString();
  };

  return (
    <StyledForm>
      <Field>
        <Label>予算区分</Label>
        <span>{budgetCategory || '当初予算'}</span>
      </Field>

      <Field>
        <Label>補正</Label>
        <input type="number" min="1" defaultValue={supplementFlag ? 1 : 0} />
        <span>回</span>
      </Field>

      <Field>
        <Label>総経査定欄</Label>
        <Checkbox type="checkbox" defaultChecked />
        <Label>査定欄</Label>
      </Field>

      <Field>
        <Label>金額範囲</Label>
        <RadioButton type="radio" name="amountRange" defaultChecked />
        <Label>税込</Label>
        <RadioButton type="radio" name="amountRange" />
        <Label>税抜</Label>
      </Field>

      <Field>
        <Label>印字レベル</Label>
        <RadioButton type="radio" name="printLevel" defaultChecked={printLevel === '節'} />
        <Label>節</Label>
        <RadioButton type="radio" name="printLevel" defaultChecked={printLevel === '細節'} />
        <Label>細節</Label>
      </Field>

      <Field>
        <Label>帳票種別</Label>
        <RadioButton type="radio" name="reportType" defaultChecked={reportType === '税込'} />
        <Label>税込</Label>
        <RadioButton type="radio" name="reportType" defaultChecked={reportType === '税抜'} />
        <Label>税抜</Label>  
      </Field>

      <RangeField>
        <Label>範囲指定</Label>
        <RangeItem>
          <RangeLabel>所属</RangeLabel>  
          <RangeInput value={amountRange.department} readOnly />
        </RangeItem>
        <RangeItem>
          <RangeLabel>〜</RangeLabel>
          <RangeInput value={formatAmount(amountRange.startAmount)} readOnly /> 
        </RangeItem>
        <RangeItem>
          <RangeLabel>予算科目</RangeLabel>
          <RangeInput value={budgetSubcategory} readOnly />
        </RangeItem>
        <RangeItem>  
          <RangeLabel>〜</RangeLabel>
          <RangeInput value={formatAmount(amountRange.endAmount)} readOnly />
        </RangeItem>
      </RangeField>

    </StyledForm>
  );
};

// サンプルデータでコンポーネントを表示
const SampleReservationForm = () => {
  const sampleData: ReservationFormProps = {
    budgetCategory: '1 当初予算',
    budgetSubcategory: '01010101',
    supplementFlag: true,
    amountRange: {
      department: '1000000',
      startAmount: 1000000,  
      endAmount: 99999999,
    },
    printLevel: '節',
    reportType: '税込',
  };

  return <ReservationForm {...sampleData} />;
};

// styled-components でスタイリング
const StyledForm = styled.div`
  padding: 10px;
`;

const Field = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 5px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const RangeField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RangeItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const RangeLabel = styled.span`
  margin-right: 5px;
`;

const RangeInput = styled.input`
  width: 100px;
`;

export default SampleReservationForm;