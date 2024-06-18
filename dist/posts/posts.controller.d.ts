declare class CreatePostDto {
    title: string;
    content: string;
}
export declare class PostsController {
    index(): string;
    create(body: CreatePostDto): void;
}
export {};
