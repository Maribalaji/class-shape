class Shape{
    calculateArea(){
            
    }
}
class Circle extends Shape{
    constructor(radius){
        super()
        this.radius=radius;
    }
    calculateArea(){
        let c=3.14*this.radius*this.radius;
        document.write(`Area of circle ${c} <br>`);
    }
}

class Triangle extends Shape{
    constructor(width,height){
        super()
        this.width=width;
        this.height=height;
    }
    calculateArea(){
        let d=1/2*(this.width*this.height);
        document.write(`Area of Triangle ${d}`);
    }
}
let res=new Circle(5)
res.calculateArea()
let ans=new Triangle(10,20);
ans.calculateArea()
