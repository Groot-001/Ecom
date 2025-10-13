import { FormikProvider } from 'formik';
import React from 'react';
import { Button } from '@/components/ui/button';
import SubCategoryForm from './SubCategoryForm';
import { useCreateSubCategory } from '../hooks/useCreateSubCategory';

const CreateSubCategoryForm = () => {
    const formik = useCreateSubCategory()
    return (
        <FormikProvider value={formik.createSubCategoryFormik}>
            <form>
                <div>
                    <SubCategoryForm />
                    <Button className='mt-10' variant={'default'} onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.preventDefault()
                        formik.createSubCategoryFormik.handleSubmit()
                    }}>
                        submit
                    </Button>
                </div>
            </form>
        </FormikProvider>
    );
}

export default CreateSubCategoryForm;
