import { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/img";
import ReactApexChart from "react-apexcharts";
import { DatePicker } from "antd";
import { all_routes } from "../../router/all_routes";

const SellerDashboard = () => {
  const [saleChart] = useState<any>({
    chart: {
      height: 290,
      type: 'bar',
      stacked: false,
      toolbar: {
        show: false,
      }
    },
    colors: ['#FF6F28'],
    plotOptions: {
      bar: {
        borderRadius: 5,
        horizontal: false,
        endingShape: 'rounded',
        columnWidth: '40%'
      },
    },
    series: [{
      name: 'Données mensuelles',
      data: [620, 330, 180, 270, 480, 100, 580, 150, 250, 90, 410, 500]
    }],
    xaxis: {
      categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
      labels: {
        style: {
          colors: '#6B7280',
          fontSize: '13px',
        }
      }
    },
    yaxis: {
      labels: {
        offsetX: -15,
        style: {
          colors: '#6B7280',
          fontSize: '13px',
        }
      }
    },
    grid: {
      borderColor: '#E5E7EB',
      strokeDashArray: 5,
      padding: {
        left: -8,
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1
    },
  });
  const [chartOptions] = useState<any>({
      chart: {
        height: 290,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      series: [{
        data: [510, 320, 440, 600, 450, 150, 580, 190, 430, 290, 190, 290],
        name: 'Revenus'
      },
      {
        name: 'Retiré',
        data: [290, 120, 280, 190, 290, 290, 290, 110, 120, 130, 290, 120]
      },
    ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "80%",
          borderRadius: 5,
          endingShape: "rounded",
        },
      },
      colors: ["#FF781A", "#45505C"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Jan",
          "Fév",
          "Mai",
          "Mar",
          "Juin",
          "Juil",
          "Août",
          "Avr",
          "Sep",
          "Oct",
          "Nov",
          "Déc",
        ],
        labels: {
          style: {
            colors: "#5D6772",
            fontSize: "14px",
          },
        },
      },
      yaxis: {
        min: 0,
        max: 600,
        labels: {
          offsetX: -15,
          style: {
            colors: "#5D6772",
            fontSize: "13px",
          },
        },
      },
      grid: {
        borderColor: "#E2E4E6",
        strokeDashArray: 5,
        padding: {
          left: -8,
          right: -15,
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return `${val}%`;
          },
        },
      },
    })
  return (
    <>
      {/* Contenu de la page */}
      <div className="page-wrapper">
        <div className="page-content content pb-0 bg-light">
          <div className="main-title mb-4">
            <h4>Tableau de bord</h4>
          </div>
          {/* Aperçu */}
          <div className="row">
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="dash-widget flex-fill w-100">
                <div className="d-flex align-items-center mb-3">
                  <span className="dash-icon bg-success flex-shrink-0">
                    <i className="ti ti-credit-card" />
                  </span>
                  <div>
                    <p className="mb-1">Crédit total</p>
                    <h5 className="mb-0">10 292,50 €</h5>
                  </div>
                </div>
                <div className="bg-light p-3 rounded-2">
                  <p className="text-dark">
                    <span className="text-secondary">+10%</span> depuis la semaine dernière
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="dash-widget flex-fill w-100">
                <div className="d-flex align-items-center mb-3">
                  <span className="dash-icon bg-danger flex-shrink-0">
                    <i className="ti ti-report-money" />
                  </span>
                  <div>
                    <p className="mb-1">Débit total</p>
                    <h5 className="mb-0">4 254,47 €</h5>
                  </div>
                </div>
                <div className="bg-light p-3 rounded-2">
                  <p className="text-dark">
                    <span className="text-error">-1%</span> depuis la semaine dernière
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12 d-flex">
              <div className="dash-earning flex-fill w-100">
                <div className="d-flex align-items-center gap-4">
                  <div className="earning-info">
                    <p className="mb-1">Gains</p>
                    <h5>157 815 €</h5>
                  </div>
                  <div className="earning-info">
                    <p className="mb-1">Solde du portefeuille</p>
                    <h5>5 690 €</h5>
                  </div>
                </div>
                <div className="earning-btn text-end">
                  <Link
                    to={all_routes.sellerWallets}
                    className="btn btn-primary btn-md"
                  >
                    <i className="ti ti-shopping-cart me-1" />
                    Portefeuille
                  </Link>
                </div>
                <Link
                  to="#"
                  className="withdraw-link"
                  data-bs-toggle="modal"
                  data-bs-target="#withdraw"
                >
                  Retirer des fonds
                </Link>
              </div>
            </div>
          </div>
          {/* /Aperçu */}
          <div className="row">
            {/* Statistiques des ventes */}
            <div className="col-lg-12">
              <div className="card dashboard-card">
                <div className="card-header">
                  <div className="gig-card-head">
                    <h5 className="card-title mb-0">Statistiques des ventes</h5>
                  </div>
                  <div className="d-flex align-item-center gap-3">
                    <ul
                      className="revenue-tab nav nav-tabs m-0 border-0"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <Link
                          to="#"
                          className="nav-link active"
                          data-bs-toggle="tab"
                          data-bs-target="#gigs_Information"
                          aria-selected="false"
                          role="tab"
                          tabIndex={-1}
                        >
                          Services
                        </Link>
                      </li>
                      <li className="nav-item" role="presentation">
                        <Link
                          to="#"
                          className="nav-link"
                          data-bs-toggle="tab"
                          data-bs-target="#pay_Information"
                          aria-selected="false"
                          role="tab"
                          tabIndex={-1}
                        >
                          Paiements
                        </Link>
                      </li>
                    </ul>
                    <div className="input-icon-start mb-0 position-relative year">
                      <span className="input-icon-addon">
                        <i className="ti ti-calendar-up" />
                      </span>
                      <DatePicker className="form-control yearpicker"  picker="year" />
                      <i className="ti ti-chevron-down" />
                    </div>
                  </div>
                </div>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="gigs_Information"
                    role="tabpanel"
                  >
                    <div className="card-body pb-0">
                      <div id="sales-income">
                        <ReactApexChart
                          id="emp-department"
                          options={saleChart}
                          series={saleChart.series}
                          type="bar"
                          height={220}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pay_Information"
                    role="tabpanel"
                  >
                    <div className="card-body pb-0">
                      <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap mb-4">
                        <div className="d-flex align-items-center gap-4">
                          <div>
                            <p className="mb-1">Revenus</p>
                            <h5 className="mb-0">9 564,30 €</h5>
                          </div>
                          <div>
                            <p className="mb-1">Retiré</p>
                            <h5 className="mb-0">3 855,64 €</h5>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="revenue me-2 mb-0">
                            <i className="ti ti-point-filled" />
                            Revenus
                          </p>
                          <p className="mb-0">
                            <i className="ti ti-point-filled" />
                            Retiré
                          </p>
                        </div>
                      </div>
                      <div id="s-col" className="chart-set" >
                        <ReactApexChart
                                              id="emp-department"
                                              options={chartOptions}
                                              series={chartOptions.series}
                                              type="bar"
                                              height={220}
                                            />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Statistiques des ventes */}
          </div>
        </div>
      </div>
      {/* /Contenu de la page */}
      {/* Retrait */}
      <div
        className="modal new-modal fade"
        id="withdraw"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Retrait de paiement</h5>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
              >
                <span>x</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="amt-wrap">
                    <div className="form-wrap">
                      <label className="form-label">
                        Entrer le montant (€)
                        <span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <ul className="amt-list">
                      <li>Ou</li>
                      <li>
                        <Link to="#" className="vary-amt">
                          50 €
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="vary-amt">
                          100 €
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="vary-amt">
                          150 €
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="buyer-method">
                    <h6>Sélectionner la passerelle de paiement *</h6>
                    <label className="custom_radio">
                      <input type="radio" name="payment" />
                      <span className="checkmark" />
                      Paypal
                    </label>
                    <label className="custom_radio">
                      <input type="radio" name="payment" />
                      <span className="checkmark" />
                      Stripe
                    </label>
                  </div>
                  <div className="form-wrap form-item wallet-custom">
                    <label className="form-label">
                      Email<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-wrap form-item wallet-custom">
                    <label className="form-label">
                      Mot de passe<span className="text-danger ms-1">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-12">
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#success_credit"
                    data-bs-dismiss="modal"
                    className="btn btn-primary w-100"
                  >
                    Retirer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Retrait */}
      {/* Détails de la transaction */}
      <div
        className="modal new-modal fade"
        id="transaction_details"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Détails de la transaction</h5>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
              >
                <span>×</span>
              </button>
            </div>
            <div className="modal-body service-modal">
              <h6 className="model-head-text">Résumé de la transaction</h6>
              <div className="sumary-widget">
                <div className="summary-info">
                  <h6>ID de transaction</h6>
                  <p>#TXN-20250321-00123462</p>
                </div>
                <div className="summary-info">
                  <h6>Type de transaction</h6>
                  <p>Achat</p>
                </div>
                <div className="summary-info">
                  <h6>Montant</h6>
                  <p>320 €</p>
                </div>
                <div className="summary-info">
                  <h6>Devise</h6>
                  <p>EUR</p>
                </div>
                <div className="summary-info">
                  <h6>Frais de traitement</h6>
                  <p>20 €</p>
                </div>
                <div className="summary-info">
                  <h6>Méthode de paiement</h6>
                  <p>Carte de crédit</p>
                </div>
                <div className="summary-info mb-0">
                  <h6>Expéditeur</h6>
                  <p>Jean Dupont</p>
                </div>
                <div className="summary-info mb-0">
                  <h6>Destinataire</h6>
                  <p>Marie Martin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Détails de la transaction */}
    </>
  );
};

export default SellerDashboard;
