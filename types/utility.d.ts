declare type ObjectOf<T> = { [P in keyof T]: T[P] };

declare type EmptyObject = Record<string, never>;

declare type UnknownObject = Record<string, unknown>;
