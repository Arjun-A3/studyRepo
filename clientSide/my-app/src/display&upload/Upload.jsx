import React from 'react'
import './cssFile/Upload.css';

export function Upload() {
  return (
    <div>
    <br/><br/><br/><br/>
	<form >
        
		<h1>Upload Documents</h1>
        <div className='container'>
        <label htmlFor='fileName'>FileName : </label>
        <input type = "text" name ="filename"/>
        
        <label htmlFor='Dept'>Department : </label>
        <input type = "text" name ="Dept"/>
        
        <label htmlFor='Sem'>Semester : </label>
        <input type = "text" name ="Sem"/>
        </div>

		<input type="file" name="fileToUpload" id="fileToUpload"/>
        <input type="submit" value="Done" name="submit"/>
	</form>
    <br/><br/><br/>
    <div><center>
        <button class="btn btn-primary" type="button">Click Here to see Student page</button></center>
    </div>
    </div>
  );
}

