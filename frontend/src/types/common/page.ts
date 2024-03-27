// export type Page ={
//   size: number;
//   page: number;
// }

export type Pageable={
  pageNumber : number;
  pageSize : number;
  sort : {
    empty : boolean;
    sorted : boolean;
    unsorted : boolean;
  }
  offset : number;
  paged : boolean;
  unsorted : boolean;
}

export type Template<T> = {
  contents : Array<T>;
  pageable:Pageable;
  last : boolean;
  totalPage : number;
  totalElement : number;
  size : number;
  number : number;
  sort : {
    empty : boolean;
    sorted : boolean;
    unsorted : true;
  }
  first : boolean;
  numberOfElements : number;
  empty : boolean;
}