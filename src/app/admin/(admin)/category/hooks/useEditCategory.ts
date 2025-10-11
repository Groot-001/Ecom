import { useFormik } from "formik"

export const useEditCategory = () => {
    const initialValues = {
        category: ""
    }
    const editCategoryFormik = useFormik({
        initialValues,
        onSubmit: (values) => {
            console.log(values)
        }
    })



    return {
        editCategoryFormik
    }
}