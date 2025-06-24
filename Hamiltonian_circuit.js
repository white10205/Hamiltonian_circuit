const fn = (m, n) => {
  let res = 0;
  if (m === 1 && n === 1) return 1;
  if ((m * n) % 2 === 1) return 0; // 奇数个格子，不可能有回路
  if (m === 1 || n === 1) return 0; // 单行或单列网格，不可能有回路
  if (m === 2 || n === 2) return 2;
  const visited = Array.from({ length: m }, () => Array(n).fill(false));
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  visited[0][0] = true;
  const dfs = (x, y, visitedCount) => {
    if (visitedCount === m * n) {
      for (const [dx, dy] of directions) {
        const nx = x + dx,
          ny = y + dy;
        if (nx === 0 && ny === 0) {
          res++;
          break;
        }
      }
      return;
    }
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited[nx][ny]) {
        visited[nx][ny] = true;
        dfs(nx, ny, visitedCount + 1);
        visited[nx][ny] = false;
      }
    }
  };
  dfs(0, 0, 1);

  return res;
};

console.log("1x2网格", fn(1, 2));
console.log("2x2网格", fn(2, 2));
console.log("3x4网格", fn(3, 4));
console.log("5x6网格", fn(4, 4));
