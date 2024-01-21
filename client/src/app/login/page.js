'use client'
import React from 'react';
import {Input} from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

const role = [
  {label: "Admin", value: "Admin", description: "This is Admin"},
  {label: "User", value: "User", description: "This is user"},
  {label: "Writer", value: "Writer", description: "This is Writer"},
  
];

//import FormLayout from '@/components/layout/page'

 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 
 const SignupSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   lastName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
 });
 
 export const ValidationSchemaExample = () => {
  return(
   <div>
     <h1>Already have an account??</h1>
     <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         email: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 ">
      <Input type="email" label="Email" placeholder="Enter your email" />
    </div>
   
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 w-75px">
      <Input type="Password" label="Password" placeholder="Enter your password" />
      <Select
      items={role}
      label="role"
      placeholder="Enter Your Role"
      className="max-w-xs"
    >
      {(role) => <SelectItem key={role.value}>{role.label}</SelectItem>}
    </Select>
    </div>
    <Button>Log In</Button>
         </Form>
       )}
     </Formik>
   </div>
 )}

const page = () => {
  return (

     <ValidationSchemaExample/>

  )
}

export default page