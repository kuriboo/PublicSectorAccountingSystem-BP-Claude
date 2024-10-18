import React from 'react';
import styled from '@emotion/styled';

interface ReservationFormProps {
  onSubmit: (data: ReservationData) => void;
}

interface ReservationData {
  date: string;
  startTime: string;
  endTime: string;
  dayOfWeek: string;
  roomType: string;
  numPeople: number;
  numTables: number;
  consumptionTax: number;
  serviceFee: number;
  subTotal: number;
  total: number;
  note: string;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<ReservationData>({
    date: '',
    startTime: '',
    endTime: '',
    dayOfWeek: '',
    roomType: '',
    numPeople: 0,
    numTables: 0,
    consumptionTax: 0,
    serviceFee: 0,
    subTotal: 0,
    total: 0,
    note: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormSection>
        <label>
          予算料日
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>
        <label>
          予算範圍
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            required
          />
          <span>～</span>
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          予算明細
          <select name="dayOfWeek" value={formData.dayOfWeek} onChange={handleChange} required>
            <option value="">選択してください</option>
            <option value="平日">平日</option>
            <option value="休日">休日</option>
          </select>
        </label>
      </FormSection>
      
      <FormSection>
        <label>
          部屋分
          <select name="roomType" value={formData.roomType} onChange={handleChange} required>
            <option value="">選択してください</option>
            {/* 部屋タイプのオプションをここに追加 */}
          </select>
        </label>
        <label>
          収入区分
          <select name="incomeType" value={formData.incomeType} onChange={handleChange} required>
            <option value="">選択してください</option>
            {/* 収入区分のオプションをここに追加 */}
          </select> 
        </label>
      </FormSection>

      <FormSection>
        <SummarySection>
          <SummaryRow>
            <span>予算残額</span>
            <span>{formData.subTotal}</span>
          </SummaryRow>
          <SummaryRow>
            <span>負担累計</span>
            <span>{formData.consumptionTax}</span>
          </SummaryRow>
          <SummaryRow>
            <span>負担残額</span>
            <span>{formData.serviceFee}</span>
          </SummaryRow>
          <SummaryRow>
            <span>予定累計</span>
            <span>{formData.total}</span>
          </SummaryRow>
          <SummaryRow>
            <span>予定残額</span>
            <span>{formData.total - formData.subTotal}</span>
          </SummaryRow>
        </SummarySection>

        <label>
          人数
          <input
            type="number"
            name="numPeople"
            value={formData.numPeople}
            onChange={handleChange}
            min={1}
            required
          />
        </label>
        <label>
          本体金額
          <input
            type="number"
            name="numTables"
            value={formData.numTables}
            onChange={handleChange}
            min={1}
            required
          />
        </label>
        <label>
          消費税率
          <input
            type="number"
            name="taxRate"
            value={formData.taxRate}
            onChange={handleChange}
            min={0}
            step={0.01}
            required
          />
          <span>%</span>
        </label>
        <label>
          消費税額
          <input
            type="number"
            name="consumptionTax"
            value={formData.consumptionTax}
            onChange={handleChange}
            min={0}
            required
          />
        </label>
      </FormSection>
      
      <label>
        摘要
        <textarea name="note" value={formData.note} onChange={handleChange} />
      </label>

      <SubmitButton type="submit">提案</SubmitButton>
    </Form>
  );
};

// スタイリング
const Form = styled.form`
  display: grid;
  gap: 16px;
`;

const FormSection = styled.section`
  display: grid;
  gap: 8px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SummarySection = styled.section`
  display: grid;
  gap: 4px;
  padding: 8px;
  background-color: #f0f0f0;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

// サンプルデータと使用例
const sampleData: ReservationData = {
  date: '2023-06-01',
  startTime: '10:00',
  endTime: '12:00',
  dayOfWeek: '平日',
  roomType: 'A',
  numPeople: 4,
  numTables: 1,
  consumptionTax: 1000,
  serviceFee: 500,
  subTotal: 10000,
  total: 11500,
  note: '特別リクエストあり',
};

const App: React.FC = () => {
  const handleSubmit = (data: ReservationData) => {
    console.log('Submitted data:', data);
    // ここでデータを送信するなどの処理を行う
  };

  return (
    <div>
      <h1>予算情報登録</h1>
      <ReservationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;