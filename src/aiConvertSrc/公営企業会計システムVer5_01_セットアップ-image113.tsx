import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  copyFrom: string;
  copyTo: string;
  year: string;
};

type Props = {
  onSubmit: (data: FormData) => void;
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 5px;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  text-align: right;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
`;

const MasterCopyForm: React.FC<Props> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data: FormData = {
      copyFrom: (e.currentTarget.elements.namedItem('copyFrom') as HTMLSelectElement).value,
      copyTo: (e.currentTarget.elements.namedItem('copyTo') as HTMLSelectElement).value,
      year: (e.currentTarget.elements.namedItem('year') as HTMLSelectElement).value,
    };
    onSubmit(data);
  };

  return (
    <Container>
      <Title>作表制御表マスタコピー</Title>
      <form onSubmit={handleSubmit}>
        <Label>会計年度</Label>
        <Select name="year" defaultValue="29">
          <option value="29">平成29</option>
        </Select>

        <Label>作表制御表区分(コピー元)</Label>
        <Select name="copyFrom" defaultValue="001">
          <option value="001">費用構成表(会計)</option>
          <option value="002">その他の選択肢</option>
        </Select>

        <Label>作表制御表区分(コピー先)</Label>
        <Select name="copyTo" defaultValue="008">
          <option value="008">作表制御表計表</option>
          <option value="009">その他の選択肢</option>
        </Select>

        <TextArea rows={5} readOnly>
          画面指定された「作表制御表区分(コピー元)」から、
          「作表制御表区分(コピー先)」のデータを作成します。
          作表制御区分だけが異なるデータを作成したい場合は、
          ご利用下さい。

          注意)画面指定された「作表制御表区分(コピー先)」
          が既にマスタに存在する場合、メッセージを表示
          します。既に存在するデータに上書きをしても
          よい場合は、「はい」を選択してください。
        </TextArea>

        <ButtonGroup>
          <Button type="submit">終了</Button>
          <Button type="button">クリア</Button>
          <Button type="button">OK</Button>
        </ButtonGroup>
      </form>
    </Container>
  );
};

export default MasterCopyForm;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div>
      <MasterCopyForm onSubmit={handleSubmit} />
    </div>
  );
};