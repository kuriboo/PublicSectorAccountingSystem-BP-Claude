import React from 'react';
import styled from '@emotion/styled';

type Division = '決裁区分' | '稟議区分';

interface ResultFormProps {
  division: Division;
  year: string;
  month: string;
  managementNo: string;
  documentNo: string;
  divisionType: '本分類' | '中分類' | '小分類';
  divisionCode: string;
  supplementaryBudgetFlg: boolean;
  carryOverFlg: boolean;
  managementExpenseFlg: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  font-weight: bold;
  min-width: 100px;
`;

const Select = styled.select`
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Input = styled.input`
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const Radio = styled.input`
  margin-right: 4px;
`;

const Checkbox = styled.input`
  margin-right: 4px;
`;

const ResultForm: React.FC<ResultFormProps> = ({
  division,
  year,
  month,
  managementNo,
  documentNo,
  divisionType,
  divisionCode,
  supplementaryBudgetFlg,
  carryOverFlg,
  managementExpenseFlg,
}) => {
  return (
    <Container>
      <Title>分類別棚卸結果表</Title>
      <Row>
        <Label>棚卸結果表範囲入力</Label>
      </Row>
      <Row>
        <Label>決裁区分</Label>
        <Select value={division}>
          <option value="決裁区分">決裁区分</option>
          <option value="稟議区分">稟議区分</option>
        </Select>
      </Row>
      <Row>
        <Label>棚卸年月</Label>
        <Input type="text" value={year} placeholder="yyyy" />
        <span>年</span>
        <Input type="text" value={month} placeholder="mm" />
        <span>月</span>
      </Row>
      <Row>
        <Label>管理番号</Label>
        <Input type="text" value={managementNo} />
        <span>〜</span>
        <Input type="text" value={documentNo} />
      </Row>
      <Row>
        <Label>作表区分</Label>
        <RadioGroup>
          <Label>
            <Radio type="radio" checked={divisionType === '本分類'} />
            本分類
          </Label>
          <Label>
            <Radio type="radio" checked={divisionType === '中分類'} />
            中分類
          </Label>
          <Label>
            <Radio type="radio" checked={divisionType === '小分類'} />
            小分類
          </Label>
        </RadioGroup>
      </Row>
      <Row>
        <Label>分類コード</Label>
        <Input type="text" value={divisionCode} />
        <span>〜</span>
        <Input type="text" value={divisionCode} />
      </Row>
      <Row>
        <Label>棚卸増減区分</Label>
        <RadioGroup>
          <Label>
            <Radio type="radio" />
            すべて
          </Label>
          <Label>
            <Radio type="radio" />
            棚卸増
          </Label>
          <Label>
            <Radio type="radio" />
            棚卸減
          </Label>
        </RadioGroup>
      </Row>
      <Row>
        <Label>
          <Checkbox type="checkbox" checked={supplementaryBudgetFlg} />
          棚卸時に増減のない品番を印字
        </Label>
      </Row>
      <Row>
        <Label>
          <Checkbox type="checkbox" checked={carryOverFlg} />
          繰越分在高、棚卸高のない品番を印字
        </Label>
      </Row>
      <Row>
        <Label>
          <Checkbox type="checkbox" checked={managementExpenseFlg} />
          管理費を含む
        </Label>
      </Row>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <ResultForm
      division="決裁区分"
      year="2023"
      month="06"
      managementNo="000000"
      documentNo="999999"
      divisionType="本分類"
      divisionCode="000"
      supplementaryBudgetFlg={true}
      carryOverFlg={true}
      managementExpenseFlg={false}
    />
  );
};

export default App;