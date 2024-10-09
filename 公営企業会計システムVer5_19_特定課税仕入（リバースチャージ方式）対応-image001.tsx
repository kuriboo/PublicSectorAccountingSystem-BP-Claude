import React from 'react';

type BasicHealthCheckupResultProps = {
  date: string;
  height: number;
  weight: number;
  waist: number;
  bmi: number;
  lipids: {
    totalCholesterol: number;
    hdlCholesterol: number;
    ldlCholesterol: number;
    neutralFat: number;
  };
  bloodPressure: {
    systolic: number;
    diastolic: number;
  };
  liver: {
    got: number;
    gpt: number;
    gammaGtp: number;
  };
  glucose: {
    fastingBloodGlucose: number;
    hbA1c: number;
  };
  uricAcid: number;
  creatinine: number;
  urinaryProtein: boolean;
  urinaryOccultBlood: boolean;
  anemia: {
    redBloodCells: number;
    hemoglobin: number;
    hematocrit: number;
  };
};

const BasicHealthCheckupResult: React.FC<BasicHealthCheckupResultProps> = ({
  date,
  height,
  weight,
  waist,
  bmi,
  lipids,
  bloodPressure,
  liver,
  glucose,
  uricAcid,
  creatinine,
  urinaryProtein,
  urinaryOccultBlood,
  anemia,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">基本健康診査の結果</h2>
      <p className="mb-2">
        <span className="font-bold">日付:</span> {date}
      </p>
      <p className="mb-2">
        <span className="font-bold">身長:</span> {height} cm
      </p>
      <p className="mb-2">
        <span className="font-bold">体重:</span> {weight} kg
      </p>
      <p className="mb-2">
        <span className="font-bold">腹囲:</span> {waist} cm
      </p>
      <p className="mb-2">
        <span className="font-bold">BMI:</span> {bmi}
      </p>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">脂質</h3>
        <p className="mb-1">
          <span className="font-bold">総コレステロール:</span>{' '}
          {lipids?.totalCholesterol ?? '-'} mg/dL
        </p>
        <p className="mb-1">
          <span className="font-bold">HDLコレステロール:</span>{' '}
          {lipids?.hdlCholesterol ?? '-'} mg/dL
        </p>
        <p className="mb-1">
          <span className="font-bold">LDLコレステロール:</span>{' '}
          {lipids?.ldlCholesterol ?? '-'} mg/dL
        </p>
        <p>
          <span className="font-bold">中性脂肪:</span> {lipids?.neutralFat ?? '-'}{' '}
          mg/dL
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">血圧</h3>
        <p className="mb-1">
          <span className="font-bold">収縮期血圧:</span>{' '}
          {bloodPressure?.systolic ?? '-'} mmHg
        </p>
        <p>
          <span className="font-bold">拡張期血圧:</span>{' '}
          {bloodPressure?.diastolic ?? '-'} mmHg
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">肝機能</h3>
        <p className="mb-1">
          <span className="font-bold">GOT:</span> {liver?.got ?? '-'} U/L
        </p>
        <p className="mb-1">
          <span className="font-bold">GPT:</span> {liver?.gpt ?? '-'} U/L
        </p>
        <p>
          <span className="font-bold">γ-GTP:</span> {liver?.gammaGtp ?? '-'} U/L
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">血糖</h3>
        <p className="mb-1">
          <span className="font-bold">空腹時血糖:</span>{' '}
          {glucose?.fastingBloodGlucose ?? '-'} mg/dL
        </p>
        <p>
          <span className="font-bold">HbA1c:</span> {glucose?.hbA1c ?? '-'} %
        </p>
      </div>
      <p className="mb-2">
        <span className="font-bold">尿酸:</span> {uricAcid ?? '-'} mg/dL
      </p>
      <p className="mb-2">
        <span className="font-bold">クレアチニン:</span> {creatinine ?? '-'} mg/dL
      </p>
      <p className="mb-2">
        <span className="font-bold">尿蛋白:</span>{' '}
        {urinaryProtein ? '陽性' : '陰性'}
      </p>
      <p className="mb-4">
        <span className="font-bold">尿潜血:</span>{' '}
        {urinaryOccultBlood ? '陽性' : '陰性'}
      </p>
      <div>
        <h3 className="text-lg font-bold mb-2">貧血</h3>
        <p className="mb-1">
          <span className="font-bold">赤血球数:</span>{' '}
          {anemia?.redBloodCells ?? '-'} 万/μL
        </p>
        <p className="mb-1">
          <span className="font-bold">ヘモグロビン:</span>{' '}
          {anemia?.hemoglobin ?? '-'} g/dL
        </p>
        <p>
          <span className="font-bold">ヘマトクリット:</span>{' '}
          {anemia?.hematocrit ?? '-'} %
        </p>
      </div>
    </div>
  );
};

export default BasicHealthCheckupResult;

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const sampleData: BasicHealthCheckupResultProps = {
    date: '2023-06-01',
    height: 170,
    weight: 65,
    waist: 80,
    bmi: 22.5,
    lipids: {
      totalCholesterol: 200,
      hdlCholesterol: 60,
      ldlCholesterol: 120,
      neutralFat: 100,
    },
    bloodPressure: {
      systolic: 120,
      diastolic: 80,
    },
    liver: {
      got: 25,
      gpt: 30,
      gammaGtp: 40,
    },
    glucose: {
      fastingBloodGlucose: 95,
      hbA1c: 5.5,
    },
    uricAcid: 5.0,
    creatinine: 0.8,
    urinaryProtein: false,
    urinaryOccultBlood: false,
    anemia: {
      redBloodCells: 450,
      hemoglobin: 14.0,
      hematocrit: 42.0,
    },
  };

  return <BasicHealthCheckupResult {...sampleData} />;
};