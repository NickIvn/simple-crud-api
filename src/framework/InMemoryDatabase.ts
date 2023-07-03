import { IDataStorage } from './IDataStorage';

class InMemoryDatabase<T> implements IDataStorage<T> {
    private items: T[] = [];

    public async get(key: keyof T, value: any): Promise<any> {
        return this.items.find((item) => item[key] === value);
    }

    public async add(item: T): Promise<void> {
        this.items.push(item);
    }

    public async remove(key: keyof T, value: any): Promise<void> {
        this.items = this.items.filter((item: T) => item[key] !== value);
    }

    public async clear(): Promise<void> {
        this.items = [];
    }

    public async getAll(): Promise<T[]> {
        return this.items;
    }
}

export { InMemoryDatabase };
