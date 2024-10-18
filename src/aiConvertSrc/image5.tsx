import React from 'react';
import styled from '@emotion/styled';

type ZaimuData = {
  yosan: string;
  shikibetsu: string;
  entryDate: string;
  keihi: string;
  yonyuDate: string;
  kenseiDate: string;
  torihikisaki: string;
  shohizei: string;
  shohizeiCategory: string;
  yusouhi: string;
  comment: string;
  picture: string;
  attachedFile: string;
  tantou: string;
  shonin: string;
}

type Props = {
  data: ZaimuData;
}

const ZaimuDataForm: React.FC<Props> = ({ data }) => {
  // デフォルト値の設定
  const defaultValues: ZaimuData = {
    yosan: '',
    shikibetsu: '',
    entryDate: '',
    keihi: '',
    yonyuDate: '',
    kenseiDate: '',
    torihikisaki: '',
    shohizei: '',
    shohizeiCategory: '',
    yusouhi: '',
    comment: '',
    picture: '',
    attachedFile: '',
    tantou: '',
    shonin: ''
  };

  // プロパティからデータを取得し、デフォルト値で補完
  const {
    yosan = '',
    shikibetsu = '',
    entryDate = '',
    keihi = '',
    yonyuDate = '',
    kenseiDate = '',
    torihikisaki = '',
    shohizei = '',
    shohizeiCategory = '',
    yusouhi = '',
    comment = '',
    picture = '',
    attachedFile = '',
    tantou = '',
    shonin = ''
  } = { ...defaultValues, ...data };

  return (
    <Container>
      <Row>
        <Label>予算科目コード</Label>
        <Value>{yosan}</Value>

        <Label>年度</Label>  
        <Value>{entryDate.split('/')[0]}</Value>
      </Row>
      
      <Row>
        <Label>予算科目区分</Label>
        <Value>{shikibetsu}</Value>
      </Row>

      <Row>  
        <Label>経費</Label>
        <Value>{keihi}%</Value>

        <Label>予算科目区分</Label>
        <Value>{kenseiDate}</Value>
      </Row>

      <Row>
        <Label>仕入先</Label>  
        <Value>{torihikisaki}</Value>
      </Row>

      <Row>
        <Label>税務区分</Label>
        <Value>{shohizei}</Value>

        <Label>消費税率</Label>
        <Value>{shohizeiCategory}</Value>
      </Row>

      <Row>  
        <Label>輸送費</Label>
        <Value>{yusouhi}</Value>
      </Row>

      <Row>
        <Label>摘要</Label>
        <Value>{comment}</Value>
      </Row>

      <Row>  
        <Label>写真</Label>
        <Value>{picture}</Value>
      </Row>

      <Row>
        <Label>添付</Label>  
        <Value>{attachedFile}</Value>
      </Row>
      
      <ButtonContainer>
        <SubmitButton>事業科目</SubmitButton>
        <CancelButton>クリア</CancelButton>
        <SubmitButton>OK</SubmitButton>
      </ButtonContainer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 12px;  
  }
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
  }  
`;

const Label = styled.div`
  width: 150px;
  color: navy;
  margin-right: 10px;

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 5px;
  }
`;

const Value = styled.div`
  flex: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
  border: none; 
  border-radius: 4px;
  background-color: #1e88e5;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #1565c0;
  }
`;

const CancelButton = styled(SubmitButton)`
  background-color: #e0e0e0;
  color: black;

  &:hover { 
    background-color: #bdbdbd;
  }  
`;

// サンプルデータを使用した表示用コンポーネント
const SampleDataDisplay: React.FC = () => {
  const sampleData: ZaimuData = {
    yosan: '00020101',
    shikibetsu: '2 運営経費',  
    entryDate: '2023/01/13',
    keihi: '05 8',
    yonyuDate: '', 
    kenseiDate: '2 翌期末払',
    torihikisaki: '0620501 〇〇商事',
    shohizei: '課税',
    shohizeiCategory: '2', 
    yusouhi: '000000',
    comment: '',
    picture: '',
    attachedFile: '', 
    tantou: '',
    shonin: ''
  };

  return (
    <div>
      <h2>財務データフォーム</h2>
      <ZaimuDataForm data={sampleData} />
    </div>
  );
};

export default SampleDataDisplay;