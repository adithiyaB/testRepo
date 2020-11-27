class AddTwoNumbersTest {
    x: number;
    y: number;

    constructor(x: number,y: number) {
        this.x = x;
        this.y = y;
    }

    dislay(): void {
        console.log(this.x);
        console.log(this.y);
        console.log("Sample git merge");
    }
}

const addTwoNumbersObj: any = new AddTwoNumbersTest(1,2);
addTwoNumbersObj.dislay();