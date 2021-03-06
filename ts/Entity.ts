class Entity {
    id:string;
    x:number;
    y:number;
    width:number;
    height:number;
    color:string;

    constructor(
        x:number,
        y:number,
        width?:number,
        height?:number,
        color?:string
    ) {
        this.id = guid();
        this.x = x;
        this.y = y;
        this.height = height || 10;
        this.width = width || 10;
        this.color = color || '#ff00';
    }

    detectCollision(e:Entity) {
        let vertical = (this.y + this.height) >= e.y && (e.y + e.height) >= this.y;
        let horizontal = (this.x + this.width) >= e.x && (e.x + e.width) >= this.x;

        //if (vertical && horizontal) {
        //    this.color = '#000';
        //    e.color = '#000';
        //}

        return vertical && horizontal;
    }

}