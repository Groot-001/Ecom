import { useFormik } from "formik"

export const useDeleteCategory = () => {
    const initialValues = {
        category: ""
    }

    const deleteCategoryFormik = useFormik({
        initialValues,
        onSubmit: (values) => {
            console.log(values)
        }
    })


    return {
        deleteCategoryFormik
    }
}