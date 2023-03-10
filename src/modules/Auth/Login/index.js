import {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {loginRequest} from './../../../redux/auth/action'
import {useDispatch} from "react-redux";

const dataExampleLogin = {
  username: 'admin',
  email: 'admin@gmail.com'
}

function Login() {

  const dispatch = useDispatch();

  const [dataForm, setDataForm] = useState({
    username : '',
    password : '',
  })

  const [modalValidate, setModalValidate] = useState(false);

  const handleClose = () => {
    setModalValidate(false)
  }

  const onSubmitForm = (e) =>{
    e.preventDefault();
    if(dataForm.username == 'admin' && dataForm.password == '123456' ){
      dispatch(loginRequest(dataExampleLogin))
      return;
    }
    setModalValidate(!modalValidate);
  }

  return (
    <>
      <div className={'login-form'}>
        <div className="main-bg">
          <div className="container">
            <div className="row justify-content-center mt-5">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="card shadow">
                  <div className="card-title text-center border-bottom">
                    <h2 className="p-3">Login</h2>
                  </div>
                  <div className="card-body">
                    <form onSubmit={onSubmitForm}>
                      <div className="mb-4">
                        <label
                          htmlFor="username"
                          className="form-label"
                        >
                          Username/Emai
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          value={dataForm.username}
                          onChange={(e)=>{setDataForm({
                            ...dataForm,
                            username: e.target.value
                          })}}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="password"
                          className="form-label"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          value={dataForm.password}
                          onChange={(e)=>{setDataForm({
                            ...dataForm,
                            password: e.target.value
                          })}}
                        />
                      </div>

                      {/*<div className={'mb-4 row'}>*/}
                      {/*  <div className={'col-12'}>*/}
                      {/*    <a href="" className={'float-end'}>Register</a>*/}
                      {/*  </div>*/}
                      {/*</div>*/}
                      <div className="d-grid">
                        <button
                          type="submit"
                          className="btn btn-primary"
                        >Login</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={modalValidate}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        // centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Error Login
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
