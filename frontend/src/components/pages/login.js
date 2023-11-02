import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import axios from "axios";

const Login = ({ setData }) => {
  const navigate = useNavigate();

  const isLogin = async (values, setData) => {
    try {
      // const { data: dataInfo } = await axios.get(
      //   `user-information/${values.email}`
      // );
      // const { data: dataIssue } = await axios.get(`issue/${values.email}`);

      const [{ data: dataInfo }, { data: dataIssue }] = await Promise.all([
        await axios.get(`user-information/${values.email}`),
        await axios.get(`issue/${values.email}`),
      ]);

      const taskData = dataIssue.filter((i) => i.status === "null");
      const processData = dataIssue.filter((i) => i.status === "processing");
      const doneData = dataIssue.filter((i) => i.status === "done");

      console.log("--------------", dataIssue);

      if (dataInfo[0].password === values.password) {
        setData({
          user: dataInfo[0],
          taskData,
          processData,
          doneData,
          totalIssue: dataIssue.length,
        });
        navigate("/dashboard");
      }
    } catch (e) {
      console.log("------------", e);
    }
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <Formik
                        initialValues={{ email: "", password: "" }}
                        onSubmit={(values) => {
                          isLogin(values, setData);
                        }}
                      >
                        {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                        }) => (
                          <form className="user" onSubmit={handleSubmit}>
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control form-control-user"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Enter User Name ..."
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="password"
                                className="form-control form-control-user"
                                id="password"
                                placeholder="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </div>
                            <div className="form-group">
                              <div className="custom-control custom-checkbox small">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="customCheck"
                                />
                                <label
                                  className="custom-control-label"
                                  for="customCheck"
                                >
                                  Remember Me
                                </label>
                              </div>
                            </div>
                            <a
                              className="btn btn-primary btn-user btn-block"
                              onClick={() => {
                                handleSubmit();
                              }}
                            >
                              Login
                            </a>
                          </form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
