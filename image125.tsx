import React from 'react';

type FixedAssetConvertData = {
  no: number;
  convertDate: string;
  assetName: string;
  file: string;
};

type FixedAssetConvertProps = {
  data: FixedAssetConvertData[];
};

const FixedAssetConvert: React.FC<FixedAssetConvertProps> = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">固定資産コンバート取消</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">No.</th>
            <th className="border px-4 py-2">コンバート日時</th>
            <th className="border px-4 py-2">資産名称</th>
            <th className="border px-4 py-2">取込ファイル名</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.no}>
              <td className="border px-4 py-2">{item.no}</td>
              <td className="border px-4 py-2">{item.convertDate}</td>
              <td className="border px-4 py-2">{item.assetName}</td>
              <td className="border px-4 py-2">{item.file}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <p className="text-sm">
          ・固定資産コンバート最能で登録した固定資産情報を削除します。<br />
          ・コンバートを行った日時を指定して取消を行います。指定した日時にコンバートしたすべての固定資産情報が削除されます。<br />
          ただし、コンバート後、異動が発生した固定資産がある場合は、コンバート取消を行うことはできません。<br />
          コンバート毎の異動をすべて削除してから、コンバート取消を行ってください。<br />
          ・当年度に行ったコンバートのみ取消可能です。<br />
          ・コンバート取消を行った場合、データを元に戻すことはできません。
        </p>
      </div>
    </div>
  );
};

export default FixedAssetConvert;

// Usage example
const sampleData: FixedAssetConvertData[] = [
  {
    no: 1,
    convertDate: '平成30年06月25日 10:54:55',
    assetName: '電算移行',
    file: '固定資産情報 20180625145431.zip',
  },
  {
    no: 2,
    convertDate: '平成30年06月19日 15:57:28',
    assetName: '電算移行',
    file: '固定資産情報 20180619142707.zip',
  },
];

const App: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Fixed Asset Convert</h1>
      <FixedAssetConvert data={sampleData} />
    </div>
  );
};