// index.tsx
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { DatatableProps } from "../interface/index";


const Datatable: React.FC<DatatableProps> = ({ columns, dataSource , Selection }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);
  const [Selections, setSelections] = useState<any>(true);
  const [filteredDataSource] = useState(dataSource);

  const onSelectChange = (newSelectedRowKeys: any[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };


  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  useEffect(() => {
    return setSelections(Selection);
  }, [Selection])
  
  
  return (
    <>

     {!Selections ?
      <Table
      className="table datanew dataTable no-footer"
     
      columns={columns}
      rowHoverable={false}
      dataSource={filteredDataSource}
      pagination={{
        locale: { items_per_page: "" },
        nextIcon: <i className="ti ti-chevron-right"/>,
        prevIcon: <i className="ti ti-chevron-left"/>,
        defaultPageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: ["10", "20", "30"],
        showTotal: (total, range) => `Showing ${range[0]} - ${range[1]} of ${total} entries`,
      }}
    /> : 
    <Table
        className="table datanew dataTable no-footer"
        rowSelection={rowSelection}
        columns={columns}
        rowHoverable={false}
        dataSource={filteredDataSource}
        
        pagination={{
          locale: { items_per_page: "" },
          nextIcon: <i className="ti ti-chevron-right"/>,
          prevIcon: <i className="ti ti-chevron-left"/>,
          defaultPageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "30"],
          showTotal: (total, range) => `Showing ${range[0]} - ${range[1]} of ${total} entries`,
        }}
      />}
      
    </>
  );
};

export default Datatable;
