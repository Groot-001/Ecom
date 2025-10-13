import { useFormik } from "formik"

export const useCreateSubCategory = () => {
    const initialValues = {
        category: ""
    }
    const createSubCategoryFormik = useFormik({
        initialValues,
        onSubmit: (values) => {
            console.log(values)
        }
    })


    return {
        createSubCategoryFormik
    }
}