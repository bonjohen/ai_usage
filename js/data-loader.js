/* ======== Data Loader ======== */
const DataLoader = (() => {
    const cache = {};

    async function load(file) {
        if (cache[file]) return cache[file];
        const res = await fetch('data/' + file);
        if (!res.ok) throw new Error('Failed to load data/' + file);
        cache[file] = await res.json();
        return cache[file];
    }

    return {
        surveys:     () => load('surveys.json'),
        tools:       () => load('tools.json'),
        timeline:    () => load('timeline.json'),
        predictions: () => load('predictions.json'),
        load
    };
})();
