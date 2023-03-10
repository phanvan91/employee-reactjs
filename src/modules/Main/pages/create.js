import {Fragment, useState} from 'react';
import {validateEmail} from './../../../utils/helper';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
function Create () {

	const navigate = useNavigate();

	const [dataForm,setDataForm] = useState({
		name: '',
		email: '',
		age: '',
	});
	const [modalValidate, setModalValidate] = useState(false);
	const handleClose = () => {
		setModalValidate(false)
	}
	const onSubmitForm = (e) => {
		e.preventDefault();
		if(dataForm.age && dataForm.name && dataForm.email && validateEmail(dataForm.email)){
			if(localStorage.getItem('data')){
				let getDataLocal = JSON.parse(localStorage.getItem('data'));
				let pushData = [...getDataLocal,dataForm]
				localStorage.setItem('data',JSON.stringify(pushData))
			}else{
				localStorage.setItem('data',JSON.stringify([dataForm]))
			}
			navigate('/employee')
			return
		}
		setModalValidate(!modalValidate);
	}
	let optionsAge = [];
	for(let i = 1980; i <= 2023; i++){
		optionsAge.push(i)
	}
	const elementOption = optionsAge.map((item,key) => {
		return <option key={key} value={item}>{item}</option>
	})
	return (
		<Fragment>
			<form onSubmit={onSubmitForm} >

				<div className="container text-center mt-5">
					<div className="row justify-content-md-center">
						<div className="col-md-8">

							<h4>Create Employee</h4>

							<div className="mb-3">
								<label htmlFor="exampleFormControlInput1" className="form-label float-start">Name</label>
								<input
									type="text"
									className="form-control"
									name={'name'}
									value={dataForm.name}
									onChange={(e) => setDataForm({
										...dataForm,
										name : e.target.value
									})}
								/>
							</div>

							<div className="mb-3">
								<label htmlFor="exampleFormControlInput1" className="form-label float-start">Email</label>
								<input
									type="text"
									name={'email'}
									className="form-control"
									id="exampleFormControlInput1"
									placeholder="name@example.com"
									value={dataForm.email}
									onChange={(e) => setDataForm({
										...dataForm,
										email : e.target.value
									})}
								/>
							</div>

							<div className="mb-3">
								<label htmlFor="exampleFormControlInput1" className="form-label float-start">Age</label>
								<select
									name="age"
									value={dataForm.age}
									onChange={(e) => setDataForm({
										...dataForm,
										age : e.target.value
									})}
									className={'form-control'}>
									<option value="">Choose</option>
									{elementOption}
								</select>
							</div>

							<div className={'mb3'}>
								<button
									className={'btn btn-success'}
									type={'submit'}
								>Register</button>
							</div>

						</div>
					</div>
				</div>

			</form>

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
					All inputs are required
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</Fragment>
	)

}

export default Create;
