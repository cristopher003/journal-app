import { useEffect, useMemo, useState } from 'react';

interface FormState {
    [key: string]: any;
}

export const useForm = <T extends FormState>(initialForm: T, formValidations: any={} ) => {

    const [formState, setFormState] = useState<T>(initialForm);
    const [formValidation, setFormValidation]=useState(useState({}));

    useEffect(() => {
        createValidarors();
    }, [formState])


    const isformValid=useMemo(()=>{
        for (const formField of Object.keys(formValidation)) {
            if(formValidation[formField]!==null) return false;
        }
        return true;
    },[formValidation])


    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    const createValidarors = () => {
       const formCheckedValues:any={};
       for (const formField of Object.keys(formValidations)) {
        const [fn,errorMessage]=formValidations[formField];
        formCheckedValues[`${formField}Valid`]=fn(formState[formField])?null:errorMessage; 
    }
    setFormValidation(formCheckedValues);
}

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isformValid,
        // isformValid:Object.keys(formValidation).every(formField=>formValidation[formField]===null)
    }
}
