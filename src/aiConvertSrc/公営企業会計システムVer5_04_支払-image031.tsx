import React, { useState } from 'react';
import styled from '@emotion/styled';

// 监视对象类型定义
type MonitorTarget = '一般競争入札';

// 预定设定类型定义
type ScheduleSetting = {
  targetMonth: string; // 格式为YYYY-MM
  paymentCount: number; 
};

type MonitorFormProps = {
  defaultTargetName?: string;
  defaultTargetType?: MonitorTarget;
  defaultSchedule?: ScheduleSetting;
  onSubmit: (targetName: string, targetType: MonitorTarget, schedule: ScheduleSetting) => void;
};

// 表单容器样式
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

// 表单标题样式  
const FormTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

// 表单项容器样式
const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// 表单项标签样式 
const FormLabel = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
`;

// 文本输入框样式
const TextInput = styled.input`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

// 下拉框样式  
const SelectInput = styled.select`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  appearance: none;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cpath d='M0 2l4 4 4-4z'/%3E%3C/svg%3E") no-repeat;
  background-position: right 8px center;
  background-size: 8px 8px;
`;

// 数字输入框样式
const NumberInput = styled.input`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

// 按钮组容器样式
const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  width: 100%;
`;

// 按钮基础样式
const BaseButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

// 确认按钮样式
const ConfirmButton = styled(BaseButton)`
  background-color: #007bff;
  color: #fff;
`;

// 取消按钮样式 
const CancelButton = styled(BaseButton)`
  background-color: #6c757d;
  color: #fff;
`;  

const MonitorForm: React.FC<MonitorFormProps> = ({
  defaultTargetName = '',
  defaultTargetType = '一般競争入札',
  defaultSchedule = { targetMonth: '', paymentCount: 1 },
  onSubmit,
}) => {
  const [targetName, setTargetName] = useState(defaultTargetName);
  const [targetType, setTargetType] = useState(defaultTargetType);
  const [schedule, setSchedule] = useState(defaultSchedule);

  // 提交表单处理函数  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(targetName, targetType, schedule);
  };

  return (
    <FormContainer>
      <FormTitle>予定契約詳細登録（工事）</FormTitle>
      <FormItem>
        <FormLabel htmlFor="targetName">自由設定内容</FormLabel>
        <TextInput
          type="text"
          id="targetName"
          value={targetName}
          onChange={(e) => setTargetName(e.target.value)}
        />
      </FormItem>
      <FormItem>
        <FormLabel htmlFor="targetType">契約方法</FormLabel>
        <SelectInput
          id="targetType"
          value={targetType}
          onChange={(e) => setTargetType(e.target.value as MonitorTarget)}
        >
          <option value="一般競争入札">一般競争入札</option>
          {/* 可以根据需要添加其他选项 */}
        </SelectInput>  
      </FormItem>
      <FormItem>
        <FormLabel htmlFor="targetMonth">完了年月日</FormLabel>
        <TextInput
          type="month"
          id="targetMonth"
          value={schedule.targetMonth}
          onChange={(e) =>
            setSchedule({ ...schedule, targetMonth: e.target.value })
          }
        />
      </FormItem>
      <FormItem>
        <FormLabel htmlFor="paymentCount">支払回数</FormLabel>
        <NumberInput
          type="number"
          id="paymentCount"
          min={1}
          value={schedule.paymentCount}
          onChange={(e) =>
            setSchedule({
              ...schedule,
              paymentCount: parseInt(e.target.value),
            })
          }
        />
      </FormItem>
      <ButtonGroup>
        <ConfirmButton onClick={handleSubmit}>OK</ConfirmButton>
        <CancelButton>クリア</CancelButton>
        <CancelButton>キャンセル</CancelButton>
      </ButtonGroup>
    </FormContainer>
  );
};

// 使用示例
const UsageExample: React.FC = () => {
  const handleSubmit = (
    targetName: string,
    targetType: MonitorTarget,
    schedule: ScheduleSetting
  ) => {
    console.log('监视对象:', targetName);
    console.log('监视类型:', targetType);
    console.log('预定设定:', schedule);
  };

  return (
    <MonitorForm
      defaultTargetName="サンプル監視対象"
      defaultTargetType="一般競争入札"
      defaultSchedule={{
        targetMonth: '2023-04',
        paymentCount: 1,
      }}
      onSubmit={handleSubmit}
    />
  );
};

export default UsageExample;