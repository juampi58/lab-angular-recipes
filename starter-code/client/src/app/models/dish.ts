export class Dish {
  _id: string;
  name: string;
  description: string;
  image: string;
  ingredients:Object[];
                                              
  constructor(data = {}) {
    Object.assign(this, data);
  }
}
