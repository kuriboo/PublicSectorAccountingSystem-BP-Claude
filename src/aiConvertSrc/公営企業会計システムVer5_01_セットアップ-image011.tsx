import React from 'react';
import styled from '@emotion/styled';

type PaymentMethod = {
  code: string;
  name: string;
};

type PaymentFormProps = {
  paymentMethods: PaymentMethod[];
  selectedPaymentMethod: string;
  onPaymentMethodChange: (code: string) => void;
};

const PaymentForm: React.FC<PaymentFormProps> = ({
  paymentMethods,
  selectedPaymentMethod,
  onPaymentMethodChange,
}) => {
  return (
    <Container>
      <Title>支払方法マスタ</Title>
      <TextField>
        <Label>支払方法コード</Label>
        <Input value={selectedPaymentMethod} readOnly />
      </TextField>
      <TextField>
        <Label>名称</Label>
        <Input />
      </TextField>
      <ButtonContainer>
        <Button>編集</Button>
        <Button>行削除</Button>
      </ButtonContainer>
      <TableContainer>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>コード</TableHeader>
              <TableHeader>名称</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {paymentMethods.map((method) => (
              <TableRow
                key={method.code}
                selected={method.code === selectedPaymentMethod}
                onClick={() => onPaymentMethodChange(method.code)}
              >
                <TableCell>{method.code}</TableCell>
                <TableCell>{method.name}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <ActionButtonContainer>
        <ActionButton>OK</ActionButton>
        <ActionButton>クリア</ActionButton>
        <ActionButton>終了</ActionButton>
      </ActionButtonContainer>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const TextField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.label`
  width: 120px;
`;

const Input = styled.input`
  flex: 1;
  padding: 4px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 16px;
`;

const Button = styled.button`
  margin-right: 8px;
  padding: 4px 8px;
`;

const TableContainer = styled.div`
  max-height: 200px;
  overflow-y: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr<{ selected?: boolean }>`
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#e0e0e0' : 'transparent')};
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

const TableCell = styled.td`
  padding: 8px;
`;

const ActionButtonContainer = styled.div`
  margin-top: 16px;
  text-align: right;
`;

const ActionButton = styled.button`
  margin-left: 8px;
  padding: 4px 8px;
`;

// Sample data and usage
const samplePaymentMethods: PaymentMethod[] = [
  { code: '01', name: '口座振込' },
  { code: '02', name: '納付書払' },
  { code: '03', name: '窓口払い' },
];

const SampleUsage: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = React.useState('01');

  return (
    <PaymentForm
      paymentMethods={samplePaymentMethods}
      selectedPaymentMethod={selectedMethod}
      onPaymentMethodChange={setSelectedMethod}
    />
  );
};

export default SampleUsage;