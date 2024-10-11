以下は、Next.js + TypeScriptを使用して、指定された画像のUIをコンポーネント化したコードです。

import React from 'react';
import styled from '@emotion/styled';

// 型定義
type BusinessTripReportProps = {
  date?: string; // 作成年月日
  purpose?: string; // 出力単位
  region?: string; // 作業区分
  departureNumber?: number; // 資産番号
  departureYear?: number; // 異動年月
  departureMonth?: number; // 異動月
  destinationNumber?: number; // 異動先資産科目
  destinationYear?: number; // 異動年
  destinationMonth?: number; // 異動月
  onSubmit: () => void; // 部門ボタンのクリックイベント
  onCancel: () => void; // クリアボタンのクリックイベント
  onClose: () => void; // 終了ボタンのクリックイベント
};

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
`;

const CheckboxGroup = styled.div`
  label {
    display: block;
    margin-bottom: 5px;
  }
`;

const RadioGroup = styled.div`
  label {
    display: inline-block;
    margin-right: 10px;
  }
`;

const ButtonGroup = styled.div`
  text-align: center;
  button {
    margin: 0 5px;
  }
`;

// コンポーネント
const BusinessTripReport: React.FC<BusinessTripReportProps> = ({
  date = '',
  purpose = '',
  region = '',
  departureNumber = 0,
  departureYear = 0,
  departureMonth = 0,
  destinationNumber = 0,  
  destinationYear = 0,
  destinationMonth = 0,
  onSubmit,
  onCancel,
  onClose,
}) => {
  return (
    <Container>
      <h2>異動予測リスト作成</h2>
      <FormGroup>
        <Label>作成年月日</Label>
        <Input type="text" defaultValue={date} />
      </FormGroup>
      <FormGroup>
        <Label>出力単位</Label>
        <CheckboxGroup>
          <label>
            <input type="checkbox" defaultChecked={purpose === '管理(資産番号)'} />
            管理(資産番号)
          </label>
          <label>
            <input type="checkbox" defaultChecked={purpose === '管理(とりまとめ)'} />
            管理(とりまとめ)
          </label>
        </CheckboxGroup>
        <CheckboxGroup>
          <label>
            <input type="checkbox" defaultChecked={purpose === '管理部門'} />
            管理部門
          </label>
          <label>
            <input type="checkbox" defaultChecked={purpose === '管理部門(予測)'} />
            管理部門(予測)
          </label>
        </CheckboxGroup>
      </FormGroup>
      <FormGroup>
        <Label>作業区分</Label>
        <RadioGroup>
          <label>
            <input type="radio" defaultChecked={region === '年単位'} />
            年単位
          </label>
          <label>
            <input type="radio" defaultChecked={region === '月単位'} />
            月単位
          </label>
        </RadioGroup>
      </FormGroup>
      <FormGroup>
        <Label>範囲指定</Label>
        <div>
          <Label>資産番号</Label>
          <Input type="number" defaultValue={departureNumber} />
          <span>～</span>
          <Input type="number" defaultValue={destinationNumber} />
        </div>
        <div>
          <Label>異動年月</Label>
          <Input type="number" defaultValue={departureYear} />
          <span>年</span>
          <Input type="number" defaultValue={departureMonth} />
          <span>月</span>
          <span>～</span>
          <Input type="number" defaultValue={destinationYear} />
          <span>年</span>
          <Input type="number" defaultValue={destinationMonth} />
          <span>月</span>
        </div>
      </FormGroup>
      <ButtonGroup>
        <button onClick={onSubmit}>OK</button>
        <button onClick={onCancel}>クリア</button>
        <button onClick={onClose}>終了</button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータと使用例
const sampleData = {
  date: '平成29年09月11日',
  purpose: '管理(資産番号)',
  region: '年単位',
  departureNumber: 9999999999,
  departureYear: 29,
  departureMonth: 4,
  destinationNumber: 9999999999,
  destinationYear: 30,
  destinationMonth: 3,
};

const BusinessTripReportSample = () => {
  const handleSubmit = () => {
    console.log('OKがクリックされました');
  };

  const handleCancel = () => {
    console.log('クリアがクリックされました');
  };

  const handleClose = () => {
    console.log('終了がクリックされました');
  };

  return (
    <BusinessTripReport
      {...sampleData}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onClose={handleClose}
    />
  );
};

export default BusinessTripReportSample;