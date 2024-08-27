var reorganizeString = function(s) {
    if (s.length < 2) {
        return s;
    }

    const length = s.length;
    const counts = _.countBy(s);
    const maxCount = Math.max(...Object.values(counts));
    if (maxCount > Math.floor((length + 1) / 2)) {
        return '';
    }

    const queue = new MaxPriorityQueue();
    Object.keys(counts).forEach(x => queue.enqueue(x, counts[x]));
    let res = new Array();

    while (queue.size() > 1) {
        const letter1 = queue.dequeue()['element'];
        const letter2 = queue.dequeue()['element'];
        res = res.concat(letter1, letter2)
        counts[letter1]--;
        counts[letter2]--;
        if (counts[letter1] > 0) {
            queue.enqueue(letter1, counts[letter1]);
        }
        if (counts[letter2] > 0) {
            queue.enqueue(letter2, counts[letter2]);
        }
    }
    
    if (queue.size()) {
        res.push(queue.dequeue()['element'])
    }

    return res.join('');
};