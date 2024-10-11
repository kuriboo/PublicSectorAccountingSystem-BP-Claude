import React from 'react';
import styled from 'styled-components';

// 警告メッセージのプロパティ
interface AlertMessageProps {
  message: string; // 表示するメッセージ
  type?: 'success' | 'error' | 'warning' | 'info'; // メッセージの種類（デフォルトは'info'）
}

// 警告アイコンのプロパティ
interface AlertIconProps {
  type?: 'success' | 'error' | 'warning' | 'info'; // メッセージの種類（デフォルトは'info'）
}

// 警告メッセージのスタイル
const AlertMessageWrapper = styled.div<{ type: string }>`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.4;
  color: #333;

  ${({ type }) => {
    switch (type) {
      case 'success':
        return `
          background-color: #e8f5e9;
          border: 1px solid #a5d6a7;
        `;
      case 'error':
        return `
          background-color: #ffebee;
          border: 1px solid #ef9a9a;
        `;
      case 'warning':
        return `
          background-color: #fffde7;
          border: 1px solid #fff59d;
        `;
      default:
        return `
          background-color: #e3f2fd;
          border: 1px solid #90caf9;
        `;
    }
  }}
`;

// 警告アイコンのスタイル
const AlertIcon = styled.span<AlertIconProps>`
  margin-right: 8px;

  &::before {
    font-family: 'Material Icons';
    font-size: 18px;

    ${({ type }) => {
      switch (type) {
        case 'success':
          return "content: '\\e86c';";
        case 'error':
          return "content: '\\e000';";
        case 'warning':
          return "content: '\\e002';";
        default:
          return "content: '\\e88e';";
      }
    }}
  }
`;

// 警告メッセージコンポーネント
const AlertMessage: React.FC<AlertMessageProps> = ({ message, type = 'info' }) => {
  // メッセージが空の場合は何も表示しない
  if (!message) return null;

  return (
    <AlertMessageWrapper type={type}>
      <AlertIcon type={type} />
      {message}
    </AlertMessageWrapper>
  );
};

export default AlertMessage;

// 使用例
export const AlertMessageExample: React.FC = () => {
  return (
    <>
      <AlertMessage message="調べ審査は18℃、悩入運転を談ち況きました。" type="info" />
      <AlertMessage message="成功メッセージ" type="success" />
      <AlertMessage message="エラーメッセージ" type="error" />
      <AlertMessage message="警告メッセージ" type="warning" />
    </>
  );
};