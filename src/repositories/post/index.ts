import { JsonPostRepository } from "./json-post-repository";
import { PostRepository } from "./post-repository";

export const jsonPostRepository: PostRepository = new JsonPostRepository();

jsonPostRepository.findAll().then(posts => console.log(posts));
jsonPostRepository.findById("99f8add4-7684-4c16-a316-616271db199e").then(post => console.log(post));