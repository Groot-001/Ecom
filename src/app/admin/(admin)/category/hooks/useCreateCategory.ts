import { useFormik } from "formik"

export const useCreateCategory = () => {
    const initialValues = {
        category: ""
    }
    const createCategoryFormik = useFormik({
        initialValues,
        onSubmit: (values) => {
            console.log(values)
        }
    })



    return {
        createCategoryFormik
    }
}