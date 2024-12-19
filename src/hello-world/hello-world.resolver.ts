import { Args, Float, Int, Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, {
    description: 'Hola mundo es lo que retorna',
    name: 'hello',
  })
  helloWorld(): string {
    return 'Hola mundo';
  }

  @Query(() => Float, { name: 'randomNumber' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, {
    name: 'randomFromZeroTo',
    description: 'Desde cero al argumento  (default 6)',
  })
  getRandomFromZeroTo(
    @Args('to', { type: () => Int, nullable: true }) to: number = 6,
  ): number {
    return Math.floor(Math.random() * to);
  }
}
