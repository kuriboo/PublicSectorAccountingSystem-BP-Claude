以下は、指定された条件に基づいて生成したNext.js + TypeScriptのコンポーネントコードです。

import React from 'react';
import styled from '@emotion/styled';

interface FormData {
  [key: string]: string;
}

interface DraftingSystemProps {
  title: string;
  executionDate: string;
  items: string[];
  purpose: string;
  literatureNumber: string;
  note: string;
  onSubmit: (data: FormData) => void;
}

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const DraftingSystem: React.FC<DraftingSystemProps> = ({
  title,
  executionDate,
  items,
  purpose,
  literatureNumber,
  note,
  onSubmit,
}) => {
  const [formData, setFormData] = React.useState<FormData>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>執行日</Label>
          <Input type="text" name="executionDate" value={executionDate} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label>物件</Label>
          {items.map((item, index) => (
            <Input key={index} type="text" name={`item${index}`} value={item} onChange={handleChange} required />
          ))}
        </FormGroup>
        <FormGroup>
          <Label>全選択</Label>
          <Input type="text" name="allSelection" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>通知文</Label>
          <TextArea name="notice" rows={5} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>備考</Label>
          <TextArea name="note" rows={5} value={note} onChange={handleChange} />
        </FormGroup>
        <SubmitButton type="submit">OK</SubmitButton>
      </form>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <DraftingSystem
      title="公営企業会計システム"
      executionDate="平成29年09月05日"
      items={['4229100007: 工事の受付登録', '4229100008: 工事の受付登録MV']}
      purpose="文章マスタ位置№3 平成10年5月10日指名競争入札執行した。下記の工事は、開札の結果、下記の金額で落札した。"
      literatureNumber="1"
      note="文章マスタ位置№5 備考5"
      onSubmit={handleSubmit}
    />
  );
};

export default App;

このコンポーネントは、指定されたプロパティを受け取り、それらを使用してフォームを生成します。フォームのデータはローカルの状態として管理され、送信時にonSubmitコールバックを介して親コンポーネントに渡されます。

スタイリングには、CSS-in-JSライブラリのEmotionを使用しています。レスポンシブデザインを考慮し、コンテナの最大幅を設定しています。

例外処理として、必須フィールドにrequired属性を追加し、値が入力されていない場合は送信できないようにしています。

最後に、コンポーネントの使用例としてAppコンポーネントを実装し、サンプルデータを用いてDraftingSystemコンポーネントを表示しています。