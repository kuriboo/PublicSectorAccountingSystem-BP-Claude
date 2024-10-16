import React from 'react';
import styled from '@emotion/styled';

// スタイル定義
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.img`
  height: 40px;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  li {
    margin-left: 1rem;

    @media (max-width: 768px) {
      margin-left: 0;
      margin-bottom: 0.5rem;
    }
  }

  a {
    color: #333;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

// ヘッダーコンポーネントの型定義
type HeaderProps = {
  logo: string;
  items: { label: string; url: string }[];
}

// ヘッダーコンポーネント
const SiteHeader: React.FC<HeaderProps> = ({ logo, items }) => {
  return (
    <Header>
      <Logo src={logo} alt="Site Logo" />
      <Nav>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
        </ul>  
      </Nav>
    </Header>
  );
};

// サンプルデータ
const sampleData = {
  logo: 'https://example.com/logo.png',
  items: [
    { label: 'ホーム', url: '/' },
    { label: '製品', url: '/products' },
    { label: 'お問い合わせ', url: '/contact' },
  ],
};

// サンプル使用コンポーネント 
const App: React.FC = () => {
  return (
    <div>
      <SiteHeader logo={sampleData.logo} items={sampleData.items} />
      <main>
        {/* ページコンテンツ */}
      </main>
    </div>
  );
};

export default App;