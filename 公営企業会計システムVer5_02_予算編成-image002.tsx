import React from 'react';
import styled from '@emotion/styled';

type DataType = {
  date: string;
  genre: string;
  mask: boolean;
  salaryday: boolean;
  useDate: string;
}

type PropsType = {
  data: DataType;
}

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  box-sizing: border-box;
  
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const DateText = styled.div`
  font-size: 18px;
  text-align: right;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const ContentContainer = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const GenreContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const GenreLabel = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;

  @media (max-width: 600px) {
    font-size: 16px;
  } 
`;

const GenreValue = styled.div`
  font-size: 18px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const MaskContainer = styled.div`
  margin-bottom: 20px;
`;

const MaskLabel = styled.div`
  font-size: 16px;
  margin-bottom: 5px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const MaskValue = styled.div`
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 14px;  
  }
`;

const UseDateContainer = styled.div`
  font-size: 16px;
  white-space: pre-wrap;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  text-align: center;

  button {
    margin: 0 10px;
  }
`;

const DataTypeForm: React.FC<PropsType> = ({ data }) => {
  const { date, genre, mask, salaryday, useDate } = data;

  return (
    <Container>
      <Title>当年度データ作成</Title>
      <DateText>作成年月日: {date}</DateText>
      <ContentContainer>
        <GenreContainer>
          <GenreLabel>新年度:</GenreLabel>
          <GenreValue>{genre}</GenreValue>
        </GenreContainer>
        <MaskContainer>
          <MaskLabel>
            <input type="radio" checked={mask} readOnly />
            仕訳科目マスタ・予算科目マスタの次年度科目より複写
          </MaskLabel>
          <MaskValue>
            <input type="radio" checked={salaryday} readOnly />
            科目整理データより複写 
          </MaskValue>
        </MaskContainer>
        <UseDateContainer>{useDate}</UseDateContainer>
      </ContentContainer>
      <ButtonContainer>
        <button>OK</button>
        <button>クリア</button>
        <button>終了</button>
      </ButtonContainer>
    </Container>
  )
}

// Usage example
const sampleData: DataType = {
  date: "平成30年10月04日",
  genre: "平成30年度",
  mask: true,
  salaryday: false,
  useDate: "本年度のマスタ内容を新年度に複写します。新年度を指定して下さい。\n\n複写が完了後は、処理後保守画面で修正して下さい。複数回処理をすると、保守画面で修正した内容が削除されますので注意して下さい。\n\n「詳細」ボタンを押すと、マスタ設定に不整合がある場合のみ画面上に詳細を表示できます。詳細である分は、「仕訳科目マスタ」、「予算科目マスタ」画面のみです。"
}

const App: React.FC = () => {
  return (
    <div>
      <h1>データ作成画面</h1>
      <DataTypeForm data={sampleData} />
    </div>
  );
}

export default App;