import React from 'react';

interface Process {
  id: string;
  name: string;
}

interface Decision {
  id: string;
  name: string;
}

interface Props {
  processes: Process[];
  decisions: Decision[];
}

const FlowChart: React.FC<Props> = ({ processes, decisions }) => {
  // 例外処理: プロセスや判断がない場合は何も表示しない
  if (processes.length === 0 && decisions.length === 0) {
    return null;
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      {/* 消費税率算定フロー */}
      <div className="text-blue-500 font-bold mb-4">消費税率算定フロー</div>
      
      {/* プロセスと判断を表示 */}
      <div className="flex flex-col items-center">
        {processes.map((process) => (
          <div key={process.id} className="flex items-center mb-4">
            <div className="bg-pink-200 text-center w-48 py-2 rounded-lg shadow">{process.name}</div>
            <div className="h-10 border-l-2 border-gray-300 mx-2"></div>
          </div>
        ))}
        
        {decisions.map((decision) => (
          <div key={decision.id} className="flex items-center mb-4">
            <div className="bg-yellow-100 text-center w-48 py-2 rounded-lg shadow">{decision.name}</div>
            <div className="h-10 border-l-2 border-gray-300 mx-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

// サンプルデータを用いた使用例
const SampleFlowChart = () => {
  const processes: Process[] = [
    { id: '1', name: '消費税準備' },
    { id: '2', name: '特定取引項目マスタ' },
  ];

  const decisions: Decision[] = [
    { id: '3', name: '収入区分の設定（個別対応方式の場合）' },
    { id: '4', name: '収入区分一括設定' },
    { id: '5', name: '収入区分個別設定' },
  ];

  return <FlowChart processes={processes} decisions={decisions} />;
};

export default SampleFlowChart;