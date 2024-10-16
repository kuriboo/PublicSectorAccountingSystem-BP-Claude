以下は、Next.js + TypeScriptを使用して、与えられた画像の情報を表示するコンポーネントの実装例です。

// 固定資産マスタデータ抽出コンポーネント
import React from 'react';
import styled from 'styled-components';

// 固定資産マスタデータの型定義
type FixedAssetMasterData = {
  currentFYMasterData: {
    name: string;
    amount: number;
    code: string;
  }[];
  previousFYMasterData: {
    name: string;
    amount: number;
    code: string;
  }[];
};

type Props = {
  data: FixedAssetMasterData;
};

const FixedAssetMasterExtract: React.FC<Props> = ({ data }) => {
  // 固定資産マスタデータが存在しない場合の処理
  if (!data || !data.currentFYMasterData || !data.previousFYMasterData) {
    return <div>固定資産マスタデータが存在しません。</div>;
  }

  return (
    <Container>
      <Heading>固定資産マスタデータ抽出</Heading>
      <Notes>
        ・以下のマスタの内容をファイル出力します。<br />
        （共通マスタ入力原票で取り込まれるマスタ）
      </Notes>

      <Table>
        <thead>
          <tr>
            <Th>当期会計年度</Th>
            <Th>前年度末</Th>
          </tr>
        </thead>
        <tbody>
          {data.currentFYMasterData.map((item, index) => (
            <tr key={index}>
              <Td>{item.name}マスタ（年度精算、数コード有り）</Td>
              <Td>{data.previousFYMasterData[index].name}マスタ（年度精算、数コード有り）</Td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Notes>
        ・出力したファイルは編集せず、原票にて取り込むようにしてください。 編集されると原票で取り込めなくなる恐れがあります。<br />
        ・出力するマスタについては、会計システム取扱要領にて位置づけがされています。<br />
        以下のキー情報を持っているマスタについては抽出対象を絞り込みます。<br />
        年度精算を持っているマスタ→当期会計年度と一致しているデータのみ出力します。<br />
        年月日精密を持っているマスタ→当期会計年度以前で一番新しいデータのみ出力します。<br />
        数コードを持っているマスタ→050～099までのデータのみ出力します。<br />
        ・抽手先マスタについては、一時抽手先ではないマスタ情報の内、当期会計年度以前で一番新しいデータのみ出力します。  
      </Notes>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  padding: 20px;
`;

const Heading = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Notes = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  line-height: 1.5;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const Th = styled.th`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
  background-color: #f2f2f2;
`;

const Td = styled.td`
  border: 1px solid #ccc;
  padding: 10px;
`;

// サンプルデータ
const sampleData: FixedAssetMasterData = {
  currentFYMasterData: [
    { name: '仕訳マスタ', amount: 1, code: 'あり' },
    { name: '自由設定項目名マスタ', amount: 1, code: 'あり' },
    { name: '所属マスタ', amount: 1, code: 'あり' },
    { name: '相手先マスタ', amount: 1, code: 'あり' },
  ],
  previousFYMasterData: [
    { name: '仕訳マスタ', amount: 1, code: 'あり' },
    { name: '自由設定項目名マスタ', amount: 1, code: 'あり' },
    { name: '所属マスタ', amount: 1, code: 'あり' },
    { name: '相手先マスタ', amount: 1, code: 'あり' },
  ],
};

// 使用例
const App: React.FC = () => {
  return <FixedAssetMasterExtract data={sampleData} />;
};

export default App;

このコンポーネントでは、以下の点に注意しています：

1. TypeScriptの型定義を使用して、プロパティの型を明確にしています。
2. スタイリングにはCSS-in-JSライブラリのstyled-componentsを使用しています。
3. コンポーネントはプロパティを受け取ってカスタマイズ可能になっています。
4. データが存在しない場合の例外処理を実装しています。
5. コメントを適宜追加して、コードの理解を助けています。
6. サンプルデータを使用して、コンポーネントの使用例を示しています。

このコンポーネントを使用することで、固定資産マスタデータを抽出して表示することができます。必要に応じてスタイリングやロジックを調整してください。