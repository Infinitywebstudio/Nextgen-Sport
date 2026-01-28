import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/img";
import { sellerPayoutsData } from "../../../core/json/sellerPayoutsData";
import Table from "../../../core/dataTable/index";

const SellerPayouts = () => {
  const data = sellerPayoutsData;

  const columns = [
    {
      title: "Date et heure",
      dataIndex: "Date_Time",
      sorter: (a: any, b: any) => a.ID.length - b.ID.length,
    },
    {
      title: "Passerelle de paiement",
      dataIndex: "Payment_Gateway",
      sorter: (a: any, b: any) =>
        a.Payment_Gateway.length - b.Payment_Gateway.length,
    },
    {
      title: "Montant",
      dataIndex: "Amount",
      sorter: (a: any, b: any) => a.Amount.length - b.Amount.length,
    },
    {
      title: "Statut",
      dataIndex: "Status",
      render: (text: string) => (
        <span className="badge bg-light text-success border-success-100 users-badge debit-badge">
          <i className="ti ti-point-filled me-1" /> {text === "Completed" ? "Terminé" : text === "Pending" ? "En attente" : text}
        </span>
      ),
      sorter: (a: any, b: any) => a.Status.length - b.Status.length,
    },
  ];
  return (
    <>
      {/* Contenu de la page */}
      <div className="page-wrapper">
        <div className="page-content content bg-light">
          <div className="main-title mb-4">
            <h4>Virements</h4>
          </div>
          {/* Virements */}
          <div className="card card-property mb-4">
            <p>
              Tous les gains seront envoyés à la méthode de paiement sélectionnée ci-dessous
            </p>
            <div className="payment-gateway d-flex flex-wrap gap-3 m-0">
              <label className="payment-card">
                <input type="radio" name="payment" />
                <span className="content">
                  <span className="radio-btn" />
                  <ImageWithBasePath
                    src="assets/img/payment/gateway-01.png"
                    alt=""
                  />
                  <Link
                    to="#"
                    className="btn btn-dark ms-3"
                    data-bs-toggle="modal"
                    data-bs-target="#payment_config"
                  >
                    Configurer
                  </Link>
                </span>
              </label>
              <label className="payment-card">
                <input type="radio" name="payment" />
                <span className="content">
                  <span className="radio-btn" />
                  <ImageWithBasePath
                    src="assets/img/payment/gateway-02.png"
                    alt=""
                    className="img-fluid img2"
                  />
                  <Link
                    to="#"
                    className="btn btn-dark ms-3"
                    data-bs-toggle="modal"
                    data-bs-target="#payment_config"
                  >
                    Configurer
                  </Link>
                </span>
              </label>
            </div>
          </div>
          {/* /Virements */}
          <div className="main-search main-search-custom mb-4">
            <div id="tablefilter">
              <div className="dt-search">
                <label htmlFor="dt-search-0"> </label>
                <input type="search" placeholder="Rechercher" />
              </div>
            </div>
          </div>
          {/* Tables */}
          <Table dataSource={data} columns={columns} Selection={false} />
          {/* /Tables */}
        </div>
      </div>
      {/* /Contenu de la page */}

      {/* Configuration de paiement */}
      <div
        className="modal new-modal fade"
        id="payment_config"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Configuration Paypal</h5>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
              >
                <span>×</span>
              </button>
            </div>
            <div className="modal-body service-modal">
              <div className="form-wrap form-focus">
                <label className="mb-1 fw-medium text-dark">
                  Nom <span className="text-primary">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-wrap form-focus">
                <label className="mb-1 fw-medium text-dark">
                  Email <span className="text-primary">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="modal-btn">
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary w-100"
                >
                  Configurer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Configuration de paiement */}
    </>
  );
};

export default SellerPayouts;
