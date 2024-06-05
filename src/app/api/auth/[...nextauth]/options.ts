import GoogleProvider from "next-auth/providers/google";

console.log('google:', process.env.clientId);
const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // !!! Should be stored in .env file.
    GoogleProvider({
      clientId: process.env.clientId,
      clientSecret: process.env.clientId,
    }),
  ],
  secret: `UItTuD1HcGXIj8ZfHUswhYdNd40Lc325R8VlxQPUoR0=`,
};

export default authOptions;
