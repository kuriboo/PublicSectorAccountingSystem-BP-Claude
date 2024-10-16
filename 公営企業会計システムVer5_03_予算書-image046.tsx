import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  year: number;
  type: '年度' | '年';
  automaticRenewal: '更新要求額' | '直定額' | undefined;
  directDebitDate: number | undefined;
  processingResult: string;
};

type Props = {
  formData: FormData;
  onSubmit: (data: FormData) => void;
  onCancel: () => void;
  onClose: () => void;
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 4px;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 4px;
  font-size: 14px;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const RadioLabel = styled.label`
  margin-left: 4px;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 4px;
  font-size: 14px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  margin-left: 8px;
  cursor: pointer;
  
  background-color: ${props => props.color === 'primary' ? '#007bff' : '#6c757d'};
  color: #fff;

  &:hover {
    opacity: 0.8;
  }
`;

const CompanyForm: React.FC<Props> = ({ formData, onSubmit, onCancel, onClose }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container>
      <Title>予算資金計画表作成</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>作成年度</Label>
          <Select value={formData.year} onChange={e => onSubmit({ ...formData, year: Number(e.target.value) })}>
            <option value="">選択してください</option>
            {[...Array(10)].map((_, i) => (
              <option key={i} value={new Date().getFullYear() + i}>{new Date().getFullYear() + i}年度</option>
            ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>自動仕訳情報</Label>
          <RadioGroup>
            <Input
              type="radio"
              id="automaticRenewal1"
              value="更新要求額"
              checked={formData.automaticRenewal === '更新要求額'}
              onChange={e => onSubmit({ ...formData, automaticRenewal: e.target.value as FormData['automaticRenewal'] })}
            />
            <RadioLabel htmlFor="automaticRenewal1">更新要求額</RadioLabel>
          </RadioGroup>
          <RadioGroup>
            <Input
              type="radio"
              id="automaticRenewal2"
              value="直定額"
              checked={formData.automaticRenewal === '直定額'}
              onChange={e => onSubmit({ ...formData, automaticRenewal: e.target.value as FormData['automaticRenewal'] })}
            />
            <RadioLabel htmlFor="automaticRenewal2">直定額</RadioLabel>
            <Input
              type="text"
              value={formData.directDebitDate ?? ''}
              onChange={e => onSubmit({ ...formData, directDebitDate: Number(e.target.value) })}
              disabled={formData.automaticRenewal !== '直定額'}
            />
          </RadioGroup>
          <RadioGroup>
            <Input
              type="radio"
              id="automaticRenewal3"
              value={undefined}
              checked={formData.automaticRenewal === undefined}
              onChange={e => onSubmit({ ...formData, automaticRenewal: undefined, directDebitDate: undefined })}
            />
            <RadioLabel htmlFor="automaticRenewal3">未選択</RadioLabel>
          </RadioGroup>
        </FormGroup>
        <FormGroup>
          <Label>処理概要</Label>
          <TextArea
            value={formData.processingResult}
            onChange={e => onSubmit({ ...formData, processingResult: e.target.value })}
          />
        </FormGroup>
        <ButtonGroup>
          <Button type="button" onClick={onCancel} color="secondary">キャンセル</Button>
          <Button type="submit" color="primary">作成</Button>
          <Button type="button" onClick={onClose} color="secondary">終了</Button>
        </ButtonGroup>
      </form>
    </Container>
  );
};

// サンプルデータと使用例
const sampleData: FormData = {
  year: 2023,
  type: '年度',
  automaticRenewal: '更新要求額',
  directDebitDate: undefined,
  processingResult: '予算資金計画表を作成します。',
};

const CompanyFormExample: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Submitted:', data);
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  const handleClose = () => {
    console.log('Closed');
  };

  return (
    <CompanyForm
      formData={sampleData}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onClose={handleClose}
    />
  );
};

export default CompanyFormExample;