/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateStoryArgs } from "./CreateStoryArgs";
import { UpdateStoryArgs } from "./UpdateStoryArgs";
import { DeleteStoryArgs } from "./DeleteStoryArgs";
import { StoryFindManyArgs } from "./StoryFindManyArgs";
import { StoryFindUniqueArgs } from "./StoryFindUniqueArgs";
import { Story } from "./Story";
import { StoryService } from "../story.service";

@graphql.Resolver(() => Story)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class StoryResolverBase {
  constructor(
    protected readonly service: StoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Story",
    action: "read",
    possession: "any",
  })
  async _storiesMeta(
    @graphql.Args() args: StoryFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Story])
  @nestAccessControl.UseRoles({
    resource: "Story",
    action: "read",
    possession: "any",
  })
  async stories(@graphql.Args() args: StoryFindManyArgs): Promise<Story[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Story, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Story",
    action: "read",
    possession: "own",
  })
  async story(
    @graphql.Args() args: StoryFindUniqueArgs
  ): Promise<Story | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Story)
  @nestAccessControl.UseRoles({
    resource: "Story",
    action: "create",
    possession: "any",
  })
  async createStory(@graphql.Args() args: CreateStoryArgs): Promise<Story> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Story)
  @nestAccessControl.UseRoles({
    resource: "Story",
    action: "update",
    possession: "any",
  })
  async updateStory(
    @graphql.Args() args: UpdateStoryArgs
  ): Promise<Story | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Story)
  @nestAccessControl.UseRoles({
    resource: "Story",
    action: "delete",
    possession: "any",
  })
  async deleteStory(
    @graphql.Args() args: DeleteStoryArgs
  ): Promise<Story | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
