/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
/** load json files per import */
declare module "*.json" {
  const value: any;
  export default value;
}
