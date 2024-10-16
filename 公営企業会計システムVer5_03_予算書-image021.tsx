以下は、指定された要件に基づいて生成したNext.js + TypeScriptのコンポーネントです。

import React from 'react';
import styled from 'styled-components';

interface PropType {
  documentNumber: string;
  date: string;
  title: string;
  subtitle: string;
  pubYear: number;
  pageCount: number;
  size: 'A4' | 'A4縦';
  style: string;
  subtitle2: string;
  title2: string;
  memo: string;
  isSeal: boolean;
  isSign: boolean;
  openAccess: 1 | 2;
}

const DocInfoArea = styled.div`
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }  
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Subtitle = styled.div`
  margin-bottom: 10px;
`;

const InputText = styled.input`
  margin-left: 5px;
  @media screen and (max-width: 600px) {
    width: 100px;
  }
`;

const Select = styled.select`
  margin-left: 5px;
`;

const PublicationInfo = ({ documentNumber, date, title, subtitle, pubYear, pageCount, size, style, subtitle2, title2, memo, isSeal, isSign, openAccess }: PropType) => {
  return (
    <DocInfoArea>
      <div>
        {/* 資料番号・日付 */}
        <span>資料番号：{documentNumber}</span>
        <span style={{marginLeft: "20px"}}>予算・会計担当: {date}</span>
      </div>
      
      <Title>{title}</Title>
      
      <div>
        {/* 自動仕訳情報 */}
        <CheckboxContainer>
          <RadioButton type="radio" name="autoJournal" />
          <span>見積要求額</span>
          <RadioButton type="radio" name="autoJournal" />
          <span>請求額</span>
          <RadioButton type="radio" name="autoJournal" />
          <span>図</span>
        </CheckboxContainer>
      </div>
      
      <div>
        {/* 前年度繰越金・当年度繰越金 */}
        <span>前年度繰越金：</span>
        <InputText type="number" value={pubYear} /> 
        <span>(円)</span>
        <span style={{marginLeft: "10px"}}>前年度<br/>授権年計費</span>
      </div>
      
      <div>
        {/* 書式 */}
        <div>サイズ：
          <RadioButton type="radio" name="size" checked={size === 'A4'} />
          <span>A4 横</span>
          <RadioButton type="radio" name="size" checked={size === 'A4縦'} />
          <span>A4 縦</span>
        </div>
        <div>
          <span>タイトル：</span><InputText type="text" value={style} />
        </div>
        <div>
          <span>サブタイトル：</span><InputText type="text" value={subtitle2} />
        </div>
        <div>
          <span>柱タイトル：</span><InputText type="text" value={title2} />  
        </div>
        <div>
          <span>頁付字：</span>
          <RadioButton type="radio" name="pageNum" checked={isSeal} /><span>する</span>
          <RadioButton type="radio" name="pageNum" checked={!isSeal} /><span>しない</span>
        </div>
        <div>
          <span>開始頁：</span>
          <InputText type="number" value={openAccess} />
        </div>        
      </div>
    </DocInfoArea>
  );
};

// サンプルデータを用いた使用例
const SampleUsage = () => {
  const sampleData = {
    documentNumber: "平成29第06号16日", 
    date: "平成29年06月16日",
    title: "〇〇に関する調書", 
    subtitle: "副題が入ります",
    pubYear: 2020,
    pageCount: 10,
    size: "A4",
    style: "タイトル",
    subtitle2: "サブタイトル",
    title2: "柱タイトル",
    memo: "1",
    isSeal: true,
    isSign: false,
    openAccess: 1
  };
  
  return (
    <PublicationInfo {...sampleData} />
  );
};

export default PublicationInfo;