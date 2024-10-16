import React from 'react';
import styled from '@emotion/styled';

type PredictionFormProps = {
  // 予算科目プロパティ
  items: string[];
  itemCodes: string[];
  onItemChange: (index: number, item: string) => void;
  // 取区分プロパティ
  collectTypes: string[];
  onCollectTypeChange: (value: string) => void;
  // 消費税率プロパティ
  taxRate: number;
  onTaxRateChange: (value: number) => void;
  // 按分プロパティ
  allocations: number[];
  onAllocationChange: (index: number, value: number) => void;
  // 明細プロパティ
  details: { item: string, taxRate: number, amount: number, tax: number, total: number }[];
  // イベントハンドラ
  onPredict: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const PredictionForm: React.FC<PredictionFormProps> = ({
  items,
  itemCodes,
  onItemChange,
  collectTypes, 
  onCollectTypeChange,
  taxRate,
  onTaxRateChange,
  allocations,
  onAllocationChange,
  details,
  onPredict,
  onClear,
  onCancel,
}) => {
  return (
    <Container>
      <Header>予想決定科目登録（物品 発注無）</Header>
      <ItemInputs>
        {items.map((item, index) => (
          <ItemInput key={index}>
            <ItemLabel>予算{index === 0 ? '科目' : `細目${index}`}</ItemLabel>
            <ItemSelect
              value={item}
              onChange={(e) => onItemChange(index, e.target.value)}
            >
              {itemCodes.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </ItemSelect>
          </ItemInput>
        ))}
        <ItemLabel>科目検索</ItemLabel>
      </ItemInputs>

      <ControlInputs>
        <ControlInput>
          <ControlLabel>税区分</ControlLabel>
          <ControlSelect onChange={(e) => onCollectTypeChange(e.target.value)}>
            {collectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </ControlSelect>
        </ControlInput>
        <ControlInput>
          <ControlLabel>消費税率</ControlLabel>
          <ControlRateInput
            type="number"
            value={taxRate}
            onChange={(e) => onTaxRateChange(Number(e.target.value))}
          />
          %
        </ControlInput>
      </ControlInputs>

      <AllocationTable>
        <thead>
          <tr>
            <th>明細</th>
            <th>按分</th>
          </tr>
        </thead>
        <tbody>
          {allocations.map((allocation, index) => (
            <tr key={index}>
              <td>{details[index].item}</td>
              <td>
                <input
                  type="number"
                  value={allocation}
                  onChange={(e) =>
                    onAllocationChange(index, Number(e.target.value))
                  }
                />
                %
              </td>
            </tr>
          ))}
        </tbody>
      </AllocationTable>

      <SummaryTable>
        {Object.entries(details[0]).map(([key, value]) => (
          <tr key={key}>
            <th>{key}</th>
            <td>{typeof value === 'number' ? value.toLocaleString() : value}</td>
          </tr>
        ))}
      </SummaryTable>

      <ActionButtons>
        <ActionButton onClick={onPredict}>予測</ActionButton>
        <ActionButton onClick={onClear}>クリア</ActionButton>
        <CancelButton onClick={onCancel}>キャンセル</CancelButton>
      </ActionButtons>
    </Container>
  );
};

// Usage example
const sampleData = {
  items: ['', '', ''],
  itemCodes: ['0001', '0002', '0003'],
  collectTypes: ['課税', '非課'],
  taxRate: 10,
  allocations: [100],
  details: [
    {
      item: '税抜金額',
      taxRate: 10,
      amount: 10000,
      tax: 1000,
      total: 11000,
    },
  ],
};

const SampleUsage: React.FC = () => {
  // State variables and handlers would be implemented here
  // ...

  return (
    <PredictionForm
      items={sampleData.items}
      itemCodes={sampleData.itemCodes}
      onItemChange={() => {}}
      collectTypes={sampleData.collectTypes}
      onCollectTypeChange={() => {}}
      taxRate={sampleData.taxRate}      
      onTaxRateChange={() => {}}
      allocations={sampleData.allocations}
      onAllocationChange={() => {}}
      details={sampleData.details}
      onPredict={() => {}}
      onClear={() => {}}
      onCancel={() => {}}
    />
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: #f0f0f0;
`;

const Header = styled.h2`
  margin: 0;
`;

const ItemInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ItemInput = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ItemLabel = styled.label`
  flex: 0 0 80px;
`;

const ItemSelect = styled.select`
  flex: 1;
  padding: 4px;
`;

const ControlInputs = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ControlInput = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ControlLabel = styled.label`
  flex: 0 0 80px;
`;

const ControlSelect = styled.select`
  padding: 4px;
`;

const ControlRateInput = styled.input`
  width: 60px;
  padding: 4px;
`;

const AllocationTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    border: 1px solid #ccc;
  }

  input {
    width: 60px;
    padding: 4px;
  }
`;

const SummaryTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    border: 1px solid #ccc;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const ActionButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const CancelButton = styled(ActionButton)`
  background-color: #dc3545;
`;

export default PredictionForm;