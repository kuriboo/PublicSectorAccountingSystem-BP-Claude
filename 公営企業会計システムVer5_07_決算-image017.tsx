import React from 'react';
import styled from 'styled-components';

// 貸出照会画面のプロパティ定義
type RentalInquiryProps = {
  date: string;
  size: 'A4' | 'B4' | 'A4縦';
  title: string;
  printSide: 'する' | 'しない';
  copies: number;
  remarks: string;
  rentDate: string;
  rentBy: string;
  returnScheduledDate: string;
};

// 貸出照会コンポーネント
const RentalInquiry: React.FC<RentalInquiryProps> = ({
  date,
  size,
  title,
  printSide,
  copies,
  remarks,
  rentDate,
  rentBy,
  returnScheduledDate,
}) => {
  return (
    <Container>
      <Title>貸出照会</Title>
      <DateText>行政市水道事業会計 管理者 予算科目登録権限者 きょうせい 太郎 平成30年04月06日</DateText>
      
      <FormGroup>
        <Label>作成日</Label>
        <DateValue>{date}</DateValue>
      </FormGroup>

      <FormGroup>
        <Label>サイズ</Label>
        <RadioButton type="radio" checked={size === 'A4'} readOnly /> <span>A4</span>
        <RadioButton type="radio" checked={size === 'B4'} readOnly /> <span>B4</span>  
        <RadioButton type="radio" checked={size === 'A4縦'} readOnly /> <span>A4縦</span>
      </FormGroup>

      <FormGroup>
        <Label>タイトル</Label>
        <Input type="text" value={title} readOnly />
      </FormGroup>

      <FormGroup>
        <Label>頁印字</Label>  
        <RadioButton type="radio" checked={printSide === 'する'} readOnly /> <span>する</span>
        <RadioButton type="radio" checked={printSide === 'しない'} readOnly /> <span>しない</span>
      </FormGroup>

      <FormGroup>
        <Label>部数</Label>
        <Input type="number" value={copies} readOnly />
      </FormGroup>

      <FormGroup>
        <Label>処理概要</Label>
        <Textarea value={remarks} readOnly />
      </FormGroup>

      <FormGroup>
        <BottomLabel>集計日時</BottomLabel>
        <BottomValue>{rentDate} 15時47分</BottomValue>
      </FormGroup>

      <FormGroup>
        <BottomLabel>集計対象</BottomLabel> 
        <BottomValue>ブロック</BottomValue>
      </FormGroup>

      <FormGroup>
        <BottomLabel>集計対象団体</BottomLabel>
        <BottomValue>市北ブロック</BottomValue> 
      </FormGroup>

      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// スタイリング用のコンポーネント
const Container = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

const DateText = styled.p`
  text-align: right;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  width: 100px;
  margin-right: 10px;
`;

const DateValue = styled.span`
  font-weight: bold;  
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
`;

const Textarea = styled.textarea`
  flex: 1;
  padding: 5px;
`;

const BottomLabel = styled(Label)`
  width: 120px;
`;

const BottomValue = styled.span`
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 5px 20px;
  font-size: 16px;
  cursor: pointer;
`;

// サンプルデータ
const sampleData: RentalInquiryProps = {
  date: '平成30年03月31日',
  size: 'A4',  
  title: '',
  printSide: 'する',
  copies: 1,
  remarks: '決算貸借対照表を作成します。',
  rentDate: '平成30年04月06日',
  rentBy: 'ブロック',
  returnScheduledDate: '市北ブロック',
};

// 表示用コンポーネント
const App: React.FC = () => {
  return (
    <div>
      <RentalInquiry {...sampleData} />
    </div>
  );  
};

export default App;