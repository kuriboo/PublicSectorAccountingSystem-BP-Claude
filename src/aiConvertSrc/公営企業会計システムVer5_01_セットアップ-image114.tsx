import React, { useState } from 'react';
import styled from 'styled-components';

// 作表制御表ファイルリスト作成コンポーネントの型定義
type ZuhyoControlFileListProps = {
  defaultFromValue?: number;
  defaultToValue?: number;
};

// 作表制御表ファイルリスト作成コンポーネント
const ZuhyoControlFileList: React.FC<ZuhyoControlFileListProps> = ({
  defaultFromValue = 0,
  defaultToValue = 999,
}) => {
  // 作表制御表区分のステート
  const [zuhyoType, setZuhyoType] = useState<'行リスト' | '列リスト'>('行リスト');

  // 範囲指定のステート
  const [fromValue, setFromValue] = useState(defaultFromValue);
  const [toValue, setToValue] = useState(defaultToValue);

  // 作表制御表区分の変更ハンドラ
  const handleZuhyoTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZuhyoType(e.target.value as '行リスト' | '列リスト');
  };

  // 範囲指定のFROM値変更ハンドラ  
  const handleFromValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setFromValue(isNaN(value) ? 0 : value);
  };

  // 範囲指定のTO値変更ハンドラ
  const handleToValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setToValue(isNaN(value) ? 999 : value);
  };

  return (
    <Container>
      <Title>作表制御表ファイルリスト作成</Title>
      <ZuhyoTypeContainer>
        <ZuhyoTypeLabel>
          <ZuhyoTypeRadio
            type="radio"
            value="行リスト"
            checked={zuhyoType === '行リスト'}
            onChange={handleZuhyoTypeChange}
          />
          行リスト
        </ZuhyoTypeLabel>
        <ZuhyoTypeLabel>
          <ZuhyoTypeRadio
            type="radio"
            value="列リスト"
            checked={zuhyoType === '列リスト'}
            onChange={handleZuhyoTypeChange}
          />
          列リスト
        </ZuhyoTypeLabel>
      </ZuhyoTypeContainer>
      <RangeContainer>
        <RangeLabel>範囲指定</RangeLabel>
        <RangeInput
          type="number"
          value={fromValue}
          onChange={handleFromValueChange}
        />
        ～
        <RangeInput
          type="number"
          value={toValue}
          onChange={handleToValueChange}
        />
      </RangeContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータを使用したZuhyoControlFileListコンポーネントの表示例
const SampleZuhyoControlFileList: React.FC = () => {
  return (
    <ZuhyoControlFileList defaultFromValue={100} defaultToValue={500} />
  );
};

// スタイリング
const Container = styled.div`
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 18px;
`;

const ZuhyoTypeContainer = styled.div`
  margin-bottom: 10px;
`;

const ZuhyoTypeLabel = styled.label`
  margin-right: 10px;
`;

const ZuhyoTypeRadio = styled.input`
  margin-right: 5px;
`;

const RangeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const RangeLabel = styled.span`
  margin-right: 10px;
`;

const RangeInput = styled.input`
  width: 60px;
  margin: 0 5px;
  padding: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default ZuhyoControlFileList;