import React from 'react';
import styled from 'styled-components';

// 伝票の型定義
interface DenpyoProps {
  startDate: string;
  endDate: string;
  denpyoBango: string;
  shiharaiKigen: '予算所属' | '記案所属';
  tsukamatsuNo?: string;
  shiharaiHoho?: string;
  shiharaiSaki: boolean[];
  densiKessai: '連携する' | '連携しない';
  option: boolean[];
}

// 伝票コンポーネント
const Denpyo: React.FC<DenpyoProps> = ({
  startDate,
  endDate,
  denpyoBango,
  shiharaiKigen,
  tsukamatsuNo = '',
  shiharaiHoho = '',
  shiharaiSaki,
  densiKessai,
  option,
}) => {
  return (
    <Container>
      <Title>振替伝票(一覧)作成</Title>
      <DateWrapper>
        <Label>振替日</Label>
        <DateInput value={startDate} readOnly />
        <Separator>〜</Separator>
        <DateInput value={endDate} readOnly />
      </DateWrapper>
      <Row>
        <Label>所属</Label>
        <Input value={denpyoBango} readOnly />
      </Row>
      <Row>
        <RadioButton
          type="radio"
          checked={shiharaiKigen === '予算所属'}
          readOnly
        />
        <RadioLabel>予算所属</RadioLabel>
        <RadioButton
          type="radio"
          checked={shiharaiKigen === '記案所属'}
          readOnly
        />
        <RadioLabel>記案所属</RadioLabel>
      </Row>
      <Row>
        <Label>伝票番号</Label>
        <Input value={tsukamatsuNo} readOnly={!tsukamatsuNo} />
        <Separator>〜</Separator>
        <Input value={shiharaiHoho} readOnly={!shiharaiHoho} />
      </Row>
      <Row>
        <Label>伝票範囲</Label>
        <Checkbox type="checkbox" checked={shiharaiSaki[0]} readOnly />
        <CheckboxLabel>振替分</CheckboxLabel>
        <Checkbox type="checkbox" checked={shiharaiSaki[1]} readOnly />
        <CheckboxLabel>調定分</CheckboxLabel>
        <Checkbox type="checkbox" checked={shiharaiSaki[2]} readOnly />
        <CheckboxLabel>支払分</CheckboxLabel>
        <Checkbox type="checkbox" checked={shiharaiSaki[3]} readOnly />
        <CheckboxLabel>決算仕訳分</CheckboxLabel>
      </Row>
      <Row>
        <RadioButton
          type="radio"
          checked={densiKessai === '連携する'}
          readOnly
        />
        <RadioLabel>連携する</RadioLabel>
        <RadioButton
          type="radio"
          checked={densiKessai === '連携しない'}
          readOnly
        />
        <RadioLabel>連携しない</RadioLabel>
      </Row>
      <Row>
        <Checkbox type="checkbox" checked={option[0]} readOnly />
        <CheckboxLabel>未連携</CheckboxLabel>
        <Checkbox type="checkbox" checked={option[1]} readOnly />
        <CheckboxLabel>連携済み(決裁中)</CheckboxLabel>
        <Checkbox type="checkbox" checked={option[2]} readOnly />
        <CheckboxLabel>決裁完了</CheckboxLabel>
      </Row>
      <Note>
        ※連携する場合、[未連携]のみ出力対象となります。
        「未連携」には、連携先システムで削除された伝票も含まれます。
      </Note>
    </Container>
  );
};

// サンプルデータを用いた使用例
const App: React.FC = () => {
  const denpyoData: DenpyoProps = {
    startDate: '令和04年02月15日',
    endDate: '令和04年02月15日',
    denpyoBango: '1234567',
    shiharaiKigen: '予算所属',
    shiharaiSaki: [true, true, true, false],
    densiKessai: '連携する',
    option: [true, true, true],
  };

  return (
    <div>
      <h1>伝票コンポーネントの使用例</h1>
      <Denpyo {...denpyoData} />
    </div>
  );
};

export default App;

// styled-componentsを使ったスタイリング
const Container = styled.div`
  font-family: sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const DateInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  margin-right: 5px;
`;

const Separator = styled.span`
  margin: 0 5px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  margin-right: 5px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const CheckboxLabel = styled.label`
  margin-right: 10px;
`;

const Note = styled.p`
  font-size: 12px;
  color: #666;
`;