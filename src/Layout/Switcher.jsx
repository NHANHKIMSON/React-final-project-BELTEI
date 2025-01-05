import React from 'react';

function Switcher(props) {
    return (
        <>
  {/*start switcher*/}
  <button
    className="btn btn-grd btn-grd-primary position-fixed bottom-0 end-0 m-3 d-flex align-items-center gap-2"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#staticBackdrop"
  >
    <i className="material-icons-outlined">tune</i>Customize
  </button>
  <div
    className="offcanvas offcanvas-end"
    data-bs-scroll="true"
    tabIndex={-1}
    id="staticBackdrop"
  >
    <div className="offcanvas-header border-bottom h-70">
      <div className="">
        <h5 className="mb-0">Theme Customizer</h5>
        <p className="mb-0">Customize your theme</p>
      </div>
      <a
        href="javascript:;"
        className="primaery-menu-close"
        data-bs-dismiss="offcanvas"
      >
        <i className="material-icons-outlined">close</i>
      </a>
    </div>
    <div className="offcanvas-body">
      <div>
        <p>Theme variation</p>
        <div className="row g-3">
          <div className="col-12 col-xl-6">
            <input
              type="radio"
              className="btn-check"
              name="theme-options"
              id="BlueTheme"
              defaultChecked=""
            />
            <label
              className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4"
              htmlFor="BlueTheme"
            >
              <span className="material-icons-outlined">contactless</span>
              <span>Blue</span>
            </label>
          </div>
          <div className="col-12 col-xl-6">
            <input
              type="radio"
              className="btn-check"
              name="theme-options"
              id="LightTheme"
            />
            <label
              className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4"
              htmlFor="LightTheme"
            >
              <span className="material-icons-outlined">light_mode</span>
              <span>Light</span>
            </label>
          </div>
          <div className="col-12 col-xl-6">
            <input
              type="radio"
              className="btn-check"
              name="theme-options"
              id="DarkTheme"
            />
            <label
              className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4"
              htmlFor="DarkTheme"
            >
              <span className="material-icons-outlined">dark_mode</span>
              <span>Dark</span>
            </label>
          </div>
          <div className="col-12 col-xl-6">
            <input
              type="radio"
              className="btn-check"
              name="theme-options"
              id="SemiDarkTheme"
            />
            <label
              className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4"
              htmlFor="SemiDarkTheme"
            >
              <span className="material-icons-outlined">contrast</span>
              <span>Semi Dark</span>
            </label>
          </div>
          <div className="col-12 col-xl-6">
            <input
              type="radio"
              className="btn-check"
              name="theme-options"
              id="BoderedTheme"
            />
            <label
              className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4"
              htmlFor="BoderedTheme"
            >
              <span className="material-icons-outlined">border_style</span>
              <span>Bordered</span>
            </label>
          </div>
        </div>
        {/*end row*/}
      </div>
    </div>
  </div>
  {/*start switcher*/}
</>

    );
}

export default Switcher;