import { useState } from "react";
import ImageWithBasePath from "../../../core/img";
import { Link } from "react-router-dom";
import {
  addGigscategory,
  delivergig,
  subcategory,
} from "../../../core/common/selectOption";
import { all_routes } from "../../router/all_routes";
import CommonSelect from "../../../core/common/common-select/commonSelect";
import CommonTagInputs from "../../../core/common/Taginput";
interface AddOn {
  id: number;
  service: string;
  price: string;
  days: string;
}
const AddGigs = () => {
  const routes = all_routes;

  const [tags, setTags] = useState<string[]>();
  const handleTagsChange = (newTags: string[]) => {
    setTags(newTags);
  };

  const [addOns, setAddOns] = useState<AddOn[]>([]);

  const handleAdd = () => {
    const newAddOn: AddOn = {
      id: Date.now(),
      service: "",
      price: "",
      days: "",
    };
    setAddOns([...addOns, newAddOn]);
  };

  const handleRemove = (id: number) => {
    setAddOns(addOns.filter((addOn) => addOn.id !== id));
  };

  const handleChange = (id: number, field: keyof AddOn, value: string) => {
    setAddOns((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar breadcrumb-bar-info">
        <div className="breadcrumb-img">
          <div className="breadcrumb-left">
            <ImageWithBasePath
              src="assets/img/bg/breadcrump-bg-01.png"
              alt="img"
            />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={routes.home}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Create Gigs
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title mb-0">Create Gigs</h2>
            </div>
          </div>
        </div>
        <div className="breadcrumb-img">
          <div className="breadcrumb-right">
            <ImageWithBasePath
              src="assets/img/bg/breadcrump-bg-02.png"
              alt="img"
            />
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="page-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="marketing-section gig-post">
                <div className="gigs-step">
                  <ul>
                    <li>
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/book-01.svg"
                          alt="img"
                        />
                      </span>
                      <p>Step 01</p>
                      <h6>Create your gig</h6>
                    </li>
                    <li>
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/book-02.svg"
                          alt="img"
                        />
                      </span>
                      <p>Step 02</p>
                      <h6>Publish</h6>
                    </li>
                    <li>
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/book-03.svg"
                          alt="img"
                        />
                      </span>
                      <p>Step 03</p>
                      <h6>Receive Orders</h6>
                    </li>
                    <li>
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/book-01.svg"
                          alt="img"
                        />
                      </span>
                      <p>Step 04</p>
                      <h6>Deliver the work</h6>
                    </li>
                    <li>
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/book-04.svg"
                          alt="img"
                        />
                      </span>
                      <p>Step 05</p>
                      <h6>Get Paid</h6>
                    </li>
                    <li>
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/book-05.svg"
                          alt="img"
                        />
                      </span>
                      <p>Step 06</p>
                      <h6>Withdraw Funds</h6>
                    </li>
                  </ul>
                </div>
                <div className="marketing-bg">
                  <ImageWithBasePath
                    src="assets/img/bg/market-bg.png"
                    alt="img"
                    className="market-bg"
                  />
                  <ImageWithBasePath
                    src="assets/img/bg/market-bg-01.png"
                    alt="img"
                    className="market-img"
                  />
                </div>
              </div>
            </div>
            {/* General */}
            <div className="col-lg-10">
              <div className="add-property-wrap">
                <div className="property-info">
                  <h5 className="mb-1">General</h5>
                  <p>
                    Add the Details of your Gig to know the user to receive
                    orders
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-wrap">
                      <label className="col-form-label">
                        Title for your Gig
                        <span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control mb-2" />
                      <span>
                        <i className="ti ti-info-circle me-1" />
                        Enter Minimum 200 Characters
                      </span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="form-wrap">
                      <label className="col-form-label">
                        For ($)<span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="form-wrap">
                      <label className="col-form-label">
                        When will you deliver gig
                        <span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={delivergig}
                        className="select"
                        defaultValue={delivergig[0]}
                      />
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="form-wrap">
                      <label className="col-form-label">
                        Category<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={addGigscategory}
                        className="select"
                        defaultValue={addGigscategory[0]}
                      />
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="form-wrap">
                      <label className="col-form-label">
                        Sub Category<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={subcategory}
                        className="select"
                        defaultValue={subcategory[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <label className="col-form-label">
                        No of Revisions
                        <span className="text-danger ms-1">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <label className="col-form-label">Tags</label>
                      <div className="input-block input-block-tagsinput mb-1">
                        {/* <TagInput tags={tags} setTags={setTags} /> */}
                        <CommonTagInputs
                                    initialTags={tags}
                                    onTagsChange={handleTagsChange}
                                  />
                      </div>
                      <span>Enter value separated by comma</span>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-wrap">
                      <label className="col-form-label">
                        Provide More Details About Gigs
                        <span className="text-danger ms-1">*</span>
                      </label>
                      <textarea
                        className="form-control mb-2"
                        rows={6}
                        placeholder="Enter Description"
                        defaultValue={""}
                      />
                      <span>
                        <i className="ti ti-info-circle me-1" />
                        Enter Minimum 180 Characters
                      </span>
                    </div>
                  </div>
                </div>
                {/* Buyer */}
                <div className="property-info">
                  <h5 className="mb-1">Buyer</h5>
                  <p>
                    Add Extra Service &amp; Other Details Of the Gigs to earn
                    Extra Amount
                  </p>
                </div>
                <div className="add-content">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="form-wrap">
                        <label className="col-form-label">
                          Earn Extra Money - Offer Optional Add-on Services For
                          Buyer
                          <span className="text-danger ms-1">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-wrap">
                        <label className="col-form-label">For ($)</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-wrap">
                        <label className="col-form-label">Days</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="add-content">
                  {addOns.map((addOn) => (
                    <div className="row mb-3" key={addOn.id}>
                      <div className="col-md-8">
                        <div className="form-wrap">
                          <label className="col-form-label">
                            {" "}
                            Earn Extra Money - Offer Optional Add-on Services
                            For Buyer
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={addOn.service}
                            onChange={(e) =>
                              handleChange(addOn.id, "service", e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="form-wrap">
                          <label className="col-form-label">For ($)</label>
                          <input
                            type="text"
                            className="form-control"
                            value={addOn.price}
                            onChange={(e) =>
                              handleChange(addOn.id, "price", e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="form-wrap">
                          <label className="col-form-label">Days</label>
                          <div className="d-flex align-items-center gap-2">

                         
                          <input
                            type="text"
                            className="form-control"
                            value={addOn.days}
                            onChange={(e) =>
                              handleChange(addOn.id, "days", e.target.value)
                            }
                          />
                          <Link to="#" 
                            className="trash-sign ms-2 text-danger"
                            onClick={() => handleRemove(addOn.id)}
                          >
                            <i className="feather icon-trash-2"></i>
                          </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <Link
                      to="#"
                      className="btn btn-dark amount-add"
                      onClick={handleAdd}
                    >
                      <i className="ti ti-plus" />
                      Add New
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label className="custom_check extra-serv">
                      <input type="checkbox" className="disable-check" />
                      <span className="checkmark" />
                      Superfast Delivery
                    </label>
                  </div>
                  <div className="col-md-4">
                    <div className="form-wrap">
                      <label className="col-form-label">Add Services</label>
                      <input
                        type="text"
                        className="form-control exta-label"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-wrap">
                      <label className="col-form-label">For ($)</label>
                      <input
                        type="text"
                        className="form-control exta-label"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-wrap">
                      <label className="col-form-label">In (Day)</label>
                      <input
                        type="text"
                        className="form-control exta-label"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label className="col-form-label">
                      How are you planning to work with the Buyer? *
                    </label>
                    <div className="form-wrap gig-option">
                      <label className="custom_radio">
                        <input type="radio" name="buyer" defaultChecked />
                        <span className="checkmark" />
                        Remote
                      </label>
                      <label className="custom_radio">
                        <input type="radio" name="buyer" />
                        <span className="checkmark" />
                        On-site
                      </label>
                    </div>
                    <div className="form-wrap">
                      <label className="col-form-label">Description</label>
                      <textarea
                        className="form-control mb-2"
                        rows={6}
                        placeholder="What do you need from the Buyer to get started"
                        defaultValue={""}
                      />
                      <span>
                        <i className="ti ti-info-circle me-1" />
                        Enter Minimum 180 Characters
                      </span>
                    </div>
                  </div>
                </div>
                {/* Buyer */}
                {/* Upload */}
                <div className="property-info">
                  <h5 className="mb-1">Upload</h5>
                  <p>Add images and videos for your gigs.</p>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label className="col-form-label">
                      Upload images videos and more
                    </label>
                    <ul className="nav upload-list">
                      <li>
                        <Link
                          to="#"
                          className="active"
                          data-bs-toggle="tab"
                          data-bs-target="#upload-img"
                        >
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icons/upload-01.svg"
                              alt="icon"
                            />
                          </span>
                          <h6>Upload Image</h6>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tab"
                          data-bs-target="#upload-video"
                        >
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icons/upload-02.svg"
                              alt="icon"
                            />
                          </span>
                          <h6>Upload Videos</h6>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tab"
                          data-bs-target="#upload-link"
                        >
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icons/upload-03.svg"
                              alt="icon"
                            />
                          </span>
                          <h6>Upload Video Link</h6>
                        </Link>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane show active" id="upload-img">
                        <div className="drag-upload form-wrap mb-2">
                          <input type="file" accept="image/*" />
                          <div className="img-upload">
                            <p>
                              <i className="feather icon-upload-cloud" />
                              Drag or Upload Image
                            </p>
                          </div>
                        </div>
                        <span>
                          <i className="ti ti-info-circle me-1" />
                          Upload Featured Image first, Then add Gallery Images
                        </span>
                        <div className="upload-file-wrap d-flex align-items-center flex-wrap">
                          <div className="upload-file-item rounded-2 me-3 position-relative">
                            <ImageWithBasePath
                              className="rounded-2"
                              src="/assets/img/gigs/gigs-10.jpg"
                              alt="img"
                            />
                            <span className="icon-delete bg-light">
                              <i className="ti ti-trash text-danger" />
                            </span>
                          </div>
                          <div className="upload-file-item rounded-2 me-3 position-relative">
                            <ImageWithBasePath
                              className="rounded-2"
                              src="/assets/img/gigs/gigs-11.jpg"
                              alt="img"
                            />
                            <span className="icon-delete bg-light">
                              <i className="ti ti-trash text-danger" />
                            </span>
                          </div>
                          <div className="upload-file-item rounded-2 position-relative">
                            <ImageWithBasePath
                              className="rounded-2"
                              src="/assets/img/gigs/gigs-12.jpg"
                              alt="img"
                            />
                            <span className="icon-delete bg-light">
                              <i className="ti ti-trash text-danger" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="upload-video">
                        <div className="drag-upload form-wrap">
                          <input type="file" accept="video/*" />
                          <div className="img-upload">
                            <p>
                              <i className="feather icon-upload-cloud" />
                              Drag or Upload Video
                            </p>
                          </div>
                        </div>
                        <div className="upload-file-wrap d-flex align-items-center flex-wrap">
                          <div className="upload-file-item rounded-2 me-3 position-relative">
                            <ImageWithBasePath
                              className="rounded-2"
                              src="/assets/img/gigs/gigs-10.jpg"
                              alt="img"
                            />
                            <span className="play-btn">
                              <i className="ti ti-player-play-filled" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="upload-link">
                        <div className="link-upload">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="form-wrap">
                                <label className="col-form-label">
                                  Video Platform
                                  <span className="text-danger ms-1">*</span>
                                </label>
                                <select className="select">
                                  <option>Select</option>
                                  <option>Youtube</option>
                                  <option>Vimeo</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-8">
                              <div className="form-wrap">
                                <label className="col-form-label">
                                  Link
                                  <span className="text-danger ms-1">*</span>
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Upload */}
                {/* faq */}
                <div className="property-info d-flex align-items-center flex-wrap gap-2 justify-content-between">
                  <div>
                    <h5 className="mb-1">FAQ</h5>
                    <p>Add Faq Related to Gig</p>
                  </div>
                  <Link to="#" className="btn btn-dark mb-0">
                    <i className="ti ti-plus" />
                    Add New
                  </Link>
                </div>
                <div className="faq-wrapper faq-lists">
                  <div className="faq-card">
                    <h4 className="faq-title">
                      <Link
                        className="collapsed"
                        data-bs-toggle="collapse"
                        to="#faqone"
                        aria-expanded="false"
                      >
                        What are website development services?
                      </Link>
                    </h4>
                    <div id="faqone" className="card-collapse collapse">
                      <div className="faq-content">
                        <p>
                          Whether you’re looking to launch, update, or overhaul
                          your website, we offers a talented pool of freelancers
                          who turn ideas into action. From personal brand pages
                          to eCommerce stores and everything in between, website
                          development services cover virtually any use case,
                          industry, and niche. In turn, you can make every
                          digital first impression count.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faq-card">
                    <h4 className="faq-title">
                      <Link
                        className="collapsed"
                        data-bs-toggle="collapse"
                        to="#faqtwo"
                        aria-expanded="false"
                      >
                        What are the stages of a project?
                      </Link>
                    </h4>
                    <div id="faqtwo" className="card-collapse collapse">
                      <div className="faq-content">
                        <p>
                          Yes! My service guarantees you 24/7 lifetime support
                          for anything related to your website. Whenever you
                          encounter a problem, feel free to reach out to me
                          anytime.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* faq */}
              </div>
            </div>
            {/* /General */}
            {/* Upload */}
            <div className="col-lg-12">
              <div className="btn-item text-center">
                <Link to="#" className="btn btn-light">
                  Cancel
                </Link>
                <Link
                  to="#"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#success_gigs"
                >
                  Publish Gig
                </Link>
              </div>
            </div>
            {/* /Upload */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};

export default AddGigs;
