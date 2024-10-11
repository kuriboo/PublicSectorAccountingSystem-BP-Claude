import React from 'react';
import styled from '@emotion/styled';

type IndustryType = '業種別' | '業種地区別' | '業種別' | '地区業種別';

type FormData = {
  industry: IndustryType;
  code1: string;
  code2: string;
  name1: string;
  name2: string;
  taxType: '全て' | '通常請求書発行事業者' | '通常請求書発行事業者以外';
  from: string;
  to: string;
  issueDate: string;
  printDate: string;
};

type Props = {
  onSubmit: (data: FormData) => void;
  onCancel: () => void;
  onPrint: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "MS UI Gothic", sans-serif;
  font-size: 9pt;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;
  max-width: 600px;
  margin-bottom: 8px;
`;

const Label = styled.label`
  display: flex;
  column-gap: 8px;
  align-items: center;
`;

const Input = styled.input`
  padding: 1px 2px;
`;

const Select = styled.select`
  padding: 1px 2px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 8px;
`;

const Button = styled.button`
  padding: 2px 8px;
`;

// 業種別業者名簿画面コンポーネント
const IndustryNameList: React.FC<Props> = ({ onSubmit, onCancel, onPrint }) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: FormData = {
      industry: formData.get('industry') as IndustryType,
      code1: formData.get('code1') as string,
      code2: formData.get('code2') as string,
      name1: formData.get('name1') as string,
      name2: formData.get('name2') as string,
      taxType: formData.get('taxType') as FormData['taxType'],
      from: formData.get('from') as string,
      to: formData.get('to') as string,
      issueDate: formData.get('issueDate') as string,
      printDate: formData.get('printDate') as string,
    };
    onSubmit(data);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          <span>出力区分</span>
          <Select name="industry" defaultValue="業種別">
            <option>業種別</option>
            <option>業種地区別</option>
            <option>業種別</option>
            <option>地区業種別</option>
          </Select>
        </Label>
        <Label>
          <span>業種</span>
          <Input type="text" name="code1" defaultValue="000" />
          <span>～</span>
          <Input type="text" name="code2" defaultValue="999" />
          <span>その他</span>
        </Label>
        <Label>
          <span>業者</span>
          <Input type="text" name="name1" defaultValue="0000000000" />
          <span>～</span>
          <Input type="text" name="name2" defaultValue="9999999999999" />
        </Label>
        <Label>
          <span>課税業者</span>
          <Select name="taxType" defaultValue="全て">
            <option>全て</option>
            <option>通常請求書発行事業者</option>
            <option>通常請求書発行事業者以外</option>
          </Select>
        </Label>
        <Label>
          <span>地区</span>
          <Select name="from">
            <option></option>
          </Select>
          <span>～</span>
          <Select name="to">
            <option></option>
          </Select>
        </Label>
        <Label>
          <span>変更届出日</span>
          <Input type="text" name="issueDate" />
          <span>～</span>
          <Input type="text" name="printDate" />
        </Label>
        <Label>
          <span>指名停止基準日</span>
          <Input type="text" name="suspensionDate" />
          <span>時点</span>
        </Label>
        <ButtonGroup>
          <Button type="submit">OK</Button>
          <Button type="button" onClick={onCancel}>クリア</Button>
          <Button type="button" onClick={onPrint}>終了</Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
};

// サンプルデータ
const sampleData: FormData = {
  industry: '業種別',
  code1: '100',
  code2: '200',
  name1: 'サンプル業者1',
  name2: 'サンプル業者2',
  taxType: '全て',
  from: '東京都',
  to: '大阪府', 
  issueDate: '2022-01-01',
  printDate: '2022-12-31',
};

// 使用例
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
  };

  const handleCancel = () => {
    console.log('キャンセルされました');
  };
  
  const handlePrint = () => {
    console.log('印刷します');
  };

  return (
    <IndustryNameList 
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onPrint={handlePrint}
    />
  );
};

export default App;