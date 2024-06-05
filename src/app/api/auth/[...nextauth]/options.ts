import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // !!! Should be stored in .env file.
    GoogleProvider({
      clientId: `1005934280026-vj9i0poknloj1bg9bd4udvn380nm776b.apps.googleusercontent.com`,
      clientSecret: `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`,
    }),
  ],
  secret: `UItTuD1HcGXIj8ZfHUswhYdNd40Lc325R8VlxQPUoR0=`,
};

export default authOptions;
