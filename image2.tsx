import React from 'react';
import { FaGlobe } from 'react-icons/fa';

type CompanyInfoProps = {
  companyName: string;
  dataSystemDepartment: string;
};

const CompanyInfo: React.FC<CompanyInfoProps> = ({
  companyName,
  dataSystemDepartment,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <FaGlobe className="text-2xl" />
      <div>
        <div className="text-lg font-bold">{companyName || 'Company Name'}</div>
        <div className="text-sm">{dataSystemDepartment || 'Data System Department'}</div>
      </div>
    </div>
  );
};

const SampleUsage: React.FC = () => {
  return (
    <div>
      <h2>With Sample Data:</h2>
      <CompanyInfo companyName="ABC Corporation" dataSystemDepartment="Data System Division" />
      
      <h2>Without Data:</h2>
      <CompanyInfo companyName="" dataSystemDepartment="" />
    </div>
  );
};

export default CompanyInfo;