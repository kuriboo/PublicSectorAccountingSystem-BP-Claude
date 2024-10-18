import React from 'react';
import styled from '@emotion/styled';

// 明細データの型定義
type MeisaiData = {
  sonotaNo: string;
  sonotaNmCode: string;
  sonotaName: string;
  kingaku: number;
  suuryou: number;
};

// 代表明細の型定義
type DaihyoData = {
  sonotaNo: string;
  sonotaNmCode: string;
  sonotaName: string;
};

// 振込先情報の型定義
type FurikomiData = {
  keiyakuNo: string;
  kanjiName: string;
  kanaName: string;
  bankCode: string;
  branchCode: string;
};

// Propsの型定義
type MeisaiProps = {
  meisaiList: MeisaiData[];
  daihyoMeisai: DaihyoData;
  furikomiInfo: FurikomiData;
  totalKingaku: number;
  shutokuTanka: number;
};

// スタイルコンポーネント
const Container = styled.div`
  font-family: "メイリオ", Meiryo, sans-serif;
  border: 1px solid #999;
  padding: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;

  th, td {
    border: 1px solid #999;
    padding: 4px;
    text-align: center;
  }

  th {
    background-color: #eee;
  }
`;

const TotalRow = styled.tr`
  font-weight: bold;
`;

const FurikomiInfo = styled.div`
  margin-top: 10px;
`;

// 明細表示コンポーネント
const MeisaiTable: React.FC<MeisaiProps> = ({ 
  meisaiList,
  daihyoMeisai,
  furikomiInfo,
  totalKingaku,
  shutokuTanka
}) => {
  // 代表明細が空の場合は「-」を表示
  const daihyoName = daihyoMeisai.sonotaName || '-';

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>明細番号</th>
            <th>明細コード</th>
            <th>明細名称</th>
            <th>相手先名称</th>
            <th>金額</th>
            <th>稼働額</th>
          </tr>
        </thead>
        <tbody>
          {meisaiList.map((meisai) => (
            <tr key={meisai.sonotaNo}>
              <td>{meisai.sonotaNo}</td>
              <td>{meisai.sonotaNmCode}</td>
              <td>{meisai.sonotaName}</td>
              <td>{daihyoName}</td>
              <td>{meisai.kingaku.toLocaleString()}</td>
              <td>{meisai.suuryou}</td>
            </tr>
          ))}
          <TotalRow>
            <td colSpan={4}>合計</td>
            <td>{totalKingaku.toLocaleString()}</td>
            <td>{shutokuTanka}</td>
          </TotalRow>
        </tbody>
      </Table>
      <FurikomiInfo>
        <div>
          <b>振込先情報</b>
        </div>
        {furikomiInfo.keiyakuNo && (
          <>
            <div>顧客番号：{furikomiInfo.keiyakuNo}</div>
            <div>
              氏名：
              {furikomiInfo.kanjiName}（{furikomiInfo.kanaName}）
            </div>
            <div>
              銀行：{furikomiInfo.bankCode} {furikomiInfo.branchCode}
            </div>
          </>
        )}
      </FurikomiInfo>
    </Container>
  );
};



// サンプルデータ
const sampleData: MeisaiProps = {
  meisaiList: [
    {
      sonotaNo: '0000000001',
      sonotaNmCode: 'きょうせい',
      sonotaName: 'きょうせい',
      kingaku: 39900,
      suuryou: 100,
    },
    {
      sonotaNo: '0000000002',
      sonotaNmCode: 'きょうせい',
      sonotaName: '市資金前渡',
      kingaku: 5000,
      suuryou: 0,
    },
  ],
  daihyoMeisai: {
    sonotaNo: '0000000001',
    sonotaNmCode: 'きょうせい', 
    sonotaName: 'きょうせい',
  },
  furikomiInfo: {
    keiyakuNo: '00009896',
    kanjiName: '当座預金',
    kanaName: 'かちどうき',
    bankCode: '0001',
    branchCode: 'みずほ銀行',
  },
  totalKingaku: 44800,
  shutokuTanka: 100,
};

// サンプルデータを使用した表示例
const MeisaiTableExample: React.FC = () => {
  return <MeisaiTable {...sampleData} />;
};

export default MeisaiTableExample;