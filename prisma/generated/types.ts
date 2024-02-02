import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Board = {
    id: Generated<number>;
    name: string;
};
export type Post = {
    id: Generated<number>;
    content: string;
    createdAt: Generated<string>;
    userId: number;
    threadId: number;
};
export type Thread = {
    id: Generated<number>;
    title: string;
    content: string;
    createdAt: Generated<string>;
    userId: number;
    boardId: number;
};
export type User = {
    id: Generated<number>;
    handle: string;
};
export type DB = {
    Board: Board;
    Post: Post;
    Thread: Thread;
    User: User;
};
