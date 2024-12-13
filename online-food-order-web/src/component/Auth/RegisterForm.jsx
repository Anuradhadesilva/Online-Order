import React from 'react'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Field, Formik, Form } from 'formik'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUSer } from '../State/Authentication/Action';
const initialValues = {
    fullName: "",
    email: "",
    password: "",
    role: ""
};

export const RegisterForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = (values) => {
        dispatch(registerUSer({ userData: values, navigate }))
        console.log("form values", values)
    }
    return (
        <div>
            <Typography variant='h5' className='text-center'>
                Register
            </Typography>
            <Formik onSubmit={handleSubmit} initialValues={initialValues} >
                <>
                    <Form>
                        <Field
                            as={TextField}
                            name="fullName"
                            label="full name"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                        />
                        <Field
                            as={TextField}
                            name="email"
                            label="email"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                        />
                        <Field
                            as={TextField}
                            name="password"
                            label="password"
                            fullWidth
                            variant="outlined"
                            type="password"
                            margin="normal"
                        />
                        <FormControl fullWidth margin='normal'>
                            <InputLabel id="role-simple-select-label">Role</InputLabel>
                            <Field
                                as={Select}
                                labelId="role-simple-select-label"
                                id="role-simple-select"
                                name="role"
                                // value={age}
                                label="Role"
                            // onChange={handleChange}
                            >
                                <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                                <MenuItem value={"ROLE_ RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
                            </Field>
                        </FormControl>
                        <Button sx={{ mt: 2, padding: "1rem" }} fullWidth type='submit' variant='contained'>
                            Submit
                        </Button>
                        <Typography variant='body2' align='center' sx={{ mt: 3 }}> If yo already have account?
                            <Button onClick={() => navigate("/account/login")}>Register</Button>
                        </Typography>
                    </Form>
                </>
            </Formik>

        </div >
    )
}
