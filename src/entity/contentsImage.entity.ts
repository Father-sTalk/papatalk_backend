import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ContentsTypeEnum } from './enum/contentsType.enum';

@Entity('contentsImage')
export class ContentsImageEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  key: string;

  @Column()
  url: string;

  @Column({
    type: 'enum',
    enum: ContentsTypeEnum,
  })
  contentsType: ContentsTypeEnum;

  @Column()
  contentsId: number;
}
