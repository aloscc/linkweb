export class ProfileDto {
  constructor(
    public userId: number = 0,
    public roleId: number = 0,
    public companyId: number = 0,
    public name: string = '',
    public lastName: string = '',
    public email: string = '',
    public phone: string = '',
    public username: string = '',
    public password: string = '',
  ) {}
}
