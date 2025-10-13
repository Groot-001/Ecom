import React from 'react';
import { FormikProvider } from 'formik';
import { Button } from '@/components/ui/button';
import { useUpdateSubCategory } from '../hooks/useUpdateSubCategory';
import SubCategoryForm from './SubCategoryForm';

const UpdateSubCategoryForm = () => {
    const formik = useUpdateSubCategory()
    return (
        <FormikProvider value={formik.updateSubCategoryFormik}>
            <SubCategoryForm />
            <Button className='mt-10' variant={'default'} onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault()
                formik.updateSubCategoryFormik.handleSubmit()
            }}>
                submit
            </Button>
        </FormikProvider>
    );
}

export default UpdateSubCategoryForm;


