import React from 'react';
import styled from 'styled-components';

type SubjectType = '3系' | '4系' | '両方';

interface FormData {
  kana: string;
  name: string;
  field: string;
  title: string;
  author: string;
  year: string;
  note: string;
}

interface PublicationReportFormProps {
  year: number;
  month: number;
  day: number;
  initialData?: FormData;
  onSubmit: (data: FormData) => void;
}

const PublicationReportForm: React.FC<PublicationReportFormProps> = ({
  year,
  month,
  day,
  initialData,
  onSubmit,
}) => {
  const [subjectType, setSubjectType] = React.useState<SubjectType>('両方');
  const [formData, setFormData] = React.useState<FormData>(
    initialData || {
      kana: '',
      name: '',
      field: '',
      title: '',
      author: '',
      year: '',
      note: '',
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>公害企業会計システム</Title>
      <Meta>
        行政市水道事業会計 <br />
        管理者 予算科目登録権限者 さょうせい 太郎 <br />
        平成30年04月06日
      </Meta>
      <Label>
        平成29（*）年度
        <Input type="number" value={year} readOnly />
      </Label>
      <RadioGroup>
        <span>作成区分</span>
        <label>
          <input
            type="radio"
            checked={subjectType === '3系'}
            onChange={() => setSubjectType('3系')}
          />
          3系
        </label>
        <label>
          <input
            type="radio"
            checked={subjectType === '4系'}
            onChange={() => setSubjectType('4系')}
          />
          4系
        </label>
        <label>
          <input
            type="radio"
            checked={subjectType === '両方'}
            onChange={() => setSubjectType('両方')}
          />
          両方
        </label>
      </RadioGroup>
      <Grid>
        <div>
          <Label>
            3系サブタイトル
            <Input
              type="text"
              name="kana"
              value={formData.kana}
              onChange={handleChange}
              disabled={subjectType !== '3系' && subjectType !== '両方'}
            />
          </Label>
          <Label>
            収益サブタイトル
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={subjectType !== '3系' && subjectType !== '両方'}
            />
          </Label>
          <Label>
            費用サブタイトル
            <Input
              type="text"
              name="field"
              value={formData.field}
              onChange={handleChange}
              disabled={subjectType !== '3系' && subjectType !== '両方'}
            />
          </Label>
        </div>
        <div>  
          <Label>
            4系サブタイトル
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              disabled={subjectType !== '4系' && subjectType !== '両方'}
            />
          </Label>
          <Label>
            収入サブタイトル
            <Input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              disabled={subjectType !== '4系' && subjectType !== '両方'}
            />
          </Label>
          <Label>
            支出サブタイトル
            <Input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              disabled={subjectType !== '4系' && subjectType !== '両方'}
            />
          </Label>
        </div>
      </Grid>
      <Label>
        処理概要
        <Textarea
          name="note"
          value={formData.note}
          onChange={handleChange}
          placeholder="指定した年度の決算報告書を各款別に作成します。"
        />
      </Label>
      <SubmitRow>
        <div>
          集計日時　平成30年04月02日 14時44分
        </div>
        <div>
          <button type="button">クリア</button>
          <button type="submit">終了</button>
        </div>
      </SubmitRow>
    </Form>
  );
};

const Form = styled.form`
  font-family: sans-serif;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  margin: 0 0 10px;
`;

const Meta = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 3px;
  resize: vertical; 
  min-height: 100px;
`;

const RadioGroup = styled.div`
  margin-bottom: 10px;
  
  span {
    display: block;
    margin-bottom: 5px;
  }
  
  label {
    margin-right: 10px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const SubmitRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  
  button {
    margin-left: 10px;
  }
`;

// Usage example
const ExampleForm = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <PublicationReportForm
      year={2023}
      month={4}
      day={1}
      onSubmit={handleSubmit}
    />
  );
};

export default ExampleForm;