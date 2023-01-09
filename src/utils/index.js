import { v4 as uuid } from 'uuid';

export function createUniqueId() {
  return uuid().slice(0, 8);
}
