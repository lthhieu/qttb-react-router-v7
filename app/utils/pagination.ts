// tạo danh sách trang có ... theo logic
export const getPaginationRange = (current: number, total: number) => {
    const delta = 2; // số trang lân cận
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= total; i++) {
        if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
            range.push(i);
        }
    }

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1); // thêm số bị thiếu nếu chỉ cách 1
            } else if (i - l > 2) {
                rangeWithDots.push("..."); // thêm ...
            }
        }
        rangeWithDots.push(i);
        l = i;
    }

    return rangeWithDots;
};
