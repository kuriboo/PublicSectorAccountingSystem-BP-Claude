import React from 'react';
import styled from '@emotion/styled';

type MasterListProps = {
  title: string;
  fromCode: string;
  toCode: string;
};

const MasterList: React.FC<MasterListProps> = ({ title, fromCode, toCode }) => {
  // 例外処理: タイトル、開始コード、終了コードが空の場合はエラーメッセージを表示
  if (!title || !fromCode || !toCode) {
    return <ErrorMessage>必須項目が入力されていません。</ErrorMessage>;
  }

  return (
    <Container>
      <Title>{title}</Title>
      <RangeContainer>
        <RangeLabel>範囲指定</RangeLabel>
        <RangeInputContainer>
          <RangeInput value={fromCode} readOnly />
          <RangeSeparator>~</RangeSeparator>
          <RangeInput value={toCode} readOnly />
        </RangeInputContainer>
      </RangeContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button primary>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータを使用した表示用コンポーネント
const SampleMasterList = () => {
  const sampleData = {
    title: '所属担当マスタリスト',
    fromCode: '0000001',
    toCode: '9999999',
  };

  return <MasterList {...sampleData} />;
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
  width: 400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const RangeContainer = styled.div`
  margin-bottom: 20px;
`;

const RangeLabel = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const RangeInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RangeInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 120px;
`;

const RangeSeparator = styled.span`
  margin: 0 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.primary ? '#007bff' : '#f0f0f0')};
  color: ${(props) => (props.primary ? '#fff' : '#333')};
  font-weight: bold;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    opacity: 0.8;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
  margin-bottom: 10px;
`;

export default SampleMasterList;