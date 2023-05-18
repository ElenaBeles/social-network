import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {ApiOkResponse, ApiTags} from "@nestjs/swagger";

import {ProfileEntity} from "@/profiles/entities/profile.entity";
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profiles')
@ApiTags('profile')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}
  @Post()
  async create(@Body() createProfileDto: CreateProfileDto) {
    return this.profilesService.create(createProfileDto);
  }

  @Get(':id')
  @ApiOkResponse({ type: ProfileEntity })
  async findOne(@Param('id') id: string) {
    return new ProfileEntity(await this.profilesService.findOne(+id));
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profilesService.update(+id, {
      ...updateProfileDto,
      age: Number(updateProfileDto.age)
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.profilesService.remove(+id);
  }
}
