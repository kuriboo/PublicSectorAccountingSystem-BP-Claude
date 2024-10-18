import React from 'react';
import styled from '@emotion/styled';

// 文章マスタ保守画面のプロパティ型定義
type SentenceMasterProps = {
  sentences: string[];
  onSave: (sentences: string[]) => void;
};

// 文章マスタ保守画面のスタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  margin-bottom: 20px;
  resize: vertical;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  font-size: 16px;
  @media (max-width: 600px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

// 文章マスタ保守画面のコンポーネント定義
const SentenceMaster: React.FC<SentenceMasterProps> = ({ sentences, onSave }) => {
  const [text, setText] = React.useState(sentences.join('\n'));
  
  // テキストエリアの変更ハンドラ
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  // 保存ボタンのクリックハンドラ  
  const handleSave = () => {
    const newSentences = text.split('\n').filter(s => s.trim() !== '');
    onSave(newSentences);
  };

  return (
    <Container>
      <Title>文章マスタ保守</Title>
      <TextArea value={text} onChange={handleChange} />
      <ButtonContainer>
        <Button onClick={handleSave}>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>      
    </Container>
  );
};

// サンプルデータとコンポーネントの使用例
const sampleSentences = [
  '下記の通り入札を執行してよろしいか。',
  'また、指名業者についてはご別添の指名業者一覧表のとおりでよろしいか。',
];

const SentenceMasterExample: React.FC = () => {
  const handleSave = (newSentences: string[]) => {
    console.log('Updated sentences:', newSentences);
  };

  return <SentenceMaster sentences={sampleSentences} onSave={handleSave} />;
};

export default SentenceMasterExample;