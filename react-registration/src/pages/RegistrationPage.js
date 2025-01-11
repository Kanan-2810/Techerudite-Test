import React from 'react';
import AuthForm from '../components/forms/AuthForm';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../graphql/mutations';

function RegistrationPage() {
  const [register] = useMutation(REGISTER_USER);

  const handleSubmit = async (formData) => {
    try {
      console.log(formData)
      const { data } = await register({
        variables: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        },
      });
      alert(`${data?.register?.message} \nUser detail is: ${JSON.stringify(data?.register?.user)}`);
    } catch (error) {
      console.log(error)
      alert(error.message);
    }
  };

  return (
      <AuthForm isLogin={false} onSubmit={handleSubmit} />
  );
}

export default RegistrationPage;
