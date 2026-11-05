/** Permissões de produtos — protótipo libera tudo via usePermission. */
export const PRODUCTS_PERMISSIONS = {
  access: "products",
  createProduct: "products.createProduct",
  updateProduct: "products.updateProduct",
  deleteProduct: "products.deleteProduct",
} as const;

export type ProductsPermission = (typeof PRODUCTS_PERMISSIONS)[keyof typeof PRODUCTS_PERMISSIONS];
