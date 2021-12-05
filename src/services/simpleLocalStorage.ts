export abstract class SimpleLocalStorageService {
  static setItem(key: string, item: string): void {
    localStorage.setItem(key, item);
  }

  static getItem(key: string): string | null {
    return localStorage.getItem(key);
  }
}
