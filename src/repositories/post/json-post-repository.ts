import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import {readFile} from 'fs/promises'

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(ROOT_DIR, "src", "db", "seed", "posts.json");

export class JsonPostRepository implements PostRepository {
    private async readFromDisk(): Promise<PostModel[]> {
        const jsonContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
        const parseJson = JSON.parse(jsonContent);
        const { posts } = parseJson; // transforma em array com desestruturação
        return posts;
    }

    async findAll(): Promise<PostModel[]> {
        const posts = await this.readFromDisk();
        return posts;
    }

    async findById(id: string): Promise<PostModel | null> {
        const posts = await this.findAll();
        const post = posts.find(post => post.id === id) || null ;

        if(!post) throw new Error("Post não encontrado");
        return post;
    }
};

export const jsonPostRepository: PostRepository = new JsonPostRepository();

jsonPostRepository.findById("99f8add4-7684-4c16-a316-616271db199e").then(post => console.log(post));
