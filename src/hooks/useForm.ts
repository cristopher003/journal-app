import { useState } from 'react';

interface FormState {
    [key: string]: any;
}

export const useForm = <T extends FormState>(initialForm: T) => {

    const [formState, setFormState] = useState<T>(initialForm);

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

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
