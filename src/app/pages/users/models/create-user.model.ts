export class CreateUserModel {
  constructor(
    public roleId: number = 0,
    public companyId: number = 0,
    public username: string = '',
    public password: string = '',
    public name: string = '',
    public lastName: string = '',
    public email: string = '',
    public phone: string = '',
    public photo: string = '',
    public position: string = '',
    public bio: string = '',
  ) {}
}
