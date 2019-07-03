export class LoggedInUserModel {
  DisplayName: string;
  Roles: LoggedInUserRolesModel[];
  Email: string;
}

export class LoggedInUserRolesModel {
  DisplayName: string;
  Name: string;
}

export class SignInFormModel {
  UserName: string;
  Password: string;
  RememberMe: boolean
}