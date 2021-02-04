import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CatsService } from "./cats.service";
import { CatInput } from "./input/cat.input";
import { CatType } from "./dto/cat.type";


@Resolver()
export class CatsResolver {
    constructor(
        private readonly catsService: CatsService
    ) {}

    @Query(returns => [CatType])
    async hello() {
        return this.catsService.findAll();
    }
    @Query(() => [CatType])
    async cats() {
        return this.catsService.findAll();
    }
    @Mutation(() => CatType)
    async createCat(@Args('input') input: CatInput){
        return this.catsService.create(input);
    }
}
