import React from 'react';
import styled from '@emotion/styled';

interface CompanyInfoFormProps {
  averageAge: number;
  area: string;
  district: string;
  changeStartDate: string;
  changeEndDate: string;
  stopStartDate: string;
  stopEndDate: string;
}

const CompanyInfoForm: React.FC<CompanyInfoFormProps> = ({
  averageAge,
  area,
  district,
  changeStartDate,
  changeEndDate,
  stopStartDate,
  stopEndDate,
}) => {
  return (
    <Container>
      <Title>50音順業者名簿</Title>
      <Form>
        <Field>
          <Label>平成28</Label>
          <Input type="number" value={averageAge} />
          年度
        </Field>
        <Field>
          <Label>50音順</Label>
          <Select value={area}>
            <option value="">選択してください</option>
            {/* 選択肢のオプションを追加 */}
          </Select>
          〜
          <Select value={district}>
            <option value="">選択してください</option>
            {/* 選択肢のオプションを追加 */}
          </Select>
        </Field>
        <Field>
          <Label>地区</Label>
          <DateInput
            type="date"
            value={changeStartDate}
            min="2001-01-01"
            max="2001-12-31"
          />
          〜
          <DateInput
            type="date"
            value={changeEndDate}
            min="2001-01-01"
            max="2001-12-31"
          />
        </Field>
        <Field>
          <Label>変更届出日</Label>
          <DateInput type="date" value={stopStartDate} />
          時点
        </Field>
        <Field>
          <Label>経審有効期限</Label>
          <DateInput type="date" value={stopEndDate} />
          まで
        </Field>
      </Form>
      <ButtonContainer>
        <Button type="button">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// スタイリング用のコンポーネント
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.div`
  display: grid;
  grid-gap: 10px;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const DateInput = styled(Input)`
  width: 150px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

// サンプルデータを使用した表示用コンポーネント
const App: React.FC = () => {
  return (
    <CompanyInfoForm
      averageAge={28}
      area="東京"
      district="新宿区"
      changeStartDate="2023-04-01"
      changeEndDate="2023-09-30"
      stopStartDate="2023-04-01"
      stopEndDate="2023-09-30"
    />
  );
};

export default App;