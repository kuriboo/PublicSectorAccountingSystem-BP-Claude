import React from 'react';
import styled from '@emotion/styled';

type ProductUpdateNoticeProps = {
  updateDate: string;
  updateMessage: string;
};

const ProductUpdateNotice: React.FC<ProductUpdateNoticeProps> = ({
  updateDate,
  updateMessage,
}) => {
  return (
    <Container>
      <Title>現在の監査終了年月</Title>
      <Content>
        <UpdateDate>{updateDate}</UpdateDate>
        <UpdateMessage>{updateMessage}</UpdateMessage>
      </Content>
    </Container>
  );
};

// コンポーネントのスタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Content = styled.div`
  background-color: #fff;
  padding: 10px;
`;

const UpdateDate = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const UpdateMessage = styled.p`
  font-size: 14px;
`;

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>製品情報</h1>
      <ProductUpdateNotice
        updateDate="平成21年6月"
        updateMessage="※監査終了年月を更新します。
月次更新後の追加登録はできませんので、
必ず監査終了後に実行して下さい。"
      />
    </div>
  );
};

export default App;