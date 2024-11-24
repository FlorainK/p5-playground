## Rules:

- For a space that is populated:

  - Each cell with one or no neighbors dies, as if by solitude.
  - Each cell with four or more neighbors dies, as if by overpopulation.
  - Each cell with two or three neighbors survives.
  - Each cell with three neighbors becomes populated.
  
### Code:

- Gameboard (matrix)
- cell (class)
  - attributes:
    - alive
  - methods:
    - nextState()
    - countNeighbours(6 * other)
    - 