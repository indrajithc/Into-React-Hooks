
import React, { useSate } from 'react'; 

import useForm from "react-hook-form";

import api from '../../services/api';



const NewEmployee = props => {


	const { register, handleSubmit, errors } = useForm();  
	const onSubmit = data => { 


		console.log(data)


		addToDb(data);


	 };  


const addToDb = async( data ) => {
 try {

 	const Employee = await api.call('post',"employee/new", data);
 	           
 		if( Employee.id ) {
 			 props.closeFuction(false) ;
 		}
 } catch( err ) {
 	// alert("something went wrong. Try again.");
 	alert("Employee code already exist, Try again with new code.");
 }
}



	return (

		<>


		<div className="modal-backdrop fade show" onClick={ e => props.closeFuction(false) }></div>	
		<div className="modal fade show d-block" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		 

		      <form onSubmit={handleSubmit(onSubmit)}>
		  <div className="modal-dialog" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <h5 className="modal-title" id="exampleModalLabel">Add New Employee</h5>
		        <button  onClick={ e => props.closeFuction(false) } type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div className="modal-body">




		      
		      		        	<div className="form-group">
		      		        	<label>Employee code <span  className="text-danger pl-3">*</span></label>

		      		        	  <input type="number" name="code"
		      		        	    ref={register({ required: true })}
		      		        	      className= { `form-control ${  errors.code ? 'is-invalid' : '' }` } /> 
		      		        			<div className="invalid-feedback">
		      		        	          {errors.code && "Employee code is invalid."}
		      		        	        </div>

		      		        	</div>

 

		        	<div className="form-group">
		        	<label>Name <span  className="text-danger pl-3">*</span></label>

		        	  <input name="name"
		        	    ref={register({ required: true })}
		        	     className= { `form-control ${  errors.name ? 'is-invalid' : '' }` }  /> 
		        			<div className="invalid-feedback">
		        	          {errors.name && "Name is invalid."}
		        	        </div>

		        	</div>






		        	<div className="form-group">
		        	<label>Department <span  className="text-danger pl-3">*</span></label>
 

		        	     <select  name="department"
		        	    ref={register({ required: true })}
		        	      className= { `form-control ${  errors.department ? 'is-invalid' : '' }` }>

		        	     	<option>Department 1</option>
		        	     	<option>Department 2</option>
		        	     	<option>Department 3</option>
		        	     	<option>Department 4</option> 

		        	     </select>



		        			<div className="invalid-feedback">
		        	          {errors.department && "Department is invalid."}
		        	        </div>

		        	</div>

 




		      </div>
		      <div className="modal-footer">
		        <button type="button" className="btn btn-secondary" data-dismiss="modal"   onClick={ e => props.closeFuction(false) } >Close</button>
		        <button type="submit" className="btn btn-primary">Add</button>
		      </div>
		    </div>
		  </div>

		         </form>
		</div>


		</>

		);
};





export default React.memo(NewEmployee);