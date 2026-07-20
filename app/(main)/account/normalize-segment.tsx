export function normalizeSegment(segment: string) {
    return segment
        .split("")
        .map((l, index) => (index === 0 ? l.toUpperCase() : l));
}
