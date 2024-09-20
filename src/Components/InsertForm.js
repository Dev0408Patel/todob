import React, { useState } from 'react';


export default function InsertForm(props) {
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [detailed, setDetailed] = useState('');
  const [data, setData] = useState([]);

  const onSubmit = () => {

    props.onInsert({
      title,
      desc: description,
      detailed
    });
    props.onClick()
  }
 
  

  return (
    <div className="container shadow p-3 mb-5 bg-body-tertiary rounded" style={{
      backgroundColor: '#D4F1F4',
      height: '80vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '1rem',
      padding: '1rem',
    }}>
      <h2 className="text-center" style={{ color: '#007BFF' }}>Add Data Here</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group row">
          <label htmlFor="title" className="col-4 col-form-label">Title:</label>
          <div className="col-8">
            <input
              id="title"
              name="title"
              type="text"
              value={title}
              onChange={(e) => { setTitle(e.target.value); }}
              className="form-control"
              style={{ borderColor: '#007BFF' }}
            />
            
          </div>
        </div>

        <div className="form-group row">
          <label className="col-4 col-form-label" htmlFor="description">Description:</label>
          <div className="col-8">
            <textarea
              id="description"
              name="description"
              cols="40"
              rows="2"
              required
              className="form-control"
              value={description}
              onChange={(e) => { setDescription(e.target.value); }}
              style={{ borderColor: '#007BFF' }}
            ></textarea>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="detailed" className="col-4 col-form-label">Detailed Description:</label>
          <div className="col-8">
            <textarea
              id="detailed"
              name="detailed"
              cols="40"
              rows="5"
              className="form-control"
              value={detailed}
              onChange={(e) => { setDetailed(e.target.value); }}
              style={{ borderColor: '#007BFF' }}
            ></textarea>
            <span className="form-text text-muted">You can explain everything here in detail...</span>
          </div>
        </div>

        <div className="form-group row">
          <div className="col-8 offset-4">
            <button type="submit" className="btn btn-primary" style={{ marginRight: '1rem' }} onClick={onSubmit} >Submit</button>
            <button type="button" className="btn btn-secondary" onClick={props.onClick}>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
}
