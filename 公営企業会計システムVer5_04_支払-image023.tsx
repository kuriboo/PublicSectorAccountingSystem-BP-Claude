import React from 'react';
import styled from '@emotion/styled';

interface OrderInputFormProps {
  onSubmit: (values: OrderInputValues) => void;
}

interface OrderInputValues {
  productName: string;
  deliveryDate: string;
  remarks: string;
  representativeName: string;
  postalCode: string;
  address: string;
  phoneNumber: string;
  faxNumber: string;
  paymentMethod: string;
  businessName: string;
  businessType: string;
}

const OrderInputForm: React.FC<OrderInputFormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values: OrderInputValues = {
      productName: formData.get('productName') as string,
      deliveryDate: formData.get('deliveryDate') as string,
      remarks: formData.get('remarks') as string,
      representativeName: formData.get('representativeName') as string,
      postalCode: formData.get('postalCode') as string,
      address: formData.get('address') as string,
      phoneNumber: formData.get('phoneNumber') as string,
      faxNumber: formData.get('faxNumber') as string,
      paymentMethod: formData.get('paymentMethod') as string,
      businessName: formData.get('businessName') as string,
      businessType: formData.get('businessType') as string,
    };
    onSubmit(values);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>発注入力</Title>
      <Row>
        <RadioButton type="radio" id="order" name="inputType" value="order" defaultChecked />
        <Label htmlFor="order">発注</Label>
        <RadioButton type="radio" id="fax" name="inputType" value="fax" />
        <Label htmlFor="fax">FAX発送</Label>
        <RadioButton type="radio" id="salesSlip" name="inputType" value="salesSlip" />
        <Label htmlFor="salesSlip">売上伝票発行</Label>
      </Row>
      <Label>年度</Label>
      <Input type="number" name="year" defaultValue={23} />
      <Row>
        <Column>
          <Label>代表者</Label>
          <Input type="text" name="representativeName" />
        </Column>
        <Column>
          <Label>住所</Label>
          <Input type="text" name="address" />
        </Column>
        <Column>
          <Label>電話番号</Label>
          <Input type="tel" name="phoneNumber" />
        </Column>
        <Column>
          <Label>FAX番号</Label>
          <Input type="tel" name="faxNumber" />
        </Column>
      </Row>
      <Row>
        <Column>
          <Label>自由記号</Label>
          <Input type="text" name="remarks" />
        </Column>
        <Column>
          <Label>希望納期</Label>
          <Input type="date" name="deliveryDate" />
        </Column>
      </Row>
      <Table>
        <thead>
          <tr>
            <HeaderCell>No.</HeaderCell>
            <HeaderCell>品名</HeaderCell>
            <HeaderCell>数量</HeaderCell>
            <HeaderCell>単価</HeaderCell>
            <HeaderCell>金額</HeaderCell>
            <HeaderCell>消費税</HeaderCell>
            <HeaderCell>支払日</HeaderCell>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Cell>1</Cell>
            <Cell>
              <Input type="text" name="productName" />
            </Cell>
            <Cell>100</Cell>
            <Cell>300</Cell>
            <Cell>291,300</Cell>
            <Cell>11,041</Cell>
            <Cell>平成29年09月28日</Cell>
          </tr>
        </tbody>
      </Table>
      <Row>
        <Column>
          <Label>支払番号</Label>
          <Input type="text" name="paymentMethod" />
        </Column>
        <Column>
          <Label>行照価</Label>
          <Input type="text" name="businessName" />
        </Column>
      </Row>
      <Row>
        <Column>
          <Label>合計金額</Label>
          <div>563,660</div>
        </Column>
        <Column>
          <Label>合計消費税</Label>
          <div>22,062</div>
        </Column>
      </Row>
      <ButtonRow>
        <Button type="button">OK</Button>
        <Button type="button">クリア</Button>
        <SubmitButton type="submit">終了</SubmitButton>
      </ButtonRow>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
`;

const Row = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
`;

const RadioButton = styled.input`
  margin-right: 8px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const HeaderCell = styled.th`
  padding: 8px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
`;

const Cell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  background-color: #ccc;
  cursor: pointer;
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (values: OrderInputValues) => {
    console.log(values);
    // Handle form submission
  };

  return (
    <div>
      <h1>Order Input Form</h1>
      <OrderInputForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;