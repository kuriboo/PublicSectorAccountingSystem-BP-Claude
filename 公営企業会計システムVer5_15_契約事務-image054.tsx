import React from 'react';
import styled from 'styled-components';

interface ContractDetailProps {
  contractNumber: string;
  contractName: string;
  business: string;
  workName: string;
  contractor: string;
  startDate: string;
  endDate: string;
  dueDate: string;
  paymentDate: string;
  contractAmounts: {
    taxIncluded: number;
    taxExcluded: number;
    tax: number;
  };
  thisTimeAmounts: {
    taxIncluded: number;
    taxExcluded: number;
    tax: number;
  };
  retentionRate: number;
  daysSinceStart: number;
  expirationDate: string;
  note: string;
}

const ContractDetail: React.FC<ContractDetailProps> = ({
  contractNumber,
  contractName,
  business,
  workName,
  contractor,
  startDate,
  endDate,
  dueDate,
  paymentDate,
  contractAmounts,
  thisTimeAmounts,
  retentionRate,
  daysSinceStart,
  expirationDate,
  note,
}) => {
  return (
    <Container>
      <Title>契約変更入力</Title>
      {/* 契約番号 */}
      <Row>
        <RowTitle>契約番号</RowTitle>
        <RowValue>{contractNumber}</RowValue>
      </Row>
      {/* 契約区分 */}
      <Row>
        <RowTitle>契約区分</RowTitle>
        <RowValue>
          <input type="radio" name="contractType" /> 追録 <input type="radio" name="contractType" /> 訂正 <input type="radio" name="contractType" /> 削除
        </RowValue>
      </Row>
      {/* 契約名称 */}
      <Row>
        <RowTitle>契約名称</RowTitle>
        <RowValue>{contractName}</RowValue>
      </Row>
      {/* 業者名 */}
      <Row>
        <RowTitle>業者名</RowTitle>
        <RowValue>{business}</RowValue>
      </Row>
      {/* 工事名 */}
      <Row>
        <RowTitle>工事名</RowTitle>
        <RowValue>{workName}</RowValue>
      </Row>
      {/* 業者情報 */}
      <Row>
        <RowTitle>業者情報</RowTitle>
        <RowValue>
          <div>請負者: {contractor}</div>
          <div>着工年月日: {startDate}</div>
          <div>完成年月日: {endDate}</div>
          <div>引渡年月日: {dueDate}</div>
        </RowValue>
      </Row>  
      {/* 設計額 */}
      <AmountsRow>
        <div>設計額</div>
        <div>
          <div>税込額: {contractAmounts.taxIncluded.toLocaleString()}</div>
          <div>税抜額: {contractAmounts.taxExcluded.toLocaleString()}</div>
          <div>消費税: {contractAmounts.tax.toLocaleString()}</div>
        </div>
      </AmountsRow>
      {/* 今回設計額 */}
      <AmountsRow>
        <div>今回設計額</div>
        <div>
          <div>税込額: {thisTimeAmounts.taxIncluded.toLocaleString()}</div>  
          <div>税抜額: {thisTimeAmounts.taxExcluded.toLocaleString()}</div>
          <div>消費税: {thisTimeAmounts.tax.toLocaleString()}</div>
        </div>
      </AmountsRow>
      {/* 支払条件 */}
      <Row>
        <RowTitle>支払条件</RowTitle>
        <RowValue>
          <div>請負率: {retentionRate}%</div>
          <div>
            <div>契約前払額: {contractAmounts.taxIncluded.toLocaleString()}</div>
            <div>契約後払額: {(contractAmounts.taxIncluded * (100 - retentionRate) / 100).toLocaleString()}</div>
          </div>
          <div>
            <div>今回前払額: {thisTimeAmounts.taxIncluded.toLocaleString()}</div>
            <div>今回後払額: {(thisTimeAmounts.taxIncluded * (100 - retentionRate) / 100).toLocaleString()}</div>
          </div>
        </RowValue>
      </Row>
      {/* 工期 */}
      <Row>
        <RowTitle>工期</RowTitle>
        <div>
          着手年月日: {startDate} <br />
          期間: {daysSinceStart}日延長
        </div>
        <div>
          完了予定年月日: {expirationDate}
        </div>
      </Row>
      {/* 内容 */}
      <Row>
        <RowTitle>内容</RowTitle>
        <RowValue>
          <div>工事内容の変更有り</div>
          {note && <div>備考: {note}</div>}
        </RowValue>
      </Row>
      {/* ボタン */}
      <Row>
        <button>契約確定</button>
        <button>OK</button>
        <button>クリア</button>
        <button>終了</button>
      </Row>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleContractDetail: React.FC = () => {
  const sampleData: ContractDetailProps = {
    contractNumber: '42910009',
    contractName: '水道施設工事',
    business: 'こうとう総合建築株式会社',
    workName: '第11次老朽管改良工事(第7区画)',
    contractor: '',
    startDate: '平成29年09月08日',
    endDate: '平成29年09月30日',  
    dueDate: '平成  年  月  日',
    paymentDate: '平成  年  月  日',
    contractAmounts: {
      taxIncluded: 4164480,  
      taxExcluded: 3850000,
      tax: 314480,
    },
    thisTimeAmounts: {
      taxIncluded: 946280,
      taxExcluded: 875168,
      tax: 71112, 
    },
    retentionRate: 93.213,
    daysSinceStart: 92,
    expirationDate: '平成29年12月31日',
    note: '',
  };

  return <ContractDetail {...sampleData} />;
};

// スタイリング
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const RowTitle = styled.div`
  width: 100px;
  font-weight: bold;
`;

const RowValue = styled.div`
  flex: 1;
`;

const AmountsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export default SampleContractDetail;