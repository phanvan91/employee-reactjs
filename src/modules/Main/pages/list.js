import {Fragment, useState, useEffect} from 'react';
import { Trash } from 'react-bootstrap-icons';
function List () {
	const [dataList, setDataList] = useState([]);
	useEffect(() => {
		if(localStorage.getItem('data')){
			let data = JSON.parse(localStorage.getItem('data'));
			setDataList(data);
		}
	}, []);

	const deleteData = (dataList,index) => {
		var filtered = dataList.filter(function(value, i, arr){
			return i != index;
		});
		if(filtered.length){
			localStorage.setItem('data',JSON.stringify(filtered))
		}else{
			localStorage.removeItem('data');
		}
		setDataList(filtered);
	}

	const element = dataList.map((item,index)=>{
		return (
			<tr key={index}>
				<th scope="row">{index + 1}</th>
				<td>{item.name}</td>
				<td>{item.email}</td>
				<td>{item.age}</td>
				<td style={{cursor: 'pointer'}}>
					<Trash
						onClick={()=> deleteData(dataList,index)}
					/>
				</td>
			</tr>
		)
	})

	return <Fragment>
		<div>
			<table className="table">
				<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Name</th>
					<th scope="col">Email</th>
					<th scope="col">Age</th>
					<th scope="col">Delete</th>
				</tr>
				</thead>
				<tbody>
				{dataList.length ? element : <tr className={'text-center'}><td colSpan="5">No Data</td></tr>}
				</tbody>
			</table>
		</div>
	</Fragment>
}

export default List;
