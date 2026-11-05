/**
 * Endpoints centralizados da API Nucleus.
 *
 * Uso: `import { API_ENDPOINTS } from '@/shared/endpoints'`
 */

export { AUTH_ENDPOINTS } from "./auth";
export { BANK_VALIDATION_ENDPOINTS } from "./bank-validation";
export { USERS_ENDPOINTS } from "./users";
export { CLIENTS_ENDPOINTS } from "./clients";
export { CONTRACTS_ENDPOINTS } from "./contracts";
export { RBAC_ENDPOINTS } from "./rbac.endpoints";
export { PRODUCTS_ENDPOINTS } from "./products.endpoints";
export { RBAC_GROUPS_ENDPOINTS } from "./rbacGroups.endpoints";
export { DEDUCTIBLE_ENDPOINTS } from "./deductible";
export { BILLING_ENDPOINTS } from "./billing";
export { TAGS_ENDPOINTS } from "./tags";

// Exportação centralizada
import { AUTH_ENDPOINTS } from "./auth";
import { BANK_VALIDATION_ENDPOINTS } from "./bank-validation";
import { BILLING_ENDPOINTS } from "./billing";
import { CLIENTS_ENDPOINTS } from "./clients";
import { CONTRACTS_ENDPOINTS } from "./contracts";
import { DEDUCTIBLE_ENDPOINTS } from "./deductible";
import { PRODUCTS_ENDPOINTS } from "./products.endpoints";
import { RBAC_ENDPOINTS } from "./rbac.endpoints";
import { RBAC_GROUPS_ENDPOINTS } from "./rbacGroups.endpoints";
import { TAGS_ENDPOINTS } from "./tags";
import { USERS_ENDPOINTS } from "./users";

/**
 * Mapa agregado de endpoints por domínio (auth, clientes, billing, etc.).
 */
export const API_ENDPOINTS = {
  AUTH: AUTH_ENDPOINTS,
  BANK_VALIDATION: BANK_VALIDATION_ENDPOINTS,
  USERS: USERS_ENDPOINTS,
  CLIENTS: CLIENTS_ENDPOINTS,
  CONTRACTS: CONTRACTS_ENDPOINTS,
  RBAC: RBAC_ENDPOINTS,
  PRODUCTS: PRODUCTS_ENDPOINTS,
  RBAC_GROUPS: RBAC_GROUPS_ENDPOINTS,
  DEDUCTIBLE: DEDUCTIBLE_ENDPOINTS,
  BILLING: BILLING_ENDPOINTS,
  TAGS: TAGS_ENDPOINTS,
} as const;

export default API_ENDPOINTS;
