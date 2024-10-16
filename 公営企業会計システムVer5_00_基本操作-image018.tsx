import React from 'react';
import styled from '@emotion/styled';

type NoticeProps = {
  dates: string[];
};

const NoticeContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const NoticeTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const NoticeText = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

const NoticeDates = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const NoticeDateItem = styled.li`
  font-size: 14px;
  margin-bottom: 5px;
`;

const Notice: React.FC<NoticeProps> = ({ dates }) => {
  return (
    <NoticeContainer>
      <NoticeTitle>お知らせ情報</NoticeTitle>
      <NoticeText>
        会計担当からお知らせ 今月の会計締処理は{dates[0]}(△)となります。伝票提出漏れがないようよろしくお願いいたします。
      </NoticeText>
      <NoticeText>管財課からのお知らせ 電気設備点検を、以下の日程で実施いたします。</NoticeText>
      <NoticeDates>
        {dates.map((date, index) => (
          <NoticeDateItem key={index}>{date}を予備日といたします。</NoticeDateItem>
        ))}
        <NoticeDateItem>上記以外の庁舎24日(日)を予備日といたします。</NoticeDateItem>
      </NoticeDates>
    </NoticeContainer>
  );
};

// サンプルデータを用いたNoticeコンポーネントの使用例
const App: React.FC = () => {
  const noticeDates = ['8月2日(土)', '8月9日(土)', '8月16日(土)', '8月23日(土)'];

  return (
    <div>
      <Notice dates={noticeDates} />
      {/* 他のコンポーネント */}
    </div>
  );
};

export default App;