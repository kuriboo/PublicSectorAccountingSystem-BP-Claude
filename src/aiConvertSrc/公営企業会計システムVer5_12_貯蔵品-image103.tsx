import React from 'react';
import styled from '@emotion/styled';

interface UnitCodeInputProps {
  value: string;
  onChange: (value: string) => void;
}

const UnitCodeInput: React.FC<UnitCodeInputProps> = ({ value, onChange }) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="00007の形式"
    />
  );
};

interface TransportDivisionProps {
  largeClassification: string;
  middleClassification: string;
  smallClassification: string;
}

const TransportDivision: React.FC<TransportDivisionProps> = ({
  largeClassification,
  middleClassification,
  smallClassification,
}) => {
  return (
    <Table>
      <tbody>
        <TableRow>
          <TableHeader>大分類コード</TableHeader>
          <TableData>{largeClassification || '大分類'}</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>中分類コード</TableHeader>
          <TableData>{middleClassification || '中分類'}</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>小分類コード</TableHeader>
          <TableData>{smallClassification || '小分類'}</TableData>
        </TableRow>
      </tbody>
    </Table>
  );
};

interface SingleCodeInputReservationProps {
  unitCode: string;
  setUnitCode: (value: string) => void;
  largeClassification: string;
  middleClassification: string;
  smallClassification: string;
}

const SingleCodeInputReservation: React.FC<SingleCodeInputReservationProps> = ({
  unitCode,
  setUnitCode,
  largeClassification,
  middleClassification,
  smallClassification,
}) => {
  return (
    <Container>
      <Title>単価コード貨越品番分類保守</Title>
      <Flex>
        <div>
          <Label>
            <input type="radio" checked readOnly />
            貨越
          </Label>
          <Label>
            <input type="radio" disabled />
            訂正
          </Label>
          <Label>
            <input type="radio" disabled />
            削除
          </Label>
        </div>
        <div>
          <Text>行政市水道事業会計</Text>
          <Text>予算・会計担当 ぎょうせい太郎</Text>
          <Text>平成30年06月25日</Text>
        </div>
      </Flex>
      <RadioGroup>
        <Label>
          <input type="radio" checked readOnly />
          単価コード貨越品番対応表
        </Label>
        <Label>
          <input type="radio" disabled />
          貨越品番分類マスタ
        </Label>
      </RadioGroup>
      <div>
        <Label>単価コード貨越品番対応表設定:</Label>
        <div>
          <Label>
            単成29
            <input type="text" value="年度" readOnly />
            <Button disabled>検索場所</Button>
          </Label>
          <Label>
            単価コード
            <UnitCodeInput value={unitCode} onChange={setUnitCode} />
            φ200㎜
          </Label>
        </div>
      </div>
      <Label>貨越品番分類設定:</Label>
      <TransportDivision
        largeClassification={largeClassification}
        middleClassification={middleClassification}
        smallClassification={smallClassification}
      />
      <Footer>
        <Button>前データ</Button>
        <Button>次データ</Button>
        <Button primary>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </Footer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Flex = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

const Text = styled.p`
  margin: 0;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const RadioGroup = styled.div`
  margin-bottom: 16px;
`;

const Input = styled.input`
  padding: 4px;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  background-color: ${({ primary }) => (primary ? '#007bff' : '#f0f0f0')};
  color: ${({ primary }) => (primary ? '#fff' : '#333')};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const TableRow = styled.tr`
  &:nth-of-type(odd) {
    background-color: #f0f0f0;
  }
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  white-space: nowrap;
`;

const TableData = styled.td`
  padding: 8px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

// サンプルデータを用いたコンポーネントの使用例
const App: React.FC = () => {
  const [unitCode, setUnitCode] = React.useState('0000701');

  return (
    <SingleCodeInputReservation
      unitCode={unitCode}
      setUnitCode={setUnitCode}
      largeClassification="001"
      middleClassification="001"
      smallClassification="001"
    />
  );
};

export default App;