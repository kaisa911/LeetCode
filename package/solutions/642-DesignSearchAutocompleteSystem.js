class AutocompleteSystem {
	constructor(sentences, times) {
			this.map = new Map();
			for (let i = 0; i < sentences.length; i++) {
					this.map.set(sentences[i], times[i]);
			}
			this.prefix = '';
	}

	input(c) {
			if (c === '#') {
					this.map.set(this.prefix, (this.map.get(this.prefix) || 0) + 1);
					this.prefix = '';
					return [];
			}
			this.prefix += c;
			const candidates = [];
			for (const [sentence, count] of this.map.entries()) {
					if (sentence.startsWith(this.prefix)) {
							candidates.push({ sentence, count });
					}
			}
			candidates.sort((a, b) => b.count - a.count || a.sentence.localeCompare(b.sentence));
			return candidates.slice(0, 3).map(item => item.sentence);
	}
}