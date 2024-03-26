'use server';

import { AuthError } from 'next-auth';

import { signIn } from '@/auth';

export const login = async (values: { email: string; password: string }): Promise<{ error?: string, success?: string } | null> => {
  const { email, password } = values;

  try {
    await signIn('credentials', {
      redirect: false,
      email,
      password,
    }).then((res) => {
      if (res.error) {
        return {
          error: res.error,
        };
      } else {
        return {
          success: 'Logged in successfully',
        };
      }
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            error: 'Invalid username or password',
          };
        default:
          return {
            error: 'An error occurred',
          };
      }
    }

    throw error;
  }
  return null;
};
