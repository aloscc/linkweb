export class ObjectCompare {
  constructor(private objReference: any) {}
  isDifferent(obj: any, prop: string): boolean {
    return this.objReference[prop] !== obj[prop];
  }
  getObjectDiference(obj: any): any {
    const newObject = {};
    for (const prop in obj) {
      if (this.isDifferent(obj, prop)) {
        newObject[prop] = obj[prop];
      }
    }
    return Object.keys(newObject).length === 0 ? null : newObject;
  }
}
