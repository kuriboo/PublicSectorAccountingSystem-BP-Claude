import React from 'react';
import styled from 'styled-components';

type ScheduleFormProps = {
  onSubmit: (data: ScheduleData) => void;
};

type ScheduleData = {
  year: string;
  meetingArea: string;
  country: string;
  meetingPlace: string;
  meetingDate: {
    from: string;
    to: string;
  };
  size: {
    a4: boolean;
    yokei: boolean;
    sub1: boolean;
    sub2: boolean;
    portrait: boolean;
  };
  printSetting: boolean;
  printCount: number;
};

const ScheduleForm: React.FC<ScheduleFormProps> = ({ onSubmit }) => {
  const [data, setData] = React.useState<ScheduleData>({
    year: '',
    meetingArea: '',
    country: '',
    meetingPlace: '',
    meetingDate: {
      from: '',
      to: '',
    },
    size: {
      a4: false,
      yokei: false,  
      sub1: false,
      sub2: false,
      portrait: false,
    },
    printSetting: false,
    printCount: 1,
  });

  // 年度が入力された時の処理
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setData({ ...data, year: e.target.value });
  };

  // 会議エリアが変更された時の処理 
  const handleMeetingAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setData({ ...data, meetingArea: e.target.value });
  };

  // 国名が入力された時の処理
  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, country: e.target.value });
  };
  
  // 会議場所が入力された時の処理
  const handleMeetingPlaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, meetingPlace: e.target.value });
  };

  // 会計期間（開始日）が入力された時の処理
  const handleMeetingDateFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ 
      ...data,
      meetingDate: {
        ...data.meetingDate,
        from: e.target.value,
      },
    });
  };

  // 会計期間（終了日）が入力された時の処理
  const handleMeetingDateToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      meetingDate: {
        ...data.meetingDate,
        to: e.target.value,
      },
    });
  };

  // 書式のチェックボックスが変更された時の処理
  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setData({
      ...data,
      size: {
        ...data.size,
        [name]: checked,
      },
    });
  };

  // 頁中子のラジオボタンが変更された時の処理
  const handlePrintSettingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, printSetting: e.target.value === 'する' });
  };

  // 印刷数が入力された時の処理
  const handlePrintCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, printCount: Number(e.target.value) });
  };

  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <label>年度</label>
        <select value={data.year} onChange={handleYearChange} required>
          <option value="">選択してください</option>
          <option value="令和02">令和02</option>
          {/* 他の年度のオプションを追加 */}
        </select>
      </FormGroup>
      
      <FormGroup>
        <label>会議エリア</label>
        <select value={data.meetingArea} onChange={handleMeetingAreaChange} required>
          <option value="">選択してください</option>  
          <option value="西南アジア">西南アジア</option>
          {/* 他の会議エリアのオプションを追加 */}
        </select>
      </FormGroup>

      <FormGroup>
        <label>国名</label>
        <input type="text" value={data.country} onChange={handleCountryChange} required />
      </FormGroup>

      <FormGroup>  
        <label>会議場所</label>
        <input type="text" value={data.meetingPlace} onChange={handleMeetingPlaceChange} required />
      </FormGroup>

      <FormGroup>
        <label>会計期間</label>
        <input type="date" value={data.meetingDate.from} onChange={handleMeetingDateFromChange} required /> 〜 
        <input type="date" value={data.meetingDate.to} onChange={handleMeetingDateToChange} required />
      </FormGroup>

      <FormGroup>
        <label>書式</label>
        <label>
          <input type="checkbox" name="a4" checked={data.size.a4} onChange={handleSizeChange} />
          Ａ４
        </label>  
        <label>
          <input type="checkbox" name="yokei" checked={data.size.yokei} onChange={handleSizeChange} />
          横型
        </label>
        <label>  
          <input type="checkbox" name="sub1" checked={data.size.sub1} onChange={handleSizeChange} />
          サブタイトル
        </label>
        <label>
          <input type="checkbox" name="sub2" checked={data.size.sub2} onChange={handleSizeChange} />  
          サブタイトル
        </label>
        <label>
          <input type="checkbox" name="portrait" checked={data.size.portrait} onChange={handleSizeChange} /> 
          縦タイトル
        </label>
      </FormGroup>

      <FormGroup>
        <label>頁中子</label>
        <label>
          <input type="radio" value="する" checked={data.printSetting} onChange={handlePrintSettingChange} />
          する 
        </label>
        <label>
          <input type="radio" value="しない" checked={!data.printSetting} onChange={handlePrintSettingChange} />
          しない
        </label>  
      </FormGroup>

      <FormGroup>
        <label>印刷数</label>  
        <input type="number" value={data.printCount} onChange={handlePrintCountChange} min={1} required />
      </FormGroup>

      <button type="submit">OK</button>
      <button type="reset">クリア</button>
    </Form>
  );
};

// スタイリング
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-weight: bold;
  }

  input[type="text"],
  input[type="number"],
  input[type="date"],
  select {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
`;

// 使用例
const App: React.FC = () => {
  const handleSubmit = (data: ScheduleData) => {
    console.log(data);
    // ここでデータをサーバーに送信するなどの処理を行う
  };

  return (
    <div>
      <h1>予定捜査計算書作成</h1>
      <ScheduleForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;