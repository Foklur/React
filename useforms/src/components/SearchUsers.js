import React from 'react';
import { useForm } from 'react-hook-form';

const SearchUsers = ({ onSearch }) => {
    const { register, handleSubmit } = useForm();

    const onFormSubmit = (data) => {
        onSearch(data.lastName);
    };

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="search-users">
            <input {...register('lastName')} placeholder="Search by Last Name" />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchUsers;