

class SequentialSearch {
    constructor() {
        this.array = [];
    }
    // input vector embedding of the article summary
    insert(item) {
        this.array.push(item);
    }

    // search this item.. just see the way colorstack did it
    search(item) {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] === item) {
                return i;
            }
        }
        return -1;
    }
}