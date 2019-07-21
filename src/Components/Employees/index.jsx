import React, { useState, useEffect } from 'react'; 
 
import Table from 'react-bootstrap-table-next'; 
import paginationFactory from 'react-bootstrap-table2-paginator';


import api from '../../services/api';

import './index.sass';


import New from './new';
import Update from './update';


const Employee = props => {

	const [ newEmployee, toggleNewEmployee] = useState( false );
	const [ updateEmployee, toggleUpdateEmployee] = useState( false );

	const [ employees, setEmployees] = useState( [] );
	const [ employee, updatedMe] = useState( {} );




	const columns = [{
	  dataField: 'no',
	  text: '#',
	  sort: true
	}, {
	  dataField: 'code',
	  text: 'Employee Code',
	  sort: true
	}, {
	  dataField: 'name',
	  text: 'Employee Name',
	  sort: true
	}, {
	  dataField: 'department',
	  text: 'Department',
	  sort: true
	} ];

	const defaultSorted = [{
	  dataField: 'no',
	  order: 'asc'
	}];




	const handleOnSelect = (row, isSelect) => {
		console.log(row, isSelect);

		updatedMe(row );

		toggleUpdateEmployeeFunc( true );
	}
 


const getEmployess = async( data ) => {
 try {

 	const Employees = await api.call('get',"employee");
 	
 	setEmployees( Employees.map( (each, index) => ({ id: each._id, no: (index + 1), name : each.name, code: each.code, department: each.department})));	           
 		 
 } catch( err ) {
 	alert("something went wrong. Try again.");
 }
}


const getEmployeeDetails = () => {

	getEmployess();
}



useEffect( e => {
	getEmployeeDetails();
}, [ newEmployee , updateEmployee ]);
 


 
 


const toggleUpdateEmployeeFunc =  status => {

console.log(status);
	if( status ) {
		toggleUpdateEmployee(true);
		document.getElementsByTagName('body')[0].style.overflow = 'hidden';
	} else {
		toggleUpdateEmployee(false);
		document.getElementsByTagName('body')[0].style.overflow = 'unset';

		setSelectRow( {
	  mode: 'radio', 
  selectColumnPosition: 'right',
  clickToSelect: true,
  hideSelectAll: true, 
  selected: [],
      onSelect: handleOnSelect 

});


	}
}

const toggleNewEmployeeFunc = status => {

console.log(status);
	if( status ) {
		toggleNewEmployee(true);
		document.getElementsByTagName('body')[0].style.overflow = 'hidden';
	} else {
		toggleNewEmployee(false);
		document.getElementsByTagName('body')[0].style.overflow = 'unset';
	}
}


	const [ selectRow, setSelectRow] = useState( {
	  mode: 'radio', 
  selectColumnPosition: 'right',
  clickToSelect: true,
  hideSelectAll: true, 
  selected: false,
      onSelect: handleOnSelect 

});


	return (
			<> 


			<div className="row">
			    <div className="col-8">

			      <div className="mb-4">
			          <h4 className="text-info mb-1">Employees</h4>
			          <p  className="text-secondary mt-1">View all employees. </p>

			      </div>

			    </div>

			    <div className="col-4 text-right">

			        <div className="btn-group">
			          <button onClick={ e => toggleNewEmployeeFunc( true ) } type="button" className="btn btn-secondary text-uppercase h6"  >
			            <i className="ti-user"></i> new employee
			          </button>
			          
			        </div>

			    </div>

			</div>




			<div className="row mt-3">
			  <div className="col">  




			     
<Table
  bootstrap4
  keyField="no"
  data={ employees }
  columns={ columns }
  defaultSorted={ defaultSorted } 
   pagination={ paginationFactory() } 
  selectRow={ selectRow }
/>



			  </div>
			</div>

{

	newEmployee && <New  closeFuction= {toggleNewEmployeeFunc} />


}


{
	updateEmployee &&  <Update  closeFuction= {toggleUpdateEmployeeFunc} employee = { employee } />
}


			</>
		);
}




export default Employee; 