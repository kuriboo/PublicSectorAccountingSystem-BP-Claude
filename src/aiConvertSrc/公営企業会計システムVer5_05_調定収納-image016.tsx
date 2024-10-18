import React from 'react';
import styled from 'styled-components';

type CompanyCollectInputProps = {
  companyName: string;
  collectionDate: string;
  register: boolean;
  consumption: boolean;
  other: boolean;
  normalTax: number;
  reducedTax: number;
  taxFreeAmount: number;
  adjustmentRatio: number;
  considerTaxFraction: boolean;
  fractionProcessing: 'round' | 'roundUp' | 'roundDown';
  taxAmount: number;
  annualAmount: number;
  suspensionAmount: number;
  previousDeclarationAmount: number;
  totalAmount: number;
  intermediatePayment: number;
  finalReturn: number;
};

const CompanyCollectInput: React.FC<CompanyCollectInputProps> = ({
  companyName,
  collectionDate,
  register,
  consumption,
  other,
  normalTax,
  reducedTax,
  taxFreeAmount,
  adjustmentRatio,
  considerTaxFraction,
  fractionProcessing,
  taxAmount,
  annualAmount,
  suspensionAmount,
  previousDeclarationAmount,
  totalAmount,
  intermediatePayment,
  finalReturn,
}) => {
  // 日付をYYYY年MM月DD日の形式に変換
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}年${month}月${day}日`;
  };

  return (
    <Container>
      <Title>集合収納入力</Title>
      <CompanyInfo>
        <CompanyName>{companyName}</CompanyName>
        <CollectionDate>{formatDate(collectionDate)}</CollectionDate>
      </CompanyInfo>

      <CheckboxContainer>
        <CheckboxLabel>
          <Checkbox type="checkbox" checked={register} readOnly />
          登録
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox type="checkbox" checked={consumption} readOnly />
          訂正
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox type="checkbox" checked={other} readOnly />
          削除
        </CheckboxLabel>
      </CheckboxContainer>

      <SectionTitle>調定科目</SectionTitle>
      <Grid>
        <Label>節</Label>
        <Value>{normalTax}</Value>
        <Label>細節</Label>
        <Value>{reducedTax}</Value>
        <Label>明細</Label>
        <Value>{taxFreeAmount}</Value>
      </Grid>

      <SectionTitle>入金科目</SectionTitle>
      <Grid>
        <Label>節</Label>
        <Value>{taxAmount}</Value>
        <Label>細節</Label>
        <Value>{annualAmount}</Value>
        <Label>明細</Label>
        <Value>{suspensionAmount}</Value>
      </Grid>

      <Label>税区分</Label>
      <AdjustmentRatio>
        消費税率
        <Ratio value={adjustmentRatio} readOnly /> %
      </AdjustmentRatio>
      <CheckboxLabel>
        <Checkbox
          type="checkbox"
          checked={considerTaxFraction}
          readOnly
        />
        端数処理含む
      </CheckboxLabel>

      <FractionProcessing>
        <FractionProcessingLabel>
          端数処理
        </FractionProcessingLabel>
        <FractionProcessingValue>
          {fractionProcessing === 'round' && '四捨五入'}
          {fractionProcessing === 'roundUp' && '切上'}
          {fractionProcessing === 'roundDown' && '切捨'}
        </FractionProcessingValue>
      </FractionProcessing>

      <Grid>
        <Label>年度</Label>
        <Value>{annualAmount}</Value>
        <Label>件数</Label>
        <Value>{totalAmount}</Value>
        <Label>収入金額</Label>
        <Value>{taxAmount + annualAmount + suspensionAmount}</Value>
        <Label>調定金額</Label>
        <Value>{normalTax + reducedTax + taxFreeAmount}</Value>
      </Grid>
      
      <Grid>
        <Label>内消費税額</Label>
        <Value>{previousDeclarationAmount}</Value>
      </Grid>
      
      <Grid>
        <Label>特定収入</Label>
        <Value>{intermediatePayment}</Value>
      </Grid>
      
      <TotalAmount>
        <Label>合計</Label>
        <Value>{totalAmount}</Value>
      </TotalAmount>
      
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
      
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  return (
    <CompanyCollectInput
      companyName="㈱湘南の薬用戸入"
      collectionDate="令和5年12月26日"
      register={true}
      consumption={false}
      other={false}
      normalTax={999008}
      reducedTax={0}
      taxFreeAmount={0}
      adjustmentRatio={10}
      considerTaxFraction={false}
      fractionProcessing="round"
      taxAmount={0}
      annualAmount={5}
      suspensionAmount={0}
      previousDeclarationAmount={2272}
      totalAmount={25000}
      intermediatePayment={0}
      finalReturn={0}
    />
  );
};

export default CompanyCollectInput;

// styles
const Container = styled.div`
  font-family: sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
`;

const CompanyInfo = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const CompanyName = styled.div`
  font-size: 20px;
`;

const CollectionDate = styled.div`
  font-size: 16px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 0 10px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 10px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 10px;
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-weight: bold;
`;

const Value = styled.div``;

const AdjustmentRatio = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Ratio = styled.input`
  width: 40px;
  margin: 0 10px;
`;

const FractionProcessing = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const FractionProcessingLabel = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;

const FractionProcessingValue = styled.div``;

const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 5px 20px;
  margin: 0 5px;
`;