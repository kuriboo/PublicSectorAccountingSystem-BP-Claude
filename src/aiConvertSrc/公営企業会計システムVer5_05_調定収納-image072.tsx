import React from 'react';
import styled from '@emotion/styled';

// 型定義
interface FormData {
  collectionDate: string;
  paymentDeadline: string;
  referenceNumber: string;
  branch: boolean;
  frontTransfer: boolean;
  collection: boolean;
  specifyAmountAtTransfer: boolean;
  specifyAmount: string;
  unspecified: boolean;
  futureTransfer: boolean;
  reservePrinting: boolean;
  immediateTransfer: boolean;
}

interface Props {
  formData: FormData;
  onInputChange: (name: string, value: string | boolean) => void;
}

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  margin-right: 10px;
  min-width: 120px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

// コンポーネント定義
const CollectionForm: React.FC<Props> = ({ formData, onInputChange }) => {

  return (
    <Container>
      <Title>振込伝票（単票）作成</Title>
      <FormGroup>
        <Label>収納日</Label>
        <Input 
          type="text"
          name="collectionDate"
          value={formData.collectionDate}
          onChange={e => onInputChange('collectionDate', e.target.value)}
        />
        <Label>～</Label>
        <Input
          type="text" 
          name="paymentDeadline"
          value={formData.paymentDeadline}
          onChange={e => onInputChange('paymentDeadline', e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>所属</Label>
        <Input 
          type="text"
          name="referenceNumber"
          value={formData.referenceNumber}
          onChange={e => onInputChange('referenceNumber', e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>伝票種類</Label>
        <Checkbox 
          type="checkbox"
          name="branch"
          checked={formData.branch}
          onChange={e => onInputChange('branch', e.target.checked)}
        />
        <span>個別</span>
        <Checkbox
          type="checkbox" 
          name="frontTransfer"
          checked={formData.frontTransfer}
          onChange={e => onInputChange('frontTransfer', e.target.checked)}
        />
        <span>前次</span>
        <Checkbox
          type="checkbox"
          name="collection" 
          checked={formData.collection}
          onChange={e => onInputChange('collection', e.target.checked)}
        />
        <span>集合</span>
      </FormGroup>
      <FormGroup>
        <Label>伝票番号</Label>
        <Checkbox
          type="radio"
          name="specifyAmountAtTransfer"
          checked={formData.specifyAmountAtTransfer}
          onChange={e => onInputChange('specifyAmountAtTransfer', e.target.checked)} 
        />
        <span>指定しない</span>
        <Checkbox
          type="radio"
          name="specifyAmount"
          checked={!formData.specifyAmountAtTransfer}
          onChange={e => onInputChange('specifyAmountAtTransfer', !e.target.checked)}
        />
        <span>指定する</span>
        {!formData.specifyAmountAtTransfer && (
          <Input
            type="text"
            name="specifyAmount"
            value={formData.specifyAmount}
            onChange={e => onInputChange('specifyAmount', e.target.value)}
          />
        )}  
      </FormGroup>
      <FormGroup>
        <Label>電子決裁</Label>
        <Checkbox
          type="radio"
          name="unspecified" 
          checked={formData.unspecified}
          onChange={e => onInputChange('unspecified', e.target.checked)}
        />
        <span>連携する</span>
        <Checkbox
          type="radio"
          name="futureTransfer"
          checked={formData.futureTransfer}
          onChange={e => onInputChange('futureTransfer', e.target.checked)}
        /> 
        <span>連携しない</span>
      </FormGroup>
      <FormGroup>
        <Checkbox
          type="checkbox"
          name="reservePrinting"
          checked={formData.reservePrinting}
          onChange={e => onInputChange('reservePrinting', e.target.checked)}
        />
        <span>未連携</span>
        <Checkbox
          type="checkbox"
          name="immediateTransfer"
          checked={formData.immediateTransfer}
          onChange={e => onInputChange('immediateTransfer', e.target.checked)}
        /> 
        <span>連携済み(決裁中)</span>
        <Checkbox type="checkbox" />
        <span>決裁完了</span>
      </FormGroup>
    </Container>
  );
};

// サンプルデータを用いた使用例
const sampleData: FormData = {
  collectionDate: '令和05年08月14日',
  paymentDeadline: '令和05年09月14日',
  referenceNumber: '9999999',
  branch: true,
  frontTransfer: true,
  collection: true,
  specifyAmountAtTransfer: false,
  specifyAmount: '999999',
  unspecified: true,
  futureTransfer: false,
  reservePrinting: true,
  immediateTransfer: false,
};

const SampleUsage: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>(sampleData);

  const handleInputChange = (name: string, value: string | boolean) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return <CollectionForm formData={formData} onInputChange={handleInputChange} />;
};

export default SampleUsage;