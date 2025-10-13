import InputText from '@/components/forms/InputText';
import InputTextArea from '@/components/forms/InputTextArea';
import React from 'react';

const CategoryForm = () => {
    return (
        <div>
            <InputText label='Category Name' name='category' />
            <InputTextArea label='Description' name='category' />
        </div>
    );
}

export default CategoryForm;
