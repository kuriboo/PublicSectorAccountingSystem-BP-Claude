import React from 'react';
import styled from 'styled-components';

// 形状リストの型定義
type Shape = {
  label: string;
  value: number;
}

// プロパティの型定義
type Props = {
  shapes: Shape[];
  checkedShape: number;
  onChangeShape: (value: number) => void;
  shapeList: number[];
  onChangeShapeList: (index: number, value: number) => void;
  unit: string;
  unitPrice: number;
  onChangeUnitPrice: (value: number) => void;
  quantity: number;
  onChangeQuantity: (value: number) => void;
  consumptionTaxRate: number;
  onChangeConsumptionTaxRate: (value: number) => void;
}

// コンポーネントの定義
const EstimateForm: React.FC<Props> = ({
  shapes,
  checkedShape,
  onChangeShape,
  shapeList,
  onChangeShapeList,
  unit,
  unitPrice,
  onChangeUnitPrice,
  quantity,
  onChangeQuantity,
  consumptionTaxRate,
  onChangeConsumptionTaxRate,
}) => {
  // 小計の計算
  const subtotal = unitPrice * quantity;

  // 消費税額の計算  
  const consumptionTax = Math.floor(subtotal * (consumptionTaxRate / 100));

  // 合計の計算
  const total = subtotal + consumptionTax;

  return (
    <Container>
      <h3>見積条件</h3>
      <InputField>
        <label>形状選択</label>
        <select value={checkedShape} onChange={e => onChangeShape(Number(e.target.value))}>
          <option value={0}>選択してください</option>
          {shapes.map((shape, index) => (
            <option key={index} value={shape.value}>
              {shape.label}
            </option>
          ))}
        </select>
      </InputField>
      <Table>
        <thead>
          <tr>
            <th>形状リスト</th>
            <th>形状寸法</th>
            <th>単位</th>
          </tr>
        </thead>
        <tbody>
          {shapeList.map((value, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <input
                  type="number"
                  value={value}
                  onChange={e => onChangeShapeList(index, Number(e.target.value))}
                />
              </td>
              <td>{unit}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <PriceInfo>
        <InputField>
          <label>単価</label>
          <input
            type="number"
            value={unitPrice}
            onChange={e => onChangeUnitPrice(Number(e.target.value))}
          />
        </InputField>
        <InputField>
          <label>数量</label>
          <input
            type="number"
            value={quantity}
            onChange={e => onChangeQuantity(Number(e.target.value))}
          />
        </InputField>
        <InputField>
          <label>消費税率</label>
          <input
            type="number"
            value={consumptionTaxRate}
            onChange={e => onChangeConsumptionTaxRate(Number(e.target.value))}
          />
          %
        </InputField>
      </PriceInfo>
      <Result>
        <div>
          <label>小計</label>
          <span>{subtotal.toLocaleString()}</span>
        </div>
        <div>
          <label>消費税額</label>
          <span>{consumptionTax.toLocaleString()}</span>
        </div>
        <div>
          <label>合計</label>
          <span>{total.toLocaleString()}</span>
        </div>
      </Result>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const InputField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  label {
    width: 100px;
  }

  input, select {
    flex: 1;  
    padding: 5px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    border: 1px solid #ccc;
    padding: 5px;
    text-align: center;
  }

  input {
    width: 80px;
  }
`;

const PriceInfo = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const Result = styled.div`
  text-align: right;

  > div {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    margin-bottom: 5px;
  }

  label {
    font-weight: bold;
  }
`;

// サンプルデータを使った使用例
const SampleData = () => {
  const [checkedShape, setCheckedShape] = React.useState(13);
  const [shapeList, setShapeList] = React.useState([13, 20, 25, 30, 40]);
  const [unitPrice, setUnitPrice] = React.useState(157500);
  const [quantity, setQuantity] = React.useState(1);
  const [consumptionTaxRate, setConsumptionTaxRate] = React.useState(10);

  return (
    <EstimateForm
      shapes={[
        { label: '13mm', value: 13 },
        { label: '20mm', value: 20 },
        { label: '25mm', value: 25 },
        { label: '30mm', value: 30 },
        { label: '40mm', value: 40 },
      ]}
      checkedShape={checkedShape}
      onChangeShape={setCheckedShape}
      shapeList={shapeList}
      onChangeShapeList={(index, value) => {
        const newShapeList = [...shapeList];
        newShapeList[index] = value;
        setShapeList(newShapeList);
      }}
      unit="mm"
      unitPrice={unitPrice}
      onChangeUnitPrice={setUnitPrice}
      quantity={quantity}
      onChangeQuantity={setQuantity}
      consumptionTaxRate={consumptionTaxRate}
      onChangeConsumptionTaxRate={setConsumptionTaxRate}
    />
  );
};

export default EstimateForm;