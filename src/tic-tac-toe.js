class TicTacToe {
    constructor() {
        this.matrix = [[null, null, null],[null, null, null],[null, null, null]] //area 3x3
        this.winner = null // winner return x or o
        this.player = 'x'
    }

    getCurrentPlayerSymbol() {
        return this.player
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] != null) {return false}
        let index = 0
        let jndex = 0
        let sum_row = 0
        let sum_col = 0
        let diag_1 = 0
        let diag_2 = 0
        this.matrix[rowIndex][columnIndex] = this.player
        for (index = 0; index < this.matrix.length; index++) {
            for (jndex = 0; jndex < this.matrix.length; jndex++) {
                if (this.matrix[index][jndex] == this.player) {sum_row++}
                if (this.matrix[jndex][index] == this.player) {sum_col++}
                if (this.matrix[jndex][jndex] == this.player) {diag_1++}
                if (this.matrix[jndex][this.matrix.length - 1 - jndex] == this.player) {diag_2++}
            }
            if (sum_row == 3 || sum_col == 3 || diag_1 == 3 || diag_2 == 3) {
                this.winner = this.player
                break
            }
            sum_row = 0
            sum_col = 0
            diag_1 = 0
            diag_2 = 0
        }

        this.player = this.player == 'x' ? 'o' : 'x'
    }

    isFinished() {
        if (this.isDraw() || this.winner != null) {
            return true
        }
        else return false

    }

    getWinner() {
        return this.winner
    }

    noMoreTurns() {
        let index = 0 
        let jndex = 0 
        for (index = 0; index < this.matrix.length; index++) {
            for (jndex = 0; jndex < this.matrix[index].length; jndex++) {
                if (this.matrix[index][jndex] == null) {
                    return false
                }
            }
        }
        return true
    }

    isDraw() {
        return this.noMoreTurns() && this.winner == null
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;
