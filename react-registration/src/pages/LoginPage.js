import React from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../graphql/mutations';
import AuthForm from '../components/forms/AuthForm';

function LoginPage() {
  const [login] = useMutation(LOGIN_USER);

  const handleSubmit = async (formData) => {
    try {
      console.log(formData)
      const { data } = await login({
        variables: { email: formData.email, password: formData.password, adminLogin: formData.role === "admin" },
      });
      console.log(data)
      alert(`${data?.login?.message} \nToken is: ${data?.login?.token}`);
    } catch (error) {
      console.log(error)
      alert(error.message);
    }
  };

  return (
      <AuthForm isLogin={true} onSubmit={handleSubmit} />
  );
}

export default LoginPage;
