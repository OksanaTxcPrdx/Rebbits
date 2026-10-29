const squareBody = document.querySelector('.square-body');
const resetBtn = document.querySelector('.btn-reset');
let blocksHTML = squareBody.querySelectorAll('.block');
let basePositionBlocks = Array.from(blocksHTML);
let blocks = Array.from(blocksHTML);


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

resetBtn.addEventListener('click', () => {
    blocks.forEach((block, index) => {
        block.querySelector('.block-number').textContent = index + 1;
    })
})