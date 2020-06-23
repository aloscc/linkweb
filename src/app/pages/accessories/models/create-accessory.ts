export class CreateAccessory {
  constructor(
    public accessoryTypeId: number = 0,
    public name: string = '',
    public imageUrl: string = '',
    public assetBundleUrl: string = '',
    public genre: number = 0,
  ) {}
}
