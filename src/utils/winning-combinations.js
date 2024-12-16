function generateWinningCombinations(boardSize) {
  const combinations = [];

  // 가로 승리 조합
  for (let row = 0; row < boardSize; row++) {
    const rowCombination = [];
    for (let col = 0; col < boardSize; col++) {
      rowCombination.push({ row, column: col });
    }
    combinations.push(rowCombination);
  }

  // 세로 승리 조합
  for (let col = 0; col < boardSize; col++) {
    const colCombination = [];
    for (let row = 0; row < boardSize; row++) {
      colCombination.push({ row, column: col });
    }
    combinations.push(colCombination);
  }

  // 대각선 승리 조합 (좌상단 -> 우하단)
  const diagonal1 = [];
  for (let i = 0; i < boardSize; i++) {
    diagonal1.push({ row: i, column: i });
  }
  combinations.push(diagonal1);

  // 대각선 승리 조합 (우상단 -> 좌하단)
  const diagonal2 = [];
  for (let i = 0; i < boardSize; i++) {
    diagonal2.push({ row: i, column: boardSize - 1 - i });
  }
  combinations.push(diagonal2);

  return combinations;
}

// 3x3 보드 승리 조합 생성
export const WINNING_COMBINATIONS = generateWinningCombinations(3);
