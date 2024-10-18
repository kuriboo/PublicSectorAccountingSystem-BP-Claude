import React from 'react';
import styled from '@emotion/styled';

type AdminProductFormProps = {
  productName: string;
  departureDate: string;
  arrivalDate: string;
  price: number;
  deliveryFee: number;
  totalPrice: number;
  dayCount: number;
  morningUnitPrice: number;
  afternoonUnitPrice: number;
  morningUnits: number;
  afternoonUnits: number;
  morningAmount: number;
  afternoonAmount: number;
  onSubmit: () => void;
  onCancel: () => void;
  onPrint: () => void;
};

const AdminProductForm: React.FC<AdminProductFormProps> = ({
  productName,
  departureDate,
  arrivalDate,
  price,
  deliveryFee,
  totalPrice,
  dayCount,
  morningUnitPrice,
  afternoonUnitPrice,
  morningUnits,
  afternoonUnits,
  morningAmount,
  afternoonAmount,
  onSubmit,
  onCancel,
  onPrint,
}) => {
  return (
    <FormContainer>
      <FormHeader>
        <h2>管理資産累計マスタ</h2>
        <Dates>
          <span>行政市水道事業会計</span>
          <span>総務課 予算・会計担当 ぎょうせい太郎</span>
          <span>平成29年09月12日</span>
        </Dates>
      </FormHeader>
      
      <FormContent>
        <InputGroup>
          <label>資産番号</label>
          <input type="text" value={productName} readOnly />
        </InputGroup>
        
        <InputGroup>
          <label>資産名称</label>
          <input type="text" value="配水管改良工事" readOnly />
        </InputGroup>
        
        <Grid>
          <GridItem>
            <label>事価者称</label>
            <input type="text" value={price.toLocaleString()} readOnly />
          </GridItem>
          <GridItem>
            <label>DIP(A1)</label>
            <input type="text" value={deliveryFee.toLocaleString()} readOnly />
          </GridItem>
          <GridItem>
            <label>φ75</label>
            <input type="text" value={totalPrice.toLocaleString()} readOnly />
          </GridItem>
        </Grid>
        
        <Grid>
          <GridColumn>
            <h3>数量</h3>
            <GridItem>
              <label>取得時</label>  
              <input type="text" value={dayCount} readOnly />
            </GridItem>
            <GridItem>
              <label>前期末残高</label>
              <input type="text" value="0.00" readOnly />
            </GridItem>
            <GridItem>
              <label>当期増加</label>
              <input type="text" value={morningUnitPrice.toFixed(2)} readOnly />
            </GridItem>
            <GridItem>  
              <label>当期減少</label>
              <input type="text" value="0.00" readOnly />
            </GridItem>
          </GridColumn>
          
          <GridColumn>
            <h3>金額</h3>
            <GridItem>
              <label>取得時</label>
              <input type="text" value={morningAmount.toLocaleString()} readOnly />
            </GridItem>  
            <GridItem>
              <label>前期末残高</label>  
              <input type="text" value="0" readOnly />
            </GridItem>
            <GridItem>  
              <label>当期増加</label>
              <input type="text" value={afternoonAmount.toLocaleString()} readOnly /> 
            </GridItem>
            <GridItem>
              <label>当期減少</label>  
              <input type="text" value="0" readOnly />
            </GridItem>
          </GridColumn>
        </Grid>
      </FormContent>
      
      <FormActions>
        <Button onClick={onSubmit}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>  
        <Button onClick={onPrint}>終了</Button>
      </FormActions>
    </FormContainer>
  );
};

// Styles
const FormContainer = styled.div`
  font-family: sans-serif;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: right;
  }
`;

const FormHeader = styled.div`
  margin-bottom: 1rem;
`;

const Dates = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FormContent = styled.div`
  display: grid;
  gap: 1rem;
`;

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
  gap: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const GridColumn = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const GridItem = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
  gap: 1rem;
`;

const FormActions = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
`;

// Usage example
const AdminProductFormExample: React.FC = () => {
  const handleSubmit = () => {
    console.log('Form submitted');
  };

  const handleCancel = () => {
    console.log('Form cancelled');
  };

  const handlePrint = () => {
    console.log('Print form');
  };

  return (
    <AdminProductForm
      productName="8002500"
      departureDate=""
      arrivalDate=""
      price={8002500}
      deliveryFee={000001}
      totalPrice={000001}
      dayCount={4}
      morningUnitPrice={0}
      afternoonUnitPrice={4}
      morningUnits={0}
      afternoonUnits={0}
      morningAmount={7000000}
      afternoonAmount={7000000}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onPrint={handlePrint}
    />
  );
};

export default AdminProductFormExample;