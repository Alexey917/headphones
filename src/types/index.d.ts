declare module "*.module.css" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.svg" {
  const url: string;
  export default url;
}

declare module "*.ts" {
  const url: string;
  export default url;
}

declare module "*.png" {
  const url: string;
  export default url;
}