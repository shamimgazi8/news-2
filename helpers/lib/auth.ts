// Function to check if the user is authenticated
export const isAuthenticated = (userTokenCookie: string) => {
  if (userTokenCookie) {
    return true;
  }
  return false;
};
