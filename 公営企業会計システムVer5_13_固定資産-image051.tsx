import React from 'react';
import styled from 'styled-components';

interface FixedAssetProductionInputFormProps {
  startDate: string;
  productionYear: number;
  productionMonth: number;
  registration: 'yearly' | 'monthly' | 'other';
  bookType: 'income' | 'expenditure';
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 10px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 10px;
`;

const FixedAssetProductionInputForm: React.FC<FixedAssetProductionInputFormProps> = ({
  startDate,
  productionYear,
  productionMonth,
  registration,
  bookType,
}) => {
  return (
    <Container>
      {/* 作業年月日 */}
      <Label>作業年月日</Label>
      <Input type="date" defaultValue={startDate} />

      {/* 作業年度年度 */}
      <Label>作業年度年度</Label>
      <Input type="number" defaultValue={productionYear} />

      {/* 作業関始年月 */}
      <Label>作業関始年月</Label>
      <Input type="month" defaultValue={`${productionYear}-${productionMonth < 10 ? '0' : ''}${productionMonth}`} />

      {/* 作業年数 */}
      <Label>作業年数</Label>
      <Input type="number" defaultValue={4} />

      {/* 登録区分 */}
      <Label>登録区分</Label>
      <Select defaultValue={registration}>
        <option value="yearly">抽出分のみ</option>
        <option value="monthly">予測分のみ</option>
        <option value="other">すべて</option>
      </Select>

      {/* 書式区分 */}
      <Label>書式区分</Label>
      <Select defaultValue={bookType}>
        <option value="income">収支</option>
        <option value="expenditure">無形</option>
      </Select>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  return (
    <FixedAssetProductionInputForm
      startDate="2029-09-11"
      productionYear={2029}
      productionMonth={9}
      registration="yearly"
      bookType="income"
    />
  );
};

export default FixedAssetProductionInputForm;