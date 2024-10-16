import React from 'react';
import styled from 'styled-components';

// 検索条件の型定義
interface SearchCondition {
  todoke29: string; // 平成29年度
  startMonth: string; // 調定月(開始)
  endMonth: string; // 調定月(終了)
  syukkinDate: string; // 納入期限(開始)
  syukkinEndDate: string; // 納入期限(終了)
  payment: '未入金' | '入金済' | 'すべて'; // 区分
}

// 調定とり込み年条件コンポーネント
const SearchForm: React.FC<{
  searchCondition: SearchCondition;
  onSearchConditionChange: (condition: SearchCondition) => void;
}> = ({ searchCondition, onSearchConditionChange }) => {
  // 検索条件の変更ハンドラ
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    onSearchConditionChange({ ...searchCondition, [name]: value });
  };

  return (
    <Container>
      <Title>調定とり込み年条件（検索）</Title>
      <Form>
        <FormGroup>
          <Label>検索条件設定</Label>
          <Input
            type="text"
            name="todoke29"
            value={searchCondition.todoke29}
            onChange={handleChange}
          />
          <Button type="button">検索者</Button>
        </FormGroup>
        <FormGroup>
          <Label>とりまとめ番号</Label>
          <Input type="text" disabled />
        </FormGroup>
        <FormGroup>
          <Label>調定月</Label>
          <Input
            type="text"
            name="startMonth"
            value={searchCondition.startMonth}
            onChange={handleChange}
          />
          <span> ～ </span>
          <Input
            type="text"
            name="endMonth"
            value={searchCondition.endMonth}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>納入期限</Label>
          <Input
            type="text"
            name="syukkinDate"
            value={searchCondition.syukkinDate}
            onChange={handleChange}
          />
          <span> ～ </span>
          <Input
            type="text"
            name="syukkinEndDate"
            value={searchCondition.syukkinEndDate}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>区分</Label>
          <Select name="payment" value={searchCondition.payment} onChange={handleChange}>
            <option value="未入金">未入金</option>
            <option value="入金済">入金済</option>
            <option value="すべて">すべて</option>
          </Select>
          <Button type="button">表示</Button>
        </FormGroup>
      </Form>
      <ButtonGroup>
        <Button type="button">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="button">キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータ
const sampleCondition: SearchCondition = {
  todoke29: '平成29年度',
  startMonth: '平成29年04月01日',
  endMonth: '平成29年06月30日',
  syukkinDate: '平成29年04月01日',
  syukkinEndDate: '平成29年06月30日',
  payment: '未入金',
};

// 使用例
const App: React.FC = () => {
  const [condition, setCondition] = React.useState<SearchCondition>(sampleCondition);

  return (
    <SearchForm
      searchCondition={condition}
      onSearchConditionChange={setCondition}
    />
  );
};

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Form = styled.div`
  display: grid;
  grid-row-gap: 10px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  width: 100px;
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  > button {
    margin-left: 10px;
  }
`;

export default App;