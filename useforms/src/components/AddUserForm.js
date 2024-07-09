import React from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm = ({ onSubmit, user }) => {
    const { register, handleSubmit, reset, setValue } = useForm();

    const onFormSubmit = (data) => {
        onSubmit(data);
        reset();
    };

    const handleSetValue = (field, value) => {
        setValue(field, value);
    };

    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <input
                {...register('firstName')}
                placeholder="First Name"
                defaultValue={user ? user.firstName : ''}
                onChange={(e) => handleSetValue('firstName', e.target.value)}
                required
            />
            <input
                {...register('lastName')}
                placeholder="Last Name"
                defaultValue={user ? user.lastName : ''}
                onChange={(e) => handleSetValue('lastName', e.target.value)}
                required
            />
            <input
                {...register('email')}
                placeholder="Email"
                type="email"
                defaultValue={user ? user.email : ''}
                onChange={(e) => handleSetValue('email', e.target.value)}
                required
            />
            <input
                {...register('phone')}
                placeholder="Phone"
                type="tel"
                defaultValue={user ? user.phone : ''}
                onChange={(e) => handleSetValue('phone', e.target.value)}
                required
            />
            <button type="submit">{user ? 'Update' : 'Add'} User</button>
        </form>
    );
};

export default AddUserForm;