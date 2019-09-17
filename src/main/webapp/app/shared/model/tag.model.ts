import { IArticle } from 'app/shared/model/article.model';

export interface ITag {
  id?: number;
  name?: string;
  entities?: IArticle[];
}

export class Tag implements ITag {
  constructor(public id?: number, public name?: string, public entities?: IArticle[]) {}
}
