interface ICustomerFormExample {
    username: string,
    email: string,
    password: string,
    confirmedPassword: string,
    expectedResult: boolean
}
export const testLoginFormData: Array<ICustomerFormExample> = [
      //ordinary usecase scenario
      {
        username: "username1",
        email: "username1@gmail.com",
        password: "username1",
        confirmedPassword: "username1",
        expectedResult: true
      },
      //alternative scenario - invalid email
      {
        username: "username1",
        email: "username1gmail.com",
        password: "username1",
        confirmedPassword: "username1",
        expectedResult: false
      },
      //alternative scenario - not matching password
      {
        username: "username1",
        email: "username1@gmail.com",
        password: "username1",
        confirmedPassword: "username2",
        expectedResult: false
      }
    ]