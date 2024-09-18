import React from 'react'
import { useForm } from '@felte/react';
import { z } from 'zod';
import { useState } from 'react';




export default function InsertForm(props) {

    // const schema = z.object({
    //     title: z.string().min(1, 'Title is required'),
    //     shortDescription: z.string().min(1, 'Short description is required'),
    //     largeDescription: z.string().min(1, 'Large description is required'),
    // });

    // const MyForm = () => {
    //     const { form, errors, isSubmitting } = useForm({
    //         extend: {
    //             onSubmit: (values) => {
    //                 console.log('Form submitted:', values);
    //                 // Handle form submission (e.g., API call)
    //             },
    //         },
    //         validate: (values) => {
    //             try {
    //                 schema.parse(values); // Use Zod to validate values
    //             } catch (e) {
    //                 const validationErrors = {};
    //                 e.errors.forEach((error) => {
    //                     validationErrors[error.path[0]] = error.message; // Map Zod errors to the field names
    //                 });
    //                 return validationErrors; // Return validation errors
    //             }
    //         },
    //     });

  const [con, setCon] = useState({
    title: "fourthItem",
    desc: "kjughboil hyhakbjf ioslhnlhka ioanvilzkn nikzlnf;oalk klnzk.v .,kln;kmvdzk",
    detailed: "tere jaise yaar kahan , kahan esa yaaraana, yaad karegi duniya tera mera hafsana"
  })

        return (
            <div className="container shadow p-3 mb-5 bg-body-tertiary rounded" style={{
                backgroundColor: '#D4F1F4',
                height: '80vh',
                width: '100vh ',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1rem',
            }} >
                <form>
  <div class="form-group row">
    <label for="text" class="col-4 col-form-label">Title :</label> 
    <div class="col-8">
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text"></div>
        </div> 
        <input id="text" name="text" type="text" class="form-control"/>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <label class="col-4 col-form-label" for="textarea">Description :</label> 
    <div class="col-8">
      <textarea id="textarea" name="textarea" cols="40" rows="2" required="required" class="form-control"></textarea>
    </div>
  </div>
  <div class="form-group row">
    <label for="textarea1" class="col-4 col-form-label">Detailed Description :</label> 
    <div class="col-8">
      <textarea id="textarea1" name="textarea1" cols="40" rows="5" aria-describedby="textarea1HelpBlock" class="form-control"></textarea> 
      <span id="textarea1HelpBlock" class="form-text text-muted">You can explain every thing here in detail...</span>
    </div>
  </div> 
  <div class="form-group row">
    <div class="offset-4 col-8">
                  <button name="submit" type="submit" class="btn btn-primary" onClick={() => { props.onClick();props.onInsert(con) } }  >Submit</button>
    </div>
  </div>
</form>
                
            </div>
        )
    }

