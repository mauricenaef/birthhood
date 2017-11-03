/**
 * Created by tobiasbrunner on 03.11.17.
 */
export class Birthplace {
  name: string;
  email: string;
  rating: number;

  constructor(userInfo:any) {
    this.name = userInfo.name;
    this.email = userInfo.email;
    this.rating = this.calculateRating(userInfo);
  }

  private calculateRating(userInfo) {
    var rating = 0;
    if(userInfo.javascript) {
      rating += 30;
    }
    if(userInfo.ruby) {
      rating += 20;
    }
    if(userInfo.php) {
      rating += 50;
    }
    return rating;
  }

  save() {
    // HTTP request would go here
    console.log(this.name, this.email, this.rating);
  }
}
