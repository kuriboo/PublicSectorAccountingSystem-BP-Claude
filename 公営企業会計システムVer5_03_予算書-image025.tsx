import React from 'react';
import styled from '@emotion/styled';

type BookInfo = {
  year: number;
  month: number;
  day: number;
};

type SeriesInfo = {
  planned: boolean;
  actual: boolean;
  size: string;
  subtitle: string;
  title: string;
};

type PaperInfo = {
  pages: number;
  type: 'A4' | string;
  style: string;
  subStyle: string;
  seal: boolean;
  orientation: 'vertical' | 'horizontal';
  copies: number;
};

type SegmentProps = {
  bookDateInfo: BookInfo;
  dataInfo: string;
  seriesInfo: SeriesInfo;
  paperInfo: PaperInfo;
};

const Container = styled.div`
  font-family: sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  display: inline-block;
  width: 120px;
  @media (max-width: 600px) {
    width: auto;
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  width: 180px;
  padding: 4px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Select = styled.select`
  width: 180px;
  padding: 4px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const SegmentPreview: React.FC<SegmentProps> = ({
  bookDateInfo,
  dataInfo,
  seriesInfo,
  paperInfo,
}) => {
  return (
    <Container>
      <h2>当初予算実施計画書作成</h2>
      <Row>
        <Label>年度</Label>
        <Input type="number" value={bookDateInfo.year || ''} readOnly />
      </Row>
      <Row>
        <Label>説明データ作成情報</Label>
        <Input type="text" value={dataInfo || ''} readOnly />
      </Row>
      <Row>
        <Label>範囲指定</Label>
        <Input type="text" value={seriesInfo.planned ? '予算' : '追正'} readOnly />
        <Input type="text" value={seriesInfo.actual ? '見込' : ''} readOnly />
      </Row>
      <Row>
        <Label>書式</Label>
        <Input type="text" value={seriesInfo.size} readOnly />
      </Row>
      <Row>
        <Label>サイズ</Label>  
        <Input type="number" value={paperInfo.pages || 0} readOnly /> 
      </Row>
      <Row>
        <Label>タイトル</Label>
        <Input type="text" value={seriesInfo.title || ''} readOnly />
      </Row>
      <Row>  
        <Label>サブタイトル</Label>
        <Input type="text" value={seriesInfo.subtitle || ''} readOnly />
      </Row>
      <Row>
        <Label>様式</Label>  
        <Select value={paperInfo.type || ''} readOnly>
          <option value="A4">A4</option>
          <option value="">その他</option>  
        </Select>
      </Row>
      <Row>
        <Label>綴じ方</Label>
        <Select value={paperInfo.style || ''} readOnly>
          <option value="左綴じ">左綴じ</option>
          <option value="上綴じ">上綴じ</option>
          <option value="右綴じ">右綴じ</option>
        </Select>  
      </Row>
      <Row>
        <Label>製本</Label>  
        <Input type="text" value={paperInfo.seal ? 'する' : 'しない'} readOnly />
      </Row>
      <Row>
        <Label>部数</Label>
        <Input type="number" value={paperInfo.copies || 1} readOnly />  
      </Row>
    </Container>
  );  
};

// サンプル データ
const sampleData: SegmentProps = {
  bookDateInfo: {
    year: 2022,
    month: 11, 
    day: 1,
  },
  dataInfo: '見積要求額',
  seriesInfo: {
    planned: true,
    actual: false,  
    size: 'A4', 
    title: '予算',
    subtitle: '',
  },
  paperInfo: {
    pages: 9, 
    type: 'A4',
    style: '',
    subStyle: '', 
    seal: false,
    orientation: 'vertical',
    copies: 1,
  },
};

// プレビュー用コンポーネント  
const PreviewPage: React.FC = () => {
  return (
    <div>
      <h1>当初予算実施計画書 プレビュー</h1>
      <SegmentPreview {...sampleData} />
    </div>
  );
};

export default PreviewPage;