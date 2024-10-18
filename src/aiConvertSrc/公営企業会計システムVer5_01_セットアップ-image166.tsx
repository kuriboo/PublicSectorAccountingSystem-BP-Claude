import React from 'react';
import styled from '@emotion/styled';

type TitleProps = {
  title: string;
  fontSize?: string;
  width?: string;
  height?: string;
  padding?: string;
  borderRadius?: string;
  backgroundColor?: string;
  color?: string;
};

const TitleWrapper = styled.div<TitleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || '500px'};
  height: ${({ height }) => height || '200px'};
  padding: ${({ padding }) => padding || '20px'};
  border-radius: ${({ borderRadius }) => borderRadius || '5px'};
  background-color: ${({ backgroundColor }) => backgroundColor || '#f0f0f0'};
  color: ${({ color }) => color || '#333'};
  font-size: ${({ fontSize }) => fontSize || '16px'};

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    padding: 10px;
  }
`;

const Title: React.FC<TitleProps> = ({
  title,
  fontSize,
  width,
  height,
  padding,
  borderRadius,
  backgroundColor,
  color,
}) => {
  // タイトルが空の場合はデフォルトのテキストを表示
  const displayTitle = title || '帳票タイトルは、年度及び範囲指定の設定がありません。';

  return (
    <TitleWrapper
      fontSize={fontSize}
      width={width}
      height={height}
      padding={padding}  
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      color={color}
    >
      {displayTitle}
    </TitleWrapper>
  );
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <Title title="帳票タイトル作成" />
      <Title
        title="カスタマイズ例"
        fontSize="24px"
        width="600px"
        height="150px"
        padding="10px"
        borderRadius="10px"
        backgroundColor="#e0e0e0"
        color="#555"
      />
    </div>
  );
};

export default App;