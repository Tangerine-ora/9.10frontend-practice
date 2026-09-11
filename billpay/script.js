const records = [
    { category: '餐饮', amount: 35.5, note: '午餐' },
    { category: '交通', amount: 8, note: '地铁' },
    { category: '餐饮', amount: 62, note: '晚餐聚餐' },
    { category: '购物', amount: 199, note: '日用品' },
    { category: '餐饮', amount: -10, note: '退款（非法值，应清洗）' },
    { category: '娱乐', amount: 88, note: '电影票' },
    { category: '交通', amount: 0, note: '步行（非法值，应清洗）' },
    { category: '购物', amount: 450, note: '大额消费：外套' }
];

console.table(records);

const cleanRecords = (list) =>
    list.filter(r => typeof r.amount === 'number' && r.amount > 0);

const totalSpent = (list) =>
    list.reduce((sum, r) => sum + r.amount, 0);

const averageSpent = (list) => {
    if (list.length === 0) return 0;
    return (totalSpent(list) / list.length).toFixed(2);
};

console.log('清洗后记录数: ', cleanRecords(records).length);
console.log('总支出: ', totalSpent(cleanRecords(records)));
console.log('平均消费: ', averageSpent(cleanRecords(records)));

const groupByCategory = (list) => {
    const result = {};
    list.forEach(r => {
        if (!result[r.category]) {
            result[r.category] = 0;
        }
        result[r.category] += r.amount;
    });
    return result;
};

const filterBigSpend = (list, threshold = 100) =>
    list
        .filter(r => r.amount >= threshold)
        .map(r => `${r.category}：${r.amount}元（${r.note}）`);

const formatReport = (list) => {
    const valid = cleanRecords(list);
    if (valid.length === 0) {
        return '没有有效消费记录';
    }
    const dist = groupByCategory(valid);
    const distText = Object.entries(dist)
        .map(([category, amount]) => `${category} ${amount.toFixed(2)}元`)
        .join('、');
    return `有效记录${valid.length}笔，总支出${totalSpent(valid).toFixed(2)}元，` +
        `平均每笔${averageSpent(valid)}元；` +
        `分类统计：${distText}；` +
        `大额消费（≥100元）：${filterBigSpend(valid).join('、') || '无'}`;
};

console.log('分类统计: ', groupByCategory(cleanRecords(records)));
console.log('大额消费: ', filterBigSpend(cleanRecords(records)));
console.log('报告预览: ', formatReport(records));