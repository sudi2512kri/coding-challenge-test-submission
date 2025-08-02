import { useState, useCallback } from 'react';

type FormFields = {
  postCode: string;
  houseNumber: string;
  firstName: string;
  lastName: string;
  selectedAddress: string;
};

type UseFormReturn = {
  fields: FormFields;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetFields: () => void;
  setField: (name: keyof FormFields, value: string) => void;
};

const initialFields: FormFields = {
  postCode: '',
  houseNumber: '',
  firstName: '',
  lastName: '',
  selectedAddress: '',
};

export function useForm(): UseFormReturn {
  const [fields, setFields] = useState<FormFields>(initialFields);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const setField = useCallback((name: keyof FormFields, value: string) => {
    setFields(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const resetFields = useCallback(() => {
    setFields(initialFields);
  }, []);

  return {
    fields,
    handleChange,
    resetFields,
    setField
  };
}