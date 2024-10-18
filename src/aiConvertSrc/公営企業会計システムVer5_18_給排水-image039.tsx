import React from 'react';
import styled from '@emotion/styled';

interface Address {
  postNo: string;
  address: string;
}

interface AddressListProps {
  addresses: Address[];
}

const AddressListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const AddressListHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
`;

const HeaderItem = styled.div`
  flex: 1;
  text-align: center;
`;

const AddressListBody = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const AddressItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const AddressData = styled.div`
  flex: 1;
  text-align: center;
`;

const AddressList: React.FC<AddressListProps> = ({ addresses }) => {
  return (
    <AddressListContainer>
      <AddressListHeader>
        <HeaderItem>郵便番号</HeaderItem>
        <HeaderItem>住所</HeaderItem>
      </AddressListHeader>
      <AddressListBody>
        {addresses.map((address, index) => (
          <AddressItem key={index}>
            <AddressData>{address.postNo}</AddressData>
            <AddressData>{address.address}</AddressData>
          </AddressItem>
        ))}
      </AddressListBody>
    </AddressListContainer>
  );
};

// サンプルデータ
const sampleAddresses: Address[] = [
  { postNo: '2060013', address: '多摩市桜ヶ丘' },
  { postNo: '2060031', address: '多摩市豊ヶ丘' },
  { postNo: '2060022', address: '多摩市関戸' },
  { postNo: '1940215', address: '町田市小山ヶ丘' },
  { postNo: '1950076', address: '町田市金井ヶ丘' },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>住所一覧</h1>
      <AddressList addresses={sampleAddresses} />
    </div>
  );
};

export default App;