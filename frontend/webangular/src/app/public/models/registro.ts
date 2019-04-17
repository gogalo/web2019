export class Registro {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;

  constructor(username: string, password: string, email: string, confirmPassword: string)
  {
    this.email = email;
    this.username = username;
    this.password = password;
    this.confirmPassword = confirmPassword;

  }

}
