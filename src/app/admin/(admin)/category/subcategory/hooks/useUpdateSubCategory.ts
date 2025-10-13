import { useFormik } from "formik"

export const useUpdateSubCategory = () => {
    const initialValues = {
        category: ""
    }
    const updateSubCategoryFormik = useFormik({
        initialValues,
        onSubmit: (values) => {
            console.log(values)
        }
    })



    return {
        updateSubCategoryFormik
    }
}