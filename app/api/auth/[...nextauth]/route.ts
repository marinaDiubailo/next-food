import { routes } from '@/shared/consts/routes'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { getDoc, doc } from 'firebase/firestore'
import { auth } from '@/shared/firebase/config'
import { db } from '@/shared/firebase/firestore'

const handler = NextAuth({
  pages: {
    signIn: routes.LOGIN,
  },
  providers: [
    CredentialsProvider({
      credentials: {},
      name: 'credentials',
      async authorize(credentials): Promise<any> {
        try {
          const userCredentials = await signInWithEmailAndPassword(
            auth,
            (credentials as any).email || '',
            (credentials as any).password || ''
          )

          const userDocRef = doc(db, 'users', userCredentials.user.uid)
          const userDoc = await getDoc(userDocRef)
          console.log('userDoc', userDoc.data())
          if (userDoc.exists()) {
            return {
              email: userCredentials.user.email,
              ...userDoc.data(),
            }
          } else {
            throw new Error('User document not found')
          }
        } catch (error) {
          if (error instanceof Error) {
            throw new Error(error.message)
          }
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email
        token.firstName = user.firstName
        token.lastName = user.lastName
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.email = token.email as string
        session.user.firstName = token.firstName as string
        session.user.lastName = token.lastName as string
        session.user.id = token.id as string
      }
      return session
    },
  },
})

export { handler as GET, handler as POST }

// import { FirestoreAdapter } from '@auth/firebase-adapter'
// import { cert } from 'firebase-admin/app'

// export const { handlers, auth, signIn, signOut } = NextAuth({
//   adapter: FirestoreAdapter({
//     credential: cert({
//       projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
//       clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
//       privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
//     }),
//   }),
// })
