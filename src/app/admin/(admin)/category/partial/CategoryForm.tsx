import { FormikProvider } from 'formik';
import React from 'react';
import { useCreateCategory } from '../hooks/useCreateCategory';
import InputText from '@/components/forms/InputText';
import { Button } from '@/components/ui/button';

const CategoryForm = () => {
  const formik = useCreateCategory()
  return (
    <FormikProvider value={formik.createCategoryFormik}>
      <form>
        <div>
          <InputText label='Category Name' name='category' />
          <input type="text" placeholder='Description' />
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

export default CategoryForm;
