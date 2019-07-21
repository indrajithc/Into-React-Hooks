import React, { useSate } from 'react'; 
 
import Table from 'react-bootstrap-table-next'; 
import paginationFactory from 'react-bootstrap-table2-paginator';


import './index.sass';


const Employee = () => {



	const columns = [{
	  dataField: 'id',
	  text: 'Product ID',
	  sort: true
	}, {
	  dataField: 'name',
	  text: 'Product Name',
	  sort: true
	}, {
	  dataField: 'price',
	  text: 'Product Price',
	  sort: true
	}];

	const defaultSorted = [{
	  dataField: 'name',
	  order: 'desc'
	}];


const products = [
	{
		id: 1,
		name : "b",
		price : "c"
	},

	{
		id: 2,
		name : "b",
		price : "c"
	}
]



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
			          <button type="button" className="btn btn-secondary text-uppercase h6"  >
			            <i className="ti-user"></i> new employee
			          </button>
			          
			        </div>

			    </div>

			</div>




			<div className="row mt-3">
			  <div className="col">  




			     
<Table
  bootstrap4
  keyField="id"
  data={ products }
  columns={ columns }
  defaultSorted={ defaultSorted } 
   pagination={ paginationFactory() } 
/>



			  </div>
			</div>


			<div class="modal-backdrop fade show"></div>	
			<div class="modal fade show d-block" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  <div class="modal-dialog" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			      <div class="modal-body">
			        ...
			      </div>
			      <div class="modal-footer">
			        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
			        <button type="button" class="btn btn-primary">Save changes</button>
			      </div>
			    </div>
			  </div>
			</div>



			</>
		);
}




export default Employee; 