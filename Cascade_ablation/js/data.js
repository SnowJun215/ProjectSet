let data = [
    [{x: 1, y: 0}, {x: 5, y: 4}, {x: 1, y: 4}],
    [{x: 4, y: 3}, {x: 4, y: 7}, {x: 0, y: 7}],
    [{x: 0, y: 1}, {x: 4, y: 1}, {x: 4, y: 5}]
];
let shake = [
    [{x: 0, y: 3}, {x: 1, y: 2}, {x: 3, y: 2}, {x: 4, y: 3}, {x: 3, y: 4}, {x: 1, y: 4}], // 扁六边形-横向
    [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 2}, {x: 2, y: 4}, {x: 1, y: 5}, {x: 0, y: 4}], // 扁六边形-纵向
    [{x: 0, y: 1}, {x: 3, y: 1}, {x: 3, y: 4}, {x: 0, y: 4}], //小正方形
    [{x: 0, y: 1}, {x: 4, y: 1}, {x: 4, y: 5}, {x: 0, y: 5}], //中正方形
    [{x: 0, y: 1}, {x: 5, y: 1}, {x: 5, y: 6}, {x: 0, y: 6}], //大正方形
    [{x: 0, y: 2}, {x: 1, y: 1}, {x: 3, y: 1}, {x: 3, y: 3}, {x: 2, y: 4}, {x: 0, y: 4}], // 左六边形
    [{x: 0, y: 1}, {x: 2, y: 1}, {x: 3, y: 2}, {x: 3, y: 4}, {x: 1, y: 4}, {x: 0, y: 3}], // 右六边形
    [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 2}, {x: 3, y: 3}, {x: 2, y: 4}, {x: 1, y: 4}, {x: 0, y: 3}], // 八边形
    [{x: 0, y: 2}, {x: 1, y: 1}, {x: 3, y: 1}, {x: 0, y: 4}], //梯形-左上
    [{x: 0, y: 1}, {x: 2, y: 1}, {x: 3, y: 2}, {x: 3, y: 4}], //梯形-右上
    [{x: 0, y: 1}, {x: 3, y: 4}, {x: 1, y: 4}, {x: 0, y: 3}], //梯形-左下
    [{x: 0, y: 4}, {x: 3, y: 1}, {x: 3, y: 3}, {x: 2, y: 4}], //梯形-右下
    [{x: 0, y: 4}, {x: 2, y: 2}, {x: 3, y: 2}, {x: 5, y: 4}], //梯形-上
    [{x: 0, y: 2}, {x: 5, y: 2}, {x: 3, y: 4}, {x: 2, y: 4}], //梯形-下
    [{x: 0, y: 0}, {x: 2, y: 2}, {x: 2, y: 3}, {x: 0, y: 5}], //梯形-右
    [{x: 0, y: 2}, {x: 2, y: 0}, {x: 2, y: 5}, {x: 0, y: 3}], //梯形-左
    [{x: 0, y: 1}, {x: 2, y: 1}, {x: 2, y: 3}, {x: 4, y: 3}, {x: 4, y: 5}, {x: 0, y: 5}], // L形-左下
    [{x: 0, y: 1}, {x: 4, y: 1}, {x: 4, y: 5}, {x: 2, y: 5}, {x: 2, y: 3}, {x: 0, y: 3}], // L形-右上
    [{x: 0, y: 1}, {x: 4, y: 1}, {x: 4, y: 3}, {x: 2, y: 3}, {x: 2, y: 5}, {x: 0, y: 5}], // L形-左上
    [{x: 0, y: 3}, {x: 2, y: 3}, {x: 2, y: 1}, {x: 4, y: 1}, {x: 4, y: 5}, {x: 0, y: 5}], // L形-右下
    [{x: 0, y: 1}, {x: 4, y: 1}, {x: 4, y: 4}, {x: 0, y: 4}], //长方形-横向
    [{x: 0, y: 1}, {x: 3, y: 1}, {x: 3, y: 5}, {x: 0, y: 5}], //长方形-纵向
    [{x: 0, y: 3}, {x: 2, y: 1}, {x: 2, y: 4}, {x: 0, y: 6}], //平行四边形-竖左
    [{x: 0, y: 1}, {x: 2, y: 3}, {x: 2, y: 6}, {x: 0, y: 4}], //平行四边形-竖右
    [{x: 0, y: 2}, {x: 3, y: 2}, {x: 5, y: 4}, {x: 2, y: 4}], //平行四边形-横左
    [{x: 0, y: 4}, {x: 2, y: 2}, {x: 5, y: 2}, {x: 3, y: 4}], //平行四边形-横右
    [{x: 0, y: 4}, {x: 4, y: 0}, {x: 4, y: 4}, {x: 2, y: 6}], //直角梯形-左下
    [{x: 0, y: 0}, {x: 4, y: 4}, {x: 2, y: 6}, {x: 0, y: 4}], //直角梯形-右下
    [{x: 0, y: 2}, {x: 2, y: 0}, {x: 4, y: 2}, {x: 4, y: 6}], //直角梯形-左上
    [{x: 0, y: 2}, {x: 2, y: 0}, {x: 4, y: 2}, {x: 0, y: 6}], //直角梯形-右上
    [{x: 0, y: 1}, {x: 4, y: 1}, {x: 0, y: 5}], //中三角形-左上
    [{x: 4, y: 1}, {x: 4, y: 5}, {x: 0, y: 1}], //中三角形-右上
    [{x: 0, y: 5}, {x: 0, y: 1}, {x: 4, y: 5}], //中三角形-左下
    [{x: 4, y: 5}, {x: 0, y: 5}, {x: 4, y: 1}], //中三角形-右下
    [{x: 0, y: 1}, {x: 3, y: 1}, {x: 0, y: 4}], //小三角形-左上
    [{x: 3, y: 1}, {x: 3, y: 4}, {x: 0, y: 1}], //小三角形-右上
    [{x: 0, y: 4}, {x: 0, y: 1}, {x: 3, y: 4}], //小三角形-左下
    [{x: 3, y: 4}, {x: 0, y: 4}, {x: 3, y: 1}], //小三角形-右下
    [{x: 0, y: 2}, {x: 6, y: 2}, {x: 3, y: 5}], //大三角形-上
    [{x: 6, y: 5}, {x: 0, y: 5}, {x: 3, y: 2}], //大三角形-下
    [{x: 0, y: 6}, {x: 0, y: 0}, {x: 3, y: 3}], //大三角形-左
    [{x: 3, y: 0}, {x: 3, y: 6}, {x: 0, y: 3}], //大三角形-右
    [{x: 0, y: 1}, {x: 3, y: 1}, {x: 0, y: 4}], //小三角形-上
    [{x: 3, y: 4}, {x: 0, y: 4}, {x: 3, y: 1}], //小三角形-下
    [{x: 0, y: 4}, {x: 0, y: 1}, {x: 3, y: 4}], //小三角形-左
    [{x: 3, y: 1}, {x: 3, y: 4}, {x: 0, y: 1}], //小三角形-右
];
