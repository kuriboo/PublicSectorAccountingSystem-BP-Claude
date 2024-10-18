import React from 'react';
import styled from '@emotion/styled';

type ProductPurchaseFormProps = {
  productArea: string;
  startDate: string;
  endDate: string;
  startNumber: string;
  endNumber: string;
  printQuantity: string;
  protectionType: '全体' | '保管場所別';
  stamping: 'あり' | 'なし';
  ocrUsage: 'あり' | 'なし';
  onSubmit: () => void;
  onCancel: () => void;
};

const ProductPurchaseForm: React.FC<ProductPurchaseFormProps> = ({
  productArea,
  startDate,
  endDate,
  startNumber,
  endNumber,
  printQuantity,
  protectionType,
  stamping,
  ocrUsage,
  onSubmit,
  onCancel,
}) => {
  return (
    <FormWrapper>
      <Title>貯蔵品受払簿作成</Title>
      <Section>
        <Label>範囲入力</Label>
        <Field>
          <Label>決裁区分</Label>
          <span>{productArea}</span>
        </Field>
        <Field>
          <Label>入出庫年月</Label>
          <span>{startDate}</span>
          <span>～</span>
          <span>{endDate}</span>
        </Field>
        <Field>
          <Label>品番</Label>
          <span>{startNumber || '00000000'}</span>
          <span>～</span>  
          <span>{endNumber || '9999999999'}</span>
        </Field>
      </Section>
      <Section>  
        <Field>
          <Label>出力区分</Label>
          <span>所属別</span>
          <span>保管場所別</span>
        </Field>
        <Field>
          <Label>保管場所</Label>
          <span>全体</span>
          <span>{protectionType}</span>
        </Field>
      </Section>
      <Section>
        <Field>
          <Label>数量0印字区分</Label>
          <span>{stamping === 'あり' ? 'なし' : 'あり'}</span>
        </Field>
        <Field>  
          <Label>棚卸単価明細表示</Label>
          <span>{ocrUsage === 'あり' ? 'なし' : 'あり'}</span>
        </Field>
      </Section>
      <ButtonWrapper>
        <Button onClick={onSubmit}>終了</Button>  
        <Button onClick={onCancel}>クリア</Button>
        <Button type="submit">実行</Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  width: 150px;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 10px;
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = () => {
    // Handle form submission
  };

  const handleCancel = () => {
    // Handle form cancellation  
  };

  return (
    <ProductPurchaseForm
      productArea="管理者"
      startDate="平成29年06月"
      endDate="平成29年06月"  
      startNumber="00000000"
      endNumber="9999999999"
      printQuantity="全体"
      protectionType="全体"
      stamping="あり"
      ocrUsage="あり"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

export default App;