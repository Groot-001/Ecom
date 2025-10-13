import { FormikProvider } from 'formik';
import React from 'react';
import { useCreateCategory } from '../hooks/useCreateCategory';
import InputText from '@/components/forms/InputText';
import { Button } from '@/components/ui/button';
import InputTextArea from '@/components/forms/InputTextArea';
import CategoryForm from './CategoryForm';

const CreateCategoryForm = () => {
  const formik = useCreateCategory()
  return (
    <FormikProvider value={formik.createCategoryFormik}>
      <form>
        <div>
          <CategoryForm />
          <Button className='mt-10' variant={'default'} onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault()
            formik.createCategoryFormik.handleSubmit()
          }}>
            submit
          </Button>
        </div>
      </form>
    </FormikProvider>
  );
}

export default CreateCategoryForm;
