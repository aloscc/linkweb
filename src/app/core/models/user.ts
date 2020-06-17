export class User {
  constructor(
    public userId: number,
    public name: string,
    public lastName: string,
    public email: string,
    public phone: string,
    public username: string,
    public password: string,
    public roleId: number,
    public companyId: number
  ) {}
}
