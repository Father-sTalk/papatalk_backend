import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { CategoryEntity } from './category.entity';

@Entity('community')
export class CommunityEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  title: string;

  @Column()
  content: string;

  @Column({
    default: 0,
  })
  views: number;

  @Column({
    default: 0,
  })
  likes: number;

  @ManyToOne(() => CategoryEntity, (category) => category.communities)
  @JoinColumn()
  category: CategoryEntity;

  @ManyToOne(() => UserEntity, (user) => user.communities)
  @JoinColumn()
  user: UserEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
