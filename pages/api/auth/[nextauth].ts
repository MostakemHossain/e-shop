import client from "@/libs/prismadb"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

import bcrypt from "bcrypt"
import NextAuth from "next-auth"
import CredentialProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"



export default NextAuth({
  adapter: PrismaAdapter(client),
  providers: [
  GoogleProvider({
    clientId:process.env.GOOGLE_CLIENT_ID as string,
    clientSecret:process.env.GOOGLE_CLIENT_SERECT as string,

  }),
  CredentialProvider({
    name:'credentials',
    credentials:{
        email:{
            label:'email',
            type:'text',
        },
        password:{
            label:"password",
            type:'password'

        },
    },
     async authorize(credentials){
        if(!credentials?.email || !credentials.password){
            throw new Error('Invilid email and password')
        }

        const user= await client.user.findUnique({
            where:{
                email:credentials.email
            }
        });
        if(!user || !user?.hashedPassword){
            throw new Error('Invilid email and password')
        }

        const isCorrectPassword= await bcrypt.compare(credentials.password,user.hashedPassword);

        if(!isCorrectPassword){
            throw new Error('Invilid email and password')
        }

        return user;


     }

  }),
  ],
  pages:{
    signIn:'/login',
  
  },
  debug:process.env.NODE_ENV==='development',
  session:{
    strategy:'jwt'
  },
  secret:process.env.NEXTAUTH_SERECT
})