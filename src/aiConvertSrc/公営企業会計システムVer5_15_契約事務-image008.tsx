import React from 'react';
import styled from '@emotion/styled';

// 業種明細コンポーネントのプロパティ型
type Props = {
  industryCode?: string;
  industryName?: string;
  defaultIndustry?: string;
  onIndustryChange?: (value: string) => void;
};

// 業種明細コンポーネント
const IndustryDetail: React.FC<Props> = ({
  industryCode = '001',
  industryName = '土木-武工事',
  defaultIndustry = '',
  onIndustryChange = () => {},
}) => {
  return (
    <Container>
      <Header>
        <Label>業種</Label>
        <Value>{industryCode}</Value>
        <Value>{industryName}</Value>
      </Header>
      <Body>
        <IndustrySelect
          value={defaultIndustry}
          onChange={e => onIndustryChange(e.target.value)}
        >
          <option value="">業種明細</option>
          {/* 業種のオプションを動的に生成 */}
        </IndustrySelect>
      </Body>
      <Footer>
        <Button variant="contained">OK</Button>
        <Button variant="outlined">クリア</Button>
        <Button variant="outlined">キャンセル</Button>
      </Footer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: #f0f0f0;
`;

const Label = styled.div`
  margin-right: 8px;
`;

const Value = styled.div`
  margin-right: 16px;
`;

const Body = styled.div`
  flex: 1;
  padding: 16px;
`;

const IndustrySelect = styled.select`
  width: 100%;
  padding: 8px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  border-top: 1px solid #ccc;
`;

const Button = styled.button<{ variant: 'contained' | 'outlined' }>`
  padding: 8px 16px;
  margin-left: 8px;
  background-color: ${props => (props.variant === 'contained' ? '#007bff' : 'transparent')};
  color: ${props => (props.variant === 'contained' ? '#fff' : '#007bff')};
  border: 1px solid #007bff;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

// サンプルデータを用いた使用例
const App: React.FC = () => {
  const handleIndustryChange = (value: string) => {
    console.log('Selected industry:', value);
  };

  return (
    <div>
      <h1>Industry Detail Example</h1>
      <IndustryDetail
        defaultIndustry="土木"
        onIndustryChange={handleIndustryChange}
      />
    </div>
  );
};

export default IndustryDetail;