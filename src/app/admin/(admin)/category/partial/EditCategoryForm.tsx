import React from 'react';
import { useEditCategory } from '../hooks/useEditCategory';
import { FormikProvider } from 'formik';

const EditCategoryForm = () => {
    const formik = useEditCategory()
    return (
        <FormikProvider value={formik.editCategoryFormik}>
            <form>
                <div>

                </div>
            </form>
        </FormikProvider>
    );
}

export default EditCategoryForm;
