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
    createdAt: Generated<string>;
    unix_epoch: Generated<number>;
    content: string;
    threadId: number;
    userHandle: string;
    country: string;
};
export type Thread = {
    id: Generated<number>;
    title: string;
    createdAt: Generated<string>;
    userHandle: string;
    boardId: number;
};
export type DB = {
    Board: Board;
    Post: Post;
    Thread: Thread;
};
