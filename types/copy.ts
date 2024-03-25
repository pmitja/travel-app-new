/* eslint-disable */
import "next-auth";
import {
  User,
  type DefaultSession,
} from "next-auth";
import DefaultUser from "next-auth"
import AdapterUser from "next-auth"

import { JWT } from "next-auth/jwt"

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      access_token?: string
      refresh_token?: string;
    }
  }
}

declare module "next-auth" {
  interface Session extends DefaultSession {
    access_token?: string
      refresh_token?: string;
  }
  interface User {
    access_token?: string
      refresh_token?: string;
  }
}
