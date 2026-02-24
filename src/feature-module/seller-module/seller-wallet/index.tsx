import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../core/img';
import { BuyerWalletData } from '../../../core/json/buyerWallletData';
import Table from "../../../core/dataTable/index";

const SellerWallets = () => {
     const data = BuyerWalletData;
      const columns = [
        {
          title: "ID",
          dataIndex: "ID",
          sorter: (a: any, b: any) => a.ID.length - b.ID.length,
        },
        {
          title: "Uploaded For",
          dataIndex: "Uploaded_For",
          render: (text: string, record: any) => (
            <h2 className="table-avatar d-flex align-items-center">
              <Link to="#" className="avatar">
                <ImageWithBasePath src={`assets/img/gigs/${record.Image}`} alt="User Image" />
              </Link>
              <Link to="#" className="text-dark">
                {text}
              </Link>
            </h2>
          ),
          sorter: (a: any, b: any) => a.Uploaded_For.length - b.Uploaded_For.length,
        },
        {
          title: "Payment Gateway",
          dataIndex: "Payment_Gateway",
          sorter: (a: any, b: any) => a.Payment_Gateway.length - b.Payment_Gateway.length,
        },
        {
          title: "Date & Time",
          dataIndex: "Date_Time",
          sorter: (a: any, b: any) => a.Date_Time.length - b.Date_Time.length,
        },
        {
          title: "Type",
          dataIndex: "Type",
          render: (text: string) => (
            <span className={`badge new-badge ${text === 'Debit' ? 'badge-soft-danger' :'badge-soft-success'}`}>
    
            <i className={`ti ${text === 'Debit' ? 'ti-arrow-up' : 'ti-arrow-down'}`} /> 
            {text}
          </span>
          ),
          sorter: (a: any, b: any) => a.Type.length - b.Type.length,
        },
        {
          title: "Amount",
          dataIndex: "Amount",
          sorter: (a: any, b: any) => a.Amount.length - b.Amount.length,
        },
      ];
  return (
    <>
    {/* Page Content */}
    <div className="page-wrapper">
      <div className="page-content content bg-light">
        <div className="container px-0">
          {/*User Wallet */}
          <div className="content">
            <div className="main-title my-4">
              <h4>Wallet</h4>
            </div>
            <div className="wallet-wrap">
              <div className="wallet-item">
                <div className="wallet-info">
                  <p>Amount in Wallet</p>
                  <h5>$1,302.50</h5>
                </div>
              </div>
              <div className="wallet-item">
                <div className="wallet-info">
                  <p>Total Credit</p>
                  <h5>$9,292.50</h5>
                </div>
              </div>
              <div className="wallet-item">
                <div className="wallet-info">
                  <p>Total Debit</p>
                  <h5>$1,541.21</h5>
                </div>
              </div>
              <div className="wallet-item">
                <div className="wallet-info">
                  <p>Withdrawn</p>
                  <h5>$8,874.21</h5>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <Link
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#withdraw"
                  className="btn btn-primary btn-md"
                >
                  Withdraw
                </Link>
              </div>
            </div>
            <div className="table-filter">
              <ul className="filter-item">
                <li>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      <i className="ti ti-bulb me-2" />
                      Reason
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-lg p-2">
                      <li>
                        <div className="mb-2">
                          <div className="dropdown-add-search">
                            <span className="input-icon">
                              <i className="ti ti-search" />
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search"
                            />
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          I will do designing..
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Develop openAI...
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          I will do Professional
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      <i className="ti ti-user-code me-2" />
                      Payment Gateway
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-lg p-2">
                      <li>
                        <Link to="#" className="dropdown-item">
                          Paypal
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Stripe
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      <i className="ti ti-user-code me-2" />
                      Transaction Type
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-lg p-2">
                      <li>
                        <Link to="#" className="dropdown-item">
                          Debit
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          Credit
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div id="tablefilter" />
            </div>
            <div className="table-responsive custom-table">
            <Table dataSource={data} columns={columns} Selection={false} />
            </div>
           
          </div>
          {/* /User Wallet */}
        </div>
      </div>
    </div>
    {/* /Page Content */}
  </>
  
  )
}

export default SellerWallets