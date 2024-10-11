import React from 'react';
import styled from '@emotion/styled';

interface TaxManagerProps {
  startDate?: string;
  endDate?: string;
  beforeTax?: number;
  afterTax?: number;
  showYearCheckbox?: boolean;
}

const TaxManager: React.FC<TaxManagerProps> = ({
  startDate = '',
  endDate = '',
  beforeTax = 0, 
  afterTax = 0,
  showYearCheckbox = true,
}) => {
  // 開始日と終了日のステートを管理
  const [localStartDate, setLocalStartDate] = React.useState(startDate);
  const [localEndDate, setLocalEndDate] = React.useState(endDate);

  // 課税所得と税引後所得のステートを管理 
  const [localBeforeTax, setLocalBeforeTax] = React.useState(beforeTax);
  const [localAfterTax, setLocalAfterTax] = React.useState(afterTax);

  return (
    <Container>
      <Header>
        <Title>特定課税仕入伝票管理入力</Title>
        <DateInfo>
          <p>平成28年03月27日</p>
          <p>行政市事業会計</p>
          <p>検証用</p>
        </DateInfo>
      </Header>

      <InputContainer>
        <DateInputs>
          <DateInput
            label="伝票日付"
            value={localStartDate}
            onChange={(e) => setLocalStartDate(e.target.value)}
          />
          <Text>～</Text>
          <DateInput
            value={localEndDate}
            onChange={(e) => setLocalEndDate(e.target.value)}
          />
          {showYearCheckbox && (
            <Checkbox label="課税の支出予算科目から税額4％伝票のみ抽出" />
          )}
        </DateInputs>

        <AmountInputs>
          <AmountInput
            label="摘要"
            value={localBeforeTax}
            onChange={(value) => setLocalBeforeTax(Number(value))}
          />
          <AmountInput
            label="照合料目"
            value={localAfterTax}
            onChange={(value) => setLocalAfterTax(Number(value))}
          />
        </AmountInputs>
      </InputContainer>

      <Table>
        <thead>
          <tr>
            <th>種別</th>
            <th>発生源</th>
            <th>伝票日付</th>
            <th>番号</th>
            <th>明細</th>
            <th>借方科目</th>
            <th>貸方科目</th>
            <th>本体金額</th>
            <th>税額</th>
            <th>0</th>
            <th>電子請求入力</th>
            <th>摘要</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>支払</td>
            <td>支出決定</td>
            <td>2010/03/31</td>
            <td>451</td>
            <td>○○事業費</td>
            <td>消耗品費</td>
            <td></td>
            <td>1,000,000</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>

      <Footer>
        <Radio name="type" options={['款', '項', '目', '節', '細節', '明細']} />
        <Buttons>
          <Button variant="ok">OK</Button>
          <Button variant="clear">クリア</Button>
          <Button variant="cancel">終了</Button>
        </Buttons>
      </Footer>
    </Container>
  );
};

// Sample usage
const SampleUsage: React.FC = () => {
  return (
    <TaxManager
      startDate="2023-06-01"
      endDate="2023-06-30"
      beforeTax={1000000}
      afterTax={800000}
      showYearCheckbox={false}
    />
  );
};

// Styled components
const Container = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

const DateInfo = styled.div`
  text-align: right;

  p {
    margin: 4px 0;
  }
`;

const InputContainer = styled.div`
  margin-bottom: 16px;
`;

const DateInputs = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Text = styled.span`
  margin: 0 8px;
`;

const Checkbox = styled.label`
  display: flex;
  align-items: center;
  margin-left: 16px;
  cursor: pointer;

  input {
    margin-right: 4px;
  }
`;

const AmountInputs = styled.div`
  display: flex;
`;

const AmountInput = styled.div`
  margin-right: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Radio = styled.div`
  display: flex;

  label {
    margin-right: 8px;
  }
`;

const Buttons = styled.div`
  display: flex;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  background-color: ${({ variant }) => {
    switch (variant) {
      case 'ok':
        return '#4caf50';
      case 'clear':
        return '#f44336';
      case 'cancel':
        return '#9e9e9e';
      default:
        return '#e0e0e0';
    }
  }};
  color: ${({ variant }) => (variant === 'cancel' ? '#000' : '#fff')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Component for date input
const DateInput: React.FC<{
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, value, onChange }) => (
  <div>
    {label && <label>{label}</label>}
    <input type="date" value={value} onChange={onChange} />
  </div>
);

export default TaxManager;