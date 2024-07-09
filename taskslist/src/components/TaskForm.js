import React from 'react';
import { useForm } from 'react-hook-form';

const TaskForm = ({ onSubmit, initialValues }) => {
    const { register, handleSubmit, reset } = useForm({ defaultValues: initialValues });

    const handleFormSubmit = (data) => {
        onSubmit(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="task-form">
            <input {...register('task', { required: true })} placeholder="Enter task" />
            <button type="submit">{initialValues ? 'Update Task' : 'Add Task'}</button>
        </form>
    );
};

export default TaskForm;