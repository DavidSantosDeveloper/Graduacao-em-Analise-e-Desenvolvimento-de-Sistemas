function soma(x: number, y?: any): number {
    return x + y
}

console.log(soma(1, 2));//3

console.log(soma(1, "2"));//12

console.log(soma(1));//NaN