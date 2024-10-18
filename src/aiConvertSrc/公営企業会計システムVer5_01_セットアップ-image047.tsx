import React from 'react';
import styled from 'styled-components';

// 事業情報の型定義
type BusinessInfo = {
  id: string;
  name: string;
  fiscalCode: string;
};

// コンポーネントのプロパティの型定義
type Props = {
  businessInfo?: BusinessInfo;
  agency?: string;
  name?: string;
  fiscalYear?: 'current' | 'next';
  industry?: string;
  corporateNumber?: string;
  onSave?: () => void;
  onCancel?: () => void;
  onNext?: () => void;
};

// コンポーネントの定義
const BusinessInfoForm: React.FC<Props> = ({
  businessInfo = {
    id: '01',
    name: '01',
    fiscalCode: '0001',
  },
  agency = '宿泊輸送等の業務委託',
  name = '宿泊輸送業務委託',
  fiscalYear = 'current',
  industry = '',
  corporateNumber = '',
  onSave,
  onCancel,
  onNext,
}) => {
  // 保存ボタンクリック時の処理
  const handleSave = () => {
    // 保存処理の実装
    // ...
    onSave?.();
  };

  // キャンセルボタンクリック時の処理 
  const handleCancel = () => {
    // キャンセル処理の実装
    // ...
    onCancel?.();
  };

  // 次へボタンクリック時の処理
  const handleNext = () => {  
    // 次へ処理の実装
    // ...
    onNext?.();
  };

  return (
    <Container>
      <Title>事業・施策・施策内訳マスタ</Title>
      <Info>
        <Label>事業</Label>
        <Data>
          <span>{businessInfo.id}</span>
          <span>{businessInfo.name}</span>
          <span>{businessInfo.fiscalCode}</span>
        </Data>
      </Info>
      <Info>
        <Label>名称</Label>
        <Input type="text" value={agency} />
      </Info>  
      <Info>
        <Label>略名</Label>
        <Input type="text" value={name} />
      </Info>
      <Info>
        <Label>事業内/外</Label>
        <Select>
          <option value="internal">内</option>
          <option value="external">外</option>
        </Select>
      </Info>
      <Info>  
        <Label>施設種別</Label>
        <Input type="text" value={industry} />
      </Info>
      <Info>
        <Label>企業情報</Label>
        <Select>
          <option value="private">対象</option>
          <option value="public">対象外</option>
        </Select>
      </Info>
      <Info>
        <Label>施工理由</Label>
        <TextArea />  
      </Info>
      <ButtonGroup>
        <Button onClick={handleSave}>OK</Button>
        <Button onClick={handleCancel}>クリア</Button>
        <Button onClick={handleNext}>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータを使用した表示用コンポーネント
const SampleBusinessInfoForm = () => {
  return (
    <BusinessInfoForm 
      fiscalYear="next"
      industry="宿泊業"
      corporateNumber="1234567890123"
    />
  );
};

// スタイリング
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.span`
  width: 120px;
  font-weight: bold;
`;

const Data = styled.div`
  span {
    margin-right: 10px;
  }  
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
`;

const Select = styled.select`
  flex: 1;
  padding: 5px;
`;

const TextArea = styled.textarea`
  flex: 1;
  padding: 5px;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  text-align: right;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
`;

export default BusinessInfoForm;