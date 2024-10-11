import React from 'react';
import styled from '@emotion/styled';

// 施設・地区別予測固定資産明細表の型定義
type FixedAssetBreakdownProps = {
  date: string;
  registerType: '2' | null;
  registerCategory: string;
  bookCategory: ('抽出分のみ' | '予測分のみ' | 'すべて')[];
  calculationCategory: ('有形' | '無形')[];
  accountCategory: '指定なし' | '会計区分コード';
  rangeFrom: string;
  rangeTo: string;
  printTarget: ('部門別' | '施設別' | '地区別')[];
  departmentCode: string;
  departmentName: string;
  facilityCode: string;
  facilityName: string;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  display: inline-block;
  width: 100px;
  font-weight: bold;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Select = styled.select`
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
  width: 200px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Input = styled.input`
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
  width: 200px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #0056b3;
  }
`;

// 施設・地区別予測固定資産明細表コンポーネント
const FixedAssetBreakdown: React.FC<FixedAssetBreakdownProps> = ({
  date = '',
  registerType = null,
  registerCategory = '',
  bookCategory = [],
  calculationCategory = [],
  accountCategory = '指定なし',
  rangeFrom = '',
  rangeTo = '',
  printTarget = [],
  departmentCode = '',
  departmentName = '',
  facilityCode = '',
  facilityName = '',
}) => {
  return (
    <Container>
      <Row>
        <Label>作表年月日</Label>
        <Input type="text" value={date} readOnly />
      </Row>
      <Row>
        <Label>作表年数</Label>
        <Select value={registerType ?? ''}>
          <option value="">未選択</option>
          <option value="2">2年分</option>
        </Select>
      </Row>
      <Row>
        <Label>登録区分</Label>
        <Input type="text" value={registerCategory} readOnly />
      </Row>
      <Row>
        <Label>書式区分</Label>
        <RadioGroup>
          <label>
            <input
              type="checkbox"
              value="抽出分のみ"
              checked={bookCategory.includes('抽出分のみ')}
              readOnly
            />
            抽出分のみ
          </label>
          <label>
            <input
              type="checkbox"
              value="予測分のみ"
              checked={bookCategory.includes('予測分のみ')}
              readOnly
            />
            予測分のみ
          </label>
          <label>
            <input
              type="checkbox"
              value="すべて"
              checked={bookCategory.includes('すべて')}
              readOnly
            />
            すべて
          </label>
        </RadioGroup>
      </Row>
      <Row>
        <Label>計算区分</Label>
        <RadioGroup>
          <label>
            <input
              type="checkbox"
              value="有形"
              checked={calculationCategory.includes('有形')}
              readOnly
            />
            有形
          </label>
          <label>
            <input
              type="checkbox"
              value="無形"
              checked={calculationCategory.includes('無形')}
              readOnly
            />
            無形
          </label>
        </RadioGroup>
      </Row>
      <Row>
        <Label>会計区分</Label>
        <Select value={accountCategory}>
          <option value="指定なし">指定なし</option>
          <option value="会計区分コード">会計区分コード</option>
        </Select>
        <Input type="text" value={rangeFrom} readOnly />
        ～
        <Input type="text" value={rangeTo} readOnly />
      </Row>
      <Row>
        <Label>範囲指定</Label>
        <RadioGroup>
          <label>
            <input
              type="checkbox"
              value="部門別"
              checked={printTarget.includes('部門別')}
              readOnly
            />
            部門別
          </label>
          <label>
            <input
              type="checkbox"
              value="施設別"
              checked={printTarget.includes('施設別')}
              readOnly
            />
            施設別
          </label>
          <label>
            <input
              type="checkbox"
              value="地区別"
              checked={printTarget.includes('地区別')}
              readOnly
            />
            地区別
          </label>
        </RadioGroup>
        {printTarget.includes('部門別') && (
          <>
            <Input type="text" value={departmentCode} readOnly />
            <Input type="text" value={departmentName} readOnly />
          </>
        )}
        {printTarget.includes('施設別') && (
          <>
            <Input type="text" value={facilityCode} readOnly />
            <Input type="text" value={facilityName} readOnly />
          </>
        )}
      </Row>
      <Row>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </Row>
    </Container>
  );
};

// サンプルデータ
const sampleData: FixedAssetBreakdownProps = {
  date: '令和04年06月29日',
  registerType: '2',
  registerCategory: '',
  bookCategory: [],
  calculationCategory: ['有形'],
  accountCategory: '指定なし',
  rangeFrom: '00',
  rangeTo: '88',
  printTarget: ['部門別'],
  departmentCode: '000',
  departmentName: '無',
  facilityCode: '',
  facilityName: '',
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>施設・地区別予測固定資産明細表</h1>
      <FixedAssetBreakdown {...sampleData} />
    </div>
  );
};

export default App;