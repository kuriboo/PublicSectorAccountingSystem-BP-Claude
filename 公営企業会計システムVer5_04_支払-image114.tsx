import React from 'react';
import styled from '@emotion/styled';

type NoticeProps = {
  /**
   * 通知メッセージ
   */
  message?: string;
  /**
   * 通知の種類（'info' | 'warning'）
   */
  type?: 'info' | 'warning';
};

const Notice: React.FC<NoticeProps> = ({ message = '', type = 'info' }) => {
  // 通知の種類に応じたアイコンを選択
  const icon = type === 'info' ? '🛈' : '⚠️';

  return (
    <NoticeWrapper>
      <IconWrapper>{icon}</IconWrapper>
      <Message>{message || 'メッセージが設定されていません。'}</Message>
    </NoticeWrapper>
  );
};

const NoticeWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const IconWrapper = styled.div`
  font-size: 24px;
  margin-right: 12px;

  @media (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 8px;
  }
`;

const Message = styled.div`
  font-size: 16px;
  color: #333;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <Notice message="重要な更新が必要です。" type="warning" />
      <Notice message="ようこそ、XXXさん。" type="info" />
      <Notice />
    </div>
  );
};

export default App;