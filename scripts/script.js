const squareBody = document.querySelector('.square-body')
let blocks = squareBody.querySelectorAll('.block');

let rowMatrix = [];
blocks = Array.from(blocks);
let basePositionBlocks = blocks.slice();

const moving = {
    swapBlocks(currentIndex, targetIndex) {
        let currentBlock = blocks[currentIndex];
        let neighbourBlock = blocks[targetIndex];

        let startCurrentText = currentBlock.querySelector('.block-number').textContent;
        let startNeighbourText = neighbourBlock.querySelector('.block-number').textContent;

        let tempBlock = blocks[currentIndex];
        blocks[currentIndex] = blocks[targetIndex];
        blocks[targetIndex] = tempBlock;

        blocks[currentIndex].querySelector('.block-number').textContent = startCurrentText
        blocks[targetIndex].querySelector('.block-number').textContent = startNeighbourText

        blocks = squareBody.querySelectorAll('.block');
        blocks = Array.from(blocks);
    },
    right(eTargetIndex) {
        if (eTargetIndex === 24) {
            return 'nooooo'
        }
        this.swapBlocks(eTargetIndex, eTargetIndex + 1);
    },

    left(eTargetIndex) {
        if (eTargetIndex === 0) {
            return 'nooooo'
        }
        this.swapBlocks(eTargetIndex, eTargetIndex - 1)
    },
    top(eTargetIndex) {
        if (eTargetIndex < 5) {
            return 'nooooo'
        }
        this.swapBlocks(eTargetIndex, eTargetIndex - 5)
    },
    bottom(eTargetIndex) {
        if (eTargetIndex > 19) {
            return 'nooooo'
        }
        this.swapBlocks(eTargetIndex, eTargetIndex + 5)
    }
}

const moveRight = (eTargetIndex, neighbourIndex) => {
    if (eTargetIndex === 0) {

    }
    let temp = eTarget.textContent;
    eTarget.textContent = neighbour.textContent;
    neighbour.textContent = temp;
}

squareBody.addEventListener('click', e => {
    let targetIndex = blocks.indexOf(e.target.closest('.block'))
    let direction;
    if (e.target.closest('.arrow')) {
        direction = e.target.closest('.arrow').classList[1];
    }
    if (direction) {
        moving[direction](targetIndex);
    }

})