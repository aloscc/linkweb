export class ReadAccessory {
  constructor(
    public accessoryId: number = 0,
    public accessoryTypeId: number = 0,
    public name: string = '',
    public imageUrl: string = '',
    public assetBundleUrl: string = '',
    public genre: number = 0,
  ) {}
}
