import React from 'react';
import styled from '@emotion/styled';

// 伝票範囲の型定義
type Range = {
  start: string;
  end: string;
};

// 伝票番号の型定義
type TicketNumber = {
  prefix: string;
  start: string;
  end: string;
};

// コンポーネントのProps型定義
type ReceiptSearchFormProps = {
  onSubmit: (data: {
    range: Range;
    issuedBy: '個別' | '前回';
    ticketType: '指定しない' | '指定する';
    ticketNumber?: TicketNumber;
    printTarget: '本連携' | '連携済み(決裁中)' | '決裁完了';
    isSeparated: '一括' | '別紙'; 
  }) => void;
};

// スタイル定義
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
`;

const FieldSet = styled.fieldset`
  display: flex;
  gap: 1rem;
  border: none;
  padding: 0;
`;

const CheckboxGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

// 伝票検索フォームコンポーネント
const ReceiptSearchForm: React.FC<ReceiptSearchFormProps> = ({ onSubmit }) => {
  // フォーム送信ハンドラ
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      range: {
        start: form.startDate.value,
        end: form.endDate.value,
      },
      issuedBy: form.issuedBy.value as '個別' | '前回',
      ticketType: form.ticketType.value as '指定しない' | '指定する',
      ticketNumber: form.ticketType.value === '指定する' 
        ? {
            prefix: form.ticketPrefix.value,
            start: form.ticketStart.value,
            end: form.ticketEnd.value,
          }
        : undefined,
      printTarget: Array.from(form.printTarget)
        .filter((checkbox: unknown): checkbox is HTMLInputElement => (checkbox as HTMLInputElement).checked) // 型ガードを使用
        .map((checkbox: HTMLInputElement) => checkbox.value)
        .join(','), 
      isSeparated: form.isSeparated.value as '一括' | '別紙',
    };
    onSubmit(data);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FieldSet>
          <label>
            収納日
            <input type="date" name="startDate" />
          </label>
          〜
          <label>
            <input type="date" name="endDate" />
          </label>
        </FieldSet>

        <FieldSet>
          <label>
            <input type="radio" name="issuedBy" value="個別" defaultChecked />
            個別
          </label>
          <label>
            <input type="radio" name="issuedBy" value="前回" />
            年度別計
          </label>
        </FieldSet>

        <FieldSet>
          <label>
            <input type="radio" name="ticketType" value="指定しない" defaultChecked />
            指定しない
          </label>
          <label>
            <input type="radio" name="ticketType" value="指定する" />
            指定する
          </label>
          <FieldSet>
            <input type="text" name="ticketPrefix" placeholder="伝票種類" disabled={true} />
            <input type="number" name="ticketStart" placeholder="開始番号" disabled={true} />
            〜
            <input type="number" name="ticketEnd" placeholder="終了番号" disabled={true} />
          </FieldSet>
        </FieldSet>

        <CheckboxGroup>
          <label>
            <input type="checkbox" name="printTarget" value="本連携" defaultChecked />
            本連携
          </label>
          <label>
            <input type="checkbox" name="printTarget" value="連携済み(決裁中)" defaultChecked />
            連携済み(決裁中)
          </label>
          <label>
            <input type="checkbox" name="printTarget" value="決裁完了" defaultChecked />
            決裁完了
          </label>
        </CheckboxGroup>

        <FieldSet>
          <label>
            <input type="radio" name="isSeparated" value="一括" defaultChecked />
            一括
          </label>
          <label>
            <input type="radio" name="isSeparated" value="別紙" />
            別紙
          </label>
        </FieldSet>

        <ButtonGroup>
          <button type="submit">検索</button>
          <button type="reset">クリア</button>
        </ButtonGroup>
      </form>
    </FormContainer>
  );
};

// サンプルデータ
const sampleData = {
  range: { start: '2023-03-14', end: '2023-03-14' },
  issuedBy: '個別' as const,
  ticketType: '指定しない' as const,
  printTarget: '本連携,連携済み(決裁中),決裁完了',
  isSeparated: '別紙' as const,
};

// 使用例
const App: React.FC = () => {
  const handleSubmit = (data: typeof sampleData) => {
    console.log(data);
  };

  return <ReceiptSearchForm onSubmit={handleSubmit} />;
};

export default App;