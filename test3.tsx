import React from 'react';

interface ReservationFormProps {
  onSubmit: (formData: FormData) => void;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* 予約科目 */}
        <div>
          <label htmlFor="subject" className="block mb-1">予約科目</label>
          <select id="subject" name="subject" className="w-full border border-gray-300 rounded px-2 py-1">
            <option value="">選択してください</option>
            {/* 予約科目のオプションをここに追加 */}
          </select>
        </div>
        
        {/* 教員 */}
        <div>
          <label htmlFor="teacher" className="block mb-1">教員</label>
          <select id="teacher" name="teacher" className="w-full border border-gray-300 rounded px-2 py-1">
            <option value="">選択してください</option>
            {/* 教員のオプションをここに追加 */}
          </select>
        </div>

        {/* 数量 */}
        <div>
          <label htmlFor="quantity" className="block mb-1">数量</label>
          <input type="number" id="quantity" name="quantity" min="1" className="w-full border border-gray-300 rounded px-2 py-1" />
        </div>

        {/* 利用日 */}
        <div>
          <label htmlFor="date" className="block mb-1">利用日</label>
          <input type="date" id="date" name="date" className="w-full border border-gray-300 rounded px-2 py-1" />
        </div>
        
        {/* 時間帯 */}
        <div>
          <fieldset>
            <legend className="block mb-1">時間帯</legend>
            <label><input type="radio" name="time" value="午前" /> 午前</label>
            <label><input type="radio" name="time" value="午後" /> 午後</label>
          </fieldset>
        </div>
      </div>

      {/* 予約区分 */}
      <div className="mb-4">  
        <label htmlFor="category" className="block mb-1">予約区分</label>
        <select id="category" name="category" className="w-full border border-gray-300 rounded px-2 py-1">
          <option value="">選択してください</option>
          {/* 予約区分のオプションをここに追加 */}
        </select>
      </div>

      {/* メモ欄 */}
      <div className="mb-4">
        <label htmlFor="memo" className="block mb-1">メモ欄</label>
        <textarea id="memo" name="memo" rows={3} className="w-full border border-gray-300 rounded px-2 py-1" />
      </div>

      {/* 送信ボタン */}
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        予約
      </button>
    </form>
  );
};

export default ReservationForm;